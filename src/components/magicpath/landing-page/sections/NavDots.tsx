'use client';
import { useState } from 'react';

const NAV_ITEMS = [
  'The Team', 'Testimonials', 'Press and Media', 'Our stores',
  'Franchise Bridge CTA', 'Welcome', 'Our Story', 'Story Behind Every Cup',
  'Story Beans', 'The Blend', 'The Vibe',
];

function NavDot({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-row items-center justify-end gap-3 bg-transparent border-none cursor-pointer py-1"
    >
      <span
        className="text-white text-[16px] font-outfit pointer-events-none transition-opacity duration-200"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {label}
      </span>
      <div className="w-[23px] h-[23px] flex items-center justify-center">
        <div
          className="border border-white rounded-full transition-all duration-200"
          style={{
            width: active ? '15px' : '9px',
            height: active ? '15px' : '9px',
            backgroundColor: active ? '#FFFFFF' : 'transparent',
          }}
        />
      </div>
    </button>
  );
}

export function NavDots() {
  const [active, setActive] = useState(5);
  return (
    <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {NAV_ITEMS.map((item, i) => (
        <NavDot key={i} label={item} active={active === i} onClick={() => setActive(i)} />
      ))}
    </nav>
  );
}
