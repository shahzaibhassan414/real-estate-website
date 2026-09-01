import { Container } from "./Container";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";
import { QuoteIcon, StarIcon } from "./icons";

const testimonials = [
  {
    quote:
      "Chaudhary Estate helped us find our home in DHA within two weeks. Every step was transparent no surprise fees, no runaround.",
    name: "Ahmed R.",
    area: "DHA Phase 5, Lahore",
  },
  {
    quote:
      "Sold our plot in Bahria Town at a fair price. They handled the paperwork end-to-end so we didn't have to chase anyone.",
    name: "Sana K.",
    area: "Bahria Town, Lahore",
  },
  {
    quote:
      "Responsive on WhatsApp at every hour, and they genuinely know the Mozang market. Would recommend to anyone buying in the area.",
    name: "Bilal M.",
    area: "Mozang, Lahore",
  },
];

export function Testimonials() {
  return (
    <RevealSection id="testimonials" className="py-20">
      <Container>
        <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary-dark">
          What Clients Say
        </p>
        <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,38px)] font-semibold text-ink">
          Trusted by families across Lahore.
        </h2>

        <div className="mt-10 grid gap-7 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealItem
              key={testimonial.name}
              index={index}
              className="flex flex-col rounded-[4px] bg-surface p-6"
            >
              <QuoteIcon className="h-6 w-6 text-primary/40" />
              <div className="mt-3 flex gap-1 text-primary-dark">
                {Array.from({ length: 5 }).map((_, star) => (
                  <StarIcon key={star} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-[1.7] text-ink/72">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-ink/[0.1] pt-4">
                <p className="text-[14px] font-bold text-ink">{testimonial.name}</p>
                <p className="text-[13px] text-ink/55">{testimonial.area}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
