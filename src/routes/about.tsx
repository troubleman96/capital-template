import { createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, Layers, Sparkles } from "lucide-react";
import {
  Card, Counter, CtaSection, IconBadge, PageHero, Section, SectionHeading,
  TestimonialsSection,
} from "@/components/site/ui";
import dashboard1 from "@/assets/dashboard-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Capital — Making complex data make sense" },
      {
        name: "description",
        content:
          "Capital embeds intelligence directly into the data platform so teams can understand, act on, and scale their data with confidence.",
      },
      {
        property: "og:title",
        content: "About Capital — Making complex data make sense",
      },
      {
        property: "og:description",
        content: "Our story, mission, and the team behind the AI-native data platform.",
      },
    ],
  }),
  component: AboutPage,
});

const mission = [
  {
    icon: <Layers className="size-5" />,
    title: "Remove Complexity",
    body: "We streamline data management, simplifying modeling and workflows while retaining control.",
  },
  {
    icon: <BrainCircuit className="size-5" />,
    title: "Embed Intelligence",
    body: "AI lives inside the platform, continuously learning from your data instead of sitting beside it.",
  },
  {
    icon: <Sparkles className="size-5" />,
    title: "Enable Confidence",
    body: "Teams act on data they trust, with insight, governance, and clarity built into every layer.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        title="Built to Make Complex Data Make"
        highlight="Sense"
        subtitle="Choose a plan that fits your team's needs — from getting started with AI-powered insights to scaling complex, enterprise-grade data operations."
        cta={{ label: "Start Free Trial", to: "/pricing" }}
      />

      <Section className="border-t border-border bg-black/20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-6">
            <span className="eyebrow">Our Story</span>
            <h2 className="text-3xl leading-tight md:text-5xl">
              Why Capital Exists
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              As data systems became more complex, teams were forced to rely on
              disconnected tools, manual processes, and delayed insights. Capital
              was built to change that.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Instead of treating AI as an add-on, we embedded intelligence
              directly into the platform — so data doesn't just sit there, it
              actively works for your team. Capital exists to help teams
              understand, act on, and scale their data with confidence.
            </p>
          </div>
          <img
            src={dashboard1}
            alt="Capital platform overview"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl border border-border"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 sm:grid-cols-2">
          <Counter
            value={208}
            suffix="M+"
            label="Data Processed Daily"
            hint="Capital processes millions of data points every day."
          />
          <Counter
            value={98}
            suffix="%"
            label="AI Insight Accuracy"
            hint="Our embedded AI continuously analyzes data patterns."
          />
        </div>
      </Section>

      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Mission"
          title="Turning Complex Data into Smart Decisions"
          subtitle="Our mission is simple: empower teams to make better decisions by removing friction from data management and analysis."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {mission.map((m) => (
            <Card key={m.title} className="flex flex-col gap-4">
              <IconBadge>{m.icon}</IconBadge>
              <h3 className="text-lg">{m.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {m.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
