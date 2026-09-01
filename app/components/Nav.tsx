"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/app/lib/config";
import { Container } from "./Container";
import { WhatsAppIcon } from "./WhatsAppIcon";

const navLinkClass =
  "relative text-[14px] font-semibold text-ink/72 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-ink/[0.14] bg-bg/80 backdrop-blur-[8px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_24px_-16px_rgba(33,24,21,0.35)]" : ""
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-[22px] font-semibold text-ink">
            Chaudhary Estate
          </span>
          <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/55">
            Lahore
          </span>
        </a>

        <nav className="flex items-center gap-6 sm:gap-8">
          <a href="#listings" className={navLinkClass}>
            Listings
          </a>
          <a href="#categories" className={`hidden sm:inline ${navLinkClass}`}>
            Categories
          </a>
          <a href="#about" className={navLinkClass}>
            About
          </a>
          <a
            href={waLink("Hi, I'd like to know more about your listings.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-[3px] bg-primary px-4 py-[9px] text-[13px] font-semibold text-white transition hover:bg-primary-dark active:scale-[0.97]"
          >
            <WhatsAppIcon className="h-[14px] w-[14px]" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
