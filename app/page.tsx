import { AnnouncementBar } from "./components/AnnouncementBar";
import { NavHeader } from "./components/NavHeader";
import { Hero } from "./components/Hero";
import { VideoPlayer } from "./components/VideoPlayer";
import { TrustStrip } from "./components/TrustStrip";
import { LinkGroups } from "./components/LinkGroups";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <NavHeader />
      <main className="flex-1">
        <Hero />

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 sm:pb-24">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-terminal-blue">
              SEE IT IN ACTION
            </p>
            <h2 className="mx-auto mt-3 max-w-xl text-2xl font-semibold text-terminal-white sm:text-3xl">
              Watch Omarchy Quattro, straight from DHH
            </h2>
          </div>

          <div className="mt-10">
            <VideoPlayer />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-terminal-white/40">
            That&rsquo;s DHH&rsquo;s own desktop above, running the Quattro
            wallpaper, his favorite.
          </p>
        </section>

        <TrustStrip />
        <LinkGroups />
      </main>
      <Footer />
    </>
  );
}
