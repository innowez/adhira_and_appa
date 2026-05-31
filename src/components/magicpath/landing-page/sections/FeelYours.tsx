"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const SLIDES = ["../bottom-1.jpg", "../bottom-2.jpg", "../bottom-3.jpg"];
const INTERVAL_MS = 3000;
const CROSSFADE_S = 1;

export const FeelYours = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Crossfade: bring next slide above current, fade in, then relayer
  const goToSlide = useCallback((next: number) => {
    const slides = slideRefs.current;
    const current = currentRef.current;
    if (next === current || !slides[next] || !slides[current]) return;

    gsap.set(slides[next], { zIndex: 3, opacity: 0 });
    gsap.to(slides[next], {
      opacity: 1,
      duration: CROSSFADE_S,
      ease: "none",
      onComplete: () => {
        gsap.set(slides[current], { zIndex: 1, opacity: 0 });
        gsap.set(slides[next], { zIndex: 2 });
      },
    });
    currentRef.current = next;
  }, []);

  const advance = useCallback(() => {
    goToSlide((currentRef.current + 1) % SLIDES.length);
  }, [goToSlide]);

  const startSlideshow = useCallback(() => {
    if (timerRef.current) return;
    timerRef.current = setInterval(advance, INTERVAL_MS);
  }, [advance]);

  const stopSlideshow = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Play while section is in view, pause when scrolled away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? startSlideshow() : stopSlideshow();
      },
      { threshold: 0.1 },
    );
    const sec = sectionRef.current;
    if (sec) observer.observe(sec);
    return () => {
      observer.disconnect();
      stopSlideshow();
      slideRefs.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, [startSlideshow, stopSlideshow]);

  const handlePrev = useCallback(() => {
    stopSlideshow();
    goToSlide((currentRef.current - 1 + SLIDES.length) % SLIDES.length);
    startSlideshow();
  }, [goToSlide, startSlideshow, stopSlideshow]);

  const handleNext = useCallback(() => {
    stopSlideshow();
    goToSlide((currentRef.current + 1) % SLIDES.length);
    startSlideshow();
  }, [goToSlide, startSlideshow, stopSlideshow]);

  return (
    <div id="the_vibe">
      {/* ── Static header ─────────────────────────────────────────────── */}
      <div className="relative ">
        <h1 className="z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold font-recoleta text-[26px] lg:text-5xl text-center">
          A place that <br />
          feels like yours
        </h1>
        <div
          className="absolute z-10 w-full h-full"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
            backgroundBlendMode: "normal, hue, normal, normal",
          }}
        />
        <img src="../bottom-1.jpg" className="h-[371px] w-full object-cover" />
      </div>

      {/* ── Crossfade slideshow ────────────────────────────────────────── */}
      <div
        ref={sectionRef}
        className="relative isolate h-[900px] overflow-hidden bg-black"
      >
        {SLIDES.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 2 : 1 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Subtle darkening overlay — above slides, below buttons */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0,0,0,0.2)", zIndex: 4 }}
        />

        {/* Prev arrow — mirrors reference: left: calc(50% - 25%) */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute bottom-10 w-8 h-8 lg:w-[66px] lg:h-[66px] rounded-full bg-white/20 hover:bg-white/40 border border-white/40 flex items-center justify-center cursor-pointer transition-colors"
          style={{ left: "calc(50% - 25%)", zIndex: 10 }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next arrow — mirrors reference: right: calc(50% - 25%) */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute bottom-10 w-8 h-8 lg:w-[66px] lg:h-[66px] rounded-full bg-white/20 hover:bg-white/40 border border-white/40 flex items-center justify-center cursor-pointer transition-colors"
          style={{ right: "calc(50% - 25%)", zIndex: 10 }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
