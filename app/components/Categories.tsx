import Image from "next/image";
import { Container } from "./Container";
import { RevealItem } from "./RevealItem";
import { RevealSection } from "./RevealSection";

const categories = [
  { title: "Plots", subtitle: "Residential & investment land", image: "/plots.webp" },
  { title: "Homes", subtitle: "Houses & independent units", image: "/homes.webp" },
  { title: "Commercial", subtitle: "Shops, offices & plazas", image: "/commercial.webp" },
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover brightness-90 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
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
