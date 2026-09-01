"use client";

import { useState } from "react";
import { Container } from "./Container";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";
import { ChevronDownIcon } from "./icons";

const faqs = [
  {
    question: "Do you charge any fee before showing a property?",
    answer:
      "No. Viewings are free you only pay agreed commission once a deal is finalized, and that's discussed upfront with no hidden charges.",
  },
  {
    question: "How do I know a listing is genuine?",
    answer:
      "Every listing on this site is visited and verified by our team before it's published that's what the \"Verified\" badge on each listing means.",
  },
  {
    question: "Can I schedule a viewing over WhatsApp?",
    answer:
      "Yes. Tap \"WhatsApp\" on any listing, or use the sticky button, and we'll arrange a time that works for you.",
  },
  {
    question: "Do you help with registration and paperwork?",
    answer:
      "Yes, we support you end-to-end from viewing and negotiation through registration and transfer paperwork.",
  },
  {
    question: "Which areas of Lahore do you cover?",
    answer:
      "We're most active in Mozang, Temple Road, Bahria Town, and DHA, with listings and contacts across greater Lahore.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <RevealSection id="faq" className="py-20">
      <Container className="max-w-[860px]">
        <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary-dark">
          Frequently Asked
        </p>
        <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,38px)] font-semibold text-ink">
          Questions, answered.
        </h2>

        <div className="mt-8 divide-y divide-ink/[0.14] border-y border-ink/[0.14]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <RevealItem key={faq.question} index={index}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[16px] font-bold text-ink">{faq.question}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-ink/55 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pb-5 pr-8 text-[15px] leading-[1.7] text-ink/72">{faq.answer}</p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </div>
      </Container>
    </RevealSection>
  );
}
