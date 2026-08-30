"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BeautifulExperience } from "./BeautifulExperience";
import { MalleableExperience } from "./MalleableExperience";
import { OpinionatedExperience } from "./OpinionatedExperience";
import { ModeSwitcher } from "./ModeSwitcher";
import {
  isExperienceMode,
  type ExperienceMode,
} from "../lib/experience-mode";

function modeFromUrl(): ExperienceMode | null {
  const value = new URL(window.location.href).searchParams.get("mode");
  return isExperienceMode(value) ? value : null;
}

export function ModeExperience({
  initialMode,
}: {
  initialMode: ExperienceMode;
}) {
  const [mode, setMode] = useState<ExperienceMode>(initialMode);
  const [focusRequest, setFocusRequest] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const followHistory = () => {
      setMode(modeFromUrl() ?? "malleable");
    };
    window.addEventListener("popstate", followHistory);
    return () => window.removeEventListener("popstate", followHistory);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.experience = mode;
    return () => {
      delete document.documentElement.dataset.experience;
    };
  }, [mode]);

  const chooseMode = useCallback((nextMode: ExperienceMode) => {
    setMode(nextMode);
    setFocusRequest((request) => request + 1);
    const url = new URL(window.location.href);
    if (nextMode === "malleable") {
      url.searchParams.delete("mode");
    } else {
      url.searchParams.set("mode", nextMode);
    }
    window.history.pushState({ mode: nextMode }, "", url);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const switcher = (
    <ModeSwitcher
      mode={mode}
      onChange={chooseMode}
      focusRequest={focusRequest}
      tone={
        mode === "beautiful" ? "glass" : mode === "opinionated" ? "royal" : "night"
      }
    />
  );

  return (
    <>
      <p className="sr-only" aria-live="polite">
        {mode} experience selected
      </p>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mode}
          className="w-full flex-1"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.33, 1, 0.68, 1] }}
        >
          {mode === "malleable" && (
            <MalleableExperience modeSwitcher={switcher} />
          )}
          {mode === "beautiful" && (
            <BeautifulExperience modeSwitcher={switcher} />
          )}
          {mode === "opinionated" && (
            <OpinionatedExperience modeSwitcher={switcher} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
