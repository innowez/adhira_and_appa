"use client";

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

export function CoffeeBrandLanding() {
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

        {/* <FeelYours />
        <TestimonialsSection />
        <Publications />
        <StoresSection />
        <FooterSection /> */}
        <NavDots />
      </div>
    </>
  );
}
