import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-ink px-5 pt-20 pb-10 text-paper sm:px-10 lg:px-16 lg:pt-28"
    >
      {/* Faint rotated backdrop word */}
      <span
        aria-hidden
        className="display pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 vertical-rl text-[10rem] text-paper/[0.04] lg:block"
      >
        Success
      </span>

      <Reveal>
        <p className="timecode mb-6 flex items-center gap-2 text-paper/60">
          <span className="size-2 rounded-full bg-rec animate-blink" />
          00:04 — Roll credits
        </p>
        <h2 className="display text-[clamp(3.5rem,14vw,11rem)]">
          <span className="block headline-fade-inverse">Let&apos;s</span>
          <span className="block outline-text-paper">Talk</span>
        </h2>
      </Reveal>

      <Reveal delay={150} className="mt-12 flex flex-wrap items-center gap-3">
        <a
          href="mailto:hello@amara.studio"
          className="group flex items-center gap-3 rounded-full bg-rec px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-paper transition-transform duration-300 hover:scale-[1.03]"
        >
          Contact me
          <ArrowUpRight size={16} className="arrow-launch" />
        </a>
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="rounded-full border border-paper/30 px-5 py-3.5 text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-paper hover:text-ink"
          >
            {social.label}
          </a>
        ))}
      </Reveal>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6">
        <p className="timecode text-paper/50">
          © {new Date().getFullYear()} Success. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
