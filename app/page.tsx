import { officeAddress, phoneDisplay, siteUrl, whatsappNumber } from "./lib/config";
import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Categories } from "./components/Categories";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Listings } from "./components/Listings";
import { Nav } from "./components/Nav";
import { StatsBar } from "./components/StatsBar";
import { Testimonials } from "./components/Testimonials";
import { WhatsAppButton } from "./components/WhatsAppButton";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Chaudhary Estate",
  image: `${siteUrl}/opengraph-image`,
  telephone: phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: officeAddress,
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  areaServed: "Lahore, Pakistan",
  sameAs: [`https://wa.me/${whatsappNumber}`],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Listings />
        <Categories />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
