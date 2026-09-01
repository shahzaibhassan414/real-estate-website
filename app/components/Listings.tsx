import { listings } from "@/app/lib/listings";
import { Container } from "./Container";
import { ListingCard } from "./ListingCard";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";

export function Listings() {
  return (
    <RevealSection id="listings" className="py-20">
      <Container>
        <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary-dark">
          Featured Properties
        </p>
        <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,38px)] font-semibold text-ink">
          Handpicked listings, ready to view
        </h2>

        <div className="mt-10 grid gap-7 sm:grid-cols-2">
          {listings.map((listing, index) => (
            <RevealItem key={listing.id} index={index}>
              <ListingCard listing={listing} />
            </RevealItem>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
