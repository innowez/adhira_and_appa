"use client";

import { useRef, useCallback, useState, useEffect } from "react";
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

// Desktop stroke path positions (top/height in section px)
const DESKTOP_STROKE_DEFS = [
  { cls: ".path-p1", top: 453.5, h: 261 },
  { cls: ".path-p2", top: 866, h: 660 },
  { cls: ".path-p3", top: 1778, h: 651 },
  { cls: ".path-p4", top: 2560.5, h: 250 },
  { cls: ".path-p5", top: 3011, h: 260 },
] as const;

// Mobile stroke path positions — from FoodMenuHero Figma reference
const MOBILE_STROKE_DEFS = [
  { cls: ".path-p1", top: 231.63, h: 164 },
  { cls: ".path-p3", top: 462.56, h: 374 },
  { cls: ".path-p4", top: 956, h: 346 },
  { cls: ".path-p2", top: 1339.24, h: 177 },
  { cls: ".path-p5", top: 1642.5, h: 132 },
] as const;

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const SECTION_H = isMobile ? 1907 : 3600;

  useGSAP(
    () => {
      const TOTAL = 100;
      const scrollRange = SECTION_H + window.innerHeight;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Filled vector clip-path reveal
      const filledWrapper =
        sectionRef.current?.querySelector<HTMLElement>(".svg-vector-filled");
      if (filledWrapper) {
        const vTop = isMobile ? 4 : 6.5;
        const vH = isMobile ? 169 : 281;
        gsap.set(filledWrapper, { clipPath: "inset(0 0 100% 0)" });
        masterTl.to(
          filledWrapper,
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            duration: (vH / scrollRange) * TOTAL,
          },
          (vTop / scrollRange) * TOTAL,
        );
      }

      const strokeDefs = isMobile ? MOBILE_STROKE_DEFS : DESKTOP_STROKE_DEFS;
      strokeDefs.forEach(({ cls, top, h }) => {
        const path = sectionRef.current?.querySelector<SVGPathElement>(cls);
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        masterTl.to(
          path,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: (h / scrollRange) * TOTAL,
          },
          (top / scrollRange) * TOTAL,
        );
      });

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
          },
        );
      });
    },
    {
      scope: sectionRef,
      dependencies: [isMobile, SECTION_H],
      revertOnUpdate: true,
    },
  );

  const handleFoodEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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
  }, []);

  const handleFoodLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative mx-auto overflow-hidden bg-[rgba(255,81,0,1)]"
      style={{
        width: "100%",
        maxWidth: isMobile ? "393px" : "1440px",
        height: `${SECTION_H}px`,
      }}
    >
      {/* Background texture */}
      <div
        className="absolute left-0 top-[6px] w-full overflow-hidden bg-brand-orange"
        style={{ height: `${SECTION_H - 6}px` }}
      >
        <div
          className="absolute"
          style={{
            width: isMobile ? "403px" : "1460px",
            height: `${SECTION_H}px`,
            left: "-10px",
            top: "-4px",
          }}
        >
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/e72ab957-0669-4d32-b605-b792a057d40a.svg"
            alt="Texture Overlay"
            className="absolute left-0 top-1 object-cover"
            style={{
              width: isMobile ? "403px" : "1460px",
              height: `${SECTION_H}px`,
            }}
          />
        </div>
      </div>

      {isMobile ? (
        // ─────────────────────────────────────────────────────────────────
        // MOBILE LAYOUT — 393×1907, exact positions from FoodMenuHero
        // ─────────────────────────────────────────────────────────────────
        <>
          {/* Filled vector — left:245, top:4 */}
          <div
            className="svg-vector-filled absolute overflow-hidden"
            style={{
              left: "245px",
              top: "4px",
              width: "52px",
              height: "169px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="169"
              fill="none"
              viewBox="0 0 52 169"
            >
              <path
                fill="#fff"
                d="M52 1.072a291 291 0 0 0-4.762 7.242C32.63 31.668 18.708 56.282 11.83 83.18c-5.698 24.365-7.97 49.672-7.913 74.778.02 2.974.074 5.976.207 8.821a2.2 2.2 0 0 1-.497 1.52c-.35.416-.84.668-1.364.699a1.9 1.9 0 0 1-1.426-.534 2.15 2.15 0 0 1-.653-1.451C.054 164 .011 161.008 0 157.977c.025-25.442 2.393-50.991 8.265-75.765C15.502 54.381 29.61 29.81 44.422 6.26 46.015 3.788 47.02 2.395 48.666 0c.282 0 2.427.357 3.334 1.072"
              />
            </svg>
          </div>

          {/* p1 — left:54.79, top:231.63 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="213"
            height="164"
            fill="none"
            viewBox="0 0 213 164"
            className="absolute"
            style={{ left: "54.79px", top: "231.63px" }}
          >
            <path
              className="path-p1"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              d="M210.714 14.875c-19.08 52.219-82.66 59.5-128 59.5-87.5 0-84.21-44.69-79-57.5 12-29.5 70.332-15.5 86 33 8.994 27.842 4.5 56-2 83-4.454 18.5 0 29 0 29"
            />
          </svg>

          {/* p3 — left:27.71, top:462.56 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="374"
            fill="none"
            viewBox="0 0 192 374"
            className="absolute"
            style={{ left: "130px", top: "462.56px" }}
          >
            <path
              className="path-p3"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              d="M1.5 1.5C1.43 57.095 41.89 103.438 79.374 128.943c48.5 33 114 15.5 110.5-13.5-3.312-27.444-61.588-34.637-93 5.5-18.033 23.042-12 69-41 88.5-22.208 14.934-47 28-45 62 1.824 31 23.68 42.364 35 69 8.271 19.463 5 31.5 5 31.5"
            />
          </svg>

          {/* p4 — left:174.36, top:956 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="199"
            height="346"
            fill="none"
            viewBox="0 0 199 346"
            className="absolute"
            style={{ left: "174.36px", top: "956px" }}
          >
            <path
              className="path-p4"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              d="M19.641 1.5c1.015 14.738-10.835 32.66-7.5 47C16.215 66.014 27.2 74.644 43.641 73c20-2 35.164-19.53 52-24.5 19.801-5.845 36.809-6.768 56.5 0 23.127 7.95 39.8 29.158 43.5 54 3.969 26.648-1.443 41-11.5 57-12.257 19.5-53.674 41.736-88.5 26.5-32-14-52-8-76 18.5-6.243 6.894-37.5 54.968 0 96.5 11.2 12.403 34 18 44.5 43"
            />
          </svg>

          {/* p2 — left:55.84, top:1339.24 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="193"
            height="177"
            fill="none"
            viewBox="0 0 193 177"
            className="absolute"
            style={{ left: "55.84px", top: "1339.24px" }}
          >
            <path
              className="path-p2"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              d="M190.87 27.634c-19.08 52.219-70.374 60.125-115.714 60.125-87.5 0-84-66-56-81.499 30.34-16.794 86 12 76.5 68.5-7.15 42.517-21.286 43.874-27.786 70.874-4.454 18.5 0 29 0 29"
            />
          </svg>

          {/* p5 — left:190, top:1642.5 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="132"
            fill="none"
            viewBox="0 0 25 132"
            className="absolute"
            style={{ left: "190px", top: "1642.5px" }}
          >
            <path
              className="path-p5"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              d="M1.5 1.5s16.488 35.266 20 60c3.671 25.855-3.5 69-3.5 69"
            />
          </svg>

          {/* ── Text Group 1 — left:178, top:170 ── */}
          <div
            className="absolute"
            style={{
              left: "178px",
              top: "170px",
              width: "160px",
              height: "72px",
            }}
          >
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/2d7bff9b-6e49-490a-8caf-8dd37be28e23.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "12.18px",
                height: "16.22px",
                left: "37.16px",
                top: "0.3px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/6594766e-ef79-4002-8905-ff62456586d3.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "19px",
                height: "21px",
                left: "4.69px",
                top: "0px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/5d42a6a0-a0c3-43e0-8815-1d45de8abd51.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "18.49px",
                height: "4.78px",
                left: "0px",
                top: "34.88px",
              }}
            />
            <span
              className="absolute text-white text-center"
              style={{
                width: "149.63px",
                fontSize: "16px",
                fontFamily: '"Recoleta Alt", sans-serif',
                fontWeight: 400,
                lineHeight: "21.8px",
                left: "10.38px",
                top: "28px",
              }}
            >
              The traditional meets the global.
            </span>
          </div>

          {/* ── Text Group 2 — left:28, top:353 ── */}
          <div
            className="absolute"
            style={{
              left: "28px",
              top: "353px",
              width: "174px",
              height: "89px",
            }}
          >
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/4ad3cc37-6da2-47e4-b17b-2a39865f249b.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "76.29px",
                height: "66.81px",
                left: "0px",
                top: "0px",
              }}
            />
            <span
              className="absolute text-white text-center"
              style={{
                width: "125px",
                fontSize: "16px",
                fontFamily: '"Recoleta Alt", sans-serif',
                fontWeight: 400,
                lineHeight: "21.8px",
                left: "48.95px",
                top: "45px",
                whiteSpace: "pre-line",
              }}
            >
              {"The rooted meets\nthe refined."}
            </span>
          </div>

          {/* ── Text Group 3 — left:117, top:847 ── */}
          <div
            className="absolute"
            style={{
              left: "117px",
              top: "847px",
              width: "159px",
              height: "97px",
            }}
          >
            <span
              className="absolute text-white text-center"
              style={{
                width: "159px",
                fontSize: "16px",
                fontFamily: '"Recoleta Alt", sans-serif',
                fontWeight: 400,
                lineHeight: "21.8px",
                left: "0px",
                top: "0px",
                whiteSpace: "pre-line",
              }}
            >
              {"The familiar meets the\nunexpected."}
            </span>
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/a005a6c4-b53d-4ced-bd08-336e8780f579.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "28.47px",
                height: "43.02px",
                left: "19.27px",
                top: "54px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/5d89bf54-c8d5-446c-b9fb-f7c1db539658.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "10.15px",
                height: "37.46px",
                left: "71.43px",
                top: "58.77px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/d4180b6b-470e-464b-a14a-1b2bdcd401a8.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "27px",
                height: "34px",
                left: "102px",
                top: "57px",
              }}
            />
          </div>

          {/* ── Text Group 4 — left:148, top:1236 ── */}
          <div
            className="absolute"
            style={{
              left: "148px",
              top: "1236px",
              width: "266px",
              height: "116.4px",
            }}
          >
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/692cde05-7ce3-4af1-9d81-ba5c930ed29a.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "99.1px",
                height: "101.2px",
                left: "167px",
                top: "0px",
              }}
            />
            <span
              className="absolute text-white text-center"
              style={{
                width: "206px",
                fontSize: "16px",
                fontFamily: '"Recoleta Alt", sans-serif',
                fontWeight: 400,
                lineHeight: "21.8px",
                left: "0px",
                top: "72.4px",
                whiteSpace: "pre-line",
              }}
            >
              {"Everything you love. Nothing\nlike you've had."}
            </span>
          </div>

          {/* ── Mobile food images ── */}

          {/* ada0 — left:13, top:56.4 */}
          <img
            src="../menu/ada0.png"
            alt="Featured Dish"
            data-from-x="-10"
            data-from-rot="-8"
            className="food-item absolute object-cover"
            style={{
              width: "52.73px",
              height: "69.66px",
              left: "13px",
              top: "56.4px",
            }}
          />

          {/* 0meal — left:43.52, top:46 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "157.73px",
              height: "160px",
              left: "43.52px",
              top: "46px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/0meal.png"
              alt="Medhu Vada Waffle"
              data-from-x="-12"
              data-from-rot="-10"
              className="food-item w-full h-full object-cover"
            />
            <DiscoverOverlay size={50} />
          </div>

          {/* ada1 — left:323, top:114 */}
          <img
            src="../menu/ada1.png"
            alt="Food item"
            data-from-x="12"
            data-from-rot="10"
            className="food-item absolute object-cover"
            style={{
              width: "118px",
              height: "118px",
              left: "323px",
              top: "114px",
            }}
          />

          {/* 1meal — left:233, top:375 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "142px",
              height: "134px",
              left: "233px",
              top: "375px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/1meal.png"
              alt="Dish detail"
              data-from-x="12"
              data-from-rot="10"
              className="food-item w-full h-full object-cover"
            />
            <DiscoverOverlay size={45} />
          </div>

          {/* ada2 — left:45, top:480 */}
          <img
            src="../menu/ada2.png"
            alt="Small bite"
            data-from-x="-10"
            data-from-rot="-8"
            className="food-item absolute object-cover"
            style={{
              width: "40px",
              height: "33.75px",
              left: "45px",
              top: "480px",
            }}
          />

          {/* 2meal — left:41, top:497 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "140px",
              height: "142px",
              left: "41px",
              top: "497px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/2meal.png"
              alt="Dish"
              data-from-x="-12"
              data-from-rot="-10"
              className="food-item w-full h-full object-cover"
            />
            <DiscoverOverlay size={45} />
          </div>

          {/* 3meal — left:292, top:650 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "122px",
              height: "125px",
              left: "292px",
              top: "650px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/3meal.png"
              alt="Dish detail"
              data-from-x="12"
              data-from-rot="10"
              className="food-item w-full h-full object-cover"
            />
            <DiscoverOverlay size={40} />
          </div>

          {/* ada3 — left:161, top:684, w:87.8, h:93.73 */}
          <img
            src="../menu/ada3.png"
            alt="Food element"
            data-from-x="10"
            data-from-rot="8"
            className="food-item absolute object-cover"
            style={{
              width: "87.8px",
              height: "93.73px",
              left: "161px",
              top: "684px",
            }}
          />

          {/* ada4 — left:0, top:821, overflow clip */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: "0px",
              top: "821px",
              width: "71.13px",
              height: "113px",
            }}
          >
            <img
              src="../menu/ada4.png"
              alt="Decorative element"
              data-from-x="-12"
              data-from-rot="-8"
              className="food-item absolute top-0 object-cover"
              style={{ width: "111.66px", height: "113px", left: "-40.52px" }}
            />
          </div>

          {/* 4meal — left:239, top:1013 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "111px",
              height: "109px",
              left: "239px",
              top: "1013px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/4meal.png"
              alt="Dish detail"
              data-from-x="12"
              data-from-rot="10"
              className="food-item w-full h-full object-cover"
            />
            <DiscoverOverlay size={35} />
          </div>

          {/* 5meal — left:-40, top:1029 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "222px",
              height: "227px",
              left: "-40px",
              top: "1029px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/5meal.png"
              alt="Dish detail"
              data-from-x="-12"
              data-from-rot="-10"
              className="food-item w-full h-full object-cover"
            />
            <DiscoverOverlay size={65} />
          </div>

          {/* ada5 — left:210, top:1127.81, w:92.82, h:88.02 */}
          <img
            src="../menu/ada5.png"
            alt="Floating ingredient"
            data-from-y="15"
            data-from-x="10"
            data-from-rot="8"
            className="food-item absolute object-cover"
            style={{
              width: "92.82px",
              height: "88.02px",
              left: "210px",
              top: "1127.81px",
            }}
          />

          {/* ada6 — left:36.35, top:1364.06, w:39.02, h:36.85 */}
          <img
            src="../menu/ada6.png"
            alt="Food element"
            data-from-x="-8"
            data-from-rot="-6"
            className="food-item absolute object-cover"
            style={{
              width: "39.02px",
              height: "36.85px",
              left: "36.35px",
              top: "1364.06px",
            }}
          />

          {/* ada7 — left:34, top:1403.83 */}
          <img
            src="../menu/ada7.png"
            alt="Food element"
            data-from-x="-8"
            data-from-rot="-5"
            className="food-item absolute object-cover"
            style={{
              width: "42px",
              height: "27.19px",
              left: "34px",
              top: "1403.83px",
            }}
          />

          {/* 6meal — left:280, top:1372 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "168.3px",
              height: "170px",
              left: "280px",
              top: "1372px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/6meal.png"
              alt="Cheese Chutney Toastie"
              data-from-x="15"
              data-from-rot="10"
              className="food-item w-full h-full object-cover"
            />
            <DiscoverOverlay size={55} />
          </div>

          {/* 7meal — left:75, top:1457 */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "197.06px",
              height: "209.47px",
              left: "75px",
              top: "1457px",
            }}
            onMouseEnter={handleFoodEnter}
            onMouseLeave={handleFoodLeave}
          >
            <img
              src="../menu/7meal.png"
              alt="Main dish"
              data-from-x="-12"
              data-from-rot="-10"
              className="food-item w-full h-full object-contain"
            />
            <DiscoverOverlay size={65} />
          </div>

          {/* <div
            className="absolute cursor-pointer"
            style={{
              width: "173px",
              height: "92.89px",
              top: "6030px",
              left: "233px",
            }}
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
          </div> */}

          {/* ada9 — left:-14, top:1486.88, w:71.53, h:80.97 */}
          <img
            src="../menu/ada9.png"
            alt="Side dish"
            data-from-x="-10"
            data-from-rot="-8"
            className="food-item absolute object-cover"
            style={{
              width: "71.53px",
              height: "80.97px",
              left: "-14px",
              top: "1486.88px",
            }}
          />

          {/* CTA — left:136, top:1783 */}
          <div
            style={{
              width: "121px",
              height: "76px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              position: "absolute",
              left: "136px",
              top: "1783px",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "16px",
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              See the full menu
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
              aria-label="See the full menu"
              style={{
                width: "40px",
                height: "40px",
                position: "relative",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                transform: isMenuHovered ? "scale(1.1)" : "scale(1)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  transition: "box-shadow 0.2s ease-in-out",
                  boxShadow: isMenuHovered
                    ? "0 4px 12px rgba(0,0,0,0.2)"
                    : "none",
                }}
              />
              <img
                src="https://storage.googleapis.com/storage.magicpath.ai/user/411705771756236800/figma-assets/d644fe2f-4b0f-4e6f-80de-33639bc6764e.svg"
                alt="Arrow icon"
                style={{
                  width: "21px",
                  height: "21px",
                  position: "absolute",
                  left: "9.5px",
                  top: "10px",
                }}
              />
            </button>
          </div>
        </>
      ) : (
        // ─────────────────────────────────────────────────────────────────
        // DESKTOP LAYOUT (unchanged)
        // ─────────────────────────────────────────────────────────────────
        <>
          {/* Filled vector */}
          <div
            className="svg-vector-filled absolute overflow-hidden"
            style={{
              left: "916.18px",
              top: "6.5px",
              width: "93px",
              height: "281px",
            }}
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

          {/* p1 */}
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

          {/* p2 */}
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

          {/* p3 */}
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

          {/* p4 */}
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

          {/* p5 */}
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
            style={{
              width: "360px",
              height: "191px",
              left: "733px",
              top: "238px",
            }}
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
              style={{
                width: "39.46px",
                height: "52.57px",
                left: "120.44px",
                top: "0.98px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/1215c812-d5c4-4780-86aa-0abc43f12309.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "59px",
                height: "68px",
                left: "16.3px",
                top: "0px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/46e17fc6-d5a2-4078-ae7f-96d487ee312a.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "59.94px",
                height: "15.49px",
                left: "0px",
                top: "113.04px",
              }}
            />
          </section>

          <section
            className="absolute"
            style={{
              width: "378.96px",
              height: "200px",
              left: "189.04px",
              top: "644px",
            }}
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
            style={{
              width: "384px",
              height: "178px",
              left: "478px",
              top: "1540px",
            }}
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
              style={{
                width: "66px",
                height: "63px",
                left: "71px",
                top: "115px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/26b003eb-a597-4fd7-ae06-62517bc5e82b.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "17px",
                height: "58px",
                left: "183px",
                top: "118px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/eeed3cde-6636-4628-99f4-ad87fc0ba3bc.svg"
              alt=""
              aria-hidden
              className="absolute"
              style={{
                width: "70.97px",
                height: "53.23px",
                left: "259.23px",
                top: "115px",
              }}
            />
          </section>

          <section
            className="absolute"
            style={{
              width: "469.04px",
              height: "193px",
              left: "226px",
              top: "2390px",
            }}
          >
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/f4f6c214-b7d7-4a8a-bbde-dcce781cfe8a.svg"
              alt=""
              aria-hidden
              className="absolute top-0"
              style={{
                width: "134.66px",
                height: "150.82px",
                left: "334.38px",
              }}
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

          {/* ── Desktop food images ── */}

          <img
            src="../menu/ada1.png"
            alt="Food item"
            data-from-x="20"
            data-from-rot="15"
            className="food-item absolute object-cover"
            style={{
              width: "255px",
              height: "255px",
              left: "1068px",
              top: "393px",
            }}
          />

          <div
            className="absolute cursor-pointer"
            style={{
              width: "459.87px",
              height: "466.5px",
              left: "276px",
              top: "140.69px",
            }}
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

          <img
            src="../menu/ada0.png"
            alt="Featured Dish"
            data-from-x="-15"
            data-from-rot="-10"
            className="food-item absolute object-cover"
            style={{
              width: "153.86px",
              height: "202.9px",
              left: "187px",
              top: "171px",
            }}
          />

          <div
            className="absolute cursor-pointer"
            style={{
              width: "341px",
              height: "321px",
              left: "853px",
              top: "621px",
            }}
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

          <img
            src="../menu/ada2.png"
            alt="Small bite"
            data-from-x="-15"
            data-from-rot="-10"
            className="food-item absolute object-cover"
            style={{
              width: "118px",
              height: "105px",
              left: "158px",
              top: "994px",
            }}
          />

          <div
            className="absolute cursor-pointer"
            style={{
              width: "376px",
              height: "381px",
              left: "256px",
              top: "1099px",
            }}
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

          <div
            className="absolute cursor-pointer"
            style={{
              width: "240px",
              height: "245px",
              left: "966px",
              top: "1108px",
            }}
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

          <img
            src="../menu/ada3.png"
            alt="Food element"
            data-from-x="15"
            data-from-rot="10"
            className="food-item absolute object-cover"
            style={{
              width: "142.97px",
              height: "159.44px",
              left: "664px",
              top: "1219px",
            }}
          />

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

          <div
            className="absolute cursor-pointer"
            style={{
              width: "357px",
              height: "366px",
              left: "215px",
              top: "1899px",
            }}
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

          <img
            src="../menu/ada5.png"
            alt="Floating ingredient"
            data-from-y="30"
            data-from-x="15"
            data-from-rot="10"
            className="food-item absolute object-cover"
            style={{
              width: "146.56px",
              height: "148.27px",
              left: "788.72px",
              top: "2043.37px",
            }}
          />

          <div
            className="absolute cursor-pointer"
            style={{
              width: "312px",
              height: "315px",
              left: "937px",
              top: "2206px",
            }}
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

          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/a0ab04ef-13fb-43dc-841c-618fb4777ecf.png"
            alt="Spice container"
            data-from-x="-15"
            data-from-rot="-10"
            className="food-item absolute object-contain"
            style={{
              width: "100px",
              height: "69px",
              left: "115px",
              top: "2752.96px",
            }}
          />
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/c260c276-f4d7-4928-bba3-c563a6b20f8c.png"
            alt="Detail element"
            data-from-x="-10"
            data-from-rot="-8"
            className="food-item absolute object-contain"
            style={{
              width: "92.9px",
              height: "93.6px",
              left: "120.59px",
              top: "2652px",
            }}
          />

          <div
            className="absolute cursor-pointer"
            style={{
              width: "530.45px",
              height: "396.59px",
              left: "295px",
              top: "2740px",
            }}
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

          <div
            className="absolute cursor-pointer"
            style={{
              width: "400.67px",
              height: "482.12px",
              left: "939.07px",
              top: "2795.88px",
            }}
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

          <img
            src="../menu/ada9.png"
            alt="Side dish"
            data-from-x="-15"
            data-from-rot="-10"
            className="food-item absolute object-cover"
            style={{
              width: "180.89px",
              height: "200.93px",
              left: "136px",
              top: "3193px",
            }}
          />

          {/* ── Desktop CTA ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            aria-label="See the full menu"
            className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 border-none bg-transparent p-0 cursor-pointer transition-transform duration-200 ease-in-out ${isMenuHovered ? "scale-105" : "scale-100"}`}
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
                className={`absolute inset-0 rounded-lg transition-colors duration-200 ${isMenuHovered ? "bg-[rgba(240,240,240,1)]" : "bg-white"}`}
              />
              <img
                src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/78a0e72e-ff2b-48b6-922e-04123c7b794e.svg"
                alt="Arrow"
                className="absolute w-6 h-6"
                style={{ left: "21px", top: "21px" }}
              />
            </div>
          </button>
        </>
      )}
    </div>
  );
}
