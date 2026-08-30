"use client";

import { useEffect, useRef } from "react";
import type { ExperienceMode } from "../lib/experience-mode";

const modes: { value: ExperienceMode; label: string }[] = [
  { value: "malleable", label: "Malleable" },
  { value: "beautiful", label: "Beautiful" },
  { value: "opinionated", label: "Opinionated" },
];

type ModeSwitcherProps = {
  mode: ExperienceMode;
  onChange: (mode: ExperienceMode) => void;
  tone?: "night" | "glass" | "royal";
  focusRequest?: number;
};

export function ModeSwitcher({
  mode,
  onChange,
  tone = "night",
  focusRequest = 0,
}: ModeSwitcherProps) {
  const selectedButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focusRequest > 0) {
      selectedButtonRef.current?.focus({ preventScroll: true });
    }
  }, [focusRequest, mode]);

  return (
    <div className="flex justify-center px-2">
      <div
        role="group"
        aria-label="Choose an Omarchy experience"
        className={`mode-switcher mode-switcher--${tone}`}
      >
        {modes.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={mode === item.value}
            onClick={() => onChange(item.value)}
            ref={mode === item.value ? selectedButtonRef : undefined}
            className="mode-switcher__button"
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
