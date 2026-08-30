import type { ExperienceMode } from "./experience-mode";

// Core facts and copy shared by every visual treatment.
export const landingContent = {
  hero: {
    titleBeforeDhh: "Beautiful, Fun & Opinionated Linux by",
    description:
      "Omarchy is an omakase Linux distribution built on Arch, Hyprland, and Quickshell, because a beautiful system is a motivating system, and productivity has always been downstream from motivation.",
  },
  video: {
    title: "Watch Omarchy Quattro, straight from DHH",
  },
  stats: [
    { value: "100,000+", label: "ISO downloads in a week" },
    {
      value: "1,000+",
      label: "community plugins built in Quattro's first week",
    },
    { value: "$10M", label: "Omacom Foundation funding" },
  ],
  quote: {
    text:
      "It’s time to dream big. Omarchy Quattro has given people a chance to experience what the malleable computer of the future looks like, and they like it (a lot!) … we’re going to make the prophecy of The Year of Linux on the Desktop come true.",
    attribution: "DHH, on the Omacom Foundation launch",
  },
  explore: {
    title: "Everything you need, grouped by why you’re here.",
  },
} as const;

// The framing text around those facts, one voice per experience.
type ModeVoice = {
  heroEyebrow: string;
  heroTagline?: string;
  videoEyebrow: string;
  videoNote: string;
  statsEyebrow?: string;
  quoteEyebrow?: string;
  exploreEyebrow: string;
  outro?: string;
};

export const modeVoice: Record<ExperienceMode, ModeVoice> = {
  malleable: {
    heroEyebrow: "WELCOME TO THE MALLEABLE MACHINE",
    videoEyebrow: "THE MACHINE AT WORK",
    videoNote:
      "That’s DHH’s own Omarchy above, reconfigured to fit exactly how he works.",
    statsEyebrow: "RUNNING IN THE WILD",
    exploreEyebrow: "EXPLORE",
  },
  beautiful: {
    heroEyebrow: "A LOVE LETTER TO LINUX",
    videoEyebrow: "WORTH STOPPING FOR",
    videoNote:
      "That’s DHH’s own desktop above, still running the Quattro wallpaper he never got tired of.",
    quoteEyebrow: "MORNING IN LINUX LAND",
    exploreEyebrow: "STAY AWHILE",
  },
  opinionated: {
    heroEyebrow: "THE OMARCHS",
    heroTagline: "The computer belongs to you again.",
    videoEyebrow: "ROYAL TRANSMISSION",
    videoNote:
      "That’s DHH’s own desktop above, running the Quattro wallpaper, his favorite.",
    statsEyebrow: "THE REALM ADVANCES",
    exploreEyebrow: "THE FOUR HOUSES",
    outro: "Long may it run. Long may it compile.",
  },
};
