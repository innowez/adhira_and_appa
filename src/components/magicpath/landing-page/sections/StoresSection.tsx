"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BASE =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/";

const STORES = [
  {
    city: "Bangalore",
    desc: "Coffee capital, meet your match.",
    img: "4bc88172-8ffe-47ed-b4b6-ad62da8f88a1.jpg",
  },
  {
    city: "Chandigarh",
    desc: "Filter coffee goes north.",
    img: "ff5bb38c-8be8-44c7-b54d-5806f016f899.jpg",
  },
  {
    city: "Hyderabad",
    desc: "Chai country, converted.",
    img: "700d9b8d-6def-4467-b1aa-55444c9747f7.jpg",
  },
  {
    city: "Mumbai",
    desc: "The city finally sits down.",
    img: "7b6eb9a2-cba3-4fae-9bda-e38f0cf97e23.jpg",
  },
  {
    city: "Pune",
    desc: "Good mornings start here.",
    img: "700d9b8d-6def-4467-b1aa-55444c9747f7.jpg",
  },
  {
    city: "Chennai",
    desc: "Home ground.",
    img: "7b6eb9a2-cba3-4fae-9bda-e38f0cf97e23.jpg",
  },
];

export function StoresSection() {
  return (
    <section
      id="our_stores"
      className="bg-brand-orange/10 py-16 sm:py-24 lg:py-[120px] px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-[1360px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-recoleta font-semibold text-brand-navy mb-3 sm:mb-4 leading-tight">
          The best part of your day <br />
          has an address
        </h2>

        <p className="text-base sm:text-xl lg:text-[26px] font-outfit text-brand-navy mb-8 sm:mb-10 lg:mb-12">
          Walk-in, sit down and you'll know you belong there
        </p>

        {/* Search */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 w-full">
          <input
            type="text"
            className="flex-1 max-w-[560px] border-brand-navy border-2 rounded-full px-4 sm:px-6 py-3 text-sm sm:text-base outline-none"
            placeholder="Find your nearest store"
          />

          <button className="shrink-0 border-brand-navy border-2 rounded-full h-12 w-12 sm:h-[56px] sm:w-[56px] flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#1E2339"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m14.75 14.75 4 4m-18-10a8 8 0 1 0 16 0 8 8 0 0 0-16 0"
              />
            </svg>
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          // pagination={{ clickable: true }}
          modules={[Pagination]}
          grabCursor={true}
          watchOverflow={true}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 1.4,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
          className="mySwiper"
        >
          {STORES.map((store) => (
            <SwiperSlide key={store.city}>
              <div className="h-[340px] sm:h-[380px] w-[150px] lg:h-[420px] w-full rounded-[22px] overflow-hidden relative">
                {/* Image */}
                <div
                  className="absolute inset-0 scale-105"
                  style={{
                    backgroundImage: `url("${BASE}${store.img}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Text */}
                <div className="absolute left-4 sm:left-5 bottom-4 sm:bottom-5 text-left text-white z-10">
                  <h3 className="text-lg sm:text-2xl lg:text-[26px] font-recoleta font-semibold mb-1">
                    {store.city}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-outfit opacity-90">
                    {store.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
