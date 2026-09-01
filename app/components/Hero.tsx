import { waLink, yearsActive } from "@/app/lib/config";
import { Container } from "./Container";
import { ImageSlot } from "./ImageSlot";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <RevealSection immediate className="pb-16 pt-[clamp(48px,10vw,96px)]">
      <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <RevealItem index={0}>
            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary-dark">
              Trusted Property Dealers · Lahore
            </p>
          </RevealItem>

          <RevealItem index={1} className="mt-4">
            <h1 className="font-serif text-[clamp(38px,5.2vw,62px)] font-semibold leading-[1.08] text-ink">
              Find your next address in the heart of Lahore.
            </h1>
          </RevealItem>

          <RevealItem index={2} className="mt-6">
            <p className="max-w-[46ch] text-[17px] leading-[1.7] text-ink/72">
              Chaudhary Estate connects families and investors with verified plots,
              homes, and commercial properties across Lahore — with honest advice
              at every step.
            </p>
          </RevealItem>

          <RevealItem index={3} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#listings"
              className="rounded-[3px] bg-primary px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-primary-dark active:scale-[0.97]"
            >
              View Listings →
            </a>
            <a
              href={waLink("Hi, I'd like to know more about your listings.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-[3px] border border-ink px-6 py-3 text-[15px] font-semibold text-ink transition hover:bg-ink hover:text-bg active:scale-[0.97]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </RevealItem>
        </div>

        <RevealItem index={4} className="relative">
          <ImageSlot
            ratio="aspect-[4/5]"
            label="Hero Photo"
            className="rounded-[4px] shadow-[0_24px_60px_-20px_rgba(33,24,21,0.45)]"
          />
          <div className="animate-float absolute -bottom-6 -left-6 rounded-[4px] bg-surface px-5 py-4 shadow-[0_10px_24px_-8px_rgba(33,24,21,0.4)]">
            <p className="font-serif text-[20px] font-semibold text-ink">
              {yearsActive}+ Years
            </p>
            <p className="text-[11px] text-ink/55">Serving Lahore families</p>
          </div>
        </RevealItem>
      </Container>
    </RevealSection>
  );
}
