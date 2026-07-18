import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

/** RPG-style character sheet */
const skills = [
  { name: "Videography", score: 8 },
  { name: "Storytelling", score: 10 },
  { name: "Staying calm", score: 7.5, note: "working on it" },
  { name: "Video editing", score: 8.5, note: "there's more I can learn" },
];

const passives = [
  { name: "Learning new skills", note: "very ecstatic too" },
  { name: "Bringing positive vibes ✨", note: "always active" },
  { name: "Working under pressure", note: "battle-tested" },
];

export default function CharacterSkills() {
  return (
    <section className="border-t border-ink px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
      <Reveal className="mb-12">
        <p className="timecode mb-3 text-rec">00:03 — Character sheet</p>
        <h2 className="display text-5xl sm:text-7xl">
          Here are my
          <br />
          <span className="outline-text">Character skills</span>
        </h2>
      </Reveal>

      {/* ---------- Skill meters ---------- */}
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-2">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 100}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display text-2xl sm:text-3xl">{skill.name}</h3>
              <span className="font-mono text-sm tracking-widest">
                {skill.score}
                <span className="text-smoke">/10</span>
              </span>
            </div>
            <div
              className="mt-3 h-2.5 overflow-hidden rounded-full border border-ink/40 bg-ink/10"
              role="meter"
              aria-valuemin={0}
              aria-valuemax={10}
              aria-valuenow={skill.score}
              aria-label={`${skill.name}: ${skill.score} out of 10`}
            >
              <div
                className="skill-fill h-full rounded-full bg-rec"
                style={{ "--w": `${skill.score * 10}%` } as React.CSSProperties}
              />
            </div>
            {skill.note && (
              <p className="timecode mt-2 text-smoke">( {skill.note} )</p>
            )}
          </Reveal>
        ))}
      </div>

      {/* ---------- Passive abilities ---------- */}
      <Reveal delay={200} className="mt-16">
        <p className="timecode mb-5 flex items-center gap-2 text-smoke">
          <Sparkles size={13} className="text-rec" />
          Passive abilities — no meter can hold these
        </p>
        <ul className="flex flex-wrap gap-3">
          {passives.map((passive) => (
            <li
              key={passive.name}
              className="group/pill flex items-center gap-3 rounded-full border border-ink px-5 py-3 transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              <span className="display text-lg sm:text-xl">{passive.name}</span>
              <span className="timecode text-smoke transition-colors duration-300 group-hover/pill:text-paper/70">
                ( {passive.note} )
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
