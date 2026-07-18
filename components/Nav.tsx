"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change + lock scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ---------- Desktop: vertical rail (reference style) ---------- */}
      <aside className="fixed left-0 top-0 z-50 hidden h-dvh w-16 flex-col items-center justify-between border-r border-line bg-paper py-6 lg:flex">
        <Link
          href="/"
          className="vertical-rl rotate-180 text-[11px] font-bold tracking-[0.35em] uppercase"
        >
          Su<span className="text-rec">.</span>
        </Link>

        <nav className="flex flex-col items-center gap-3">
          {links.map((link) => {
            const active =
              link.href === pathname ||
              (link.href === "/projects" && pathname.startsWith("/projects"));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`vertical-rl rotate-180 rounded-full border px-2 py-4 text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-line hover:border-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-3">
          <ThemeToggle />
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="rounded-full border border-line p-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <Instagram size={13} strokeWidth={1.8} />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            className="rounded-full border border-line p-2 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <Youtube size={13} strokeWidth={1.8} />
          </a>
        </div>
      </aside>

      {/* ---------- Mobile: top bar ---------- */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-line bg-paper/90 px-5 py-4 backdrop-blur-sm lg:hidden">
        <Link
          href="/"
          className="text-xs font-bold tracking-[0.35em] uppercase"
        >
          Su<span className="text-rec">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle size={16} strokeWidth={2} />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full border border-ink p-2"
          >
            <Menu size={16} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* ---------- Mobile: fullscreen overlay menu ---------- */}
      <div
        className={`fixed inset-0 z-80 bg-ink text-paper transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open
            ? "[clip-path:inset(0_0_0_0)]"
            : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="timecode flex items-center gap-2">
            <span className="size-2 rounded-full bg-rec animate-blink" /> Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-full border border-paper/40 p-2"
          >
            <X size={16} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col px-5">
          {links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-paper/15 py-5"
              style={{
                animation: open
                  ? `slide-right 0.5s ${0.15 + i * 0.08}s cubic-bezier(0.22,1,0.36,1) both`
                  : "none",
              }}
            >
              <span className="display text-4xl">{link.label}</span>
              <ArrowUpRight
                size={22}
                className="arrow-launch text-paper/50 group-hover:text-rec"
              />
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between">
          <span className="timecode text-paper/50">Based in Lagos, NG</span>
          <div className="flex gap-4">
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.6} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <Youtube size={18} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
