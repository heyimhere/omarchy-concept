export function AnnouncementBar() {
  return (
    <div className="border-b border-terminal-black/40 bg-storm/60">
      <a
        href="https://omarchy.org/news/2026/08/omacom-foundation-launches-with-8-million"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs text-terminal-white/80 transition-colors hover:text-turquoise sm:text-sm"
      >
        Omacom Foundation launches with{" "}
        <s className="text-terminal-white/40">$8</s> $10 million
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
