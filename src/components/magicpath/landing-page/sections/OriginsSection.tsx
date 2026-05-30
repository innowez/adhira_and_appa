"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const KERALA_BG = 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/f03ba1b8-916f-4b7d-bf90-464516076276.png';
const KARNATAKA_BG = 'https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/52e26c86-0c3a-4a99-9846-f6baad3e45f1.png';
const TAMIL_NADU_BG = '../tamil_nadu.png'

export function OriginsSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>

      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
      <motion.div style={{ x, display: "flex", width: "300vw" }}>
      {/* Kerala */}
      <section className="relative h-screen w-screen">
        <img src={KERALA_BG} alt="Kerala Coffee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <h2 className="absolute left-[72px] top-[72px] text-white text-[80px] font-recoleta font-semibold">
          Kerala
        </h2>
        <p className="absolute left-[72px] bottom-[72px] text-white text-[32px] font-outfit max-w-[716px] leading-[1.25]">
          Monsoon-fed hills. Volcanic soil. Coffee that grows slowly and develops a richness you can't rush. Full-bodied, naturally sweet.
        </p>
      </section>

      {/* Karnataka */}
      <section className="relative h-screen w-screen">
        <img src={KARNATAKA_BG} alt="Karnataka Coffee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute left-[72px] bottom-[200px]">
          <h2 className="text-white text-[80px] font-recoleta font-semibold m-0">Karnataka</h2>
          <p className="text-white text-[32px] font-recoleta font-semibold tracking-[2.56px] m-0">
            Chikmagalur.
          </p>
        </div>
        <p className="absolute left-[72px] bottom-[72px] text-white text-[32px] font-outfit max-w-[528px] leading-[1.25]">
          Where Indian coffee was born three centuries ago. Bright, clean, with a complexity that unfolds sip by sip.
        </p>
      </section>

      {/* Tamil Nadu */}
      <section className="relative h-screen w-screen">
        <img src={TAMIL_NADU_BG} alt="Karnataka Coffee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute right-[72px] top-[57px]">
          <h2 className="text-white text-[80px] font-recoleta font-semibold m-0">Tamil Nadu</h2>
          <p className="text-white text-[32px] font-recoleta font-semibold tracking-[2.56px] m-0">
            The Nilgiris.
          </p>
        </div>
        <p className="absolute left-[72px] bottom-[72px] text-white text-[32px] font-outfit max-w-[528px] leading-[1.25]">
          Altitude so high the flavour concentrates. Delicate, aromatic, quietly intense. The kind that makes you pause.
        </p>
      </section>

      </motion.div>
      </div>
    </div>
  );
}
