import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const skills = ["Storytelling", "Short-form", "YouTube", "Podcasts", "Brand films"];

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-5 pt-24 pb-16 sm:px-10 lg:px-16 lg:pt-16">
      {/* REC status line */}
      <div
        className="hero-rise mb-8 flex items-center gap-3"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="size-2.5 rounded-full bg-rec animate-blink" />
        <span className="timecode">Rec 00:00:01 — Creator est. 2019</span>
      </div>

      <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        {/* Stacked headline */}
        <h1 className="display text-[clamp(3.4rem,13vw,11rem)]">
          <span
            className="hero-clip block headline-fade"
            style={{ animationDelay: "0.2s" }}
          >
            Watch
          </span>
          <span
            className="hero-clip block outline-text"
            style={{ animationDelay: "0.35s" }}
          >
            My
          </span>
          <span
            className="hero-clip block headline-fade"
            style={{ animationDelay: "0.5s" }}
          >
            Stories
          </span>
        </h1>

        {/* Rotated skill list — reference style */}
        <ul
          className="hero-rise hidden flex-col items-end gap-5 lg:flex"
          style={{ animationDelay: "0.7s" }}
        >
          {skills.map((skill) => (
            <li
              key={skill}
              className="vertical-rl timecode text-smoke transition-colors duration-300 hover:text-rec"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Sub row */}
      <div
        className="hero-rise mt-10 flex flex-wrap items-center justify-between gap-6"
        style={{ animationDelay: "0.85s" }}
      >
        <p className="max-w-xs text-sm leading-relaxed text-smoke sm:max-w-sm">
          I&apos;m Success, a content creator turning everyday moments into
          stories people can&apos;t stop watching. Films, reels &amp;
          conversations.
        </p>

        <Link
          href="/projects"
          className="group flex items-center gap-4"
          aria-label="Explore projects"
        >
          <span className="timecode">Explore the work</span>
          <span className="flex size-14 items-center justify-center rounded-full border border-ink transition-colors duration-300 group-hover:bg-rec group-hover:border-rec group-hover:text-paper">
            <ArrowUpRight size={20} className="arrow-launch" />
          </span>
        </Link>
      </div>

      {/* Mobile skill ticker */}
      <div
        className="hero-rise mt-8 flex flex-wrap gap-x-4 gap-y-2 lg:hidden"
        style={{ animationDelay: "0.95s" }}
      >
        {skills.map((skill) => (
          <span key={skill} className="timecode text-smoke">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
