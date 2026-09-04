import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Capital" },
      {
        name: "description",
        content:
          "How Capital collects, uses, and protects data across its AI-native data intelligence platform.",
      },
      { property: "og:title", content: "Privacy Policy — Capital" },
      {
        property: "og:description",
        content: "Our approach to data collection, storage, and protection.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Information We Collect",
    body: "We collect account details, workspace configuration, and usage telemetry needed to operate the platform, plus any data you choose to store in your Capital workspaces.",
  },
  {
    title: "How We Use Information",
    body: "Information is used to deliver the service, generate embedded AI insights for your workspace, provide support, and improve platform reliability and performance.",
  },
  {
    title: "Data Storage & Security",
    body: "Data is encrypted in transit and at rest. Access is role-based and audited, with enterprise-grade controls available on Enterprise plans.",
  },
  {
    title: "Your Rights",
    body: "You can access, export, correct, or delete your data at any time. Contact us and we will respond within 30 days.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        highlight="Policy"
        subtitle="We take the protection of your data seriously. This page explains what we collect and how it is used."
      />
      <Section className="border-t border-border bg-black/20">
        <div className="flex max-w-3xl flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title} className="flex flex-col gap-3">
              <h2 className="text-2xl">{s.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
