"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on devices with a mouse
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const showCursor = () => {
      if (dot) dot.style.opacity = "1";
      if (ring) ring.style.opacity = "1";
    };

    const hideCursor = () => {
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showCursor();

      // Pinpoint dot moves with 0ms latency (hardware 1:1 direct tracking)
      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Check hover on interactive elements
      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest("a, button, [role='button'], input, textarea, select");
      if (ring) {
        if (isInteractive) {
          ring.style.width = "48px";
          ring.style.height = "48px";
          ring.style.borderColor = "#c5a059";
          ring.style.backgroundColor = "rgba(197, 160, 89, 0.14)";
        } else {
          ring.style.width = "28px";
          ring.style.height = "28px";
          ring.style.borderColor = "rgba(255, 255, 255, 0.35)";
          ring.style.backgroundColor = "transparent";
        }
      }
    };

    // Smooth snappy trailing ring via requestAnimationFrame without React rerenders
    let animId = 0;
    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;
      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(updateRing);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseenter", showCursor);
    window.addEventListener("focus", showCursor);
    document.addEventListener("mouseleave", hideCursor);
    animId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("focus", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Outer Snappy Halo - highest z-index so it never hides behind modals */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] rounded-full border border-white/35 opacity-0 transition-[width,height,border-color,background-color] duration-150 ease-out will-change-transform"
        style={{ width: "28px", height: "28px" }}
      />
      {/* Instant 1:1 Center Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] h-1.5 w-1.5 rounded-full bg-white opacity-0 shadow-[0_0_12px_rgba(255,255,255,0.9)] will-change-transform"
      />
    </>
  );
}
