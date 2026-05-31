"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BG = "../story_beans.png";

const KERALA_BG = "../kerala.png";
const KARNATAKA_BG = "../karnataka.png";
const TAMIL_NADU_BG = "../tamil_nadu.png";

export function StoryBeansSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const storySecRef = useRef<HTMLElement>(null);
  const storyImgRef = useRef<HTMLImageElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);

  const keralaSecRef = useRef<HTMLElement>(null);
  const keralaImgRef = useRef<HTMLImageElement>(null);
  const keralaTextRef = useRef<HTMLDivElement>(null);

  const karnatakaSecRef = useRef<HTMLElement>(null);
  const karnatakaImgRef = useRef<HTMLImageElement>(null);
  const karnatakaTextRef = useRef<HTMLDivElement>(null);

  const tamilSecRef = useRef<HTMLElement>(null);
  const tamilImgRef = useRef<HTMLImageElement>(null);
  const tamilTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Shared pattern: parallax background + text enter/exit tied to the same scroll range
      const addParallax = (
        sec: HTMLElement | null,
        img: HTMLImageElement | null,
        text: HTMLDivElement | null,
      ) => {
        if (!sec || !img) return;

        // Background moves at ~20% of scroll speed (image is 130% tall, has room to slide)
        gsap.fromTo(
          img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        if (!text) return;
        // Text: fades in from above as section enters, exits below as section leaves
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          })
          .fromTo(
            text,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, ease: "none", duration: 0.5 },
          )
          .to(text, { y: 100, ease: "none", duration: 0.5 });
      };

      addParallax(
        storySecRef.current,
        storyImgRef.current,
        storyTextRef.current,
      );
      addParallax(
        keralaSecRef.current,
        keralaImgRef.current,
        keralaTextRef.current,
      );
      addParallax(
        karnatakaSecRef.current,
        karnatakaImgRef.current,
        karnatakaTextRef.current,
      );
      addParallax(
        tamilSecRef.current,
        tamilImgRef.current,
        tamilTextRef.current,
      );
    },
    { scope: wrapperRef },
  );

  return (
    <div id="story_beans" ref={wrapperRef}>
      {/* ── Story Beans intro ─────────────────────────────────────────── */}
      <section ref={storySecRef} className="relative h-[900px] overflow-hidden">
        <img
          ref={storyImgRef}
          src={BG}
          alt="Story Beans"
          className="absolute left-0 w-full object-cover h-full lg:h-[130%] lg:top-[-15%]"
        />
        <div
          ref={storyTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
        >
          <h2 className="text-[26px] lg:text-[40px] font-recoleta font-semibold mb-6">
            Story Beans <span className="font-outfit text-[40px]">®</span>
          </h2>
          <p className="text-[16px] lg:text-[28px] font-outfit">
            Every bean has a beginning. Ours <br />
            have three.
          </p>
        </div>
      </section>

      {/* ── Kerala ───────────────────────────────────────────────────── */}
      <section ref={keralaSecRef} className="relative h-screen overflow-hidden">
        <img
          ref={keralaImgRef}
          src={KERALA_BG}
          alt="Kerala Coffee"
          className="absolute left-0 w-full object-cover"
          style={{ height: "130%", top: "-15%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <div
          ref={keralaTextRef}
          className="absolute inset-0 pointer-events-none"
        >
          <h2 className="absolute left-[24px] bottom-[140px] lg:bottom-auto lg:left-[72px] lg:top-[72px] text-white text-[32px] lg:text-[80px] leading-[44px] lg:leading-auto font-recoleta font-semibold">
            Kerala
          </h2>
          <p className="absolute left-[24px] lg:left-[72px] bottom-[72px] text-white text-[16px] lg:text-[32px] font-outfit max-w-[716px] leading-5 lg:leading-[1.25]">
            Monsoon-fed hills. Volcanic soil. Coffee that grows slowly and
            develops a richness you can&apos;t rush. Full-bodied, naturally
            sweet.
          </p>
        </div>
      </section>

      {/* ── Karnataka ────────────────────────────────────────────────── */}
      <section
        ref={karnatakaSecRef}
        className="relative h-screen overflow-hidden"
      >
        <img
          ref={karnatakaImgRef}
          src={KARNATAKA_BG}
          alt="Karnataka Coffee"
          className="absolute left-0 w-full object-cover"
          style={{ height: "130%", top: "-15%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <div
          ref={karnatakaTextRef}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute lg:left-[72px] lg:bottom-[200px] left-[24px] bottom-[140px]">
            <h2 className="text-white text-[32px] leading-[44px] lg:text-[80px] lg:leading-[109px] font-recoleta font-semibold m-0">
              Karnataka
            </h2>
            <p className="text-white text-lg lg:text-[32px] font-recoleta font-semibold tracking-[2.56px] m-0">
              Chikmagalur.
            </p>
          </div>
          <p className="absolute left-[24px] lg:left-[72px] bottom-[72px] text-white text-[16px] lg:text-[32px] font-outfit max-w-[528px] leading-5 lg:leading-[1.25]">
            Where Indian coffee was born three centuries ago. Bright, clean,
            with a complexity that unfolds sip by sip.
          </p>
        </div>
      </section>

      {/* ── Tamil Nadu ───────────────────────────────────────────────── */}
      <section ref={tamilSecRef} className="relative h-screen overflow-hidden">
        <img
          ref={tamilImgRef}
          src={TAMIL_NADU_BG}
          alt="Tamil Nadu Coffee"
          className="absolute left-0 w-full object-cover"
          style={{ height: "130%", top: "-15%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <div
          ref={tamilTextRef}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute lg:left-auto lg:right-[72px] lg:top-[57px] left-[24px] bottom-[140px]">
            <h2 className="text-white text-[32px] leading-[44px] lg:text-[80px] lg:leading-[109px] font-recoleta font-semibold m-0">
              Tamil Nadu
            </h2>
            <p className="text-white text-[16px] lg:text-[32px] font-recoleta font-semibold tracking-[2.56px] m-0">
              The Nilgiris.
            </p>
          </div>
          <p className="absolute left-[24px] lg:left-[72px] bottom-[72px] text-white text-[16px] lg:text-[32px] font-outfit max-w-[528px] leading-5 lg:leading-[1.25]">
            Altitude so high the flavour concentrates. Delicate, aromatic,
            quietly intense. The kind that makes you pause.
          </p>
        </div>
      </section>
    </div>
  );
}
