"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

const Image_1 = "./052A6611.jpg";
const Image_2 = "./052A6367.jpg";
const Image_3 = "./052A6345.jpg";

const SLIDES = [Image_3, Image_2, Image_1];

const SLIDE_POSITIONS = [
  "center 25%",
  "center 25%",
  "center 30%",
];

const INTERVAL_MS = 3000;
const CROSSFADE_S = 1;

const AmasiterImage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimatingRef = useRef(false);

  const goToSlide = useCallback((next: number) => {
    const slides = slideRefs.current;
    const current = currentRef.current;
    if (next === current || !slides[next] || !slides[current] || isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    // Kill in-progress tweens on both slides before starting new ones
    gsap.killTweensOf(slides[next]);
    gsap.killTweensOf(slides[current]);

    gsap.set(slides[next], { zIndex: 3, opacity: 0 });
    gsap.to(slides[next], {
      opacity: 1,
      duration: CROSSFADE_S,
      ease: "none",
      onComplete: () => {
        gsap.set(slides[current], { zIndex: 1, opacity: 0 });
        gsap.set(slides[next], { zIndex: 2 });
        isAnimatingRef.current = false;
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
    <div
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-black"
    >
      {SLIDES.map((src, i) => (
        <div
          key={src}
          ref={(el) => { slideRefs.current[i] = el; }}
          className="absolute inset-0"
          style={{
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 2 : 1,
            willChange: "opacity",
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: SLIDE_POSITIONS[i] }}
          />
        </div>
      ))}

      {/* Darkening overlay — above slides, below buttons */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.2)", zIndex: 4 }}
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-5 lg:gap-14 z-20">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="w-8 h-8 lg:w-[66px] lg:h-[66px] rounded-full bg-white/20 hover:bg-white/40 border border-white/40 flex items-center justify-center cursor-pointer transition-colors"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="w-8 h-8 lg:w-[66px] lg:h-[66px] rounded-full bg-white/20 hover:bg-white/40 border border-white/40 flex items-center justify-center cursor-pointer transition-colors"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AmasiterImage;
