const tones = {
  night: "border-terminal-black/40 bg-storm/60 text-terminal-white/80 hover:text-turquoise",
  glass: "border-white/10 bg-[#10212b]/75 text-white/80 hover:text-[#ffe3ad]",
  royal: "border-[#b89146]/25 bg-[#090806]/90 text-[#d9ccb3]/75 hover:text-[#e9c36b]",
};

export function AnnouncementBar({
  tone = "night",
}: {
  tone?: keyof typeof tones;
}) {
  return (
    <div className={`border-b ${tones[tone]}`}>
      <a
        href="https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs transition-colors sm:text-sm"
      >
        Omacom Foundation launches with{" "}
        <s className="text-terminal-white/40">$8</s> $10 million
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
