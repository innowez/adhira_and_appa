"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LOGOS = [
  { src: "../publish-1.png", w: 180, h: 180 },
  { src: "../publish-2.png", w: 184, h: 55 },
  { src: "../publish-3.png", w: 247, h: 56 },
  { src: "../publish-4.png", w: 180, h: 56 },
  { src: "../publish-5.png", w: 202, h: 53 },
];

const DURATION = 20;

export function Publications() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLElement>(
        ".pub-box",
        wrapperRef.current,
      );
      const boxWidth = window.innerWidth / 4;
      const wrapperWidth = boxWidth * boxes.length;
      const windowWidth = window.innerWidth;

      // Offset track left by one slot so wrapping enters from off-screen right
      gsap.set(trackRef.current, { left: -boxWidth });
      gsap.set(boxes, { width: boxWidth });
      gsap.set(boxes, { x: (i) => i * boxWidth });

      gsap.to(boxes, {
        duration: DURATION,
        ease: "none",
        x: `-=${wrapperWidth}`,
        modifiers: {
          x: gsap.utils.unitize(
            (x) => parseFloat(x + windowWidth + boxWidth) % wrapperWidth,
          ),
        },
        repeat: -1,
      });
    },
    { scope: wrapperRef },
  );

  return (
    <div className="py-[120px] px-20">
      <div className="flex justify-between items-end px-10 mb-[226px]">
        <h1 className="font-semibold font-recoleta text-5xl">
          Our coffee has <br />
          got everybody talking
        </h1>
        <p className="text-[24px] font-outfit leading-[1.4]">
          Featured in India's leading
          <br /> publications
        </p>
      </div>

      {/* h-[100px] gives room for the tallest logo (77px) */}
      <div
        ref={wrapperRef}
        className="w-full overflow-hidden relative h-[100px]"
      >
        <div ref={trackRef} className="relative h-full">
          {LOGOS.map((logo, i) => (
            <div
              key={i}
              className="pub-box absolute top-0 h-full flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt=""
                style={{ width: logo.w, height: logo.h }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
