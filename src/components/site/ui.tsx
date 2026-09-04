import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Buttons ---------------- */

type ButtonProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "mint" | "ghost";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function VButton({
  to,
  href,
  children,
  variant = "mint",
  icon = <ArrowRight className="size-4" />,
  className,
  onClick,
}: ButtonProps) {
  const base = cn(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
    variant === "mint"
      ? "bg-mint text-primary-foreground mint-glow hover:-translate-y-0.5"
      : "border border-border bg-white/[0.03] text-foreground hover:bg-white/[0.07]",
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {icon}
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} className={base} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} className={base} onClick={onClick}>
      {inner}
    </a>
  );
}

/* ---------------- Layout ---------------- */

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left md:flex-row md:items-end md:justify-between",
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" ? "items-center" : "items-start",
        )}
      >
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="max-w-2xl text-3xl leading-[1.1] text-balance md:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card-surface p-6 transition-colors duration-300 hover:border-mint/30",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-11 items-center justify-center rounded-xl border border-mint/25 bg-mint-soft text-mint">
      {children}
    </span>
  );
}

/* ---------------- Counter ---------------- */

export function Counter({
  value,
  suffix = "",
  label,
  hint,
}: {
  value: number;
  suffix?: string;
  label: string;
  hint?: string;
}) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="font-display text-4xl text-mint md:text-6xl">
        {shown}
        {suffix}
      </span>
      <span className="text-sm font-medium">{label}</span>
      {hint ? (
        <span className="text-xs leading-relaxed text-muted-foreground">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

/* ---------------- FAQ ---------------- */

export const faqs = [
  {
    q: "What is Capital?",
    a: "Capital is an AI-powered database platform that helps teams design, manage, and scale data systems effortlessly. It combines flexible data modeling with intelligent AI capabilities to automate schema design, detect relationships, and surface insights in real time.",
  },
  {
    q: "How does Capital's AI work?",
    a: "Capital AI is embedded directly into the platform, not added as a separate assistant. It continuously analyzes your data in real time to understand patterns, relationships, and changes — surfacing insights, suggesting data structures, and triggering smart alerts.",
  },
  {
    q: "Who can use Capital?",
    a: "Capital is built for teams and organizations that work with complex data — including research and analytics teams, product and platform teams, operations and strategy teams, and enterprise data-driven organizations of any size.",
  },
  {
    q: "Can I connect Capital with other tools?",
    a: "Yes. Capital integrates seamlessly with databases, analytics tools, automation platforms, and collaboration tools. You can also use APIs and webhooks to build custom integrations tailored to your workflows.",
  },
  {
    q: "What kind of support does Capital offer?",
    a: "Capital offers comprehensive support including detailed documentation, a knowledge base, community support, and priority or dedicated support options for Pro and Enterprise customers.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <Section className="overflow-hidden">
      <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="flex flex-col items-start gap-6">
          <span className="eyebrow">FAQ</span>
          <h2 className="text-3xl leading-[1.1] md:text-5xl">
            Questions? <br />
            <span className="text-muted-foreground">We've got answers.</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Capital's AI is integrated into every layer of the platform.
          </p>
          <VButton to="/contact">Ask Question</VButton>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={cn(
                  "card-surface w-full p-5 text-left transition-colors duration-300",
                  isOpen && "border-mint/30",
                )}
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-display text-base md:text-lg">
                    {f.q}
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-mint">
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </span>
                <span
                  className={cn(
                    "grid overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-300",
                    isOpen
                      ? "mt-3 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <span className="overflow-hidden">{f.a}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */

const testimonials = [
  {
    quote:
      "Capital has completely transformed how our product team handles data. Before, we struggled to maintain consistent data relationships and often had to manually connect information across different tables.",
    name: "Alex Rivera",
    company: "TechNova Solutions",
  },
  {
    quote:
      "Managing knowledge across departments can be chaotic, especially as we scale. We were using multiple tools to store data, and it became increasingly difficult to keep everything organized. Capital has been a game-changer for us.",
    name: "Megan Porter",
    company: "DataTech Solutions",
  },
  {
    quote:
      "Team has always faced challenges with data being scattered across multiple tools. We needed a solution that could help us centralize all our data. Capital solved this by bringing everything into one unified platform.",
    name: "James Ford",
    company: "BrightTech Enterprises",
  },
  {
    quote:
      "As a research team, managing large datasets across multiple sources was always a challenge. We used to spend a lot of time manually linking insights and findings, which slowed down our ability to move quickly.",
    name: "Sophia Lee",
    company: "ClearPath Analytics",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="What Teams Are Saying"
        subtitle="Capital's AI is integrated into every layer of the platform."
      />
      <div className="mt-14 overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(${-index} * (100% + 1.5rem)))` }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-surface flex min-w-full flex-col justify-between gap-8 p-8 md:min-w-[calc(50%-0.75rem)]"
            >
              <blockquote className="text-sm leading-relaxed text-muted-foreground md:text-base">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-mint-soft font-display text-mint">
                  {t.name.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-sm">{t.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "size-8 rounded-full border border-border text-xs transition-colors",
                index === i
                  ? "bg-mint text-primary-foreground"
                  : "text-muted-foreground hover:bg-white/5",
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            className="flex size-10 items-center justify-center rounded-full border border-border hover:bg-white/5"
          >
            <ArrowRight className="size-4 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % count)}
            className="flex size-10 items-center justify-center rounded-full border border-border hover:bg-white/5"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- CTA band ---------------- */

export function CtaSection() {
  return (
    <Section>
      <div className="card-surface dotgrid relative overflow-hidden px-6 py-16 text-center md:px-16 md:py-20">
        <div className="aurora opacity-30" />
        <div className="relative flex flex-col items-center gap-6">
          <h2 className="max-w-2xl text-3xl leading-[1.1] md:text-5xl">
            Ready to Take Control of Your Data?
          </h2>
          <p className="text-sm text-muted-foreground">
            Unlock advanced AI insights and unlimited collaboration
          </p>
          <VButton to="/contact">Ask Question</VButton>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Page hero ---------------- */

export function PageHero({
  title,
  highlight,
  subtitle,
  cta,
}: {
  title: string;
  highlight?: string;
  subtitle: string;
  cta?: { label: string; to: string };
}) {
  return (
    <header className="relative overflow-hidden px-5 pt-40 pb-20 text-center md:pt-48 md:pb-28">
      <div className="aurora opacity-60" />
      <div className="dotgrid absolute inset-0 opacity-60" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
        <h1 className="text-4xl leading-[1.05] text-balance md:text-6xl">
          {title}{" "}
          {highlight ? <span className="text-mint">{highlight}</span> : null}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
        {cta ? <VButton to={cta.to}>{cta.label}</VButton> : null}
      </div>
    </header>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint">
            <Check className="size-3" />
          </span>
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}
