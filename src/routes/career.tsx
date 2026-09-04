import { createFileRoute } from "@tanstack/react-router";
import {
  Card, CtaSection, PageHero, Section, SectionHeading, VButton,
} from "@/components/site/ui";
import { jobs } from "@/components/site/data";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Build the future of data intelligence at Capital" },
      {
        name: "description",
        content:
          "Join a team building AI-powered platforms that turn complex data into clarity, insight, and confident decisions — at scale.",
      },
      { property: "og:title", content: "Careers at Capital" },
      {
        property: "og:description",
        content: "Open roles across engineering, AI, design, and data platform teams.",
      },
    ],
  }),
  component: CareerPage,
});

const values = [
  {
    title: "Clarity First",
    body: "Great products arise from clear thinking, simplifying complex issues into powerful systems.",
  },
  {
    title: "Ownership & Trust",
    body: "At Capital, we own our work and trust each other to make impactful decisions.",
  },
  {
    title: "Continuous Learning",
    body: "Data, AI, and technology evolve quickly, driving our daily learning and growth.",
  },
  {
    title: "Collaboration Over Silos",
    body: "We operate as one team, with open communication and common goals guiding us.",
  },
];

function CareerPage() {
  return (
    <>
      <PageHero
        title="Build the Future of Data"
        highlight="Intelligence"
        subtitle="Join a team building AI-powered platforms that turn complex data into clarity, insight, and confident decisions — at scale."
        cta={{ label: "View Open Roles", to: "/contact" }}
      />

      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Culture"
          title="How We Work Together"
          subtitle="Four principles that shape how we build, decide, and support each other."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Card key={v.title} className="flex flex-col gap-3">
              <span className="font-display text-sm text-mint">0{i + 1}</span>
              <h3 className="text-lg">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Open roles"
          align="left"
          title="We're Hiring Across Teams"
          subtitle="Remote-friendly roles across engineering, AI, design, and infrastructure."
        />
        <div className="mt-12 flex flex-col gap-4">
          {jobs.map((j) => (
            <Card
              key={j.title}
              className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl">{j.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {j.body}
                </p>
                <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-3 py-1">
                    {j.type}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1">
                    {j.location}
                  </span>
                </div>
              </div>
              <VButton to="/contact" variant="ghost" className="shrink-0">
                Apply Now
              </VButton>
            </Card>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
