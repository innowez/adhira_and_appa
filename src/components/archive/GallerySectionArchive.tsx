"use client";

import { useState } from "react";

export function GallerySection() {
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  return (
    <div
      className="relative mx-auto overflow-hidden "
      style={{ width: "100%", maxWidth: "1440px", height: "3600px" }}
    >
      {/* Background & Decorative Elements */}
      <div
        className="absolute left-0 top-[6px] w-full overflow-hidden bg-[#FF5100]"
        style={{ height: "3594px" }}
      >
        <div
          className="absolute"
          style={{
            width: "1460px",
            height: "3600px",
            left: "-10px",
            top: "-4px",
          }}
        >
          {/* <div
            className="absolute left-0 top-0"
            style={{ width: "1460px", height: "3598px" }}
          >
            <div
              className="absolute"
              style={{
                width: "1440px",
                height: "3574px",
                left: "10px",
                top: "24px",
              }}
            />
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/dda53276-db6a-4e1c-8a34-f996f2080867.svg"
              alt="Decoration"
              className="absolute left-0 top-0"
              style={{ width: "1460px", height: "26px" }}
            />
          </div> */}
          <img
            src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/e72ab957-0669-4d32-b605-b792a057d40a.svg"
            alt="Texture Overlay"
            className="absolute left-0 top-1"
            style={{ width: "1460px", height: "3600px" }}
          />
        </div>
      </div>

      {/* Content Section 1: Traditional Meets Global */}
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
          style={{ width: "59px", height: "68px", left: "16.3px", top: "0px" }}
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

      {/* Content Section 2: Rooted Meets Refined */}
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

      {/* Content Section 3: Familiar Meets Unexpected */}
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
          style={{
            width: "70.97px",
            height: "53.23px",
            left: "259.23px",
            top: "115px",
          }}
        />
      </section>

      {/* Content Section 4: Everything You Love */}
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

      {/* Decorative Curvy Paths */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="93"
        height="281"
        fill="none"
        viewBox="0 0 93 281"
        className="absolute"
        style={{
          left: "916.18px",
          top: "6.5px",
        }}
      >
        <path
          fill="#fff"
          d="M92.236 1.782c-2.81 3.86-5.67 7.972-8.447 12.042-25.912 38.832-50.605 79.758-62.804 124.48C10.88 178.817 6.848 220.895 6.95 262.64c.035 4.943.13 9.935.367 14.666a3.49 3.49 0 0 1-3.3 3.689 3.5 3.5 0 0 1-2.53-.887 3.5 3.5 0 0 1-1.159-2.414C.095 272.687.02 267.712 0 262.673c.044-42.304 4.245-84.785 14.661-125.977 12.836-46.275 37.86-87.13 64.134-126.287C81.62 6.3 83.4 3.983 86.323 0c.5 0 4.305.594 5.913 1.782"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="469"
        height="261"
        fill="none"
        viewBox="0 0 469 261"
        className="absolute"
        style={{
          left: "464.5px",
          top: "453.5px",
        }}
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M463.001 3.5s12.5 66-27.5 117c-50.25 64.069-175.018 42.702-254 41-162.5-3.5-178 96-178 96"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="796"
        height="660"
        fill="none"
        viewBox="0 0 796 660"
        className="absolute"
        style={{
          left: "451.5px",
          top: "866px",
        }}
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M3.5 3.5s0 70 56.5 103c50.555 29.527 91.272 30 159 22.5 101.442-11.233 153-96 112.5-117-45.427-23.554-98.139 51.063-71 121.5C302.549 242.635 523.49 191.306 640 202c103.5 9.5 152 86.647 152 166.5 0 103-80.375 168.365-194.5 153.5-159-20.71-169.783-174.045-291.5-208.5C143.5 267.5 74.5 439 193 530c67.542 51.868 77 78 64 126"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="970"
        height="651"
        fill="none"
        viewBox="0 0 970 651"
        className="absolute"
        style={{
          left: "160.27px",
          top: "1778px",
        }}
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M500.74 3.5c0 270.5 485.595 148.607 464.5 415-17.5 221-391.911 271.739-520-181.5C367.24-39-33.663 35.626 6.3 335c5.425 40.639 31.5 119.5 100.5 171 63.641 47.5 171 76.5 171 141.5"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="391"
        height="250"
        fill="none"
        viewBox="0 0 391 250"
        className="absolute"
        style={{
          left: "449.5px",
          top: "2560.5px",
        }}
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M3.501 71.002c17 83.5 251 97.836 351.5 19.998 51-39.5 36.5-87.5-17.5-87.5-123.905-.002-263.014 101.58-234 207.002 3.994 14.511 15 35.5 15 35.5"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="260"
        fill="none"
        viewBox="0 0 100 260"
        className="absolute"
        style={{
          left: "635px",
          top: "3011px",
        }}
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          d="M3.5 3.5c1.793 21.337 3.903 33.332 9.5 54 16.195 59.802 71.022 75.698 80 137 3.48 23.764 5 36 0 61.5"
        ></path>
      </svg>

      {/* Hero Images Section */}
      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/86a7a61d-f597-4ff2-9f93-a8a9d9ff1f3b.png"
        src="../menu/ada1.png"
        alt="Food item 1"
        className="absolute object-cover"
        style={{
          width: "255px",
          height: "255px",
          left: "1068px",
          top: "393px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />
      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/daadf398-c15e-41b2-a73d-7e43b707581e.png"
        src="../menu/0meal.png"
        alt="Medhu Vada Waffle"
        className="absolute object-cover"
        style={{
          width: "459.87px",
          height: "466.5px",
          left: "276px",
          top: "140.69px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />
      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/09a3a70f-de1e-4304-b1de-3d19efdfef7f.png"
        src={"../menu/ada0.png"}
        alt="Featured Dish"
        className="absolute object-cover"
        style={{
          width: "153.86px",
          height: "202.9px",
          left: "187px",
          top: "171px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />

      <img
        src={"../menu/1meal.png"}
        alt="Dish detail"
        className="absolute object-fit"
        style={{
          width: "341px",
          height: "321px",
          left: "853px",
          top: "621px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />
      <img
        src="../menu/ada2.png"
        alt="Small bite"
        className="absolute object-fit"
        style={{
          width: "118px",
          height: "105px",
          left: "158px",
          top: "994px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />

      {/* Grid of Dishes */}
      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/a256eb98-f2f6-4303-a46f-6ba0c09e30ee.png"
        src="../menu/2meal.png"
        alt="Chocolate Croissant"
        className="absolute object-cover"
        style={{
          width: "376px",
          height: "381px",
          left: "256px",
          top: "1099px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />
      <img
        src="../menu/3meal.png"
        alt="Dish detail"
        className="absolute object-cover"
        style={{
          width: "240px",
          height: "245px",
          left: "966px",
          top: "1108px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />
      <img
        src={"../menu/ada3.png"}
        alt="Food element"
        className="absolute object-cover"
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
          src={"../menu/ada4.png"}
          alt="Decorative element"
          className="absolute top-0 object-cover"
          style={{ width: "248px", height: "251px", left: "-62px" }}
        />
      </div>

      <img
        src={"../menu/4meal.png"}
        alt="Dish detail"
        className="absolute object-cover"
        style={{
          width: "476.75px",
          height: "469.71px",
          left: "883.63px",
          top: "1488.64px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />
      <img
        src={"../menu/5meal.png"}
        alt="Dish detail"
        className="absolute object-cover"
        style={{
          width: "357px",
          height: "366px",
          left: "215px",
          top: "1899px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />

      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/d54b3aa9-3798-4c1d-8c26-4ee5df4252f8.png"
        src={"../menu/ada5.png"}
        alt="Floating ingredient"
        className="absolute object-cover"
        style={{
          width: "146.56px",
          height: "148.27px",
          left: "788.72px",
          top: "2043.37px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />

      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/6f900194-5dc8-42c5-8f92-bf8e2ed57239.png"
        src={"../menu/6meal.png"}
        alt="Cheese Chutney Toastie"
        className="absolute object-cover"
        style={{
          width: "312px",
          height: "315px",
          left: "937px",
          top: "2206px",
        }}
      />

      <img
        src={"../menu/7meal.png"}
        alt="Main dish"
        className="absolute object-cover"
        style={{
          width: "530.45px",
          height: "396.59px",
          left: "295px",
          top: "2740px",
        }}
      />

      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/1295b684-42fa-4ec9-9dd6-f61004026d16.png"
        src={"../menu/ada8.png"}
        alt="Large food plate"
        className="absolute object-cover"
        style={{
          width: "400.67px",
          height: "482.12px",
          left: "939.07px",
          top: "2795.88px",
          // boxShadow: "-11px 16px 16px rgba(0,0,0,0.3)",
        }}
      />

      <img
        // src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/3bdce099-18da-467f-bdf8-e858847ad2d6.png"
        src={"../menu/ada9.png"}
        alt="Side dish"
        className="absolute object-fit"
        style={{
          width: "180.89px",
          height: "200.93px",
          left: "136px",
          top: "3193px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.2)",
        }}
      />

      {/* Floating elements at bottom */}
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/a0ab04ef-13fb-43dc-841c-618fb4777ecf.png"
        // src={"../menu/ada7.png"}
        alt="Spice container"
        className="absolute object-contain"
        style={{
          width: "100px",
          height: "69px",
          left: "115px",
          top: "2752.96px",
          // boxShadow: "-17px 15px 25px rgba(0,0,0,0.3)",
        }}
      />
      <img
        src="https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/c260c276-f4d7-4928-bba3-c563a6b20f8c.png"
        // src={"../menu/ada6.png"}
        alt="Detail element"
        className="absolute object-contain"
        style={{
          width: "92.9px",
          height: "93.6px",
          left: "120.59px",
          top: "2652px",
          // boxShadow: "-11px 30px 25px rgba(0,0,0,0.3)",
        }}
      />

      {/* CTA: See the Full Menu */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
        aria-label="See the full menu"
        className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 border-none bg-transparent p-0 cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuHovered ? "scale-105" : "scale-100"}`}
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
    </div>
  );
}
