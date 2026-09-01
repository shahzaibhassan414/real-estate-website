import { dealsCount, listingsCount, yearsActive } from "@/app/lib/config";
import { Container } from "./Container";
import { CountUp } from "./CountUp";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";

const stats = [
  { label: "Years Active", value: yearsActive },
  { label: "Properties Listed", value: listingsCount },
  { label: "Deals Closed", value: dealsCount },
];

export function StatsBar() {
  return (
    <RevealSection id="stats" className="border-y border-ink/[0.14] py-10">
      <Container className="grid grid-cols-3 divide-x divide-ink/[0.14]">
        {stats.map((stat, index) => (
          <RevealItem
            key={stat.label}
            index={index}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="font-serif text-[clamp(32px,4vw,46px)] font-semibold text-primary-dark">
              <CountUp value={stat.value} />+
            </span>
            <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ink/55">
              {stat.label}
            </span>
          </RevealItem>
        ))}
      </Container>
    </RevealSection>
  );
}
