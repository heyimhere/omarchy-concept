"use client";

import { useEffect, useRef, useState } from "react";

// Plays the ASCII wordmark once with Web Text Effects "laseretch";
// <wte-canvas> always loops, so playback's onFinished hook holds the last
// frame instead. The <pre> stays as the layout size and as the no-JS/failure
// fallback (see the .ascii-mark rules in globals.css).
const WTE_CANVAS_URL = "/wte/wte-canvas.js";
const WTE_WASM_URL = "/wte/laseretch.wasm";
const EFFECT = "laseretch";
const ART_COLUMNS = 81;
const ART_ROWS = 10;
const CELL_ASPECT = 2;
const FONT_WAIT_MS = 1000;

const ASCII_ART = `                 ▄▄▄
 ▄█████▄    ▄███████████▄    ▄███████   ▄███████   ▄███████   ▄█   █▄    ▄█   █▄
███   ███  ███   ███   ███  ███   ███  ███   ███  ███   ███  ███   ███  ███   ███
███   ███  ███   ███   ███  ███   ███  ███   ███  ███   █▀   ███   ███  ███   ███
███   ███  ███   ███   ███ ▄███▄▄▄███ ▄███▄▄▄██▀  ███       ▄███▄▄▄███▄ ███▄▄▄███
███   ███  ███   ███   ███ ▀███▀▀▀███ ▀███▀▀▀▀    ███      ▀▀███▀▀▀███  ▀▀▀▀▀▀███
███   ███  ███   ███   ███  ███   ███ ██████████  ███   █▄   ███   ███  ▄██   ███
███   ███  ███   ███   ███  ███   ███  ███   ███  ███   ███  ███   ███  ███   ███
 ▀█████▀    ▀█   ███   █▀   ███   █▀   ███   ███  ███████▀   ███   █▀    ▀█████▀
                                       ███   █▀`;

type Status = "idle" | "live" | "static";

type CanvasPlaybackInstance = {
  restart: () => Promise<void>;
  stop: () => void;
};

type CanvasPlaybackCtor = new (opts: {
  canvas: HTMLCanvasElement;
  width: () => number;
  height: () => number;
  connected: () => boolean;
  input: () => string;
  effect: () => string;
  wasmUrl: () => ArrayBuffer;
  onFinished: () => void;
  frameRate: () => number;
}) => CanvasPlaybackInstance;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function afterFonts(): Promise<void> {
  if (document.fonts?.ready == null) return Promise.resolve();
  return Promise.race([
    document.fonts.ready.then(() => undefined),
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, FONT_WAIT_MS);
    }),
  ]);
}

function nativeGrid(host: HTMLElement) {
  const box = host.getBoundingClientRect();
  const cell = Math.max(
    1,
    Math.floor(
      Math.min(box.width / ART_COLUMNS, box.height / (ART_ROWS * CELL_ASPECT)),
    ),
  );
  return { width: cell * ART_COLUMNS, height: cell * ART_ROWS * CELL_ASPECT };
}

function scaleCanvas(
  canvas: HTMLCanvasElement,
  host: HTMLElement,
  nativeWidth: number,
  nativeHeight: number,
) {
  const box = host.getBoundingClientRect();
  if (box.width < 1 || box.height < 1) return;
  canvas.style.transform = `scale(${box.width / nativeWidth}, ${box.height / nativeHeight})`;
}

function watchSize(target: Element, onChange: () => void) {
  let frame = 0;
  const schedule = () => {
    if (frame !== 0) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      onChange();
    });
  };
  const observer = new ResizeObserver(schedule);
  observer.observe(target);
  return () => {
    if (frame !== 0) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
    observer.disconnect();
  };
}

async function loadWasm(): Promise<ArrayBuffer> {
  const response = await fetch(WTE_WASM_URL);
  if (!response.ok) throw new Error(`laseretch wasm ${response.status}`);
  return response.arrayBuffer();
}

async function loadCanvasPlayback(): Promise<CanvasPlaybackCtor> {
  const response = await fetch(WTE_CANVAS_URL);
  if (!response.ok) throw new Error(`wte-canvas ${response.status}`);
  const source = await response.text();
  const spec = source.match(
    /from["'](\.\/assets\/playback-[A-Za-z0-9_-]+\.js)["']/,
  );
  if (spec == null) throw new Error("wte playback module not found");
  const mod = await import(
    /* webpackIgnore: true */ new URL(spec[1], response.url).href
  );
  for (const value of Object.values(mod as Record<string, unknown>)) {
    if (
      typeof value === "function" &&
      value.prototype != null &&
      typeof value.prototype.restart === "function" &&
      typeof value.prototype.stop === "function"
    ) {
      return value as CanvasPlaybackCtor;
    }
  }
  throw new Error("CanvasPlayback not found");
}

export function AsciiMark() {
  const preRef = useRef<HTMLPreElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const pre = preRef.current;
    const wrapper = wrapperRef.current;
    if (pre == null || wrapper == null) return;

    const input = ASCII_ART;

    let cancelled = false;
    let stopWatching: (() => void) | null = null;
    let playbackInstance: CanvasPlaybackInstance | null = null;
    let onError: ((event: ErrorEvent) => void) | null = null;

    const fail = () => {
      if (onError) window.removeEventListener("error", onError);
      stopWatching?.();
      playbackInstance?.stop();
      setStatus("static");
    };

    afterFonts()
      .then(loadWasm)
      .then((wasmBytes) =>
        loadCanvasPlayback().then((CanvasPlayback) => ({
          wasmBytes,
          CanvasPlayback,
        })),
      )
      .then(({ wasmBytes, CanvasPlayback }) => {
        if (cancelled) return;
        const box = pre.getBoundingClientRect();
        if (box.width < 8 || box.height < 8) {
          setStatus("static");
          return;
        }

        const holder = document.createElement("span");
        holder.className = "ascii-mark__canvas";

        const canvas = document.createElement("canvas");
        canvas.setAttribute("aria-hidden", "true");
        const native = nativeGrid(pre);
        canvas.style.width = `${native.width}px`;
        canvas.style.height = `${native.height}px`;
        scaleCanvas(canvas, pre, native.width, native.height);

        const playback = new CanvasPlayback({
          canvas,
          width: () => native.width,
          height: () => native.height,
          connected: () => canvas.isConnected,
          input: () => input,
          effect: () => EFFECT,
          wasmUrl: () => wasmBytes,
          onFinished() {},
          frameRate: () => 240,
        });
        playbackInstance = playback;

        stopWatching = watchSize(pre, () => {
          scaleCanvas(canvas, pre, native.width, native.height);
        });

        onError = (event: ErrorEvent) => {
          const message = String(event.message ?? event.error ?? "");
          if (
            !/memory access out of bounds|RuntimeError|CompileError|WebAssembly/i.test(
              message,
            )
          ) {
            return;
          }
          fail();
        };
        window.addEventListener("error", onError);

        holder.append(canvas);
        wrapper.append(holder);
        setStatus("live");
        void playback.restart().catch(fail);
      })
      .catch(() => {
        if (!cancelled) setStatus("static");
      });

    return () => {
      cancelled = true;
      if (onError) window.removeEventListener("error", onError);
      stopWatching?.();
      playbackInstance?.stop();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`ascii-mark group relative mx-auto w-max max-w-full overflow-hidden ${
        status === "live" ? "is-live" : ""
      } ${status === "static" ? "is-static" : ""}`}
    >
      <pre
        ref={preRef}
        className="m-0 whitespace-pre text-[clamp(0.32rem,calc(1.95vw_-_0.04rem),1rem)] leading-[1.09375] tracking-[-0.0425em] text-green transition-colors duration-150 group-hover:text-turquoise"
      >
        {ASCII_ART}
      </pre>
    </div>
  );
}
