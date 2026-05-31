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
    <footer className="bg-brand-navy px-10 pt-20 pb-10">
      <div className="max-w-[1361px] mx-auto">
        {/* Franchise CTA */}
        <div id="franchise_bridge_CTA" className="text-center mb-20">
          <p className="text-white text-[28px] font-recoleta font-semibold leading-[1.4] mb-10">
            Bring Adhira & Appa to your city. India's coffee story is
            <br />
            still being written. The next chapter could be yours.
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-brand-orange text-[24px] font-outfit tracking-[1px]">
              EXPLORE THE OPPORTUNITY
            </span>
            <button className="w-[66px] h-[66px] bg-brand-orange rounded-[8px] border-none cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110">
              <img src={GO_ICON} alt="Go" />
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-20" />

        {/* Footer columns */}
        <div
          id="footer"
          className="flex flex-wrap justify-between items-start gap-10"
        >
          {/* Brand info */}
          <div className="text-white">
            <h2 className="text-[48px] font-recoleta font-semibold mb-4">
              Adhira & Appa suja
            </h2>
            <p className="text-[26px] font-outfit opacity-80 mb-10">
              Happiness through harmony.
            </p>
            <p className="text-[20px] font-outfit leading-[1.6]">
              hello@adhiraandappacoffee.com
              <br />
              +91 86557 79836
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="bg-transparent border-none text-white text-[20px] font-outfit text-left cursor-pointer p-0 transition-colors duration-200 hover:text-brand-orange"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Logo + terms */}
          <div className="text-right">
            <img
              src={LOGO_FOOTER}
              alt="Adhira & Appa Logo"
              className="w-[162px] h-[197px] object-contain cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
