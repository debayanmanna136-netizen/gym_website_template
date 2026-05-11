"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Use transform instead of top/left to avoid layout recalculation
    let raf: number | null = null;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let latestMx = mx;
    let latestMy = my;
    let moved = false;

    const onMove = (e: MouseEvent) => {
      latestMx = e.clientX;
      latestMy = e.clientY;
      moved = true;
      glow.classList.add("active");
      if (!raf) scheduleUpdate();
    };

    const onLeave = () => {
      glow.classList.remove("active");
    };

    const scheduleUpdate = () => {
      raf = requestAnimationFrame(() => {
        raf = null;
        if (moved) {
          mx = latestMx;
          my = latestMy;
          moved = false;
          // GPU-accelerated: no layout recalc, no reflow
          glow.style.transform = `translate3d(${mx - 150}px, ${my - 150}px, 0)`;
        }
      });
    };

    const interactEls = document.querySelectorAll(
      "button, a, .group, .magnetic-btn"
    );

    const addHover = () => glow.classList.add("hovering");
    const removeHover = () => glow.classList.remove("hovering");

    interactEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // passive: true = browser won't wait for JS before scrolling
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      interactEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  // Position starts at (0,0); transform handles actual placement.
  // top/left removed — the element sits at 0,0 and only transform moves it.
  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}
