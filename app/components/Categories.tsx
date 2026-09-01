import { Container } from "./Container";
import { ImageSlot } from "./ImageSlot";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";
import { BuildingIcon, HouseIcon, LandIcon } from "./icons";

const categories = [
  { title: "Plots", subtitle: "Residential & investment land", icon: LandIcon },
  { title: "Homes", subtitle: "Houses & independent units", icon: HouseIcon },
  { title: "Commercial", subtitle: "Shops, offices & plazas", icon: BuildingIcon },
];

export function Categories() {
  return (
    <RevealSection id="categories" className="py-20">
      <Container>
        <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary-dark">
          Browse by Category
        </p>
        <h2 className="mt-3 font-serif text-[clamp(28px,3.4vw,38px)] font-semibold text-ink">
          What are you looking for?
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {categories.map((category, index) => (
            <RevealItem key={category.title} index={index}>
              <a
                href="#listings"
                className="group relative block overflow-hidden rounded-[4px] transition-transform duration-[0.3s] ease hover:-translate-y-1.5"
              >
                <ImageSlot ratio="aspect-[4/3]" icon={category.icon} showLabel={false} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent transition-colors duration-300 group-hover:from-ink/90" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-serif text-[24px] font-semibold text-bg">{category.title}</p>
                  <p className="text-[13px] text-bg/85">{category.subtitle}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
