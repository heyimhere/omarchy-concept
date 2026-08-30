"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, primaryHeaderLinks } from "../lib/nav-links";

// Keep frequent destinations in the header and the complete navigation
// in LinkGroups so the primary bar stays easy to scan.
export function NavHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-terminal-black/40 bg-night/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.15em] text-terminal-white transition-colors hover:text-turquoise"
        >
          omarchy
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 sm:flex"
        >
          {primaryHeaderLinks.map((key) => {
            const link = navLinks[key];
            return (
              <a
                key={link.key}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-terminal-white/70 transition-colors hover:text-turquoise"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={navLinks.iso.href}
            className="hidden rounded-full bg-green px-4 py-1.5 text-xs font-semibold text-night transition-transform hover:scale-[1.03] sm:inline-block sm:text-sm"
          >
            Get the ISO
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-terminal-black/60 text-terminal-white transition-colors hover:border-turquoise hover:text-turquoise sm:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-terminal-black/40 px-4 py-3 sm:hidden"
        >
          {primaryHeaderLinks.map((key) => {
            const link = navLinks[key];
            return (
              <a
                key={link.key}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-terminal-white/80 transition-colors hover:bg-storm hover:text-turquoise"
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={navLinks.iso.href}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-green px-4 py-2 text-center text-sm font-semibold text-night"
          >
            Get the ISO
          </a>
        </nav>
      )}
    </header>
  );
}
