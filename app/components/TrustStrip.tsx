const stats = [
  { value: "100,000+", label: "ISO downloads in a week" },
  { value: "1,000+", label: "community plugins built in Quattro's first week" },
  { value: "$10M", label: "Omacom Foundation funding" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-terminal-black/40 bg-storm/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-turquoise sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-terminal-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-balance text-lg leading-relaxed text-terminal-white sm:text-xl">
            &ldquo;It&rsquo;s time to dream big. Omarchy Quattro has given
            people a chance to experience what the malleable computer of the
            future looks like, and they like it (a lot!) &hellip; we&rsquo;re
            going to make the prophecy of The Year of Linux on the Desktop
            come true.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-terminal-white/50">
            DHH, on the Omacom Foundation launch
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
