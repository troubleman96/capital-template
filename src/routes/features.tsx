import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3, BrainCircuit, Building2, Layers, LineChart, Rocket,
  ShieldCheck, Users, Zap,
} from "lucide-react";
import {
  Card, CtaSection, FaqSection, IconBadge, PageHero, Section, SectionHeading,
  TestimonialsSection,
} from "@/components/site/ui";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Capital AI data platform" },
      {
        name: "description",
        content:
          "Embedded AI intelligence, real-time decision power, and tooling built for teams managing large interconnected data systems.",
      },
      { property: "og:title", content: "Features — Capital AI data platform" },
      {
        property: "og:description",
        content:
          "Everything you need to build smarter data systems, from AI modeling to real-time insight.",
      },
    ],
  }),
  component: FeaturesPage,
});

const challenges = [
  {
    icon: <BrainCircuit className="size-5" />,
    title: "Embedded AI Intelligence",
    body: "Connect operational data and key metrics for better decision-making across departments",
  },
  {
    icon: <Layers className="size-5" />,
    title: "Built for Complex Systems",
    body: "Built to manage large, interconnected data structures efficiently, minimizing technical friction for teams.",
  },
  {
    icon: <Zap className="size-5" />,
    title: "Real-Time Decision Power",
    body: "Access live insights and performance signals instantly, so your team can act faster and stay ahead.",
  },
];

const complexity = [
  {
    title: "Research & Insight",
    body: "Organize and analyze research data, linking insights across projects and sources seamlessly",
  },
  {
    title: "Product Platform Teams",
    body: "Build and scale products with a robust, AI-powered database that grows with your team.",
  },
  {
    title: "Operations & Strategy",
    body: "Connect operational data and key metrics for better decision-making across departments",
  },
];

const love = [
  {
    title: "Faster Decision-Making",
    body: "Real-time insights and AI-powered intelligence help your team make smarter decisions — exactly when it matters.",
  },
  {
    title: "Reduced Operational Complexity",
    body: "Manage complex data structures and workflows without unnecessary tools, overhead, or technical bottlenecks.",
  },
  {
    title: "Better Team Collaboration",
    body: "A shared, intelligent data layer keeps everyone aligned, informed, and working from the same source of truth.",
  },
  {
    title: "Built to Scale With You",
    body: "From small teams to enterprise systems, Capital grows with your data, workflows, and business needs.",
  },
];

const impact = [
  {
    icon: <LineChart className="size-5" />,
    title: "Research & Analytics Teams",
    body: "Discover patterns, uncover insights, and analyze large datasets faster with embedded AI and real-time intelligence.",
  },
  {
    icon: <Rocket className="size-5" />,
    title: "Product & Platform Teams",
    body: "Build and scale intelligent products on a data layer that adapts as your systems evolve.",
  },
  {
    icon: <BarChart3 className="size-5" />,
    title: "Operations & Strategy Teams",
    body: "Monitor performance, optimize workflows, and make data-backed decisions across the organization.",
  },
  {
    icon: <Building2 className="size-5" />,
    title: "Enterprise & Data-Driven Organizations",
    body: "Gain full control, enterprise-grade security, and scalable infrastructure built for high-volume, mission-critical data.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Data & Compliance Teams",
    body: "Ensure data governance, access control, and compliance with enterprise-grade security, monitoring, and audit-ready workflows.",
  },
  {
    icon: <Users className="size-5" />,
    title: "Growth & Leadership Teams",
    body: "Track KPIs, measure performance, and gain high-level insights that support faster strategic planning and business growth.",
  },
];

function FeaturesPage() {
  return (
    <>
      <PageHero
        title="Everything you need to build"
        highlight="smarter systems"
        subtitle="Choose a plan that fits your team's needs — from getting started with AI-powered insights to scaling complex, enterprise-grade data operations."
        cta={{ label: "Start Free Trial", to: "/pricing" }}
      />

      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Built for reality"
          title="Designed for Teams Handling Real Challenges"
          subtitle="Most tools manage data. Capital understands it — and helps your team act on it faster, smarter, and with confidence."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {challenges.map((c) => (
            <Card key={c.title} className="flex flex-col gap-4">
              <IconBadge>{c.icon}</IconBadge>
              <h3 className="text-lg">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Complexity"
          align="left"
          title="Built for teams managing complexity, not just data"
          subtitle="Empower your team to organize, connect, and scale complex information with ease"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {complexity.map((c, i) => (
            <Card key={c.title} className="flex flex-col gap-4">
              <span className="font-display text-sm text-mint">0{i + 1}</span>
              <h3 className="text-lg">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Benefits"
          title="Why Teams Love Using Capital"
          subtitle="Capital doesn't just give you features — it gives your team clarity, speed, and confidence."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {love.map((l) => (
            <Card key={l.title} className="flex flex-col gap-3">
              <h3 className="text-xl">{l.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {l.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who it's for"
          title="Designed for Teams That Drive Real Impact"
          subtitle="Capital is built for teams that work with complex data, make critical decisions, and need clarity at every step."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((it) => (
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

      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
