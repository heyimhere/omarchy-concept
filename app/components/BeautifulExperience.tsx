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

function WindowBar({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/60 sm:px-5">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#ffb38e]" />
        <span className="h-2 w-2 rounded-full bg-[#ffe49b]" />
        <span className="h-2 w-2 rounded-full bg-[#99d8bc]" />
        <span>{title}</span>
      </div>
      <span className="hidden sm:inline">{detail}</span>
    </div>
  );
}

export function BeautifulExperience({
  modeSwitcher,
}: {
  modeSwitcher: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="beautiful-experience min-h-screen bg-[#10212b] text-white">
      <AnnouncementBar tone="glass" />

      <main>
        <section className="relative isolate min-h-[900px] overflow-hidden sm:min-h-[920px] lg:min-h-[min(960px,calc(100svh-33px))]">
          <WallpaperReveal
            src="/beautiful-omarchy.jpg"
            alt="A sunlit coastal village overlooking a calm blue sea"
            wrapperClassName="absolute inset-0 -z-20"
            imageClassName="object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#10212b]/35 via-[#10212b]/10 to-[#10212b]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-[#10212b]/45 to-transparent" />

          <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 sm:py-5">
            <div className="beautiful-frame overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#10212b]/70 px-4 py-2.5 text-[0.65rem] tracking-[0.16em] text-white/70 backdrop-blur-xl sm:px-5">
                <div className="flex items-center gap-3">
                  <strong className="text-white">OMARCHY</strong>
                  <div className="hidden items-center gap-1 sm:flex" aria-label="Workspaces">
                    {[1, 2, 3, 4, 5].map((workspace) => (
                      <span
                        key={workspace}
                        className={`flex h-5 w-5 items-center justify-center rounded-md ${workspace === 1 ? "bg-white/20 text-white" : "text-white/45"}`}
                      >
                        {workspace}
                      </span>
                    ))}
                  </div>
                </div>
                <nav className="hidden items-center gap-5 md:flex" aria-label="Beautiful mode navigation">
                  {primaryHeaderLinks.map((key) => (
                    <a
                      key={key}
                      href={navLinks[key].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#ffe3ad]"
                    >
                      {navLinks[key].label}
                    </a>
                  ))}
                </nav>
                <span>ARCH + HYPRLAND + QUICKSHELL</span>
              </div>

              <div className="mx-auto flex min-h-[820px] max-w-5xl flex-col items-center px-4 pb-16 pt-8 text-center sm:px-8 sm:pt-10 lg:min-h-[850px]">
                {modeSwitcher}

                <div className="mt-10 w-full sm:mt-14">
                  <AsciiMark />
                </div>

                <div className="mt-auto w-full max-w-3xl rounded-3xl border border-white/20 bg-[#10212b]/55 px-5 py-8 shadow-[0_28px_90px_rgba(6,19,25,0.35)] backdrop-blur-xl sm:px-10 sm:py-10">
                  <p className="text-xs font-semibold tracking-[0.28em] text-[#ffe3ad]">
                    {modeVoice.beautiful.heroEyebrow}
                  </p>
                  <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                    {landingContent.hero.titleBeforeDhh}{" "}
                    <a
                      href="https://dhh.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffe49b] underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                    >
                      DHH
                    </a>
                  </h1>
                  <p className="mx-auto mt-5 max-w-2xl text-balance text-sm leading-relaxed text-white/75 sm:text-base">
                    {landingContent.hero.description}
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={navLinks.iso.href}
                      className="w-full rounded-xl bg-[#fff0c9] px-6 py-3 text-sm font-semibold text-[#183040] transition hover:bg-white sm:w-auto"
                    >
                      Get the ISO
                    </a>
                    <a
                      href={navLinks.manual.href}
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto"
                    >
                      Read the Manual
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative mx-auto max-w-7xl space-y-6 px-3 pb-16 sm:px-6 sm:pb-24">
          <section className="beautiful-panel overflow-hidden rounded-2xl">
            <WindowBar title="media / omarchy" detail="workspace 2" />
            <div className="p-4 sm:p-8 lg:p-10">
              <div className="mb-8 text-center">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#ffe3ad]">
                  {modeVoice.beautiful.videoEyebrow}
                </p>
                <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
                  {landingContent.video.title}
                </h2>
              </div>
              <VideoPlayer />
              <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-white/45">
                {modeVoice.beautiful.videoNote}
              </p>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="beautiful-panel overflow-hidden rounded-2xl">
              <WindowBar title="system / momentum" detail="live" />
              <div className="grid gap-3 p-3 sm:grid-cols-3 sm:gap-4 sm:p-4 lg:grid-cols-1">
                {landingContent.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="beautiful-stat rounded-xl p-6 sm:p-7"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    <p className="text-3xl font-semibold text-[#ffe49b] [text-shadow:0_0_2rem_rgba(255,228,155,0.35)] sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <blockquote className="beautiful-panel flex min-h-80 flex-col justify-between rounded-2xl p-6 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.28em] text-[#ffe3ad]">
                {modeVoice.beautiful.quoteEyebrow}
              </p>
              <p className="mt-10 text-balance text-xl leading-relaxed text-white sm:text-3xl">
                &ldquo;{landingContent.quote.text}&rdquo;
              </p>
              <footer className="mt-8 text-sm text-white/50">
                {landingContent.quote.attribution}
              </footer>
            </blockquote>
          </section>

          <section className="beautiful-panel overflow-hidden rounded-2xl">
            <WindowBar title="launcher / explore" detail="workspace 4" />
            <div className="p-5 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#ffe3ad]">
                {modeVoice.beautiful.exploreEyebrow}
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
                {landingContent.explore.title}
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {landingGroups
                  .flatMap((group) => group.keys)
                  .map((key, index) => {
                    const link = navLinks[key];
                    return (
                      <motion.a
                        key={key}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="beautiful-tile group flex min-h-28 flex-col justify-between rounded-2xl p-4"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.4,
                          delay: (index % 4) * 0.06,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                      >
                        <span className="beautiful-tile-icon flex h-9 w-9 items-center justify-center rounded-full">
                          <span className="h-5 w-5">
                            <NavIcon icon={link.key} />
                          </span>
                        </span>
                        <span className="text-sm text-white/75 group-hover:text-white">
                          {link.label}
                        </span>
                      </motion.a>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer tone="glass" />
    </div>
  );
}
