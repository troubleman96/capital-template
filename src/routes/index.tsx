import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  BrainCircuit,
  Gauge,
  LifeBuoy,
  Settings2,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  Card,
  CheckList,
  Counter,
  CtaSection,
  FaqSection,
  IconBadge,
  Section,
  SectionHeading,
  TestimonialsSection,
  VButton,
} from "@/components/site/ui";
import { pricingPlans } from "@/components/site/data";
import { PlanCard } from "@/components/site/PlanCard";
import dashboard1 from "@/assets/dashboard-1.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capital — A new AI-native builder, built by coders" },
      {
        name: "description",
        content:
          "Capital combines flexible data modeling with embedded AI so teams can design, manage and scale complex data systems in real time.",
      },
      {
        property: "og:title",
        content: "Capital — A new AI-native builder, built by coders",
      },
      {
        property: "og:description",
        content:
          "Flexible data modeling with embedded AI for teams managing complex data systems.",
      },
    ],
  }),
  component: Index,
});

const whyItems = [
  {
    icon: <BrainCircuit className="size-5" />,
    title: "AI Insights",
    body: "Automatically surfaces patterns and trends to help teams make faster, data-driven decisions",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Fast Performance",
    body: "Responsive queries and real-time updates to handle large datasets efficiently.",
  },
  {
    icon: <Bell className="size-5" />,
    title: "Smart Alerts",
    body: "Get notified about key data changes, anomalies, and important updates only when needed.",
  },
  {
    icon: <Settings2 className="size-5" />,
    title: "Full Control",
    body: "Easily design and manage schemas without disrupting your system's structure.",
  },
  {
    icon: <Target className="size-5" />,
    title: "Precision Tools",
    body: "Advanced filtering, AI queries, and customizable views for deep data exploration.",
  },
  {
    icon: <LifeBuoy className="size-5" />,
    title: "24/7 Support",
    body: "Comprehensive documentation and expert support whenever you need it.",
  },
];

const featureRows = [
  {
    title: "AI-Powered Data Modeling",
    body: "Easily design and scale complex databases with AI—no manual work needed.",
  },
  {
    title: "AI That Works Inside Your Data",
    body: "Capital's AI learns from your data to provide insights and guide decisions.",
  },
  {
    title: "Insights When They Matter",
    body: "Track performance and changes to make quicker, smarter decisions.",
  },
  {
    title: "Automate, Don't Grow",
    body: "Create smart workflows that automate data responses and streamline operations.",
  },
  {
    title: "Stay in Control Always",
    body: "Monitor system health, get alerts, and manage access and workflows flexibly.",
  },
];

const tabs = [
  {
    tab: "Smart Data Modeling",
    title: "Design your database effortlessly with AI assistance",
    body: "Capital's intuitive data modeling tool lets you create custom tables, fields, and relationships—without needing to write complex SQL queries.",
    list: [
      "Create custom data structures with a simple",
      "AI suggests optimal fields based on your content",
      "Scale your database without worrying migrations",
    ],
  },
  {
    tab: "Auto-Detect Relationships",
    title: "Automatically link your data with intelligent suggestions",
    body: "Capital detects how your records relate to each other and proposes the right connections as your schema grows.",
    list: [
      "Relationship suggestions as you model",
      "Detects duplicates and orphaned records",
      "Keeps references consistent at scale",
    ],
  },
  {
    tab: "Real-Time Insights",
    title: "Get actionable insights from your data without the guesswork",
    body: "As your database grows, Capital's AI continuously analyzes the data for trends, anomalies, and potential gaps.",
    list: [
      "AI scans for trends and anomalies",
      "Surface insights that directly impact",
      "Get real-time alerts on data changes or patterns",
    ],
  },
];

function Index() {
  const [tab, setTab] = useState(0);
  const active = tabs[tab]!;

  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden px-5 pt-36 pb-24 text-center md:pt-44 md:pb-32">
        <div className="aurora" />
        <div className="dotgrid absolute inset-0 opacity-70" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">
          <span className="flex size-24 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm md:size-28">
            <span className="mint-glow flex size-16 items-center justify-center rounded-2xl bg-gradient-to-b from-white/10 to-mint/30 md:size-20">
              <svg viewBox="0 0 24 24" className="size-9 text-white/90">
                <path d="M6 5h6.5v6.5H19V19h-6.5v-6.5H6z" fill="currentColor" />
              </svg>
            </span>
          </span>
          <h1 className="text-5xl leading-[1.02] text-balance md:text-7xl">
            A new AI-native <br />
            <span className="text-muted-foreground">Builder</span>{" "}
            <span className="rounded-xl bg-white/[0.06] px-3 py-1 text-mint ring-1 ring-mint/25">
              Built by Coder
            </span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <VButton to="/contact">Pay after you Pass</VButton>
            <VButton
              to="/pricing"
              variant="ghost"
              icon={<ArrowRight className="size-4 rotate-90" />}
            >
              View Pricing
            </VButton>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["Get Funded Faster", "Keep 100% Profits", "Secure Payouts"].map(
              (t) => (
                <span key={t} className="flex items-center gap-2">
                  <Sparkles className="size-4 text-mint" />
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </header>

      {/* Why teams build with Capital */}
      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="About Capital"
          title={
            <>
              Why Teams Build <br />
              <span className="text-muted-foreground">with Capital</span>
            </>
          }
          subtitle="Designed to handle complex systems, not just store data. Capital combines flexible data modeling with embedded AI to help teams move faster."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((it) => (
            <Card key={it.title} className="flex flex-col gap-4">
              <IconBadge>{it.icon}</IconBadge>
              <h3 className="text-lg">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Feature list */}
      <Section>
        <SectionHeading
          eyebrow="Features"
          align="left"
          title="Powerful Features Built for Intelligent Data Teams"
          subtitle="Capital brings together AI, automation, and real-time intelligence to help teams manage complex data systems with speed, clarity, and full control."
          action={<VButton to="/features">Explore Features</VButton>}
        />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {featureRows.map((f, i) => (
            <div
              key={f.title}
              className="group grid gap-2 py-6 md:grid-cols-[80px_1fr_1fr] md:items-center"
            >
              <span className="font-display text-sm text-mint">
                0{i + 1}
              </span>
              <h3 className="text-xl transition-colors group-hover:text-mint md:text-2xl">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Embedded intelligence tabs */}
      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Intelligence"
          title="Embedded intelligence, not a separate assistant"
          subtitle="Capital's AI is integrated into every layer of the platform."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.tab}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm transition-colors",
                tab === i
                  ? "border-mint/40 bg-mint-soft text-mint"
                  : "border-border text-muted-foreground hover:bg-white/5",
              )}
            >
              {t.tab}
            </button>
          ))}
        </div>
        <div className="card-surface mt-10 grid gap-10 p-6 md:grid-cols-2 md:items-center md:p-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl leading-tight md:text-4xl">
              {active.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {active.body}
            </p>
            <CheckList items={active.list} />
          </div>
          <img
            src={dashboard1}
            alt="Capital data modeling interface"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl border border-border"
          />
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Counter value={208} suffix="M+" label="Data processed daily" />
          <Counter value={5} suffix="+" label="Years in operation" />
          <Counter value={98} suffix="%" label="AI insights accuracy" />
          <Counter value={200} suffix="+" label="Happy organizations" />
        </div>
      </Section>

      {/* AI powered insight */}
      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Platform"
          title="AI Powered Insight"
          subtitle="Embedded AI continuously understands your data, revealing meaningful connections and trends as your system grows."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="card-surface overflow-hidden">
            <img
              src={dashboard1}
              alt="Capital analytics dashboard"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <Card className="flex flex-col gap-4">
              <IconBadge>
                <Gauge className="size-5" />
              </IconBadge>
              <h3 className="text-xl">
                Monitor, Analyze, &amp; Improve Data Intelligence
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Gain real-time insights into your data's performance. Capital's
                AI monitors relationships and trends to help teams make smarter,
                faster decisions.
              </p>
            </Card>
            <Card className="flex flex-col gap-4">
              <IconBadge>
                <Settings2 className="size-5" />
              </IconBadge>
              <h3 className="text-xl">
                Effortlessly Manage &amp; Optimize Your Database Workflows
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Capital lets you design and scale workflows seamlessly, with
                flexible schemas and real-time data synchronization.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Pricing That Scales with Your Data Needs"
          subtitle="Choose the plan that fits your team's data structure and usage. Whether you're a startup or an enterprise, Capital scales with your needs."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </Section>

      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
