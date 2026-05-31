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
      className="h-[952px] bg-brand-orange flex items-center justify-center relative"
    >
      <img src={TOP_ZIG} className="absolute top-[-22px] w-full h-[26px]" />
      <img src={TOP_ZIG2} className="absolute bottom-[-22px] w-full h-[26px]" />

      <div className="w-full max-w-[1296px] px-10">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-white text-[48px] font-recoleta font-semibold m-0">
            No happy hours here.
            <br />
            Only happier ones.
          </h2>
          <span className="text-white text-[26px] font-outfit">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center justify-between">
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

        <div className="mt-20 flex justify-center items-center gap-6">
          <div className="w-[76px] h-[76px] rounded-full border border-white flex items-center justify-center">
            <img src={USER_ICON} alt={current.name} />
          </div>
          <div className="text-white">
            <p className="text-[32px] font-outfit m-0">{current.name}</p>
            <p className="text-[20px] font-outfit m-0 opacity-80">
              {current.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
