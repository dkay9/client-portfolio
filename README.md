# SUCCESS — Content Creator Portfolio

Editorial black-and-white portfolio for a content creator, built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**. The signature is the *record-light* motif: the red accent is the camera REC dot, section labels read like timecodes, and the scroll progress bar is a video scrubber.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding project videos

1. Drop mp4 files into `public/videos/` (e.g. `city-stories.mp4`)
2. Optionally drop a poster/thumbnail into `public/posters/`
3. Register the project in `lib/projects.ts`:

```ts
{
  slug: "my-new-video",
  title: "My New Video",
  category: "Short-form / Reels",
  aspect: "9:16",              // "16:9" renders wide, "9:16" renders tall
  src: "/videos/my-new-video.mp4",
  poster: "/posters/my-new-video.jpg",
  year: "2026",
  duration: "01:12",
}
```

The `/projects` grid automatically lays out 16:9 clips as wide cards and 9:16 clips as tall cards, with filter pills for each format. If a video file is missing, the card shows a "drop the file in" placeholder instead of breaking.

The first 3 entries in `lib/projects.ts` are featured on the home page (change `featured` if you want manual control).

## Customizing

- **Name / copy** — `components/Hero.tsx`, `About.tsx`, `Footer.tsx`, and `app/layout.tsx` metadata
- **Colors** — the `@theme` block in `app/globals.css` (`--color-rec` is the accent)
- **Social links** — `components/Nav.tsx` and `components/Footer.tsx`
- **Character skills** — `components/CharacterSkills.tsx`
- **Brands** — `components/Brands.tsx`; the `brands` array renders placeholder text wordmarks (with a "Placeholder logo" caption) — replace the `mark` values with real brand names, or swap in actual `<img>` logos once you have them

## Behavior notes

- Desktop hover on a video card plays a **muted preview**; click plays with sound
- Mobile: tap to play/pause
- Animations respect `prefers-reduced-motion`
- Nav is a vertical pill rail on desktop, fullscreen overlay menu on mobile
