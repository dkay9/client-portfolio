const words = [
  "Storyteller",
  "Filmmaker",
  "Creator",
  "Reels",
  "YouTube",
  "Podcasts",
  "Brand films",
];

export default function Marquee() {
  const strip = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-ink bg-rec py-3 text-paper">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {strip.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="display text-xl sm:text-2xl">{word}</span>
            <span className="size-2 rounded-full bg-paper" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
