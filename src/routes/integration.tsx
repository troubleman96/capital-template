import { createFileRoute } from "@tanstack/react-router";
import { Plug } from "lucide-react";
import {
  Card, CtaSection, FaqSection, IconBadge, PageHero, Section, SectionHeading,
} from "@/components/site/ui";
import { integrations } from "@/components/site/data";

export const Route = createFileRoute("/integration")({
  head: () => ({
    meta: [
      { title: "Integrations — Connect Capital with your stack" },
      {
        name: "description",
        content:
          "Capital integrates with your existing data sources, platforms, and workflows so your intelligence stays connected and actionable.",
      },
      { property: "og:title", content: "Integrations — Connect Capital with your stack" },
      {
        property: "og:description",
        content: "Nine ready-made integrations plus APIs and webhooks for custom workflows.",
      },
    ],
  }),
  component: IntegrationPage,
});

function IntegrationPage() {
  return (
    <>
      <PageHero
        title="Connect Capital with the Tools You Already"
        highlight="Use"
        subtitle="Capital integrates seamlessly with your existing data sources, platforms, and workflows — so your intelligence stays connected, real-time, and actionable."
        cta={{ label: "Browse Integrations", to: "/contact" }}
      />

      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Integrations"
          title="Connect Your Stack Instantly"
          subtitle="Sync data, stream events, and trigger workflows across the tools your team already relies on."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((i) => (
            <Card key={i.name} className="flex flex-col gap-4">
              <IconBadge>
                <Plug className="size-5" />
              </IconBadge>
              <h3 className="text-lg">{i.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {i.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
