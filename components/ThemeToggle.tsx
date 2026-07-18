"use client";

import { useEffect, useState } from "react";
import { Sun, Sunset } from "lucide-react";

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
  const [light, setLight] = useState(false);

  // Sync with whatever the FOUC-prevention script already set on <html>
  useEffect(() => {
    setLight(document.documentElement.getAttribute("data-theme") === "light");
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem(STORAGE_KEY, "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(STORAGE_KEY, "sunset");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={light}
      aria-label={light ? "Switch to sunset theme" : "Switch to light theme"}
      className={`rounded-full border p-2 transition-colors duration-300 ${
        light ? "border-rec bg-rec text-paper" : "border-line hover:border-ink"
      } ${className}`}
    >
      {light ? (
        <Sunset size={size} strokeWidth={strokeWidth} />
      ) : (
        <Sun size={size} strokeWidth={strokeWidth} />
      )}
    </button>
  );
}
