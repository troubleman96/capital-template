import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Capital" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Capital AI-native data intelligence platform.",
      },
      { property: "og:title", content: "Terms of Use — Capital" },
      {
        property: "og:description",
        content: "Acceptable use, subscriptions, and liability for the Capital platform.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using Capital, you agree to these terms. If you are using Capital on behalf of an organization, you agree on its behalf.",
  },
  {
    title: "Acceptable Use",
    body: "You may not use Capital to store unlawful content, attempt to breach platform security, or resell access without written agreement.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Paid plans renew monthly unless cancelled. Usage above plan limits may require an upgrade to continue processing data.",
  },
  {
    title: "Limitation of Liability",
    body: "Capital is provided on an as-is basis. We are not liable for indirect or consequential damages arising from use of the platform.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of"
        highlight="Use"
        subtitle="Please read these terms carefully — they govern your access to and use of Capital."
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
