import type { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { NavHeader } from "./NavHeader";
import { Hero } from "./Hero";
import { VideoPlayer } from "./VideoPlayer";
import { TrustStrip } from "./TrustStrip";
import { LinkGroups } from "./LinkGroups";
import { Footer } from "./Footer";
import { landingContent, modeVoice } from "../lib/landing-content";

export function MalleableExperience({
  modeSwitcher,
}: {
  modeSwitcher: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-night text-terminal-white">
      <AnnouncementBar />
      <NavHeader />
      <main className="flex-1">
        <Hero modeSwitcher={modeSwitcher} />

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 sm:pb-24">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-terminal-blue">
              {modeVoice.malleable.videoEyebrow}
            </p>
            <h2 className="mx-auto mt-3 max-w-xl text-2xl font-semibold text-terminal-white sm:text-3xl">
              {landingContent.video.title}
            </h2>
          </div>

          <div className="mt-10">
            <VideoPlayer />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-terminal-white/40">
            {modeVoice.malleable.videoNote}
          </p>
        </section>

        <TrustStrip />
        <LinkGroups />
      </main>
      <Footer />
    </div>
  );
}
