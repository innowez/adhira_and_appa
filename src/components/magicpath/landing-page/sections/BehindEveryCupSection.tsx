"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ImageItem = { src: string; alt: string; shadow?: string };

const ORANGE: ImageItem[] = [
  {
    src: "../stories/1_img.png",
    alt: "Cup 1",
    shadow: "yes",
  },
  {
    src: "../stories/2_img.png",
    alt: "Cup 2",
    shadow: "yes",
  },
  {
    src: "../stories/3_img.png",
    alt: "Cup 3",
  },
  { src: "../stories/4_img.png", alt: "Cup 4" },
];

const NAVY: ImageItem[] = [
  {
    src: "../stories/5_img.png",
    alt: "Coffee Detail 1",
  },
  {
    src: "../stories/6_img.png",
    alt: "Coffee Detail 2",
  },
  {
    src: "../stories/7_img.png",
    alt: "Coffee Detail 3",
  },
  { src: "../stories/8_img.png", alt: "Coffee Detail 4" },
];

const YELLOW: ImageItem[] = [
  { src: "../stories/9_img.png", alt: "Coffee Detail 1" },
  { src: "../stories/10_img.png", alt: "Coffee Detail 2" },
  { src: "../stories/11_img.png", alt: "Coffee Detail 3" },
  { src: "../stories/12_img.png", alt: "Coffee Detail 4" },
];

const RED: ImageItem[] = [
  { src: "../stories/13_img.png", alt: "Coffee Detail 1" },
  { src: "../stories/14_img.png", alt: "Coffee Detail 2" },
  { src: "../stories/15_img.png", alt: "Coffee Detail 3" },
  { src: "../stories/16_img.png", alt: "Coffee Detail 4" },
];

const PANELS = [
  {
    images: ORANGE,
    text: "Deeply rooted in tradition. <br/>Gentle on the planet.",
  },
  {
    images: NAVY,
    text: "India grows some of the finest coffee <br/>in the world.",
  },
  {
    images: YELLOW,
    text: "Most of it leaves before it reaches you. <br/>Ours never does.",
  },
  {
    images: RED,
    text: "Ethically sourced from Kerala, Karnataka, and Tamil Nadu. <br />Rooted here. Roasted here. Yours.",
  },
];

// Panel 1 sits on top (z 8), panel 4 at the bottom (z 2) — mirrors reference CSS z-index ordering
const PANEL_Z = [8, 6, 4, 2];

export function BehindEveryCupSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null); // orange  — starts visible
  const bg2Ref = useRef<HTMLDivElement>(null); // navy    — starts above  (yPercent -100)
  const bg3Ref = useRef<HTMLDivElement>(null); // yellow  — starts right  (xPercent 100)
  const bg4Ref = useRef<HTMLDivElement>(null); // red     — starts below  (yPercent 100)

  useGSAP(
    () => {
      // ── Background initial positions ──────────────────────────────────────
      gsap.set(bg2Ref.current, { yPercent: -100 }); // navy   : above → slides down
      gsap.set(bg3Ref.current, { xPercent: 100 }); // yellow : right → slides left
      gsap.set(bg4Ref.current, { yPercent: 100 }); // red    : below → rises up

      // ── Panels 2–4 content start hidden ──────────────────────────────────
      gsap.set("[data-panel='2'] [data-el='title']", { opacity: 0, x: 100 });
      gsap.set("[data-panel='2'] [data-el='imgs'] img", {
        opacity: 0,
        y: -300,
      });
      gsap.set("[data-panel='2'] [data-el='text']", { opacity: 0, x: -100 });
      gsap.set("[data-panel='3'] [data-el='title']", { opacity: 0, x: 100 });
      gsap.set("[data-panel='3'] [data-el='imgs'] img", {
        opacity: 0,
        x: -300,
      });
      gsap.set("[data-panel='3'] [data-el='text']", { opacity: 0, x: -100 });
      gsap.set("[data-panel='4'] [data-el='title']", { opacity: 0, x: -100 });
      gsap.set("[data-panel='4'] [data-el='imgs'] img", { opacity: 0, y: 300 });
      gsap.set("[data-panel='4'] [data-el='text']", { opacity: 0, x: 100 });

      // ── Panel 1 entrance — plays once as section scrolls into view ────────
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        })
        .from("[data-panel='1'] [data-el='title']", {
          opacity: 0,
          x: -100,
          ease: "power3.out",
          duration: 0.8,
        })
        .from(
          "[data-panel='1'] [data-el='imgs'] img",
          {
            x: -100,
            opacity: 0,
            ease: "back.inOut",
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          "[data-panel='1'] [data-el='text']",
          { opacity: 0, x: 100, ease: "power3.out", duration: 0.4 },
          "-=0.2",
        );

      // ── Scrubbed timeline — pinned, drives all transitions ────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: [0, 0.26, 0.55, 0.83, 1],
            duration: { min: 0.4, max: 0.8 },
            delay: 0.05,
            ease: "power2.inOut",
          },
        },
      });

      // Panel 1 exit + BG orange→navy + Panel 2 enter (0 → 1.0)
      tl.to("[data-panel='1'] [data-el='title']", { opacity: 0, x: -100, ease: "power3.in", duration: 0.5 }, 0)
        .to("[data-panel='1'] [data-el='imgs'] img", { y: 200, opacity: 0, ease: "back.in", stagger: -0.06, duration: 0.35 }, 0)
        .to("[data-panel='1'] [data-el='text']", { opacity: 0, x: 100, ease: "power3.in", duration: 0.5 }, 0)
        .to(bg1Ref.current, { yPercent: 100, ease: "none", duration: 0.7 }, 0)
        .to(bg2Ref.current, { yPercent: 0, ease: "none", duration: 0.7 }, 0)
        .to("[data-panel='2'] [data-el='title']", { opacity: 1, x: 0, ease: "power3.out", duration: 0.5 }, 0.5)
        .to("[data-panel='2'] [data-el='imgs'] img", { y: 0, opacity: 1, ease: "back.out", stagger: -0.06, duration: 0.35 }, 0.5)
        .to("[data-panel='2'] [data-el='text']", { opacity: 1, x: 0, ease: "power3.out", duration: 0.5 }, 0.5);

      // Panel 2 exit + BG navy→yellow + Panel 3 enter (1.2 → 2.2)
      tl.to("[data-panel='2'] [data-el='title']", { opacity: 0, x: -100, ease: "power3.in", duration: 0.5 }, 1.2)
        .to("[data-panel='2'] [data-el='imgs'] img", { x: 200, opacity: 0, ease: "back.in", stagger: -0.06, duration: 0.35 }, 1.2)
        .to("[data-panel='2'] [data-el='text']", { opacity: 0, x: 100, ease: "power3.in", duration: 0.5 }, 1.2)
        .to(bg2Ref.current, { xPercent: -100, ease: "none", duration: 0.7 }, 1.2)
        .to(bg3Ref.current, { xPercent: 0, ease: "none", duration: 0.7 }, 1.2)
        .to("[data-panel='3'] [data-el='title']", { opacity: 1, x: 0, ease: "power3.out", duration: 0.5 }, 1.7)
        .to("[data-panel='3'] [data-el='imgs'] img", { x: 0, opacity: 1, ease: "back.out", stagger: -0.06, duration: 0.35 }, 1.7)
        .to("[data-panel='3'] [data-el='text']", { opacity: 1, x: 0, ease: "power3.out", duration: 0.5 }, 1.7);

      // Panel 3 exit + BG yellow→red + Panel 4 enter (2.4 → 3.4)
      tl.to("[data-panel='3'] [data-el='title']", { opacity: 0, x: -100, ease: "power3.in", duration: 0.5 }, 2.4)
        .to("[data-panel='3'] [data-el='imgs'] img", { x: 100, opacity: 0, ease: "back.inOut", stagger: -0.06, duration: 0.35 }, 2.4)
        .to("[data-panel='3'] [data-el='text']", { opacity: 0, x: 100, ease: "power3.in", duration: 0.5 }, 2.4)
        .to(bg3Ref.current, { yPercent: -100, ease: "none", duration: 0.7 }, 2.4)
        .to(bg4Ref.current, { yPercent: 0, ease: "none", duration: 0.7 }, 2.4)
        .to("[data-panel='4'] [data-el='title']", { opacity: 1, x: 0, ease: "power3.out", duration: 0.5 }, 2.9)
        .to("[data-panel='4'] [data-el='imgs'] img", { y: 0, opacity: 1, ease: "back.out", stagger: 0.06, duration: 0.35 }, 2.9)
        .to("[data-panel='4'] [data-el='text']", { opacity: 1, x: 0, ease: "power3.out", duration: 0.5 }, 2.9);

      // Panel 4 exit — finale (3.6 → 4.1)
      tl.to("[data-panel='4'] [data-el='title']", { opacity: 0, y: -80, ease: "power3.in", duration: 0.5 }, 3.6)
        .to("[data-panel='4'] [data-el='imgs'] img", { scale: 0.4, opacity: 0, ease: "back.in", stagger: 0.05, duration: 0.35 }, 3.6)
        .to("[data-panel='4'] [data-el='text']", { opacity: 0, y: -80, ease: "power3.in", duration: 0.5 }, 3.7);
    },
    { scope: sectionRef },
  );

  return (
    <div
      id="story_behind_every_cup"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/*
        Backgrounds — stacked low→high z so each incoming bg slides over the old one.
        Mirrors reference: bg1 z:-5, bg2 z:-4, bg3 z:-3 (we extend to 4 bgs).
      */}
      <div
        ref={bg1Ref}
        className="absolute inset-0 bg-brand-orange"
        style={{ zIndex: -8 }}
      />
      <div
        ref={bg2Ref}
        className="absolute inset-0 bg-brand-navy"
        style={{ zIndex: -6 }}
      />
      <div
        ref={bg3Ref}
        className="absolute inset-0 bg-[#FFD632]"
        style={{ zIndex: -4 }}
      />
      <div
        ref={bg4Ref}
        className="absolute inset-0 bg-[#8B2325]"
        style={{ zIndex: -2 }}
      />

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
            className="w-full max-w-[920px] text-white text-2xl lg:text-[40px] font-recoleta font-semibold leading-[1.35] text-center mb-6 lg:mb-[100px]"
          >
            Our Story Behind Every Cup
          </div>

          <div
            data-el="imgs"
            className="flex flex-col lg:flex-row gap-0 items-center lg:gap-10 mb-6 lg:mb-[100px]"
          >
            {panel.images.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="w-[120px] h-[120px] lg:w-[230px] lg:h-[230px] object-contain object-center"
                style={
                  img.shadow
                    ? { filter: "drop-shadow(-7px 10px 25px rgba(0,0,0,0.25))" }
                    : undefined
                }
              />
            ))}
          </div>

          <p
            data-el="text"
            className="text-white text-base lg:text-[28px] font-outfit text-center"
            dangerouslySetInnerHTML={{ __html: panel.text }}
          />
        </div>
      ))}
    </div>
  );
}
