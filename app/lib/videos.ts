export type VideoEntry = {
  id: string;
  title: string;
  caption: string;
  poster: string;
  posterAlt: string;
};

export const videos: VideoEntry[] = [
  {
    id: "F7fe9pa8OeE",
    title: "Omarchy introduction video",
    caption: "DHH walks through the Quattro release, straight from his own desktop.",
    poster: "/videos/omarchy-quattro.webp",
    posterAlt: "Omarchy Quattro by David Heinemeier Hansson",
  },
  {
    id: "9SDkU5VDQEQ",
    title: "You need to switch to Linux RIGHT NOW!! by NetworkChuck",
    caption: "Or hear it from someone else: NetworkChuck's independent take.",
    poster: "/videos/networkchuck.webp",
    posterAlt: "You need to switch to Linux RIGHT NOW!! by NetworkChuck",
  },
];
