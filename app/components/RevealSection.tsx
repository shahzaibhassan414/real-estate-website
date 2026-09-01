"use client";

import { createContext, useEffect, useRef, useState } from "react";

export const RevealContext = createContext(false);

export function RevealSection({
  id,
  className = "",
  immediate = false,
  children,
}: {
  id?: string;
  className?: string;
  immediate?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (immediate) {
      const raf = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(raf);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-[0.8s] ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[28px]"
      } ${className}`}
    >
      <RevealContext.Provider value={revealed}>{children}</RevealContext.Provider>
    </section>
  );
}
