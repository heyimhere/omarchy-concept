import localFont from "next/font/local";

export const jetbrainsMono = localFont({
  variable: "--font-jetbrains-mono",
  display: "swap",
  src: [
    { path: "./JetBrainsMono-Light.woff2", weight: "300", style: "normal" },
    {
      path: "./JetBrainsMono-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    { path: "./JetBrainsMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./JetBrainsMono-Italic.woff2", weight: "400", style: "italic" },
    { path: "./JetBrainsMono-Medium.woff2", weight: "500", style: "normal" },
    {
      path: "./JetBrainsMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./JetBrainsMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./JetBrainsMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "./JetBrainsMono-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./JetBrainsMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});
