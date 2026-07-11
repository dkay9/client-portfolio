"use client";

import { useState } from "react";
import { RectangleHorizontal, RectangleVertical, LayoutGrid } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import Reveal from "@/components/Reveal";
import { projects, type Aspect } from "@/lib/projects";

type Filter = "all" | Aspect;

const filters: { value: Filter; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: <LayoutGrid size={14} /> },
  { value: "16:9", label: "Wide 16:9", icon: <RectangleHorizontal size={14} /> },
  { value: "9:16", label: "Vertical 9:16", icon: <RectangleVertical size={14} /> },
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.aspect === filter);

  return (
    <section className="px-5 pb-24 sm:px-10 lg:px-16">
      {/* Filter pills */}
      <div
        role="tablist"
        aria-label="Filter projects by format"
        className="mb-10 flex flex-wrap gap-3 border-t border-ink pt-8"
      >
        {filters.map((item) => {
          const active = filter === item.value;
          return (
            <button
              key={item.value}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.value)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-300 ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-line hover:border-ink"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
        <span className="ml-auto hidden self-center timecode text-smoke sm:block">
          {visible.length} {visible.length === 1 ? "clip" : "clips"}
        </span>
      </div>

      {/*
        Mixed-aspect grid:
        - 16:9 cards span 2 columns (wide)
        - 9:16 cards span 1 column (tall)
        - dense flow fills the gaps
      */}
      <div
        key={filter}
        className="grid grid-flow-dense grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 3) * 100}
            className={
              project.aspect === "16:9"
                ? "sm:col-span-2"
                : "sm:col-span-1 sm:row-span-2"
            }
          >
            <VideoCard project={project} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-20 text-center timecode text-smoke">
          No clips in this format yet — add one in lib/projects.ts
        </p>
      )}
    </section>
  );
}
