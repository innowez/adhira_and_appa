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

    {/* Social Icons + Terms in same line */}
    <div className="flex items-center justify-between mt-6">
      
      {/* Icons */}
      <div className="flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 36 36"
          className="cursor-pointer shrink-0"
        >
          <path
            fill="#FF5100"
            d="M12.87 14.502c.9 0 1.62-.732 1.62-1.62s-.731-1.62-1.62-1.62-1.62.731-1.62 1.62.731 1.62 1.62 1.62m3.161 1.226v9.022h2.79v-4.454c0-1.182.225-2.318 1.676-2.318 1.452 0 1.452 1.35 1.452 2.385v4.387h2.801V19.8c0-2.43-.517-4.297-3.352-4.297-1.362 0-2.273.742-2.644 1.451h-.034v-1.237h-2.677zm-4.556 0h2.801v9.022h-2.801z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 36 36"
          className="cursor-pointer shrink-0"
        >
          <path
            stroke="#FF5100"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 11.251c2.07 0 3.75 1.68 3.75 3.75v6c0 2.07-1.68 3.75-3.75 3.75h-6c-2.07 0-3.75-1.68-3.75-3.75v-6c0-2.07 1.68-3.75 3.75-3.75h6"
          />
          <path
            stroke="#FF5100"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M18 15.001a3 3 0 1 1 0 6 3 3 0 1 1 0-6"
          />
          <path
            fill="#FF5100"
            d="M21.75 15.376a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 36 36"
          className="cursor-pointer shrink-0"
        >
          <path
            fill="#FF5100"
            d="M18 12.001c.641 0 1.299.017 1.936.043l.753.037.721.042.675.046.617.048a2.85 2.85 0 0 1 2.62 2.567l.03.319.056.683c.053.707.092 1.478.092 2.215s-.039 1.508-.091 2.215l-.057.683-.03.319a2.85 2.85 0 0 1-2.621 2.567l-.615.047-.675.047-.722.043-.753.035a47 47 0 0 1-1.936.044 47 47 0 0 1-1.936-.044l-.754-.035-.72-.043-.675-.047-.617-.047a2.85 2.85 0 0 1-2.62-2.567l-.03-.319-.056-.683a31 31 0 0 1-.092-2.215c0-.737.039-1.508.091-2.216l.057-.682.03-.319a2.85 2.85 0 0 1 2.62-2.567l.615-.048.675-.046.722-.042.753-.037A46 46 0 0 1 18 12.002m0 1.5c-.619 0-1.256.017-1.875.042l-.733.035-.705.042-.661.045-.606.047a1.35 1.35 0 0 0-1.25 1.217c-.088.907-.17 2.036-.17 3.072s.082 2.165.17 3.072a1.35 1.35 0 0 0 1.25 1.217l.606.047.661.045.705.042.733.035c.62.026 1.256.042 1.875.042s1.256-.017 1.875-.042l.733-.035.705-.041.661-.046.606-.047a1.35 1.35 0 0 0 1.25-1.217c.088-.907.17-2.035.17-3.072a33 33 0 0 0-.17-3.072 1.35 1.35 0 0 0-1.25-1.217l-.606-.047-.661-.045-.704-.042-.734-.035q-.937-.04-1.875-.042m-1.5 2.681a.45.45 0 0 1 .614-.419l.061.03 3.15 1.818a.45.45 0 0 1 .064.735l-.064.045-3.15 1.819a.45.45 0 0 1-.67-.323l-.005-.067z"
          />
        </svg>
      </div>

      {/* Terms */}
      <p className="text-[16px] whitespace-nowrap">
        Terms & Conditions
      </p>
    </div>
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

  <p className="text-[20px] font-outfit leading-[1.7] mb-8">
    hello@adhiraandappacoffee.com
    <br />
    +91 86557 79836
  </p>

  {/* Social Icons */}
  <div className="flex items-center gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      className="cursor-pointer shrink-0"
    >
      <path
        fill="#FF5100"
        d="M12.87 14.502c.9 0 1.62-.732 1.62-1.62s-.731-1.62-1.62-1.62-1.62.731-1.62 1.62.731 1.62 1.62 1.62m3.161 1.226v9.022h2.79v-4.454c0-1.182.225-2.318 1.676-2.318 1.452 0 1.452 1.35 1.452 2.385v4.387h2.801V19.8c0-2.43-.517-4.297-3.352-4.297-1.362 0-2.273.742-2.644 1.451h-.034v-1.237h-2.677zm-4.556 0h2.801v9.022h-2.801z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      className="cursor-pointer shrink-0"
    >
      <path
        stroke="#FF5100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 11.251c2.07 0 3.75 1.68 3.75 3.75v6c0 2.07-1.68 3.75-3.75 3.75h-6c-2.07 0-3.75-1.68-3.75-3.75v-6c0-2.07 1.68-3.75 3.75-3.75h6"
      />
      <path
        stroke="#FF5100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 15.001a3 3 0 1 1 0 6 3 3 0 1 1 0-6"
      />
      <path
        fill="#FF5100"
        d="M21.75 15.376a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
      className="cursor-pointer shrink-0"
    >
      <path
        fill="#FF5100"
        d="M18 12.001c.641 0 1.299.017 1.936.043l.753.037.721.042.675.046.617.048a2.85 2.85 0 0 1 2.62 2.567l.03.319.056.683c.053.707.092 1.478.092 2.215s-.039 1.508-.091 2.215l-.057.683-.03.319a2.85 2.85 0 0 1-2.621 2.567l-.615.047-.675.047-.722.043-.753.035a47 47 0 0 1-1.936.044 47 47 0 0 1-1.936-.044l-.754-.035-.72-.043-.675-.047-.617-.047a2.85 2.85 0 0 1-2.62-2.567l-.03-.319-.056-.683a31 31 0 0 1-.092-2.215c0-.737.039-1.508.091-2.216l.057-.682.03-.319a2.85 2.85 0 0 1 2.62-2.567l.615-.048.675-.046.722-.042.753-.037A46 46 0 0 1 18 12.002m0 1.5c-.619 0-1.256.017-1.875.042l-.733.035-.705.042-.661.045-.606.047a1.35 1.35 0 0 0-1.25 1.217c-.088.907-.17 2.036-.17 3.072s.082 2.165.17 3.072a1.35 1.35 0 0 0 1.25 1.217l.606.047.661.045.705.042.733.035c.62.026 1.256.042 1.875.042s1.256-.017 1.875-.042l.733-.035.705-.041.661-.046.606-.047a1.35 1.35 0 0 0 1.25-1.217c.088-.907.17-2.035.17-3.072a33 33 0 0 0-.17-3.072 1.35 1.35 0 0 0-1.25-1.217l-.606-.047-.661-.045-.704-.042-.734-.035q-.937-.04-1.875-.042m-1.5 2.681a.45.45 0 0 1 .614-.419l.061.03 3.15 1.818a.45.45 0 0 1 .064.735l-.064.045-3.15 1.819a.45.45 0 0 1-.67-.323l-.005-.067z"
      />
    </svg>
  </div>
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
