"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/app/lib/config";
import { Container } from "./Container";
import { CloseIcon, MenuIcon } from "./icons";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { href: "#listings", label: "Listings" },
  { href: "#categories", label: "Categories" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setScrolled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  const navLinkClass = `relative text-[14px] font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
    solid
      ? "text-ink/72 after:bg-ink hover:text-ink"
      : "text-bg/85 after:bg-bg hover:text-bg"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? "border-ink/[0.14] bg-bg/80 shadow-[0_8px_24px_-16px_rgba(33,24,21,0.35)] backdrop-blur-[8px]"
          : "border-transparent bg-gradient-to-b from-ink/85 via-ink/60 to-ink/20"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex flex-col leading-none">
          <span
            className={`font-serif text-[22px] font-semibold transition-colors duration-300 ${
              solid ? "text-ink" : "text-bg"
            }`}
          >
            Chaudhary Estate
          </span>
          <span
            className={`mt-1 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
              solid ? "text-ink/55" : "text-bg/70"
            }`}
          >
            Lahore
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
          <a
            href={waLink("Hi, I'd like to know more about your listings.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-[3px] bg-primary px-4 py-[9px] text-[13px] font-semibold text-white transition hover:bg-primary-dark active:scale-[0.97]"
          >
            <WhatsAppIcon className="h-[14px] w-[14px]" />
            WhatsApp Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className={`flex h-10 w-10 items-center justify-center rounded-[3px] transition-colors duration-300 md:hidden ${
            solid ? "text-ink" : "text-bg"
          }`}
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 border-t border-ink/[0.1] bg-bg py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-[15px] font-semibold text-ink/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink("Hi, I'd like to know more about your listings.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-[3px] bg-primary px-4 py-3 text-[14px] font-semibold text-white transition active:scale-[0.97]"
            >
              <WhatsAppIcon className="h-[14px] w-[14px]" />
              WhatsApp Us
            </a>
          </Container>
        </div>
      </div>
    </header>
  );
}
