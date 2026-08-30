// Shared nav data, consumed by both NavHeader (full icon nav) and
// LinkGroups (regrouped cards).

export type NavLinkKey =
  | "manual"
  | "iso"
  | "plugins"
  | "github"
  | "security"
  | "news"
  | "teams"
  | "patrons"
  | "sponsorships"
  | "air"
  | "discord"
  | "meetups"
  | "workstations"
  | "merch";

export type NavLink = {
  key: NavLinkKey;
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: Record<NavLinkKey, NavLink> = {
  manual: {
    key: "manual",
    label: "Manual",
    href: "https://omarchy.org/manual/",
    external: true,
  },
  iso: {
    key: "iso",
    label: "ISO",
    href: "https://iso.omarchy.org/omarchy-4.0.1.iso",
    external: true,
  },
  plugins: {
    key: "plugins",
    label: "Plugins",
    href: "https://omarchyplugins.com/",
    external: true,
  },
  github: {
    key: "github",
    label: "GitHub",
    href: "https://github.com/omacom/omarchy",
    external: true,
  },
  security: {
    key: "security",
    label: "Security",
    href: "https://omarchy.org/security/",
    external: true,
  },
  news: {
    key: "news",
    label: "News",
    href: "https://omarchy.org/news/",
    external: true,
  },
  teams: {
    key: "teams",
    label: "Teams",
    href: "https://omarchy.org/teams/",
    external: true,
  },
  patrons: {
    key: "patrons",
    label: "Patrons",
    href: "https://omarchy.org/patrons/",
    external: true,
  },
  sponsorships: {
    key: "sponsorships",
    label: "Sponsorships",
    href: "https://omarchy.org/sponsorships/",
    external: true,
  },
  air: {
    key: "air",
    label: "AIR",
    href: "https://omarchy.org/air/",
    external: true,
  },
  discord: {
    key: "discord",
    label: "Discord",
    href: "https://discord.gg/tXFUdasqhY",
    external: true,
  },
  meetups: {
    key: "meetups",
    label: "Meetups",
    href: "https://omarchy.org/meetups/",
    external: true,
  },
  workstations: {
    key: "workstations",
    label: "Workstations",
    href: "https://omarchy.org/workstations/",
    external: true,
  },
  merch: {
    key: "merch",
    label: "Merch",
    href: "https://supply.37signals.com/collections/omarchy",
    external: true,
  },
};

// The header only surfaces the handful of links people reach for on every
// visit; the rest live in LinkGroups below, grouped by intent instead of
// crammed into the bar.
export const primaryHeaderLinks: NavLinkKey[] = [
  "manual",
  "plugins",
  "github",
  "discord",
];

// Regrouped for landing-page scanability.
export const landingGroups: { title: string; keys: NavLinkKey[] }[] = [
  { title: "Get Started", keys: ["manual", "iso", "plugins"] },
  { title: "Dig In", keys: ["github", "security", "news"] },
  {
    title: "Join the Movement",
    keys: ["discord", "meetups", "teams", "workstations"],
  },
  {
    title: "Support the Mission",
    keys: ["patrons", "sponsorships", "air", "merch"],
  },
];
