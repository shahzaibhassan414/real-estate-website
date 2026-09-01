import { telLink, waLink } from "@/app/lib/config";
import type { Listing } from "@/app/lib/listings";
import { ImageSlot } from "./ImageSlot";
import { AreaIcon, BathIcon, BedIcon, CheckBadgeIcon, PinIcon } from "./icons";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group overflow-hidden rounded-[4px] transition-[transform,box-shadow] duration-[0.35s] ease hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_rgba(33,24,21,0.35)]">
      <div className="relative">
        <ImageSlot ratio="aspect-[16/10]" label="Property Photo" />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-[2px] bg-primary px-2 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-white">
          For Sale
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-[2px] bg-bg/90 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-ink/70 backdrop-blur-[2px]">
          <CheckBadgeIcon className="h-3 w-3 text-primary-dark" />
          Verified
        </span>
      </div>

      <div className="bg-surface p-5">
        <p className="font-serif text-[22px] font-semibold text-primary-dark">{listing.price}</p>
        <p className="mt-1 text-[16px] font-bold text-ink">{listing.title}</p>
        <p className="mt-1 flex items-center gap-1 text-[13px] text-ink/55">
          <PinIcon className="h-3.5 w-3.5 shrink-0 text-ink/40" />
          {listing.location}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-ink/[0.1] pt-4 text-[13px] font-semibold text-ink/72">
          <span className="flex items-center gap-1.5">
            <BedIcon className="h-4 w-4 text-primary-dark" />
            {listing.beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <BathIcon className="h-4 w-4 text-primary-dark" />
            {listing.baths} Bath
          </span>
          <span className="flex items-center gap-1.5">
            <AreaIcon className="h-4 w-4 text-primary-dark" />
            {listing.size}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <a
            href={telLink}
            className="rounded-[3px] border border-ink px-4 py-[10px] text-center text-[14px] font-semibold text-ink transition hover:bg-ink hover:text-bg active:scale-[0.97]"
          >
            Call
          </a>
          <a
            href={waLink(
              `Hi, I'm interested in the ${listing.title} (${listing.location}) listed at ${listing.price}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] bg-primary px-4 py-[10px] text-center text-[14px] font-semibold text-white transition hover:bg-primary-dark active:scale-[0.97]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
