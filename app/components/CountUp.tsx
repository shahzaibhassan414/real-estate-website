"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { RevealContext } from "./RevealSection";

export function CountUp({ value, duration = 1200 }: { value: number; duration?: number }) {
  const revealed = useContext(RevealContext);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!revealed || started.current) return;
    started.current = true;

    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [revealed, value, duration]);

  return <>{display}</>;
}
