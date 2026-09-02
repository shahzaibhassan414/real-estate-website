import { waLink, yearsActive } from "@/app/lib/config";
import { Container } from "./Container";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <RevealSection
      id="hero"
      immediate
      className="relative flex min-h-[100svh] items-center"
    >
      <Container className="w-full min-w-0 py-16">
        <div className="max-w-[640px]">
          <RevealItem index={0}>
            <h1 className="text-shadow-lg text-shadow-black/70 font-serif text-[clamp(38px,5.2vw,62px)] font-semibold leading-[1.08] text-bg">
              Find your next address in the heart of Lahore.
            </h1>
          </RevealItem>

          <RevealItem index={1} className="mt-6">
            <p className="text-shadow-sm text-shadow-black/70 max-w-[46ch] text-[17px] leading-[1.7] text-bg/90">
              Chaudhary Estate connects families and investors with verified plots,
              homes, and commercial properties across Lahore with honest advice
              at every step.
            </p>
          </RevealItem>

          <RevealItem index={2} className="mt-8 flex flex-wrap items-center gap-4">
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
              className="flex items-center gap-2 rounded-[3px] border border-bg px-6 py-3 text-[15px] font-semibold text-bg transition hover:bg-bg hover:text-ink active:scale-[0.97]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </RevealItem>
        </div>

        <RevealItem
          index={3}
          className="animate-float mt-12 inline-flex rounded-[4px] bg-surface px-5 py-4 shadow-[0_10px_24px_-8px_rgba(33,24,21,0.4)] sm:absolute sm:right-[clamp(20px,5vw,64px)] sm:bottom-10 sm:mt-0"
        >
          <div>
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
