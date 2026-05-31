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
  <p className="text-white font-recoleta font-semibold leading-[1.3] text-[24px] sm:text-[28px] lg:text-[48px] mb-6 lg:mb-10">
    Bring Adhira & Appa to your city.
    <br />
    India's coffee story is still being
    <br />
    written. The next chapter
    <br />
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
          </div>
        </div>

        {/* DESKTOP FOOTER */}
        <div
          id="footer"
          className="hidden lg:flex justify-between items-start gap-12"
        >
          {/* Brand */}
          <div className="text-white">
            <h2 className="text-[48px] font-recoleta font-semibold mb-4">
              Adhira & Appa
            </h2>

            <p className="text-[26px] font-outfit opacity-80 mb-10">
              Happiness through harmony.
            </p>

            <p className="text-[20px] font-outfit leading-[1.7]">
              hello@adhiraandappacoffee.com
              <br />
              +91 86557 79836
            </p>
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
      </div>
    </footer>
  );
}