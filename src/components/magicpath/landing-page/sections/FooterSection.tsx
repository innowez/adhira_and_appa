"use client";

const LOGO_FOOTER =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/2db8d322-a806-4327-b584-f004051f4dff.png";

const GO_ICON =
  "https://storage.googleapis.com/storage.magicpath.ai/user/410195596943691776/figma-assets/30e60763-8b4b-4145-a6c8-5af540025407.svg";

const NAV_LINKS = [
  "Our Story",
  "Story Beans",
  "The blend",
  "The Team",
  "Stores",
  "Partner With Us",
];

export function FooterSection() {
  return (
    <footer className="bg-brand-navy px-4 sm:px-6 lg:px-10 pt-14 lg:pt-20 pb-8 lg:pb-10">
      <div className="max-w-[1361px] mx-auto">
        {/* CTA Section */}
        <div
          id="franchise_bridge_CTA"
          className="text-center mb-10 sm:mb-12 lg:mb-20"
        >
          <p className="text-white font-recoleta font-semibold leading-[1.3] text-[20px] sm:text-[28px] lg:text-[48px] mb-6 lg:mb-10">
            Bring Adhira & Appa to your city. <br className="sm:hidden" />
            India's coffee story is <br className="hidden lg:block " />
            still being <br className="sm:hidden" /> written. The next chapter{" "}
            <br className="sm:hidden" />
            could be yours.
          </p>

          <div className="flex flex-col items-center gap-4">
            <span className="text-brand-orange font-outfit tracking-wide text-[14px] sm:text-[18px] lg:text-[24px]">
              EXPLORE THE OPPORTUNITY
            </span>

            <button className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[66px] lg:h-[66px] bg-brand-orange rounded-[8px] flex items-center justify-center transition-all duration-300 hover:scale-105">
              <img
                src={GO_ICON}
                alt="Go"
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-10 lg:mb-20" />

        {/* MOBILE FOOTER */}
        <div className="block lg:hidden">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-white font-recoleta font-semibold text-[34px] leading-none">
                Adhira & Appa
              </h2>

              <p className="text-white/90 font-outfit text-[18px] mt-4">
                Happiness through harmony.
              </p>
            </div>

            <img
              src={LOGO_FOOTER}
              alt="Adhira & Appa Logo"
              className="w-[82px] h-auto object-contain cursor-pointer"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            />
          </div>

          <nav className="flex flex-col gap-4 mb-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="bg-transparent border-none p-0 text-left text-white font-outfit text-[18px] cursor-pointer hover:text-brand-orange transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="w-full h-px bg-white/20 mb-8" />

          <div className="text-white font-outfit space-y-3">
            <p className="text-[16px] break-all">
              hello@adhiraandappacoffee.com
            </p>
            <p className="text-[16px]">+91 86557 79836</p>
<p className="text-[16px]">A Unit of KANNIGA FOODS AND BEVERAGES PRIVATE LIMITED</p>
          </div>
          <div className="flex gap-1.5 lg:gap-2 mt-2 lg:hidden">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
                className="h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]"
              >
                <rect
                  width="47"
                  height="47"
                  x="0.5"
                  y="0.5"
                  stroke="#FF5100"
                  rx="23.5"
                ></rect>
                <path
                  fill="#FF5100"
                  d="M17.16 19.335c1.2 0 2.16-.975 2.16-2.16a2.17 2.17 0 0 0-2.16-2.16 2.17 2.17 0 0 0-2.16 2.16 2.17 2.17 0 0 0 2.16 2.16m4.215 1.635V33h3.72v-5.94c0-1.575.3-3.09 2.235-3.09s1.935 1.8 1.935 3.18V33H33v-6.6c0-3.24-.69-5.73-4.47-5.73-1.815 0-3.03.99-3.525 1.935h-.045v-1.65h-3.57zm-6.075 0h3.735V33H15.3z"
                ></path>
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
                className="h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]"
              >
                <rect
                  width="47"
                  height="47"
                  x="0.5"
                  y="0.5"
                  stroke="#FF5100"
                  rx="23.5"
                ></rect>
                <path
                  stroke="#FF5100"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M28 15c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5h-8c-2.76 0-5-2.24-5-5v-8c0-2.76 2.24-5 5-5h8"
                ></path>
                <path
                  stroke="#FF5100"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M24 20c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4"
                ></path>
                <path
                  fill="#FF5100"
                  d="M29 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                ></path>
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
                className="h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]"
              >
                <rect
                  width="47"
                  height="47"
                  x="0.5"
                  y="0.5"
                  stroke="#FF5100"
                  rx="23.5"
                ></rect>
                <path
                  fill="#FF5100"
                  d="M24 16c.855 0 1.732.022 2.582.058l1.004.048.961.057.9.061.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063-.9.062-.962.057-1.004.048q-1.29.056-2.582.058a62 62 0 0 1-2.582-.058l-1.004-.048-.961-.057-.9-.062-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425-.075-.91A41 41 0 0 1 14 24c0-.983.052-2.011.122-2.954l.075-.91.04-.425a3.8 3.8 0 0 1 3.493-3.423l.821-.064.9-.061.962-.057 1.004-.048Q22.707 16.002 24 16m0 2c-.825 0-1.674.022-2.5.056l-.978.047-.939.055-.882.06-.808.063a1.8 1.8 0 0 0-1.666 1.623C16.11 21.113 16 22.618 16 24s.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062.882.06.939.056.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047.939-.055.882-.06.808-.063a1.8 1.8 0 0 0 1.666-1.623C31.89 26.887 32 25.382 32 24s-.11-2.887-.227-4.096a1.8 1.8 0 0 0-1.666-1.623l-.808-.062-.882-.06-.939-.056-.978-.047A61 61 0 0 0 24 18m-2 3.575a.598.598 0 0 1 .819-.559l.081.04 4.2 2.424a.602.602 0 0 1 .085.98l-.085.06-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* DESKTOP FOOTER */}
        <div
          id="footer"
          className="hidden lg:block"
        >
          <div className="flex justify-between items-start gap-12">
          {/* Brand */}
          <div className="text-white">
            <h2 className="text-[48px] font-recoleta font-semibold mb-4">
              Adhira & Appa
            </h2>

            <p className="text-[26px] font-outfit opacity-80 mb-10">
              Happiness through harmony.
            </p>

            <p className="text-[20px] font-outfit leading-[1.7] lg:mb-8">
              hello@adhiraandappacoffee.com
              <br />
              +91 86557 79836
            </p>

            <p className="text-[16px] mb-8">A Unit of KANNIGA FOODS AND BEVERAGES PRIVATE LIMITED</p>

          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="bg-transparent border-none text-white text-[20px] font-outfit text-left cursor-pointer p-0 hover:text-brand-orange transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Logo */}
          <div className="text-right">
            <img
              src={LOGO_FOOTER}
              alt="Adhira & Appa Logo"
              className="w-[162px] h-auto object-contain cursor-pointer ml-auto"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            />

            <p className="text-white text-[20px] font-outfit mt-10">
              Terms & Conditions
            </p>
          </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex gap-1.5 lg:gap-2">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]"
                >
                  <rect
                    width="47"
                    height="47"
                    x="0.5"
                    y="0.5"
                    stroke="#FF5100"
                    rx="23.5"
                  ></rect>
                  <path
                    fill="#FF5100"
                    d="M17.16 19.335c1.2 0 2.16-.975 2.16-2.16a2.17 2.17 0 0 0-2.16-2.16 2.17 2.17 0 0 0-2.16 2.16 2.17 2.17 0 0 0 2.16 2.16m4.215 1.635V33h3.72v-5.94c0-1.575.3-3.09 2.235-3.09s1.935 1.8 1.935 3.18V33H33v-6.6c0-3.24-.69-5.73-4.47-5.73-1.815 0-3.03.99-3.525 1.935h-.045v-1.65h-3.57zm-6.075 0h3.735V33H15.3z"
                  ></path>
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]"
                >
                  <rect
                    width="47"
                    height="47"
                    x="0.5"
                    y="0.5"
                    stroke="#FF5100"
                    rx="23.5"
                  ></rect>
                  <path
                    stroke="#FF5100"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M28 15c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5h-8c-2.76 0-5-2.24-5-5v-8c0-2.76 2.24-5 5-5h8"
                  ></path>
                  <path
                    stroke="#FF5100"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M24 20c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4"
                  ></path>
                  <path
                    fill="#FF5100"
                    d="M29 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                  ></path>
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]"
                >
                  <rect
                    width="47"
                    height="47"
                    x="0.5"
                    y="0.5"
                    stroke="#FF5100"
                    rx="23.5"
                  ></rect>
                  <path
                    fill="#FF5100"
                    d="M24 16c.855 0 1.732.022 2.582.058l1.004.048.961.057.9.061.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063-.9.062-.962.057-1.004.048q-1.29.056-2.582.058a62 62 0 0 1-2.582-.058l-1.004-.048-.961-.057-.9-.062-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425-.075-.91A41 41 0 0 1 14 24c0-.983.052-2.011.122-2.954l.075-.91.04-.425a3.8 3.8 0 0 1 3.493-3.423l.821-.064.9-.061.962-.057 1.004-.048Q22.707 16.002 24 16m0 2c-.825 0-1.674.022-2.5.056l-.978.047-.939.055-.882.06-.808.063a1.8 1.8 0 0 0-1.666 1.623C16.11 21.113 16 22.618 16 24s.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062.882.06.939.056.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047.939-.055.882-.06.808-.063a1.8 1.8 0 0 0 1.666-1.623C31.89 26.887 32 25.382 32 24s-.11-2.887-.227-4.096a1.8 1.8 0 0 0-1.666-1.623l-.808-.062-.882-.06-.939-.056-.978-.047A61 61 0 0 0 24 18m-2 3.575a.598.598 0 0 1 .819-.559l.081.04 4.2 2.424a.602.602 0 0 1 .085.98l-.085.06-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z"
                  ></path>
                </svg>
              </a>
              </div>

              <div className="flex gap-2">
                <div className="flex gap-1.5">

                <img src="./footer/red.png" alt="" className="w-20 h-20" />
                <img src="./footer/green.png" alt="" className="w-20 h-20" />
                </div>
                <span className="text-white text-sm">Aligned with SDG 3 – Good Health & Well-Being and SDG 8 – <br />Decent Work & Economic Growth, we contribute to healthier <br />communities and sustainable economic development by driving <br />innovation, employment, and accessible solutions for long-term impact.</span>
              </div>
            </div>
        </div>

      </div>
    </footer>
  );
}
