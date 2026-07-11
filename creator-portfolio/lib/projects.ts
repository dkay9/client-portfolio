export type Aspect = "16:9" | "9:16";

export interface Project {
  slug: string;
  title: string;
  category: string;
  aspect: Aspect;
  /** Path to the mp4 inside /public — e.g. "/videos/my-video.mp4" */
  src: string;
  /** Optional poster image shown before playback */
  poster?: string;
  year: string;
  duration: string;
}

/**
 * HOW TO ADD PROJECTS
 * -------------------
 * 1. Drop the mp4 into  public/videos/
 * 2. (Optional) drop a poster image into  public/posters/
 * 3. Add an entry below. aspect "16:9" renders wide, "9:16" renders tall.
 */
export const projects: Project[] = [
  {
    slug: "city-stories",
    title: "City Stories",
    category: "Documentary series",
    aspect: "16:9",
    src: "/videos/city-stories.mp4",
    poster: "/posters/city-stories.svg",
    year: "2026",
    duration: "12:40",
  },
  {
    slug: "morning-routine",
    title: "Morning Routine",
    category: "Short-form / Reels",
    aspect: "9:16",
    src: "/videos/morning-routine.mp4",
    poster: "/posters/morning-routine.svg",
    year: "2026",
    duration: "00:58",
  },
  {
    slug: "brand-launch",
    title: "Brand Launch Film",
    category: "Commercial",
    aspect: "16:9",
    src: "/videos/brand-launch.mp4",
    poster: "/posters/brand-launch.svg",
    year: "2025",
    duration: "02:15",
  },
  {
    slug: "street-food",
    title: "Street Food Diaries",
    category: "Short-form / TikTok",
    aspect: "9:16",
    src: "/videos/street-food.mp4",
    poster: "/posters/street-food.svg",
    year: "2025",
    duration: "01:30",
  },
  {
    slug: "creator-talk",
    title: "The Creator Talk",
    category: "Podcast / Long-form",
    aspect: "16:9",
    src: "/videos/creator-talk.mp4",
    poster: "/posters/creator-talk.svg",
    year: "2025",
    duration: "45:02",
  },
  {
    slug: "fashion-week",
    title: "Fashion Week BTS",
    category: "Short-form / Reels",
    aspect: "9:16",
    src: "/videos/fashion-week.mp4",
    poster: "/posters/fashion-week.svg",
    year: "2024",
    duration: "00:45",
  },
];

/** Projects highlighted on the home page */
export const featured = projects.slice(0, 3);
