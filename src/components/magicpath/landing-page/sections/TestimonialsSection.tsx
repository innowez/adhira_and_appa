"use client";

import { useState } from "react";

const QUOTE_ICON =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/d08e306b-c190-4122-b93c-80001e99ee95.svg";

const USER_ICON =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/8a9c7bd8-8ce2-4a3b-ad0a-51e0fc7dfb0e.svg";

const TOP_ZIG = "../testmoney-rectangle.svg";
const TOP_ZIG2 = "../testmoney-rectangle2.svg";

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
      className="relative bg-brand-orange py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Top Shape */}
      <img
        src={TOP_ZIG}
        alt=""
        className="absolute top-[-22px] left-0 w-full h-[26px]"
      />

      {/* Bottom Shape */}
      <img
        src={TOP_ZIG2}
        alt=""
        className="absolute bottom-[-22px] left-0 w-full h-[26px]"
      />

      <div className="w-full max-w-[1296px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white font-recoleta font-semibold leading-tight text-[32px] sm:text-[40px] md:text-[48px]">
            No happy hours here.
            <br />
            Only happier ones.
          </h2>

          <span className="text-white font-outfit text-[18px] sm:text-[22px] md:text-[26px]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col items-center">
          <div className="max-w-full md:max-w-[650px] text-center">
            <img
              src={QUOTE_ICON}
              alt=""
              aria-hidden
              className="mx-auto mb-5 sm:mb-6 w-8 sm:w-10 md:w-auto"
            />

            <p className="text-white font-outfit leading-relaxed text-[18px] sm:text-[22px] md:text-[24px]">
              {current.text}
            </p>
          </div>

        

          {/* User Info */}
          <div className="mt-14 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[76px] md:h-[76px] rounded-full border border-white flex items-center justify-center">
              <img
                src={USER_ICON}
                alt={current.name}
                className="w-8 sm:w-10 md:w-auto"
              />
            </div>

            <div className="text-white">
              <p className="m-0 font-outfit text-[24px] sm:text-[18px] md:text-[32px]">
                {current.name}
              </p>

              <p className="m-0 opacity-80 font-outfit text-[16px] sm:text-[18px] md:text-[20px]">
                {current.location}
              </p>
            </div>
          </div>

            {/* Navigation */}
          <div className="w-full max-w-[700px] px-4 sm:px-8 flex items-center justify-between mt-10 sm:mt-12">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex items-center gap-3 bg-transparent border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-white text-[20px] sm:text-[24px] md:text-[26px] rotate-180 inline-block">
                →
              </span>

              <span className="text-white font-outfit text-[18px] sm:text-[22px] md:text-[26px]">
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
              <span className="text-white font-outfit text-[18px] sm:text-[22px] md:text-[26px]">
                Next
              </span>

              <span className="text-white text-[20px] sm:text-[24px] md:text-[26px]">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}