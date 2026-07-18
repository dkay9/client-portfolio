"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const skills = ["Storytelling", "Short-form", "YouTube", "Podcasts", "Brand films"];

type Line = { text: string; className: string };

const phrases: Line[][] = [
  [{ text: "Konichiwa", className: "headline-fade" }],
  [
    { text: "My name is", className: "outline-text" },
    { text: "Success Chris", className: "outline-text" },
  ],
  [
    { text: "But you can", className: "headline-fade" },
    { text: "call me", className: "outline-text" },
    { text: "Su.", className: "headline-fade" },
  ],
];

const HOLD_MS = 2200;
const FADE_MS = 500;

function HeadlineCycler() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIndex(phrases.length - 1);
      setVisible(true);
      return;
    }

    const delay = visible ? HOLD_MS : FADE_MS;
    const id = setTimeout(() => {
      if (visible) {
        setVisible(false);
      } else {
        if (startedRef.current) {
          setIndex((i) => (i + 1) % phrases.length);
        }
        startedRef.current = true;
        setVisible(true);
      }
    }, delay);

    return () => clearTimeout(id);
  }, [visible, index, reducedMotion]);

  return (
    <div className="display grid text-[clamp(3rem,12vw,10rem)]" aria-hidden="true">
      {phrases.map((lines, i) => (
        <div
          key={i}
          className={`col-start-1 row-start-1 transition-all duration-500 ease-out ${
            i === index && visible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          {lines.map((line, li) => (
            <span key={li} className={`block ${line.className}`}>
              {line.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-5 pt-24 pb-16 sm:px-10 lg:px-16 lg:pt-16">
      {/* REC status line */}
      <div
        className="hero-rise mb-8 flex items-center gap-3"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="size-2.5 rounded-full bg-rec animate-blink" />
        <span className="timecode">Rec 00:00:01 — The lore begins</span>
      </div>

      <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        {/* Looping headline */}
        <div>
          <h1 className="sr-only">
            Konichiwa. My name is Success Chris, but you can call me Su.
          </h1>
          <HeadlineCycler />
        </div>

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
          If you&apos;re reading this, it&apos;s probably because there&apos;s
          a possible future where we work together. In order for you to work
          with me, you have to know my lore. So let&apos;s dive in.
        </p>

        <Link
          href="/#about"
          className="group flex items-center gap-4"
          aria-label="Dive into the lore"
        >
          <span className="timecode">Dive into the lore</span>
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
