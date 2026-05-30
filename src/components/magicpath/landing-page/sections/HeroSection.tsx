"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HERO_BG =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/ee8f9fb5-f610-4b02-9ef7-8a5a55a075b7.png";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const darkenRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(text2Ref.current, { y: 500, opacity: 1 });
    gsap.set(darkenRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true,
      },
    });

    // Text 1 exits in first 60% of scroll
    tl.to(text1Ref.current, { y: -400, opacity: 0, ease: "none", duration: 0.6 }, 0)
    // Text 2 rises from bottom, overlapping text 1 exit by 20%
      .to(text2Ref.current, { y: 0, ease: "none", duration: 0.6 }, 0.4)
    // Overlay darkens as text 2 appears
      .to(darkenRef.current, { opacity: 0.4, ease: "none", duration: 0.6 }, 0.4);
  }, { scope: sectionRef });

  return (
    <main ref={sectionRef} className="relative w-full h-[900px] overflow-hidden">

      {/* Background — stays in place */}
      <img
        src={HERO_BG}
        alt="Adhira & Appa Coffee"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — stays in place */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      {/* GSAP-controlled darkening layer — animates in with text two */}
      <div ref={darkenRef} className="absolute inset-0 bg-black" />

      {/* Logo — stays in place */}
      <img
        src="../logo.png"
        alt="Adhira & Appa Logo"
        className="absolute left-10 top-10 w-[87px] h-[66px]"
      />

      {/* Text Section One — moves up and fades out on scroll */}
      <div
        ref={text1Ref}
        className="absolute left-1/2 top-[411px] -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[662px] px-6"
      >
        <h1 className="text-white text-5xl font-bold font-recoleta mb-7">
          ADHIRA & APPA COFFEE
        </h1>
        <p className="text-white text-[28px] font-outfit font-normal">
          The best moments don't start with a plan. They start with great
          coffee and food.
        </p>
      </div>

      {/* Text Section Two — rises up and fades in on scroll */}
      <div
        ref={text2Ref}
        className="absolute left-1/2 top-[411px] -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[729px] px-6"
      >
        <p className="text-white text-[36px] font-recoleta leading-[1.4] mb-10">
          Some moments aren't planned. They just happen— between sips, across
          tables, in time you didn't mean to spend.
        </p>
        <p className="text-white text-[36px] font-recoleta leading-[1.4] mb-10">
          At Adhira & Appa, those are the moments that matter. Where you can
          stay a little longer, and feel like you belong.
        </p>
        <p className="text-white text-[36px] font-recoleta font-semibold">
          Moments That Matter
        </p>
      </div>

      {/* Scroll button — stays in place */}
      <button
        onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
        className="absolute left-1/2 bottom-12 -translate-x-1/2 flex flex-col items-center gap-4 bg-transparent border-none cursor-pointer"
      >
        <span className="text-white text-xl font-outfit">Scroll Down</span>
        <div className="relative w-[33px] h-[55px]">
          <div className="w-full h-full border border-white/50 rounded-[16.5px] backdrop-blur-sm" />
          <div className="absolute left-[10px] top-[10px] w-[13px] h-[13px] bg-white rounded-full animate-bounce-dot" />
        </div>
      </button>

    </main>
  );
}
