// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const BASE =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/";

const PUNA = "../puna.jpg";
const CHENNAI = "../chennai.jpg";

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
    <section id="our_stores" className="bg-brand-orange/10 py-[120px] px-10">
      <div className="max-w-[1360px] mx-auto text-center">
        <h2 className="text-[48px] font-recoleta font-semibold text-brand-navy mb-4">
          The best part of your day <br />
          has an address
        </h2>
        <p className="text-[26px] font-outfit text-brand-navy mb-12">
          Walk-in, sit down and you'll know you belong there
        </p>

        <div className="flex justify-center gap-2">
          <input
            type="text"
            className="border-brand-navy border-2 border-solid w-[560px] rounded-4xl px-6 py-3 mb-12"
            placeholder="Find your nearest store"
          />
          <button className="border-brand-navy border-2 border-solid rounded-4xl h-[56px] w-[56px] flex justify-center items-center mb-12 cursor-pointer">
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
              ></path>
            </svg>
          </button>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          className="mySwiper rounded-[20px]"
        >
          {STORES.map((store) => (
            <SwiperSlide key={store.city}>
              <div
                className="relative h-[405px] w-[300px] rounded-[20px] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url("${BASE}${store.img}")` }}
              >
                {/* ① Blur layer — masked so blur only appears at the bottom */}
                <div
                  className="absolute inset-0 rounded-b-[20px]"
                  style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    maskImage:
                      "linear-gradient(to top, black 0%, black 30%, transparent 65%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, black 0%, black 30%, transparent 65%)",
                  }}
                />
                {/* ② Dark scrim for text readability */}
                <div
                  className="absolute inset-0 rounded-b-[20px]"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, transparent 65%)",
                  }}
                />
                {/* ③ Text */}
                <div className="absolute left-5 bottom-5 text-left text-white z-10">
                  <h3 className="text-[28px] font-recoleta font-semibold mb-3">
                    {store.city}
                  </h3>
                  <p className="text-[20px] font-outfit m-0">{store.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//   {STORES.map((store) => (
//     <div
//       key={store.city}
//       className="relative h-[405px] w-[300px] rounded-[20px] overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: `url("${BASE}${store.img}")` }}
//     >
//       {/* ① Blur layer — masked so blur only appears at the bottom */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backdropFilter: "blur(8px)",
//           WebkitBackdropFilter: "blur(8px)",
//           maskImage:
//             "linear-gradient(to top, black 0%, black 30%, transparent 65%)",
//           WebkitMaskImage:
//             "linear-gradient(to top, black 0%, black 30%, transparent 65%)",
//         }}
//       />
//       {/* ② Dark scrim for text readability */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, transparent 65%)",
//         }}
//       />
//       {/* ③ Text */}
//       <div className="absolute left-5 bottom-5 text-left text-white z-10">
//         <h3 className="text-[28px] font-recoleta font-semibold mb-3">
//           {store.city}
//         </h3>
//         <p className="text-[20px] font-outfit m-0">{store.desc}</p>
//       </div>
//     </div>
//   ))}
// </div>
