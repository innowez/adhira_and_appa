"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative w-full aspect-9/16 lg:aspect-video overflow-hidden">
      {/*
        Cover technique: iframe is centered and sized so it always fills the
        viewport regardless of aspect ratio — same visual behaviour as
        object-cover on a <video> element.
        - w-[100vw] h-[56.25vw]  → correct 16:9 at wide viewports
        - min-h-[100vh] min-w-[177.78vh] → keeps coverage on tall/portrait viewports
      */}
      <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.78vh] border-0"
        src="https://www.youtube.com/embed/vLVHTunGq5k?autoplay=1&mute=1&loop=1&playlist=vLVHTunGq5k&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="absolute top-0 left-0 w-full h-full "></div>
    </section>
  );
}
