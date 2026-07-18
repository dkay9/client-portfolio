import Reveal from "@/components/Reveal";

// Placeholder marks — replace these files in public/brands/ with real
// brand logos (same filenames, or update the src paths below).
const brands = [
  { name: "Aurora", src: "/brands/aurora.svg" },
  { name: "Nova Co", src: "/brands/nova-co.svg" },
  { name: "Lumen", src: "/brands/lumen.svg" },
  { name: "Atlasworks", src: "/brands/atlasworks.svg" },
  { name: "Pixelbay", src: "/brands/pixelbay.svg" },
  { name: "Orbit", src: "/brands/orbit.svg" },
];

export default function Brands() {
  const strip = [...brands, ...brands];

  return (
    <section className="border-t border-ink px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
      <Reveal className="mb-12">
        <p className="timecode mb-3 text-rec">00:04 — Guest appearances</p>
        <h2 className="display text-5xl sm:text-7xl">
          Brands I&apos;ve 
          <br />
          <span className="outline-text">worked with</span>
        </h2>
      </Reveal>

      <div className="overflow-hidden border-y border-line py-8">
        <div className="flex w-max animate-marquee-slow items-center gap-16">
          {strip.map((brand, i) => (
            <img
              key={`${brand.name}-${i}`}
              src={brand.src}
              alt={brand.name}
              className="h-10 w-auto shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
