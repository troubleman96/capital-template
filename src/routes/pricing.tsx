import { createFileRoute } from "@tanstack/react-router";
import {
  Card, Counter, CtaSection, FaqSection, PageHero, Section, SectionHeading,
  TestimonialsSection,
} from "@/components/site/ui";
import { PlanCard } from "@/components/site/PlanCard";
import { pricingPlans } from "@/components/site/data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Capital plans that scale with your data" },
      {
        name: "description",
        content:
          "Starter, Pro, and Enterprise plans for teams of every size. Pick the Capital plan that fits your data structure and usage.",
      },
      {
        property: "og:title",
        content: "Pricing — Capital plans that scale with your data",
      },
      {
        property: "og:description",
        content: "Transparent plans from free to enterprise-grade data operations.",
      },
    ],
  }),
  component: PricingPage,
});

const compare = [
  { label: "Records", values: ["50,000", "Unlimited", "100M+"] },
  { label: "Seats", values: ["50 users", "1,000 users", "Unlimited"] },
  { label: "AI insights", values: ["Core", "Advanced", "Custom workflows"] },
  { label: "Support", values: ["Community", "Priority", "Dedicated"] },
  { label: "Security", values: ["Standard", "Advanced", "Enterprise + SLA"] },
];

function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing That Scales with Your"
        highlight="Data Needs"
        subtitle="Choose the plan that fits your team's data structure and usage. Whether you're a startup or an enterprise, Capital scales with your needs."
        cta={{ label: "Start Free Trial", to: "/contact" }}
      />

      <Section className="border-t border-border bg-black/20">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Compare"
          title="Compare Plans Side by Side"
          subtitle="Everything included at each tier, so you can pick with confidence."
        />
        <Card className="mt-12 overflow-x-auto p-0">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-border">
              <tr>
                <th className="p-5 font-display font-normal text-muted-foreground">
                  Capability
                </th>
                {pricingPlans.map((p) => (
                  <th key={p.name} className="p-5 font-display font-normal">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-5 text-muted-foreground">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="p-5">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Section>

      <Section className="border-t border-border bg-black/20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Counter value={208} suffix="M+" label="Data processed daily" />
          <Counter value={5} suffix="+" label="Years in operation" />
          <Counter value={98} suffix="%" label="AI insights accuracy" />
          <Counter value={200} suffix="+" label="Happy organizations" />
        </div>
      </Section>

      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
