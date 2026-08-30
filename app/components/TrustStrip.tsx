"use client";

import { motion, useReducedMotion } from "motion/react";
import { landingContent, modeVoice } from "../lib/landing-content";

export function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-terminal-black/40 bg-storm/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
        {modeVoice.malleable.statsEyebrow && (
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-terminal-blue">
            {modeVoice.malleable.statsEyebrow}
          </p>
        )}
        <div className="mt-6 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {landingContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <p className="text-3xl font-semibold text-turquoise sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-terminal-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <blockquote className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-balance text-lg leading-relaxed text-terminal-white sm:text-xl">
            &ldquo;{landingContent.quote.text}&rdquo;
          </p>
          <footer className="mt-3 text-sm text-terminal-white/50">
            {landingContent.quote.attribution}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
