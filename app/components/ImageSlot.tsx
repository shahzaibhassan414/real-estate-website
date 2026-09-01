import type { ComponentType } from "react";
import { HouseIcon } from "./icons";

export function ImageSlot({
  ratio,
  label = "Photo",
  showLabel = true,
  icon: Icon = HouseIcon,
  className = "",
}: {
  ratio: string;
  label?: string;
  showLabel?: boolean;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-surface/60 transition-transform duration-500 ease-out group-hover:scale-110">
        <Icon className="h-[28%] w-[28%] text-ink/15" />
      </div>
      {showLabel && (
        <span className="absolute bottom-2 left-2 rounded-[2px] bg-ink/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-ink/50 backdrop-blur-[2px]">
          {label}
        </span>
      )}
    </div>
  );
}
