import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import VideoCard from "@/components/VideoCard";
import { featured } from "@/lib/projects";

export default function FeaturedWork() {
  return (
    <section className="border-t border-ink px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="timecode mb-3 text-rec">00:02 — Selected work</p>
          <h2 className="display text-5xl sm:text-7xl headline-fade">
            Featured
            <br />
            Projects
          </h2>
        </div>
        <Link href="/projects" className="group flex items-center gap-3">
          <span className="timecode">All projects</span>
          <span className="flex size-11 items-center justify-center rounded-full border border-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
            <ArrowUpRight size={17} className="arrow-launch" />
          </span>
        </Link>
      </Reveal>

      {/* Mixed layout: wide film + vertical reel side by side */}
      <div className="grid gap-8 md:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 120}
            className={project.aspect === "16:9" ? "md:col-span-2" : ""}
          >
            <VideoCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
