import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Plan } from "./data";
import { VButton } from "./ui";

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "card-surface relative flex flex-col gap-6 p-7",
        plan.featured && "border-mint/35 mint-glow",
      )}
    >
      {plan.featured ? (
        <span className="absolute top-6 right-6 rounded-full bg-mint-soft px-3 py-1 text-xs text-mint">
          Popular
        </span>
      ) : null}
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl">{plan.name}</h3>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          {plan.blurb}
        </p>
      </div>
      <div className="flex items-end gap-1">
        <span className="font-display text-5xl">{plan.price}</span>
        <span className="pb-2 text-sm text-muted-foreground">/month</span>
      </div>
      <ul className="flex flex-col gap-2 border-y border-border py-5">
        {plan.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm">
            <Sparkles className="size-4 text-mint" />
            {h}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint">
              <Check className="size-3" />
            </span>
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
      <VButton
        to="/contact"
        variant={plan.featured ? "mint" : "ghost"}
        className="mt-auto justify-center"
      >
        Get Started
      </VButton>
    </div>
  );
}
