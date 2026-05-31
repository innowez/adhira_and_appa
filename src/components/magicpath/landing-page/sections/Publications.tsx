"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LOGOS = [
  { src: "../publish-1.png" },
  { src: "../publish-2.png" },
  { src: "../publish-3.png" },
  { src: "../publish-4.png" },
  { src: "../publish-5.png" },
];

export function Publications() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const distance = track.scrollWidth / 2;

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: -distance,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % distance),
        },
      });
    },
    { scope: wrapperRef },
  );

  const items = [...LOGOS, ...LOGOS];

  return (
    <section
      id="press_and_media"
      className="py-16 sm:py-20 lg:py-[120px] px-5 sm:px-8 lg:px-20 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-0 mb-16 sm:mb-20 lg:mb-[226px]">
        <h1 className="font-semibold font-recoleta text-3xl sm:text-4xl md:text-5xl leading-tight">
          Our coffee has
          <br />
          got everybody talking
        </h1>

        <p className="font-outfit text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed lg:text-right">
          Featured in India's leading
          <br className="hidden lg:block" />
          publications
        </p>
      </div>

      {/* MARQUEE */}
      <div ref={wrapperRef} className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex w-max items-center gap-10 sm:gap-14 md:gap-20"
        >
          {items.map((logo, i) => (
            <div
              key={i}
              className="
                flex-shrink-0
                flex items-center justify-center
                w-[140px] sm:w-[170px] md:w-[200px]
                h-[70px] sm:h-[80px] md:h-[90px]
              "
            >
              <img
                src={logo.src}
                alt=""
                className="
                  max-h-full
                  max-w-full
                  object-contain
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
