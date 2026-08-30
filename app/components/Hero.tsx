import Image from "next/image";
import { AsciiMark } from "./AsciiMark";
import { navLinks } from "../lib/nav-links";

// The Quattro wallpaper sits full-bleed behind the hero, dimmed by the
// overlays below so the ASCII mark and copy stay readable on top of it.
export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 text-center sm:px-8 sm:pt-20">
      <Image
        src="/omarchy-quattro.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 bg-night/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night/35 to-night" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-14">
          <AsciiMark />
        </div>

        <p className="text-xs font-semibold tracking-[0.3em] text-terminal-blue sm:text-sm">
          WELCOME TO THE MALLEABLE MACHINE
        </p>

        <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-terminal-white sm:text-5xl">
          Beautiful, Fun &amp; Opinionated Linux by{" "}
          <a
            href="https://dhh.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green underline decoration-terminal-black underline-offset-4 transition-colors hover:text-turquoise hover:decoration-turquoise"
          >
            DHH
          </a>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-terminal-white/70 sm:text-lg">
          Omarchy is an omakase Linux distribution built on Arch, Hyprland, and
          Quickshell, because a beautiful system is a motivating system, and
          productivity has always been downstream from motivation.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={navLinks.iso.href}
            className="w-full rounded-full bg-green px-6 py-3 text-sm font-semibold text-night transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Get the ISO
          </a>
          <a
            href={navLinks.manual.href}
            className="w-full rounded-full border border-terminal-black bg-night/30 px-6 py-3 text-sm font-semibold text-terminal-white backdrop-blur-sm transition-colors hover:border-turquoise hover:text-turquoise sm:w-auto"
          >
            Read the Manual
          </a>
        </div>
      </div>
    </section>
  );
}
