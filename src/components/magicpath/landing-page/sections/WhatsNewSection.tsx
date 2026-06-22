"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MASK =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/dc2e0a97-5a60-467d-bd7b-4bbc49ae8ae1.svg";
const COFEE_BEAN_1 = "../whats_new/bean1.png";
const COFEE_BEAN_2 = "../whats_new/bean2.png";
const COFEE_BEAN_3 = "../whats_new/bean3.png";
const OMBLETE = "../whats_new/omblete.png";

// Per-element offset that brings each item toward the center cluster when the
// section is off-screen. At "center center" they land back at x:0 y:0 (their
// CSS absolute position).
const BEAN_OFFSETS = [
  // bean3  — top-left-ish,  needs to drift down-right from center
  { x: 40, y: 102 },
  // bean1  — far left,      needs to drift right from center
  { x: 205, y: 67 },
  // bean2  — far right,     needs to drift left from center
  { x: -160, y: 19 },
  // omelette — lower right, needs to drift up-left from center
  { x: -65, y: -53 },
];

export function WhatsNewSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const bean3Ref = useRef<HTMLImageElement>(null);
  const bean1Ref = useRef<HTMLImageElement>(null);
  const bean2Ref = useRef<HTMLImageElement>(null);
  const ombleteRef = useRef<HTMLImageElement>(null);
  const medImgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const sec = sectionRef.current;
      if (!sec) return;

      // Beans + omelette: spread from center cluster → final CSS positions
      const items = [
        bean3Ref.current,
        bean1Ref.current,
        bean2Ref.current,
        ombleteRef.current,
      ];

      items.forEach((el, i) => {
        if (!el) return;
        const { x, y } = BEAN_OFFSETS[i];
        gsap.fromTo(
          el,
          { x, y, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "center center",
              scrub: 1,
            },
          },
        );
      });

      // Medium image: slow horizontal drift right → left as you scroll past
      if (medImgRef.current) {
        gsap.fromTo(
          medImgRef.current,
          { x: 60 },
          {
            x: -60,
            ease: "none",
            scrollTrigger: {
              trigger: medImgRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: wrapperRef },
  );

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden lg:overflow-visible "
    >
      <section
        ref={sectionRef}
        className="relative h-[294px] lg:h-[377px] bg-brand-orange"
      >

        <img
          src={MASK}
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-bottom relative z-10"
          style={{ 
            mixBlendMode: "multiply", 
            opacity: 1,
            filter: "hue-rotate(120deg) saturate(1.5)" // rotate hue to change color
          }}
        />

        <img
          ref={bean3Ref}
          src={COFEE_BEAN_3}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 top-[22px] left-[31px] w-[56px] h-[75px] lg:top-[-54px] lg:left-1/2 lg:-ml-40 lg:w-[181.99px] lg:h-[157.77px]"
        />
        <img
          ref={bean1Ref}
          src={COFEE_BEAN_1}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 top-[6.9px] left-[85px] w-[64px] h-[85px] lg:top-[15px] lg:left-1/2 lg:-ml-122.5 lg:w-[181.993px] lg:h-[157.766px]"
        />
        <img
          ref={bean2Ref}
          src={COFEE_BEAN_2}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 top-[115px] left-[303px] w-[58px] h-[78px] lg:top-[112px] lg:left-1/2 lg:ml-60.25 lg:w-[227.228px] lg:h-[181.615px]"
        />
        <img
          ref={ombleteRef}
          src={OMBLETE}
          alt=""
          aria-hidden
          className="object-contain absolute z-20 top-[191px] left-[202px] w-[79px] h-[81px] lg:top-[256.5px] lg:left-1/2 lg:ml-12.5 lg:w-41.75 lg:h-42.75"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white">
          <h2 className="lg:text-[48px] text-[26px] leading-[35px] font-recoleta font-semibold mb-2 lg:mb-4">
            What's New at Adhira &amp; Appa
          </h2>
          <p className="lg:text-[28px] text-base font-outfit m-0">
            More reasons to come back.
          </p>
        </div>
      </section>

      <div className="h-[363px] lg:h-[544px] relative">
        <img
          // ref={medImgRef}
          src="../medium_image.png"
          alt=""
          id="medium"
          className="h-[399px] lg:h-[570px] w-[150vw] lg:object-cover lg:object-bottom absolute -top-4"
          // style={{ objectViewBox: "xywh(307px 327px 360px 360px)" }}
        />
      </div>
    </div>
  );
}
