import {
  ThirtySevenSignalsIcon,
  BasecampIcon,
  HeyIcon,
  CloudflareIcon,
} from "./icons/BrandIcons";

const footerTones = {
  night: "border-terminal-black/40 text-terminal-white/60",
  glass: "border-white/10 bg-[#10212b]/90 text-white/60",
  royal: "border-[#b89146]/20 bg-[#080705] text-[#c7b99e]/60",
};

const footerLinkTones = {
  night: "text-terminal-white hover:text-turquoise",
  glass: "text-[#dfe9e9] hover:text-[#ffe3ad]",
  royal: "text-[#e4d6ba] hover:text-[#e9c36b]",
};

const footerLogoTones = {
  night: "text-terminal-white/70 hover:text-turquoise",
  glass: "text-white/65 hover:text-[#ffe3ad]",
  royal: "text-[#c7b99e]/70 hover:text-[#e9c36b]",
};

export function Footer({ tone = "night" }: { tone?: keyof typeof footerTones }) {
  return (
    <footer className={`border-t py-10 ${footerTones[tone]}`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm sm:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
          <span>Incubated at</span>
          <a
            href="https://37signals.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="37signals"
            className={`inline-flex items-center gap-1.5 transition-colors ${footerLinkTones[tone]}`}
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
              className={`inline-flex items-center gap-1.5 transition-colors ${footerLinkTones[tone]}`}
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
              className={`inline-flex items-center gap-1.5 transition-colors ${footerLinkTones[tone]}`}
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
            className={`transition-colors ${footerLogoTones[tone]}`}
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
