import { Link } from "@tanstack/react-router";
import { Logo } from "./Nav";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", to: "/" },
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Career", to: "/career" },
      { label: "Integration", to: "/integration" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Utility",
    links: [
      { label: "Download App", to: "/download-app" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Use", to: "/terms-of-use" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-5 pt-16 pb-8">
      <div className="dotgrid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            An AI-native data platform that helps teams design, manage, and
            scale complex data systems with clarity.
          </p>
          <div className="flex gap-2">
            {["X", "In", "Db", "Be"].map((s) => (
              <span
                key={s}
                className="flex size-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h3 className="font-display text-sm tracking-wide">{col.title}</h3>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-mint"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative mx-auto mt-14 flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Capital. All rights reserved.</span>
        <span>Built for teams handling complex data.</span>
      </div>
    </footer>
  );
}
