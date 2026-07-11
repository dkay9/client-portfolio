"use client";

import { useEffect, useState } from "react";

/**
 * Scrubber-style scroll progress bar — like the timeline
 * of a video player. The playhead is the REC dot.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const total =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? window.scrollY / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] bg-line/60"
    >
      <div
        className="h-full origin-left bg-rec transition-transform duration-75 ease-linear"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div
        className="playhead-glow absolute top-1/2 size-[9px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-rec"
        style={{ left: `${progress * 100}%` }}
      />
    </div>
  );
}
