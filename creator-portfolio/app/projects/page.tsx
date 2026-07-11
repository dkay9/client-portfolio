import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects — AMARA",
  description: "All films, reels and episodes by Amara.",
};

export default function ProjectsPage() {
  return (
    <main className="lg:pl-16">
      <section className="px-5 pt-28 pb-10 sm:px-10 lg:px-16 lg:pt-24">
        <Reveal>
          <p className="timecode mb-4 flex items-center gap-2 text-rec">
            <span className="size-2 rounded-full bg-rec animate-blink" />
            Now playing — Full archive
          </p>
          <h1 className="display text-[clamp(3.2rem,11vw,9rem)]">
            <span className="headline-fade">All</span>{" "}
            <span className="outline-text">Projects</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-smoke">
            Every format tells differently. Wide films for the big stories,
            vertical cuts for the fast ones — filter by frame below.
          </p>
        </Reveal>
      </section>

      <ProjectsGrid />
      <Footer />
    </main>
  );
}
