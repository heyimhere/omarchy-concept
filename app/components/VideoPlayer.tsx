"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { videos } from "../lib/videos";
import { PlayIcon } from "./icons/PlayIcon";
import { ArrowIcon } from "./icons/ArrowIcon";

// Lazy-load facade: nothing is fetched from YouTube until the poster is
// explicitly clicked, no matter how many times the arrows/dots cycle
// through the two videos.
const IFRAME_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export function VideoPlayer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const active = videos[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % videos.length) + videos.length) % videos.length);
    setLoaded(false);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(activeIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(activeIndex + 1);
      }
    },
    [activeIndex, goTo],
  );

  return (
    <div
      role="group"
      aria-roledescription="video carousel"
      aria-label="Omarchy videos"
      onKeyDown={handleKeyDown}
      className="mx-auto w-full max-w-5xl"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-terminal-black/40 bg-storm shadow-[var(--shadow-panel)]">
        {loaded ? (
          <iframe
            key={active.id}
            title={active.title}
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(
              active.id,
            )}?autoplay=1&rel=0`}
            allow={IFRAME_ALLOW}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            aria-label={`Play: ${active.title}`}
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 block h-full w-full cursor-pointer"
          >
            <Image
              src={active.poster}
              alt={active.posterAlt}
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover transition-transform duration-300 ease-[var(--ease-omarchy)] group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <PlayIcon className="w-[min(14%,5rem)] text-turquoise drop-shadow-[0_0.1em_0.5em_rgba(0,0,0,0.6)] opacity-90 transition-opacity duration-150 group-hover:opacity-100" />
            </span>
          </button>
        )}

        {!loaded && (
          <>
            <button
              type="button"
              aria-label={`Show video: ${videos[(activeIndex - 1 + videos.length) % videos.length].title}`}
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-terminal-white/20 bg-night/50 text-terminal-white backdrop-blur-sm transition hover:bg-night/80 hover:text-turquoise focus-visible:opacity-100 sm:opacity-70 sm:hover:opacity-100"
            >
              <ArrowIcon direction="left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={`Show video: ${videos[(activeIndex + 1) % videos.length].title}`}
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-terminal-white/20 bg-night/50 text-terminal-white backdrop-blur-sm transition hover:bg-night/80 hover:text-turquoise focus-visible:opacity-100 sm:opacity-70 sm:hover:opacity-100"
            >
              <ArrowIcon direction="right" className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-terminal-white/80">
          <span className="text-terminal-white/40">
            {activeIndex + 1}/{videos.length}
          </span>{" "}
          {active.caption}
        </p>

        <div className="flex items-center gap-2">
          {videos.map((video, index) => (
            <button
              key={video.id}
              type="button"
              aria-current={index === activeIndex}
              aria-label={`Show video: ${video.title}`}
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex
                  ? "bg-turquoise"
                  : "bg-terminal-black hover:bg-terminal-blue"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
