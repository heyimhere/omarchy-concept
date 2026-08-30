import type { Metadata } from "next";
import { jetbrainsMono } from "./fonts";
import "./globals.css";

// VERCEL_PROJECT_PRODUCTION_URL is the stable production alias Vercel
// assigns on deploy (e.g. omarchy-concept.vercel.app), not the per-deploy
// preview URL, so this stays correct without hardcoding a domain we don't
// know yet.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Omarchy — Beautiful, Fun & Opinionated Linux by DHH",
  description: "Beautiful, Fun & Opinionated Linux by DHH",
  openGraph: {
    title: "Omarchy",
    description: "Beautiful, Fun & Opinionated Linux by DHH",
    siteName: "Omarchy",
    url: "/",
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
