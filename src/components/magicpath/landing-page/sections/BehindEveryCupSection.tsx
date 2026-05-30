"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ImageItem = { src: string; alt: string; shadow?: string };

const ORANGE: ImageItem[] = [
  { src: 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/3fabf7d2-c3fd-4af5-963e-f9cc33b06eaa.png', alt: 'Cup 1', shadow: 'yes' },
  { src: 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/80a8e6e7-9db3-4af5-b2ed-1a286f23a01b.png', alt: 'Cup 2', shadow: 'yes' },
  { src: 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/c24cc586-3a69-489a-8124-466a6e32332c.png', alt: 'Cup 3' },
  { src: '../story/s1-im-4.png', alt: 'Cup 4' },
];

const NAVY: ImageItem[] = [
  { src: 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/521dcfdc-159b-4de6-8f53-9be271f135dc.png', alt: 'Coffee Detail 1' },
  { src: 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/05cedc39-320e-4945-af2f-a360009c6c66.png', alt: 'Coffee Detail 2' },
  { src: 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/ffe3efb4-f7f6-4c9b-b616-44ba63b5f1ab.png', alt: 'Coffee Detail 3' },
  { src: '../story/s2-im-4.png', alt: 'Coffee Detail 4' },
];

const YELLOW: ImageItem[] = [
  { src: 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/05cedc39-320e-4945-af2f-a360009c6c66.png', alt: 'Coffee Detail 1' },
  { src: '../story/s3-im-2.png', alt: 'Coffee Detail 2' },
  { src: '../story/s3-im-3.png', alt: 'Coffee Detail 3' },
  { src: '../story/s3-im-4.png', alt: 'Coffee Detail 4' },
];

const RED: ImageItem[] = [
  { src: '../story/s4-im-1.png', alt: 'Coffee Detail 1' },
  { src: '../story/s4-im-2.png', alt: 'Coffee Detail 2' },
  { src: '../story/s4-im-3.png', alt: 'Coffee Detail 3' },
  { src: '../story/s4-im-4.png', alt: 'Coffee Detail 4' },
];

const PANELS = [
  { images: ORANGE, text: "Deeply rooted in tradition. Gentle on the planet." },
  { images: NAVY,   text: "India grows some of the finest coffee in the world." },
  { images: YELLOW, text: "Most of it leaves before it reaches you. Ours never does." },
  { images: RED,    text: "Every sip carries the story of where it came from." },
];

// Panel 1 sits on top (z 8), panel 4 at the bottom (z 2) — mirrors reference CSS z-index ordering
const PANEL_Z = [8, 6, 4, 2];

export function BehindEveryCupSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null); // orange  — starts visible
  const bg2Ref = useRef<HTMLDivElement>(null); // navy    — starts above  (yPercent -100)
  const bg3Ref = useRef<HTMLDivElement>(null); // yellow  — starts right  (xPercent 100)
  const bg4Ref = useRef<HTMLDivElement>(null); // red     — starts below  (yPercent 100)

  useGSAP(() => {
    // ── Background initial positions ──────────────────────────────────────
    gsap.set(bg2Ref.current, { yPercent: -100 }); // navy   : above → slides down
    gsap.set(bg3Ref.current, { xPercent: 100 });  // yellow : right → slides left
    gsap.set(bg4Ref.current, { yPercent: 100 });  // red    : below → rises up

    // ── Panels 2–4 content start hidden ──────────────────────────────────
    gsap.set("[data-panel='2'] [data-el='title']",    { opacity: 0, x: 100 });
    gsap.set("[data-panel='2'] [data-el='imgs'] img", { opacity: 0, y: -300 });
    gsap.set("[data-panel='2'] [data-el='text']",     { opacity: 0, x: -100 });
    gsap.set("[data-panel='3'] [data-el='title']",    { opacity: 0, x: 100 });
    gsap.set("[data-panel='3'] [data-el='imgs'] img", { opacity: 0, x: -300 });
    gsap.set("[data-panel='3'] [data-el='text']",     { opacity: 0, x: -100 });
    gsap.set("[data-panel='4'] [data-el='title']",    { opacity: 0, x: -100 });
    gsap.set("[data-panel='4'] [data-el='imgs'] img", { opacity: 0, y: 300 });
    gsap.set("[data-panel='4'] [data-el='text']",     { opacity: 0, x: 100 });

    // ── Panel 1 entrance — plays once as section scrolls into view ────────
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })
    .from("[data-panel='1'] [data-el='title']", { opacity: 0, x: -100, ease: "power3.out", duration: 0.8 })
    .from("[data-panel='1'] [data-el='imgs'] img", { x: -100, opacity: 0, ease: "back.inOut", stagger: 0.1, duration: 0.5 }, "-=0.3")
    .from("[data-panel='1'] [data-el='text']", { opacity: 0, x: 100, ease: "power3.out", duration: 0.4 }, "-=0.2");

    // ── Scrubbed timeline — pinned, drives all transitions ────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * 5,
        scrub: 1,
        pin: true,
      },
    });

    // Panel 1 exit + BG orange→navy + Panel 2 enter
    tl.to("[data-panel='1'] [data-el='title']",     { opacity: 0, x: -100, ease: "power3.in",  duration: 0.8 }, 1)
      .to("[data-panel='1'] [data-el='imgs'] img",  { y: 300,    opacity: 0, ease: "back.in",   stagger: -0.1, duration: 0.5 }, 1)
      .to("[data-panel='1'] [data-el='text']",      { opacity: 0, x: 100,  ease: "power3.in",  duration: 0.8 }, 1)
      .to(bg1Ref.current,                           { yPercent: 100, ease: "none", duration: 1 }, 1)
      .to(bg2Ref.current,                           { yPercent: 0,   ease: "none", duration: 1 }, 1)
      .to("[data-panel='2'] [data-el='title']",     { opacity: 1, x: 0, ease: "power3.out", duration: 0.8 }, 1.5)
      .to("[data-panel='2'] [data-el='imgs'] img",  { y: 0,    opacity: 1, ease: "back.out",  stagger: -0.1, duration: 0.5 }, 1.5)
      .to("[data-panel='2'] [data-el='text']",      { opacity: 1, x: 0, ease: "power3.out", duration: 0.8 }, 1.5);

    // Panel 2 exit + BG navy→yellow + Panel 3 enter
    tl.to("[data-panel='2'] [data-el='title']",     { opacity: 0, x: -100, ease: "power3.in",  duration: 0.8 }, 3.5)
      .to("[data-panel='2'] [data-el='imgs'] img",  { x: 300,    opacity: 0, ease: "back.in",   stagger: -0.1, duration: 0.5 }, 3.5)
      .to("[data-panel='2'] [data-el='text']",      { opacity: 0, x: 100,  ease: "power3.in",  duration: 0.8 }, 3.5)
      .to(bg2Ref.current,                           { xPercent: -100, ease: "none", duration: 1 }, 3.5)
      .to(bg3Ref.current,                           { xPercent: 0,    ease: "none", duration: 1 }, 3.5)
      .to("[data-panel='3'] [data-el='title']",     { opacity: 1, x: 0, ease: "power3.out", duration: 0.8 }, 4)
      .to("[data-panel='3'] [data-el='imgs'] img",  { x: 0,    opacity: 1, ease: "back.out",  stagger: -0.1, duration: 0.5 }, 4)
      .to("[data-panel='3'] [data-el='text']",      { opacity: 1, x: 0, ease: "power3.out", duration: 0.8 }, 4);

    // ── Panel 3 exit  |  BG yellow → red (rises from below)  |  Panel 4 enter ──
    tl.to("[data-panel='3'] [data-el='title']",    { opacity: 0, x: -100, ease: "power3.in",    duration: 0.8 }, 6)
      .to("[data-panel='3'] [data-el='imgs'] img", { x: 100,    opacity: 0, ease: "back.inOut", stagger: -0.1, duration: 0.5 }, 6)
      .to("[data-panel='3'] [data-el='text']",     { opacity: 0, x: 100,  ease: "power3.in",    duration: 0.8 }, 6)
      .to(bg3Ref.current, { yPercent: -100, ease: "none", duration: 1 }, 6)  // yellow exits upward
      .to(bg4Ref.current, { yPercent: 0,    ease: "none", duration: 1 }, 6)  // red rises from below
      .to("[data-panel='4'] [data-el='title']",    { opacity: 1, x: 0, ease: "power3.out", duration: 0.8 }, 6.5)
      .to("[data-panel='4'] [data-el='imgs'] img", { y: 0,    opacity: 1, ease: "back.out", stagger: 0.1,  duration: 0.5 }, 6.5)
      .to("[data-panel='4'] [data-el='text']",     { opacity: 1, x: 0, ease: "power3.out", duration: 0.8 }, 6.5);

    // ── Panel 4 exit — finale: title & text rise out, images scale down ──
    tl.to("[data-panel='4'] [data-el='title']",    { opacity: 0, y: -120, ease: "power3.in",  duration: 0.8 }, 8.5)
      .to("[data-panel='4'] [data-el='imgs'] img", { scale: 0.4, opacity: 0, ease: "back.in", stagger: 0.08, duration: 0.5 }, 8.5)
      .to("[data-panel='4'] [data-el='text']",     { opacity: 0, y: -120, ease: "power3.in",  duration: 0.8 }, 8.9);

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden">

      {/*
        Backgrounds — stacked low→high z so each incoming bg slides over the old one.
        Mirrors reference: bg1 z:-5, bg2 z:-4, bg3 z:-3 (we extend to 4 bgs).
      */}
      <div ref={bg1Ref} className="absolute inset-0 bg-brand-orange" style={{ zIndex: -8 }} />
      <div ref={bg2Ref} className="absolute inset-0 bg-brand-navy"   style={{ zIndex: -6 }} />
      <div ref={bg3Ref} className="absolute inset-0 bg-[#FFD632]"    style={{ zIndex: -4 }} />
      <div ref={bg4Ref} className="absolute inset-0 bg-[#8B2325]"    style={{ zIndex: -2 }} />

      {/*
        Panels — panel 1 highest z (8), panel 4 lowest (2).
        Mirrors reference: section:nth-child(1) z:5, nth-child(2) z:4, nth-child(3) z:3.
        As each panel fades out, the one below it becomes visible.
      */}
      {PANELS.map((panel, i) => (
        <div
          key={i}
          data-panel={i + 1}
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ zIndex: PANEL_Z[i] }}
        >
          <div
            data-el="title"
            className="w-full max-w-[920px] text-white text-[40px] font-recoleta font-semibold leading-[1.35] text-center mb-[100px]"
          >
            Our Story Behind Every Cup
          </div>

          <div data-el="imgs" className="flex gap-10 mb-[100px]">
            {panel.images.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="w-[230px] h-[230px] object-contain"
                style={img.shadow ? { filter: "drop-shadow(-7px 10px 25px rgba(0,0,0,0.25))" } : undefined}
              />
            ))}
          </div>

          <p data-el="text" className="text-white text-[28px] font-outfit text-center">
            {panel.text}
          </p>
        </div>
      ))}

    </div>
  );
}
