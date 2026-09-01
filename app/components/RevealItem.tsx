"use client";

import { useContext } from "react";
import { RevealContext } from "./RevealSection";

export function RevealItem({
  index = 0,
  className = "",
  children,
}: {
  index?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const revealed = useContext(RevealContext);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: revealed ? `${index * 90}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
