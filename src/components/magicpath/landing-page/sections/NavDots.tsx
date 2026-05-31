"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const SECTIONS = [
  { title: "Welcome",                id: "welcome" },
  { title: "Our Story",              id: "our_story" },
  { title: "Story Behind Every Cup", id: "story_behind_every_cup" },
  { title: "Story Beans",            id: "story_beans" },
  { title: "The Blend",              id: "the_blend" },
  { title: "The Vibe",               id: "the_vibe" },
  { title: "Testimonials",           id: "testimonials" },
  { title: "Press and Media",        id: "press_and_media" },
  { title: "Our Stores",             id: "our_stores" },
  { title: "Franchise Bridge CTA",   id: "franchise_bridge_CTA" },
  { title: "Footer",                 id: "footer" },
];

const TOTAL  = SECTIONS.length; // 11
const CENTER = Math.floor(TOTAL / 2); // 5 — always the center position

// Returns 11 items in circular order so activeIndex lands at CENTER
function getCircularOrder(activeIndex: number) {
  return Array.from({ length: TOTAL }, (_, pos) => {
    const i = ((activeIndex - CENTER + pos) % TOTAL + TOTAL) % TOTAL;
    return { ...SECTIONS[i], sectionIndex: i };
  });
}

// Drum-wheel: size and opacity fade away from center
const DOT_SIZES     = [15, 11,   9,   7,   5,   5];
const DOT_OPACITIES = [ 1, 0.8, 0.6, 0.4, 0.25, 0.15];

function dotStyle(dist: number) {
  const d = Math.min(dist, DOT_SIZES.length - 1);
  return { size: DOT_SIZES[d], opacity: DOT_OPACITIES[d] };
}

function NavDotItem({
  section,
  isActive,
  dist,
  onClick,
}: {
  section: { title: string; id: string };
  isActive: boolean;
  dist: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const { size, opacity } = dotStyle(dist);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // `relative` so the absolutely-positioned label is relative to this button
      className="relative flex items-center justify-end bg-transparent border-none cursor-pointer py-[3px]"
      style={{ opacity }}
    >
      {/* Label: only mounted when hovered → no layout width, no pointer-event capture */}
      {hovered && (
        <span className="absolute right-full mr-3 text-white text-[14px] font-outfit pointer-events-none whitespace-nowrap">
          {section.title}
        </span>
      )}

      {/* Dot */}
      <div className="w-[23px] h-[23px] flex items-center justify-center shrink-0">
        <div
          className="rounded-full border border-white transition-all duration-300"
          style={{
            width:  size,
            height: size,
            backgroundColor: isActive ? "#FFFFFF" : "transparent",
          }}
        />
      </div>
    </button>
  );
}

export function NavDots() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Inner wrapper ref — GSAP animates this so it doesn't conflict with
  // the nav's Tailwind -translate-y-1/2 transform
  const listRef     = useRef<HTMLDivElement>(null);
  const prevActiveRef = useRef<number>(-1);

  // Sync active dot with scroll position
  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      SECTIONS.forEach(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const dist = Math.abs(el.offsetTop + el.offsetHeight / 2 - mid);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setActiveIndex(best);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Drum-wheel slide animation when active section changes
  useEffect(() => {
    const prev = prevActiveRef.current;
    prevActiveRef.current = activeIndex;

    // Skip on first mount and when value hasn't changed
    if (prev === -1 || prev === activeIndex || !listRef.current) return;

    // Determine circular direction: forward = scrolling down, backward = scrolling up
    const rawDiff = (activeIndex - prev + TOTAL) % TOTAL;
    const isForward = rawDiff <= Math.floor(TOTAL / 2);

    // Slot height ≈ dot container (23px) + top/bottom padding (6px) + gap (4px)
    const SLOT_H = 33;

    // After React has already rendered the new circular order, animate the list
    // sliding in from the appropriate direction to create the drum-wheel illusion
    gsap.fromTo(
      listRef.current,
      { y: isForward ? SLOT_H : -SLOT_H },
      { y: 0, duration: 0.35, ease: "power2.out", overwrite: true },
    );
  }, [activeIndex]);

  const items = getCircularOrder(activeIndex);

  return (
    // Desktop only; outer nav holds the fixed centering transform
    <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div ref={listRef} className="flex flex-col gap-1">
        {items.map((item, pos) => (
          <NavDotItem
            key={pos}
            section={item}
            isActive={pos === CENTER}
            dist={Math.abs(pos - CENTER)}
            onClick={() => {
              setActiveIndex(item.sectionIndex);
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </nav>
  );
}
