"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [smoothPos, setSmoothPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsPointerDevice(true);
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[role='button']") ||
        target?.closest("input") ||
        target?.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;

    let animId = 0;
    const animate = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.12,
        y: prev.y + (position.y - prev.y) * 0.12,
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [position, isPointerDevice]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Outer Halo / Ring */}
      <div
        className={`pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 transition-all duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovering
            ? "h-14 w-14 border-[#c5a059] bg-[#c5a059]/10 shadow-[0_0_30px_rgba(197,160,89,0.3)] scale-110"
            : "h-9 w-9 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-100"
        }`}
        style={{ left: smoothPos.x, top: smoothPos.y }}
      />
      {/* Inner Pinpoint Dot */}
      <div
        className={`pointer-events-none fixed z-50 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
