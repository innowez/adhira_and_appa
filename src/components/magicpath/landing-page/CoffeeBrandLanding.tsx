'use client';

import { OurStorySection } from './sections/OurStorySection';
import { OriginsSection } from './sections/OriginsSection';
import { HeroSection } from './sections/HeroSection';
import { BehindEveryCupSection } from './sections/BehindEveryCupSection';
import { StoryBeansSection } from './sections/StoryBeansSection';
import { WhatsNewSection } from './sections/WhatsNewSection';
import { GallerySection } from './sections/GallerySection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { StoresSection } from './sections/StoresSection';
import { FooterSection } from './sections/FooterSection';
import { NavDots } from './sections/NavDots';
import { FeelYours } from './sections/FeelYours';
import { Publications } from './sections/Publications';

export function CoffeeBrandLanding() {
  return (
    <div className="w-full bg-white relative">
      <HeroSection />
      {/* <OurStorySection /> */}
      <BehindEveryCupSection />
      <StoryBeansSection />
      {/* <OriginsSection /> */}
      <WhatsNewSection />
      <GallerySection />
      <FeelYours />
      <TestimonialsSection />
      <Publications />
      <StoresSection />
      <FooterSection />
      <NavDots />
    </div>
  );
}
