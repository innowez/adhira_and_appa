"use client";

import { useState } from "react";

const QUOTE_ICON =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/d08e306b-c190-4122-b93c-80001e99ee95.svg";

const USER_ICON =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/8a9c7bd8-8ce2-4a3b-ad0a-51e0fc7dfb0e.svg";

const TESTIMONIALS = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Adhithya P",
    location: "Bangalore",
  },
  {
    text: "The coffee here is unlike anything I've had in India. Rich, smooth, and perfectly balanced.",
    name: "Priya M",
    location: "Mumbai",
  },
  {
    text: "Adhira & Appa feels like a second home. The ambiance, the staff, the coffee — all perfect.",
    name: "Karan S",
    location: "Hyderabad",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative bg-brand-orange overflow-x-clip py-20 lg:py-0 lg:h-[952px] lg:flex lg:items-center lg:justify-center"
    >
      <img
        src="../testmoney-rectangle.svg"
        alt=""
        className="absolute object-cover top-[-22px] left-0 h-[26px]"
      />
      <img
        src="../testmoney-rectangle2.svg"
        alt=""
        className="absolute object-cover bottom-[-22px] left-0 h-[26px]"
      />

      <div className="w-full max-w-[1296px] px-5 sm:px-8 lg:px-10">
        {/* Header — title left, counter right on all sizes */}
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white font-recoleta font-semibold leading-tight text-[32px] sm:text-[40px] md:text-[48px]">
            No happy hours here.
            <br />
            Only happier ones.
          </h2>

          <div className="flex justify-between">
            <h2 className="text-white text-base lg:text-[28px]">
              From those who walk-in
            </h2>
            <span className="text-white font-outfit text-[18px] sm:text-[22px] lg:text-[26px]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Desktop: Prev | quote | Next side-by-side (matches Figma) */}
        <div className="hidden lg:flex items-center justify-between">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-white text-[26px] font-outfit rotate-180 inline-block">
              →
            </span>
            <span className="text-white text-[26px] font-outfit">Prev</span>
          </button>

          <div className="text-center max-w-[600px]">
            <img src={QUOTE_ICON} alt="" aria-hidden className="mb-6 mx-auto" />
            <p className="text-white text-[24px] font-outfit leading-[1.4]">
              {current.text}
            </p>
          </div>

          <button
            onClick={() =>
              setIndex((i) => Math.min(TESTIMONIALS.length - 1, i + 1))
            }
            disabled={index === TESTIMONIALS.length - 1}
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-white text-[26px] font-outfit">Next</span>
            <span className="text-white text-[26px] font-outfit">→</span>
          </button>
        </div>

        {/* Mobile: quote stacked, nav below */}
        <div className="lg:hidden flex flex-col items-center">
          <div className="w-full text-center">
            <img
              src={QUOTE_ICON}
              alt=""
              aria-hidden
              className="mx-auto mb-5 w-8 sm:w-10"
            />
            <p className="text-white font-outfit leading-relaxed text-[18px] sm:text-[22px]">
              {current.text}
            </p>
            <img
              src={QUOTE_ICON}
              alt=""
              aria-hidden
              className="mx-auto mt-5 w-8 sm:w-10 rotate-180"
            />
          </div>

          <div className="w-full max-w-[400px] flex items-center justify-between mt-10">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex items-center gap-3 bg-transparent border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-white text-[20px] sm:text-[24px] rotate-180 inline-block">
                →
              </span>
              <span className="text-white font-outfit text-[18px] sm:text-[22px]">
                Prev
              </span>
            </button>

            <button
              onClick={() =>
                setIndex((i) => Math.min(TESTIMONIALS.length - 1, i + 1))
              }
              disabled={index === TESTIMONIALS.length - 1}
              className="flex items-center gap-3 bg-transparent border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-white font-outfit text-[18px] sm:text-[22px]">
                Next
              </span>
              <span className="text-white text-[20px] sm:text-[24px]">→</span>
            </button>
          </div>
        </div>

        {/* User info — centered on all sizes */}
        <div className="mt-14 lg:mt-20 flex justify-center items-center gap-4 sm:gap-6">
          <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[76px] lg:h-[76px] rounded-full border border-white flex items-center justify-center">
            <img
              src={USER_ICON}
              alt={current.name}
              className="w-8 sm:w-10 lg:w-auto"
            />
          </div>
          <div className="text-white">
            <p className="m-0 font-outfit text-[24px] sm:text-[28px] lg:text-[32px]">
              {current.name}
            </p>
            <p className="m-0 opacity-80 font-outfit text-[16px] sm:text-[18px] lg:text-[20px]">
              {current.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
