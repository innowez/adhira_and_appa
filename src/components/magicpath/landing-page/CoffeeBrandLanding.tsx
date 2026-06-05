"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "./sections/HeroSection";
import { BehindEveryCupSection } from "./sections/BehindEveryCupSection";
import { StoryBeansSection } from "./sections/StoryBeansSection";
import { WhatsNewSection } from "./sections/WhatsNewSection";
import { GallerySection } from "./sections/GallerySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { StoresSection } from "./sections/StoresSection";
import { FooterSection } from "./sections/FooterSection";
import { NavDots } from "./sections/NavDots";
import { FeelYours } from "./sections/FeelYours";
import { Publications } from "./sections/Publications";
import LoadingScreen from "@/components/common/LoadingScreen";

gsap.registerPlugin(ScrollTrigger);

export function CoffeeBrandLanding() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker so they share the same frame loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="w-full bg-white relative">
        <HeroSection />
        <BehindEveryCupSection />
        <StoryBeansSection />

        <section id="the_blend">
          <WhatsNewSection />
          <GallerySection />
        </section>

        <FeelYours />
        <TestimonialsSection />
        <Publications />
        <StoresSection />
        <FooterSection />
        <NavDots />
      </div>
    </>
  );
}
