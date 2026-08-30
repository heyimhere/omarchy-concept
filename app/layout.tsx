import type { Metadata } from "next";
import { jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omarchy — Beautiful, Fun & Opinionated Linux by DHH",
  description: "Beautiful, Fun & Opinionated Linux by DHH",
  openGraph: {
    title: "Omarchy",
    description: "Beautiful, Fun & Opinionated Linux by DHH",
    siteName: "Omarchy",
    url: "https://omarchy.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omarchy",
    description: "Beautiful, Fun & Opinionated Linux by DHH",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // "wte-home" primes the ASCII screensaver effect (see AsciiMark.tsx).
    <html
      lang="en"
      className={`${jetbrainsMono.variable} wte-home h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night text-terminal-white">
        {children}
      </body>
    </html>
  );
}
