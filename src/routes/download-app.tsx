import { createFileRoute } from "@tanstack/react-router";
import { Apple, Monitor, Smartphone } from "lucide-react";
import {
  Card, CtaSection, IconBadge, Section, SectionHeading, VButton,
} from "@/components/site/ui";
import dashboard1 from "@/assets/dashboard-1.jpg";

export const Route = createFileRoute("/download-app")({
  head: () => ({
    meta: [
      { title: "Download Capital — Get Capital on your device" },
      {
        name: "description",
        content:
          "Access AI-powered data intelligence anytime, anywhere — whether at your desk or on the go.",
      },
      { property: "og:title", content: "Download Capital" },
      {
        property: "og:description",
        content: "Capital for iOS, Android, and desktop.",
      },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <>
      <header className="relative overflow-hidden px-5 pt-40 pb-20 text-center md:pt-48">
        <div className="aurora opacity-60" />
        <div className="dotgrid absolute inset-0 opacity-60" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h1 className="text-4xl leading-[1.05] text-balance md:text-6xl">
            Get Capital on Your <span className="text-mint">Device</span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Access AI-powered data intelligence anytime, anywhere — whether at
            your desk or on the go.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <VButton to="/contact">Download for iOS</VButton>
            <VButton to="/" variant="ghost">
              Get Desktop App
            </VButton>
          </div>
          <img
            src={dashboard1}
            alt="Capital app interface"
            width={1280}
            height={960}
            loading="lazy"
            className="mt-8 rounded-2xl border border-border"
          />
        </div>
      </header>

      <Section className="border-t border-border bg-black/20">
        <SectionHeading
          eyebrow="Platforms"
          title="One Platform, Every Device"
          subtitle="Your data, insights, and alerts stay in sync wherever you work."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <Apple className="size-5" />,
              title: "iOS",
              body: "Native mobile app with alerts, insights, and quick data lookups.",
            },
            {
              icon: <Smartphone className="size-5" />,
              title: "Android",
              body: "Full mobile access to dashboards, records, and AI queries.",
            },
            {
              icon: <Monitor className="size-5" />,
              title: "Desktop",
              body: "Deep modeling workflows with keyboard-first navigation.",
            },
          ].map((p) => (
            <Card key={p.title} className="flex flex-col gap-4">
              <IconBadge>{p.icon}</IconBadge>
              <h3 className="text-lg">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
