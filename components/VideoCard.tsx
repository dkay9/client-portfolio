"use client";

import { useRef, useState } from "react";
import { Play, Pause, Film } from "lucide-react";
import type { Project } from "@/lib/projects";

interface VideoCardProps {
  project: Project;
}

export default function VideoCard({ project }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video || missing) return;
    if (video.paused) {
      video.muted = false;
      video.play().catch(() => setMissing(true));
    } else {
      video.pause();
    }
  };

  /** Silent muted preview while hovering (desktop only) */
  const preview = (start: boolean) => {
    const video = videoRef.current;
    if (!video || missing || playing) return;
    if (start) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  const wide = project.aspect === "16:9";

  return (
    <figure className="group">
      <button
        onClick={toggle}
        onMouseEnter={() => preview(true)}
        onMouseLeave={() => preview(false)}
        aria-label={playing ? `Pause ${project.title}` : `Play ${project.title}`}
        className={`relative block w-full overflow-hidden rounded-2xl border border-ink bg-ink text-left ${
          wide ? "aspect-video" : "aspect-9/16"
        }`}
      >
        {missing ? (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink text-paper/60">
            <Film size={28} strokeWidth={1.2} />
            <span className="timecode px-4 text-center">
              Drop {project.src.replace("/videos/", "")} into /public/videos
            </span>
          </span>
        ) : (
          <video
            ref={videoRef}
            src={project.src}
            poster={project.poster}
            preload="metadata"
            playsInline
            loop
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setMissing(true)}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        )}

        {/* Top strip: format + REC while playing */}
        <span className="absolute top-3 left-3 rounded-full bg-paper/90 px-3 py-1 timecode text-ink">
          {project.aspect}
        </span>
        {playing && (
          <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1 timecode text-paper backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-rec animate-blink" />
            Rec
          </span>
        )}

        {/* Center play control */}
        {!missing && (
          <span
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-rec group-hover:text-paper">
              {playing ? (
                <Pause size={22} fill="currentColor" strokeWidth={0} />
              ) : (
                <Play size={22} fill="currentColor" strokeWidth={0} className="ml-0.5" />
              )}
            </span>
          </span>
        )}

        {/* Bottom duration */}
        <span className="absolute bottom-3 right-3 rounded bg-ink/70 px-2 py-1 timecode text-paper backdrop-blur-sm">
          {project.duration}
        </span>
      </button>

      <figcaption className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="display text-xl sm:text-2xl">{project.title}</h3>
          <p className="timecode mt-1 text-smoke">{project.category}</p>
        </div>
        <span className="timecode mt-1 shrink-0 text-smoke">{project.year}</span>
      </figcaption>
    </figure>
  );
}
