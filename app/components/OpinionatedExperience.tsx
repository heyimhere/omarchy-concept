"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AnnouncementBar } from "./AnnouncementBar";
import { AsciiMark } from "./AsciiMark";
import { Footer } from "./Footer";
import { VideoPlayer } from "./VideoPlayer";
import { WallpaperReveal } from "./WallpaperReveal";
import { NavIcon } from "./icons/NavIcons";
import { landingContent, modeVoice } from "../lib/landing-content";
import { landingGroups, navLinks, primaryHeaderLinks } from "../lib/nav-links";

export function OpinionatedExperience({
  modeSwitcher,
}: {
  modeSwitcher: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="opinionated-experience min-h-screen bg-[#080705] text-[#eee5d5]">
      <AnnouncementBar tone="royal" />

      <main>
        <section className="relative isolate min-h-[920px] overflow-hidden border-b border-[#b89146]/25 sm:min-h-[980px] lg:min-h-[min(1040px,calc(100svh-33px))]">
          <WallpaperReveal
            src="/opinionated-omarchy.jpg"
            alt="A dark dragon descending through pale storm clouds"
            wrapperClassName="absolute inset-0 -z-30"
            imageClassName="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 -z-20 bg-[#090806]/30 mix-blend-multiply" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,transparent_0%,rgba(8,7,5,0.15)_34%,rgba(8,7,5,0.9)_86%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t from-[#080705] via-[#080705]/80 to-transparent" />

          <header className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-5 text-[0.68rem] uppercase tracking-[0.2em] text-[#d9ccb3]/70 sm:px-8">
            <a href="#top" className="font-semibold text-[#e9c36b]">
              The Omarchs
            </a>
            <nav className="hidden items-center gap-7 md:flex" aria-label="Opinionated mode navigation">
              {primaryHeaderLinks.map((key) => (
                <a
                  key={key}
                  href={navLinks[key].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#e9c36b]"
                >
                  {navLinks[key].label}
                </a>
              ))}
            </nav>
            <a
              href={navLinks.iso.href}
              className="border border-[#b89146]/50 px-4 py-2 text-[#e9c36b] transition hover:bg-[#e9c36b] hover:text-[#080705]"
            >
              Claim the ISO
            </a>
          </header>

          <div id="top" className="mx-auto flex min-h-[840px] max-w-6xl flex-col items-center px-4 pb-16 pt-4 text-center sm:px-8 sm:pt-8 lg:min-h-[920px]">
            {modeSwitcher}

            <div className="mt-10 w-full sm:mt-14">
              <AsciiMark />
            </div>

            <div className="mt-auto w-full">
              <div className="mx-auto flex max-w-3xl items-center gap-4 text-[#b89146]/60">
                <span className="h-px flex-1 bg-current" />
                <span className="h-2 w-2 rotate-45 border border-current" />
                <span className="h-px flex-1 bg-current" />
              </div>
              <p className="mt-6 font-serif text-sm italic tracking-wide text-[#d9ccb3]/70 sm:text-base">
                {modeVoice.opinionated.heroTagline}
              </p>
              <p className="mt-5 text-xs font-semibold tracking-[0.4em] text-[#e9c36b]">
                {modeVoice.opinionated.heroEyebrow}
              </p>
              <h1 className="mx-auto mt-4 max-w-4xl font-serif text-4xl leading-[1.05] text-[#f4ead8] sm:text-6xl lg:text-7xl">
                {landingContent.hero.titleBeforeDhh}{" "}
                <a
                  href="https://dhh.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e9c36b] underline decoration-[#b89146]/40 underline-offset-8 transition-colors hover:text-[#fff1c7]"
                >
                  DHH
                </a>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-[#d9ccb3]/70 sm:text-base">
                {landingContent.hero.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={navLinks.iso.href}
                  className="w-full border border-[#e9c36b] bg-[#e9c36b] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#080705] transition hover:bg-[#fff1c7] sm:w-auto"
                >
                  Get the ISO
                </a>
                <a
                  href={navLinks.manual.href}
                  className="w-full border border-[#b89146]/50 bg-[#080705]/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#e9c36b] backdrop-blur transition hover:border-[#e9c36b] sm:w-auto"
                >
                  Read the Manual
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-[#e9c36b]">
              {modeVoice.opinionated.videoEyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl text-[#f4ead8] sm:text-5xl">
              {landingContent.video.title}
            </h2>
            <div className="mt-8 border border-[#b89146]/30 bg-[#100e0a] p-2 sm:p-3">
              <VideoPlayer />
            </div>
            <p className="mt-4 text-xs text-[#d9ccb3]/45">
              {modeVoice.opinionated.videoNote}
            </p>
          </div>

          <blockquote className="relative border-y border-[#b89146]/35 py-9 lg:mt-24">
            <span className="absolute -top-3 left-1/2 bg-[#080705] px-4 py-2" aria-hidden="true">
              <span className="block h-2 w-2 rotate-45 border border-[#e9c36b]" />
            </span>
            <p className="font-serif text-xl leading-relaxed text-[#e5dac7] sm:text-2xl">
              &ldquo;{landingContent.quote.text}&rdquo;
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.18em] text-[#b9a98c]/55">
              {landingContent.quote.attribution}
            </footer>
          </blockquote>
        </section>

        <section className="border-y border-[#b89146]/20 bg-[#0d0b08]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
            <p className="text-center text-xs font-semibold tracking-[0.35em] text-[#e9c36b]">
              {modeVoice.opinionated.statsEyebrow}
            </p>
            <div className="mt-10 grid gap-px bg-[#b89146]/20 sm:grid-cols-3">
              {landingContent.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-[#0d0b08] px-6 py-10 text-center"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  <p className="font-serif text-4xl text-[#e9c36b] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#d9ccb3]/55">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.35em] text-[#e9c36b]">
              {modeVoice.opinionated.exploreEyebrow}
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl text-[#f4ead8] sm:text-5xl">
              {landingContent.explore.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landingGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="group border border-[#b89146]/25 bg-[#0d0b08] p-6 transition hover:border-[#e9c36b]/60"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <div className="flex items-center justify-between border-b border-[#b89146]/20 pb-5">
                  <span className="font-serif text-xl text-[#e9c36b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rotate-45 border border-[#b89146]/50 transition group-hover:bg-[#e9c36b]" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-[#f4ead8]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.keys.map((key) => {
                    const link = navLinks[key];
                    return (
                      <li key={key}>
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-3 text-sm text-[#d9ccb3]/55 transition-colors hover:text-[#e9c36b]"
                        >
                          <span className="h-4 w-4 text-[#b89146]/70">
                            <NavIcon icon={link.key} />
                          </span>
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            ))}
          </div>

          <p className="mt-14 text-center font-serif text-lg italic text-[#e9c36b]/75">
            {modeVoice.opinionated.outro}
          </p>
        </section>
      </main>

      <Footer tone="royal" />
    </div>
  );
}
