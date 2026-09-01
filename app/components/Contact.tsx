import { mapEmbedSrc, officeAddress, phoneDisplay, telLink, waLink } from "@/app/lib/config";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";
import { RevealSection } from "./RevealSection";
import { PinIcon } from "./icons";

export function Contact() {
  return (
    <RevealSection id="contact" className="bg-ink py-20 text-bg">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-gold">
              Get in touch
            </p>
            <h2 className="mt-3 font-serif text-[clamp(26px,3.2vw,34px)] font-semibold text-bg">
              Let&apos;s find your property.
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-bg/55">Office</p>
                <p className="mt-1 flex items-start gap-1.5 text-[15px] text-bg/85">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {officeAddress}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-bg/55">Phone</p>
                <a href={telLink} className="mt-1 block text-[15px] text-bg/85 hover:text-bg">
                  {phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-bg/55">WhatsApp</p>
                <a
                  href={waLink("Hi, I'd like to know more about your listings.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[15px] text-bg/85 hover:text-bg"
                >
                  {phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-16 overflow-hidden rounded-[4px] border border-bg/15">
          <iframe
            src={mapEmbedSrc}
            title="Chaudhary Estate office location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full grayscale-[15%] sepia-[8%]"
          />
        </div>

        <div className="mt-12 border-t border-bg/15 pt-8 text-center text-[13px] text-bg/55">
          © {new Date().getFullYear()} Chaudhary Estate, Lahore. All rights reserved.
        </div>
      </Container>
    </RevealSection>
  );
}
