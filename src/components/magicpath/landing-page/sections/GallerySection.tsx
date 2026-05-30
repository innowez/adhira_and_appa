"use client";

import { useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function DiscoverOverlay({ size }: { size: number }) {
  return (
    <div
      className="discover-btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/90 flex items-center justify-center pointer-events-none"
      style={{ width: size, height: size, transform: "scale(0)", opacity: 0 }}
    >
      <span
        className="discover-text text-white uppercase font-medium text-center tracking-widest"
        style={{ fontSize: "11px", opacity: 0 }}
      >
        Discover
      </span>
    </div>
  );
}

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  useGSAP(
    () => {
      // ── Single master timeline — all SVG paths draw sequentially ─
      // "top bottom" → "bottom top" means the trigger spans
      // SECTION_H + viewport height of scroll, so each path draws
      // exactly as it enters the viewport from below (not as it exits).
      const SECTION_H = 3600;
      const TOTAL = 100;
      const scrollRange = SECTION_H + window.innerHeight;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",  // animation begins as section enters viewport
          end: "bottom top",    // animation ends as section exits viewport
          scrub: 2,
        },
      });

      // Filled vector — clip-path reveal top→bottom
      const filledWrapper =
        sectionRef.current?.querySelector<HTMLElement>(".svg-vector-filled");
      if (filledWrapper) {
        gsap.set(filledWrapper, { clipPath: "inset(0 0 100% 0)" });
        const pos = (6.5 / scrollRange) * TOTAL;
        const dur = (281 / scrollRange) * TOTAL;
        masterTl.to(
          filledWrapper,
          { clipPath: "inset(0 0 0% 0)", ease: "none", duration: dur },
          pos
        );
      }

      // Stroke paths — each positioned so it draws when it enters the viewport
      const strokeDefs = [
        { cls: ".path-p1", top: 453.5,  h: 261 },
        { cls: ".path-p2", top: 866,    h: 660 },
        { cls: ".path-p3", top: 1778,   h: 651 },
        { cls: ".path-p4", top: 2560.5, h: 250 },
        { cls: ".path-p5", top: 3011,   h: 260 },
      ] as const;

      strokeDefs.forEach(({ cls, top, h }) => {
        const path =
          sectionRef.current?.querySelector<SVGPathElement>(cls);
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        const pos = (top / scrollRange) * TOTAL;
        const dur = (h   / scrollRange) * TOTAL;
        masterTl.to(
          path,
          { strokeDashoffset: 0, ease: "none", duration: dur },
          pos
        );
      });

      // ── Food item settle-in on scroll ──────────────────────────
      const foodItems = gsap.utils.toArray<HTMLElement>(".food-item");
      foodItems.forEach((el) => {
        const fromX = parseFloat(el.dataset.fromX ?? "0");
        const fromY = parseFloat(el.dataset.fromY ?? "0");
        const fromRot = parseFloat(el.dataset.fromRot ?? "0");
        gsap.fromTo(
          el,
          { x: fromX, y: fromY, rotation: fromRot, opacity: 0 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  const handleFoodEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const btn = e.currentTarget.querySelector<HTMLElement>(".discover-btn");
      const text = e.currentTarget.querySelector<HTMLElement>(".discover-text");
      if (btn)
        gsap.to(btn, {
          scale: 1,
          opacity: 1,
          ease: "back.out(1.7)",
          duration: 0.3,
          delay: 0.03,
        });
      if (text) gsap.to(text, { opacity: 1, duration: 0.2, delay: 0.33 });
    },
    []
  );

  const handleFoodLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const btn = e.currentTarget.querySelector<HTMLElement>(".discover-btn");
      const text = e.currentTarget.querySelector<HTMLElement>(".discover-text");
      if (text) gsap.to(text, { opacity: 0, duration: 0.2 });
      if (btn)
        gsap.to(btn, {
          scale: 0,
          opacity: 0,
          ease: "back.in(1.7)",
          duration: 0.3,
          delay: 0.3,
        });
    },
    []
  );

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto overflow-hidden bg-[rgba(255,81,0,1)]"
      style={{ width: "100%", maxWidth: "1440px", height: "3600px" }}
    >
      {/* Background texture */}
      <div
        className="absolute left-0 top-[6px] w-full overflow-hidden bg-brand-orange"
        style={{ height: "3594px" }}
      >
        <div
          className="absolute"
          style={{ width: "1460px", height: "3600px", left: "-10px", top: "-4px" }}
        >
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/e72ab957-0669-4d32-b605-b792a057d40a.svg"
            alt="Texture Overlay"
            className="absolute left-0 top-1"
            style={{ width: "1460px", height: "3600px" }}
          />
        </div>
      </div>

      {/* ── Decorative filled vector — clip-path reveal (animation target) ── */}
      <div
        className="svg-vector-filled absolute overflow-hidden"
        style={{ left: "916.18px", top: "6.5px", width: "93px", height: "281px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="93"
          height="281"
          fill="none"
          viewBox="0 0 93 281"
        >
          <path
            fill="#fff"
            d="M92.236 1.782c-2.81 3.86-5.67 7.972-8.447 12.042-25.912 38.832-50.605 79.758-62.804 124.48C10.88 178.817 6.848 220.895 6.95 262.64c.035 4.943.13 9.935.367 14.666a3.49 3.49 0 0 1-3.3 3.689 3.5 3.5 0 0 1-2.53-.887 3.5 3.5 0 0 1-1.159-2.414C.095 272.687.02 267.712 0 262.673c.044-42.304 4.245-84.785 14.661-125.977 12.836-46.275 37.86-87.13 64.134-126.287C81.62 6.3 83.4 3.983 86.323 0c.5 0 4.305.594 5.913 1.782"
          />
        </svg>
      </div>

      {/* ── Animated SVG paths (stroke-draw on scroll) ── */}

      {/* p1 – short curve between hero food items */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="469"
        height="261"
        fill="none"
        viewBox="0 0 469 261"
        className="absolute"
        style={{ left: "464.5px", top: "453.5px" }}
      >
        <path
          className="path-p1"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M463.001 3.5s12.5 66-27.5 117c-50.25 64.069-175.018 42.702-254 41-162.5-3.5-178 96-178 96"
        />
      </svg>

      {/* p2 – large S-curve through middle section */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="796"
        height="660"
        fill="none"
        viewBox="0 0 796 660"
        className="absolute"
        style={{ left: "451.5px", top: "866px" }}
      >
        <path
          className="path-p2"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M3.5 3.5s0 70 56.5 103c50.555 29.527 91.272 30 159 22.5 101.442-11.233 153-96 112.5-117-45.427-23.554-98.139 51.063-71 121.5C302.549 242.635 523.49 191.306 640 202c103.5 9.5 152 86.647 152 166.5 0 103-80.375 168.365-194.5 153.5-159-20.71-169.783-174.045-291.5-208.5C143.5 267.5 74.5 439 193 530c67.542 51.868 77 78 64 126"
        />
      </svg>

      {/* p3 – wide winding path across lower half */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="970"
        height="651"
        fill="none"
        viewBox="0 0 970 651"
        className="absolute"
        style={{ left: "160.27px", top: "1778px" }}
      >
        <path
          className="path-p3"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M500.74 3.5c0 270.5 485.595 148.607 464.5 415-17.5 221-391.911 271.739-520-181.5C367.24-39-33.663 35.626 6.3 335c5.425 40.639 31.5 119.5 100.5 171 63.641 47.5 171 76.5 171 141.5"
        />
      </svg>

      {/* p4 – looping curve lower section */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="391"
        height="250"
        fill="none"
        viewBox="0 0 391 250"
        className="absolute"
        style={{ left: "449.5px", top: "2560.5px" }}
      >
        <path
          className="path-p4"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M3.501 71.002c17 83.5 251 97.836 351.5 19.998 51-39.5 36.5-87.5-17.5-87.5-123.905-.002-263.014 101.58-234 207.002 3.994 14.511 15 35.5 15 35.5"
        />
      </svg>

      {/* p5 – short vertical curve near CTA */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="260"
        fill="none"
        viewBox="0 0 100 260"
        className="absolute"
        style={{ left: "635px", top: "3011px" }}
      >
        <path
          className="path-p5"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M3.5 3.5c1.793 21.337 3.903 33.332 9.5 54 16.195 59.802 71.022 75.698 80 137 3.48 23.764 5 36 0 61.5"
        />
      </svg>

      {/* ── Text sections ── */}

      <section
        className="absolute"
        style={{ width: "360px", height: "191px", left: "733px", top: "238px" }}
      >
        <h2
          className="absolute text-white text-center m-0"
          style={{
            width: "285px",
            height: "98px",
            fontSize: "36px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "49px",
            left: "75px",
            top: "93px",
          }}
        >
          The traditional meets the global.
        </h2>
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/9a908759-d47b-4182-ad40-047dc92fcf3f.svg"
          alt=""
          aria-hidden
          className="absolute"
          style={{ width: "39.46px", height: "52.57px", left: "120.44px", top: "0.98px" }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/1215c812-d5c4-4780-86aa-0abc43f12309.svg"
          alt=""
          aria-hidden
          className="absolute"
          style={{ width: "59px", height: "68px", left: "16.3px", top: "0px" }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/46e17fc6-d5a2-4078-ae7f-96d487ee312a.svg"
          alt=""
          aria-hidden
          className="absolute"
          style={{ width: "59.94px", height: "15.49px", left: "0px", top: "113.04px" }}
        />
      </section>

      <section
        className="absolute"
        style={{ width: "378.96px", height: "200px", left: "189.04px", top: "644px" }}
      >
        <h2
          className="absolute text-white text-center m-0"
          style={{
            width: "284px",
            height: "98px",
            fontSize: "36px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "49px",
            left: "94.96px",
            top: "102px",
          }}
        >
          The rooted meets the refined.
        </h2>
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/c83759ae-5021-4952-b720-837d2b5d4cef.svg"
          alt=""
          aria-hidden
          className="absolute left-0 top-0"
          style={{ width: "165.31px", height: "182.76px" }}
        />
      </section>

      <section
        className="absolute"
        style={{ width: "384px", height: "178px", left: "478px", top: "1540px" }}
      >
        <h2
          className="absolute left-0 top-0 text-white text-center m-0"
          style={{
            width: "384px",
            height: "98px",
            fontSize: "36px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "49px",
          }}
        >
          The familiar meets the unexpected.
        </h2>
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/4f94135e-5a56-4ba1-b2d0-562b649d550a.svg"
          alt=""
          aria-hidden
          className="absolute"
          style={{ width: "66px", height: "63px", left: "71px", top: "115px" }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/26b003eb-a597-4fd7-ae06-62517bc5e82b.svg"
          alt=""
          aria-hidden
          className="absolute"
          style={{ width: "17px", height: "58px", left: "183px", top: "118px" }}
        />
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/eeed3cde-6636-4628-99f4-ad87fc0ba3bc.svg"
          alt=""
          aria-hidden
          className="absolute"
          style={{ width: "70.97px", height: "53.23px", left: "259.23px", top: "115px" }}
        />
      </section>

      <section
        className="absolute"
        style={{ width: "469.04px", height: "193px", left: "226px", top: "2390px" }}
      >
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/f4f6c214-b7d7-4a8a-bbde-dcce781cfe8a.svg"
          alt=""
          aria-hidden
          className="absolute top-0"
          style={{ width: "134.66px", height: "150.82px", left: "334.38px" }}
        />
        <h2
          className="absolute left-0 text-white text-center m-0"
          style={{
            width: "394px",
            height: "98px",
            fontSize: "36px",
            fontFamily: '"Recoleta Alt", sans-serif',
            fontWeight: 400,
            lineHeight: "49px",
            top: "95px",
          }}
        >
          Everything you love. Nothing like you&apos;ve had.
        </h2>
      </section>

      {/* ── Food images ── */}

      {/* ada1 – small accent top-right (no hover, accent size) */}
      <img
        src="../menu/ada1.png"
        alt="Food item"
        data-from-x="20"
        data-from-rot="15"
        className="food-item absolute object-cover"
        style={{ width: "255px", height: "255px", left: "1068px", top: "393px" }}
      />

      {/* 0meal – large hero plate (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "459.87px", height: "466.5px", left: "276px", top: "140.69px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/0meal.png"
          alt="Medhu Vada Waffle"
          data-from-x="-20"
          data-from-rot="-15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={130} />
      </div>

      {/* ada0 – small accent left of hero */}
      <img
        src="../menu/ada0.png"
        alt="Featured Dish"
        data-from-x="-15"
        data-from-rot="-10"
        className="food-item absolute object-cover"
        style={{ width: "153.86px", height: "202.9px", left: "187px", top: "171px" }}
      />

      {/* 1meal – dish detail right (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "341px", height: "321px", left: "853px", top: "621px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/1meal.png"
          alt="Dish detail"
          data-from-x="20"
          data-from-rot="15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={110} />
      </div>

      {/* ada2 – small bite left */}
      <img
        src="../menu/ada2.png"
        alt="Small bite"
        data-from-x="-15"
        data-from-rot="-10"
        className="food-item absolute object-cover"
        style={{ width: "118px", height: "105px", left: "158px", top: "994px" }}
      />

      {/* 2meal – grid left (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "376px", height: "381px", left: "256px", top: "1099px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/2meal.png"
          alt="Dish"
          data-from-x="-20"
          data-from-rot="-15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={120} />
      </div>

      {/* 3meal – grid right (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "240px", height: "245px", left: "966px", top: "1108px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/3meal.png"
          alt="Dish detail"
          data-from-x="20"
          data-from-rot="12"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={90} />
      </div>

      {/* ada3 – small center accent */}
      <img
        src="../menu/ada3.png"
        alt="Food element"
        data-from-x="15"
        data-from-rot="10"
        className="food-item absolute object-cover"
        style={{ width: "142.97px", height: "159.44px", left: "664px", top: "1219px" }}
      />

      {/* ada4 – partial overflow left edge */}
      <div
        className="absolute left-0 overflow-hidden"
        style={{ width: "158px", height: "251px", top: "1465px" }}
      >
        <img
          src="../menu/ada4.png"
          alt="Decorative element"
          data-from-x="-20"
          data-from-rot="-8"
          className="food-item absolute top-0 object-cover"
          style={{ width: "248px", height: "251px", left: "-62px" }}
        />
      </div>

      {/* 4meal – large right plate (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{
          width: "476.75px",
          height: "469.71px",
          left: "883.63px",
          top: "1488.64px",
        }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/4meal.png"
          alt="Dish detail"
          data-from-x="20"
          data-from-rot="15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={140} />
      </div>

      {/* 5meal – large left plate (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "357px", height: "366px", left: "215px", top: "1899px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/5meal.png"
          alt="Dish detail"
          data-from-x="-20"
          data-from-rot="-15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={120} />
      </div>

      {/* ada5 – floating ingredient */}
      <img
        src="../menu/ada5.png"
        alt="Floating ingredient"
        data-from-y="30"
        data-from-x="15"
        data-from-rot="10"
        className="food-item absolute object-cover"
        style={{ width: "146.56px", height: "148.27px", left: "788.72px", top: "2043.37px" }}
      />

      {/* 6meal – right side lower (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "312px", height: "315px", left: "937px", top: "2206px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/6meal.png"
          alt="Cheese Chutney Toastie"
          data-from-x="20"
          data-from-rot="15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={110} />
      </div>

      {/* Spice jar & detail element (small decorative, no hover) */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/a0ab04ef-13fb-43dc-841c-618fb4777ecf.png"
        alt="Spice container"
        data-from-x="-15"
        data-from-rot="-10"
        className="food-item absolute object-contain"
        style={{ width: "100px", height: "69px", left: "115px", top: "2752.96px" }}
      />
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/c260c276-f4d7-4928-bba3-c563a6b20f8c.png"
        alt="Detail element"
        data-from-x="-10"
        data-from-rot="-8"
        className="food-item absolute object-contain"
        style={{ width: "92.9px", height: "93.6px", left: "120.59px", top: "2652px" }}
      />

      {/* 7meal – large collage group left (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "530.45px", height: "396.59px", left: "295px", top: "2740px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/7meal.png"
          alt="Main dish"
          data-from-x="-20"
          data-from-rot="-15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={140} />
      </div>

      {/* ada8 – large plate right (hover) */}
      <div
        className="absolute cursor-pointer"
        style={{ width: "400.67px", height: "482.12px", left: "939.07px", top: "2795.88px" }}
        onMouseEnter={handleFoodEnter}
        onMouseLeave={handleFoodLeave}
      >
        <img
          src="../menu/ada8.png"
          alt="Large food plate"
          data-from-x="20"
          data-from-rot="15"
          className="food-item w-full h-full object-cover"
        />
        <DiscoverOverlay size={130} />
      </div>

      {/* ada9 – side dish bottom left */}
      <img
        src="../menu/ada9.png"
        alt="Side dish"
        data-from-x="-15"
        data-from-rot="-10"
        className="food-item absolute object-cover"
        style={{ width: "180.89px", height: "200.93px", left: "136px", top: "3193px" }}
      />

      {/* ── CTA: See the Full Menu ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
        aria-label="See the full menu"
        className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 border-none bg-transparent p-0 cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuHovered ? "scale-105" : "scale-100"
        }`}
        style={{ width: "181px", height: "112px", top: "3338px" }}
      >
        <span
          className="text-white text-center self-stretch shrink-0"
          style={{
            fontSize: "24px",
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 400,
            lineHeight: "30.2px",
          }}
        >
          See the full menu
        </span>
        <div className="relative w-[66px] h-[66px]">
          <div
            className={`absolute inset-0 rounded-lg transition-colors duration-200 ${
              isMenuHovered ? "bg-[rgba(240,240,240,1)]" : "bg-white"
            }`}
          />
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/78a0e72e-ff2b-48b6-922e-04123c7b794e.svg"
            alt="Arrow"
            className="absolute w-6 h-6"
            style={{ left: "21px", top: "21px" }}
          />
        </div>
      </button>
    </div>
  );
}
