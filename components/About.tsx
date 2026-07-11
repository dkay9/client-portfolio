import Reveal from "@/components/Reveal";

const stats = [
  { value: "25M+", label: "Total views" },
  { value: "320+", label: "Videos published" },
  { value: "7+", label: "Years creating" },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        {/* Rotated section label */}
        <Reveal>
          <h2 className="display text-5xl sm:text-6xl lg:vertical-rl lg:rotate-180 lg:text-7xl headline-fade">
            About
          </h2>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="timecode mb-4 text-rec">00:01 — Who is Success</p>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
              Success is a content creator and storyteller known for turning
              real life into films people share. From documentary-style
              YouTube series to short-form that stops the scroll, every piece
              is built around one thing — a story worth telling.
            </p>
          </Reveal>

          {/* Stat table — bordered cells like the reference */}
          <Reveal delay={200} className="mt-12">
            <dl className="grid border border-ink sm:grid-cols-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-2 p-6 sm:p-8 ${
                    i > 0 ? "border-t border-ink sm:border-t-0 sm:border-l" : ""
                  }`}
                >
                  <dd className="display text-4xl sm:text-5xl">{stat.value}</dd>
                  <dt className="timecode text-smoke">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
