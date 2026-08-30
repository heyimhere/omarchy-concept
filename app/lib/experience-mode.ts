export type ExperienceMode = "malleable" | "beautiful" | "opinionated";

export const experienceModes: ExperienceMode[] = [
  "malleable",
  "beautiful",
  "opinionated",
];

export function isExperienceMode(value: unknown): value is ExperienceMode {
  return experienceModes.includes(value as ExperienceMode);
}
