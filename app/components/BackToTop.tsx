"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-bg text-ink shadow-[0_10px_24px_-10px_rgba(33,24,21,0.4)] transition-all duration-300 hover:-translate-y-0.5 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  );
}
