import {
  ThirtySevenSignalsIcon,
  BasecampIcon,
  HeyIcon,
  CloudflareIcon,
} from "./icons/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-terminal-black/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-terminal-white/60 sm:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
          <span>Incubated at</span>
          <a
            href="https://37signals.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="37signals"
            className="inline-flex items-center gap-1.5 text-terminal-white transition-colors hover:text-turquoise"
          >
            <span className="h-3.5 w-3.5">
              <ThirtySevenSignalsIcon />
            </span>
            <strong className="font-semibold">37signals</strong>
          </a>
          <span>
            (makers of{" "}
            <a
              href="https://basecamp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Basecamp"
              className="inline-flex items-center gap-1.5 text-terminal-white transition-colors hover:text-turquoise"
            >
              <span className="h-3.5 w-3.5">
                <BasecampIcon />
              </span>
              <strong className="font-semibold">Basecamp</strong>
            </a>{" "}
            and{" "}
            <a
              href="https://hey.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HEY"
              className="inline-flex items-center gap-1.5 text-terminal-white transition-colors hover:text-turquoise"
            >
              <span className="h-3.5 w-3.5">
                <HeyIcon />
              </span>
              <strong className="font-semibold">HEY</strong>
            </a>
            )
          </span>
        </p>

        <p className="flex items-center justify-center gap-1.5">
          <span>Sponsored hosting by</span>
          <a
            href="https://cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cloudflare"
            className="text-terminal-white/70 transition-colors hover:text-turquoise"
          >
            <span className="inline-block h-4 w-24">
              <CloudflareIcon />
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
}
