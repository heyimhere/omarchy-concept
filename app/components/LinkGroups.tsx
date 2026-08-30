"use client";

import { motion, useReducedMotion } from "motion/react";
import { landingGroups, navLinks } from "../lib/nav-links";
import { landingContent, modeVoice } from "../lib/landing-content";
import { NavIcon } from "./icons/NavIcons";

export function LinkGroups() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-terminal-blue">
        {modeVoice.malleable.exploreEyebrow}
      </p>
      <h2 className="mt-3 max-w-xl text-2xl font-semibold text-terminal-white sm:text-3xl">
        {landingContent.explore.title}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {landingGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="rounded-2xl border border-terminal-black/40 bg-storm/40 p-5"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <h3 className="text-sm font-semibold text-terminal-white">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {group.keys.map((key) => {
                const link = navLinks[key];
                return (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2.5 text-sm text-terminal-white/70 transition-colors hover:text-turquoise"
                    >
                      <span className="h-4 w-4 flex-none text-terminal-white/40">
                        <NavIcon icon={link.key} />
                      </span>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
