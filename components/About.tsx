import Reveal from "@/components/Reveal";

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
            <p className="timecode mb-4 text-rec">00:01 — Who is Su</p>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">
              I'm a multifaceted Creative 
              Who is filled with much creativity. I've worked in multiple fields giving me experience in them.
              From industrial to agency to Healthcare to the  Government to the Beauty industry and my personal fav the love industry.
              Some I like more than others but I have a desire to make your brand heard,seen and felt.
              I offer services as a girl director, cinematographer and short form content creator and secondly offer services as a passionate, realistic and innovative creator.
              Whichever form you peak interest in I'm equally available to serve.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
