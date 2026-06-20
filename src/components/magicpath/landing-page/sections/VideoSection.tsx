"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function IconMuted() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2v6h4l5 4V5Z" fill="white" />
      <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconUnmuted() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2v6h4l5 4V5Z" fill="white" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const SHARED_PARAMS = "autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1";

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopIframeRef = useRef<HTMLIFrameElement>(null);
  const mobileIframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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

  function toggleMute() {
    const cmd = isMuted ? "unMute" : "mute";
    for (const ref of [desktopIframeRef, mobileIframeRef]) {
      ref.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: cmd, args: [] }),
        "https://www.youtube.com",
      );
    }
    setIsMuted(!isMuted);
  }

  return (
    <section ref={sectionRef} className="relative w-full aspect-9/16 lg:aspect-video overflow-hidden">
      {/* Desktop — landscape 16:9, cover technique */}
      <iframe
        ref={desktopIframeRef}
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.78vh] border-0"
        src={`https://www.youtube.com/embed/vLVHTunGq5k?${SHARED_PARAMS}&playlist=vLVHTunGq5k`}
        title="Adhira & Appa — desktop"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* Mobile — portrait 9:16 Shorts, fills the container exactly */}
      <iframe
        ref={mobileIframeRef}
        className="block lg:hidden absolute inset-0 w-full h-full border-0"
        src={`https://www.youtube.com/embed/Hls-gBIUvQw?${SHARED_PARAMS}&playlist=Hls-gBIUvQw`}
        title="Adhira & Appa — mobile"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* Overlay blocks accidental clicks on the iframe */}
      <div className="absolute inset-0" />

      {/* Mute / unmute — sits above the overlay */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-6 right-6 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/60 transition-colors duration-200 cursor-pointer"
      >
        {!isMuted ? <IconMuted /> : <IconUnmuted />}
      </button>
    </section>
  );
}
