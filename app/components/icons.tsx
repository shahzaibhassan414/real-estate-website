function iconProps(className: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

export function HouseIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function LandIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="3" y="3" width="18" height="18" rx="1" strokeDasharray="3 3" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}

export function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}

export function PersonIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  );
}

export function BedIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 19v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 19h18M3 14h18" />
      <path d="M7 10V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
    </svg>
  );
}

export function BathIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 12h16" />
      <path d="M4 12v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4" />
      <path d="M6 12V6a2 2 0 0 1 2-2" />
      <path d="M6 19v2M18 19v2" />
    </svg>
  );
}

export function AreaIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 8V3h5" />
      <path d="M16 3h5v5" />
      <path d="M21 16v5h-5" />
      <path d="M8 21H3v-5" />
    </svg>
  );
}

export function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CheckBadgeIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.28 6.85.68-5.16 4.7 1.5 6.84L12 17.77l-6.09 3.23 1.5-6.84-5.16-4.7 6.85-.68z" />
    </svg>
  );
}

export function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 11c0-3.87 2.36-6.5 6-7l.6 1.9C7.2 6.5 6 8 6 10h3v7H3v-6Zm11 0c0-3.87 2.36-6.5 6-7l.6 1.9c-2.4.6-3.6 2.1-3.6 4.1h3v7h-6v-6Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
