import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import {
  Card, CtaSection, IconBadge, PageHero, Section, SectionHeading,
} from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Capital — Let's talk about your data" },
      {
        name: "description",
        content:
          "Have questions, need a demo, or want to explore how Capital can help your team turn complex data into smarter decisions?",
      },
      { property: "og:title", content: "Contact Capital" },
      {
        property: "og:description",
        content: "Book a demo or send the Capital team a message.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: <Mail className="size-5" />, label: "Email", value: "hello@Capital.io" },
  { icon: <Phone className="size-5" />, label: "Phone", value: "+1 (415) 555-0132" },
  {
    icon: <MapPin className="size-5" />,
    label: "Office",
    value: "128 Market Street, San Francisco",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        title="Let's Talk About Your"
        highlight="Data"
        subtitle="Have questions, need a demo, or want to explore how Capital can help your team? We're here to help you turn complex data into smarter decisions."
      />

      <Section className="border-t border-border bg-black/20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            {details.map((d) => (
              <Card key={d.label} className="flex items-center gap-4">
                <IconBadge>{d.icon}</IconBadge>
                <span className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="text-sm">{d.value}</span>
                </span>
              </Card>
            ))}
          </div>

          <Card className="p-7">
            <SectionHeading
              align="left"
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you as soon as possible."
            />
            <form
              className="mt-8 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Cooper" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                />
              </div>
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted-foreground">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your data challenges"
                  className="rounded-xl border border-input bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-mint/50"
                />
              </label>
              <button
                type="submit"
                className="mint-glow mt-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Submit Message
              </button>
              {sent ? (
                <p className="text-sm text-mint">
                  Thank you! Your submission has been received.
                </p>
              ) : null}
            </form>
          </Card>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-input bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-mint/50"
      />
    </label>
  );
}
