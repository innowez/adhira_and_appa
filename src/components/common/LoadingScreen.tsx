"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(true);
  const screenRef = useRef<HTMLElement>(null);
  const fakeRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pageLoadedRef = useRef(false);
  const doneCalledRef = useRef(false);

  useEffect(() => {
    // document.body.style.overflow = "hidden";

    const exit = () => {
      if (doneCalledRef.current) return;
      doneCalledRef.current = true;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setProgress(100);

      // Brief pause so the user reads "100%", then slide up and out
      setTimeout(() => {
        gsap.to(screenRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power2.inOut",
          onComplete: () => {
            document.body.style.overflow = "";
            setMounted(false);
          },
        });
      }, 350);
    };

    // Exit only when BOTH the fake ramp reached 90% AND the page is loaded
    const tryExit = () => {
      if (pageLoadedRef.current && fakeRef.current >= 90) exit();
    };

    // Ramp 0 → 90%; decelerates as it approaches 90 so it never "stalls"
    intervalRef.current = setInterval(() => {
      const remaining = 90 - fakeRef.current;
      fakeRef.current += remaining * 0.12 + Math.random() * 1.5;
      const clamped = Math.min(Math.floor(fakeRef.current), 90);
      setProgress(clamped);
      if (clamped >= 90) tryExit();
    }, 120);

    const onLoad = () => {
      pageLoadedRef.current = true;
      tryExit();
    };

    // Mark page as loaded immediately if it already is — but DON'T call exit()
    // yet; let the interval run first so the animation always plays.
    if (document.readyState === "complete") {
      pageLoadedRef.current = true;
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <main ref={screenRef} className="fixed inset-0 z-9999 bg-brand-orange">
      <img
        src="../logo.png"
        alt="Adhira & Appa Logo"
        className="absolute left-4 top-4 md:left-10 md:top-10 w-[55px] h-[42px] lg:w-[87px] lg:h-[66px]"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[65px] md:text-[100px] font-bold text-white font-recoleta">
          {progress}
          <span className="font-outfit">%</span>
        </h1>
      </div>
    </main>
  );
}

export default LoadingScreen;
