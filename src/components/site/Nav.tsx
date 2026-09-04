import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "Feature", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

const pageLinks = [
  { label: "About", to: "/about" },
  { label: "Integration", to: "/integration" },
  { label: "Career", to: "/career" },
  { label: "Download App", to: "/download-app" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-8 items-center justify-center overflow-hidden rounded-lg border border-border/50 shadow-sm">
        <img src="/logo.png" alt="App Logo" className="size-full object-cover" />
      </span>
      <span className="font-display text-lg tracking-tight">Capital</span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="fixed top-4 right-0 left-0 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl md:px-6">
        <Logo />

        <div className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {mainLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
              onClick={() => setPagesOpen((v) => !v)}
            >
              Pages
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  pagesOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "absolute top-full left-1/2 w-52 -translate-x-1/2 pt-3 transition-all duration-200",
                pagesOpen
                  ? "visible opacity-100"
                  : "invisible -translate-y-1 opacity-0",
              )}
            >
              <div className="card-surface flex flex-col p-2">
                {pageLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ShoppingBag className="size-4" />
            Contact
          </Link>
          <Link
            to="/contact"
            className="mint-glow rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open ? (
        <div className="card-surface mx-auto mt-2 flex max-w-6xl flex-col p-3 lg:hidden">
          {[...mainLinks, ...pageLinks, { label: "Contact", to: "/contact" }].map(
            (l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-mint px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
          >
            Book a Demo
          </Link>
        </div>
      ) : null}
    </div>
  );
}
