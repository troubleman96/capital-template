import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { CtaSection, FaqSection, PageHero, Section } from "@/components/site/ui";
import { blogCategories, blogPosts } from "@/components/site/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Capital Insights — Blog on AI data intelligence" },
      {
        name: "description",
        content:
          "Thoughts, strategies, and insights on AI-powered data intelligence, automation, and building smarter decision-making systems at scale.",
      },
      { property: "og:title", content: "Capital Insights — Blog" },
      {
        property: "og:description",
        content:
          "Articles on AI-powered data intelligence, automation, and scalable data platforms.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [cat, setCat] = useState("All");
  const posts =
    cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        title="Capital"
        highlight="Insights"
        subtitle="Thoughts, strategies, and insights on AI-powered data intelligence, automation, and building smarter decision-making systems at scale."
      />

      <Section className="border-t border-border bg-black/20">
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm transition-colors",
                cat === c
                  ? "border-mint/40 bg-mint-soft text-mint"
                  : "border-border text-muted-foreground hover:bg-white/5",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="card-surface group flex flex-col overflow-hidden transition-colors hover:border-mint/30"
            >
              <div className="dotgrid relative h-44 border-b border-border bg-gradient-to-br from-mint/20 via-transparent to-transparent">
                <span className="absolute bottom-3 left-4 text-xs text-mint">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs text-muted-foreground">
                  {p.date} · {p.read}
                </span>
                <h2 className="font-display text-lg leading-snug transition-colors group-hover:text-mint">
                  {p.title}
                </h2>
                <span className="mt-auto flex items-center gap-2 pt-3 text-sm text-mint">
                  Read article
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
