import Image from "next/image";
import { yearsActive } from "@/app/lib/config";
import { Container } from "./Container";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";
import { CheckBadgeIcon } from "./icons";

const features = [
  {
    title: "Verified Listings",
    description: "Every property is visited and verified before it goes live.",
  },
  {
    title: "Transparent Dealing",
    description: "No hidden fees or surprise terms clear numbers from day one.",
  },
  {
    title: "End-to-End Support",
    description: "From viewing to paperwork, we're with you at every step.",
  },
  {
    title: "Local Network",
    description: "Deep roots across Lahore's most sought-after neighborhoods.",
  },
];

export function About() {
  return (
    <RevealSection id="about" className="py-20">
      <Container className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[5px]">
          <Image
            src="/portfolioImage.webp"
            alt="Chaudhary Estate"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary-dark">
            Why Chaudhary Estate
          </p>
          <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,38px)] font-semibold text-ink">
            Local expertise, honest dealing.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[16px] leading-[1.7] text-ink/72">
            For over {yearsActive} years, Chaudhary Estate has helped families and
            investors find the right property across Lahore from Mozang and
            Temple Road to Bahria Town and DHA. We combine local knowledge with
            straightforward advice, so every deal is one you can trust.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <RevealItem key={feature.title} index={index}>
                <p className="flex items-center gap-2 text-[15px] font-bold text-ink">
                  <CheckBadgeIcon className="h-4 w-4 shrink-0 text-primary-dark" />
                  {feature.title}
                </p>
                <p className="mt-1 pl-6 text-[14px] text-ink/55">{feature.description}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
