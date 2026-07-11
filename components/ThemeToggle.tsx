"use client";

import { useEffect, useState } from "react";
import { Sun } from "lucide-react";

const STORAGE_KEY = "theme";

interface ThemeToggleProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function ThemeToggle({
  className = "",
  size = 13,
  strokeWidth = 1.8,
}: ThemeToggleProps) {
  const [sunset, setSunset] = useState(false);

  // Sync with whatever the FOUC-prevention script already set on <html>
  useEffect(() => {
    setSunset(document.documentElement.getAttribute("data-theme") === "sunset");
  }, []);

  const toggle = () => {
    const next = !sunset;
    setSunset(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "sunset");
      localStorage.setItem(STORAGE_KEY, "sunset");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(STORAGE_KEY, "editorial");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={sunset}
      aria-label={sunset ? "Switch to editorial theme" : "Switch to sunset theme"}
      className={`rounded-full border p-2 transition-colors duration-300 ${
        sunset ? "border-rec bg-rec text-paper" : "border-line hover:border-ink"
      } ${className}`}
    >
      <Sun size={size} strokeWidth={strokeWidth} />
    </button>
  );
}
