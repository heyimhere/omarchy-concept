import { landingGroups, navLinks } from "../lib/nav-links";
import { NavIcon } from "./icons/NavIcons";

export function LinkGroups() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-semibold tracking-[0.3em] text-terminal-blue">
        EXPLORE
      </p>
      <h2 className="mt-3 max-w-xl text-2xl font-semibold text-terminal-white sm:text-3xl">
        Everything you need, grouped by why you&rsquo;re here.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {landingGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-terminal-black/40 bg-storm/40 p-5"
          >
            <h3 className="text-sm font-semibold text-terminal-white">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {group.keys.map((key) => {
                const link = navLinks[key];
                return (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2.5 text-sm text-terminal-white/70 transition-colors hover:text-turquoise"
                    >
                      <span className="h-4 w-4 flex-none text-terminal-white/40">
                        <NavIcon icon={link.key} />
                      </span>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
