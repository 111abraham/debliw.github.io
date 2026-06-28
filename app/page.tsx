"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [smoothCursor, setSmoothCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
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
    let animationFrame = 0;

    const animate = () => {
      setSmoothCursor((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.08,
        y: prev.y + (cursorPosition.y - prev.y) * 0.08,
      }));
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [cursorPosition]);

  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#050505] px-6 py-8 text-[#f5f1e8] sm:px-8 lg:px-10">
      <div
        className={`pointer-events-none fixed z-50 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90 bg-white shadow-[0_0_45px_rgba(255,255,255,0.35)] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ left: smoothCursor.x, top: smoothCursor.y }}
      />
      <section className="flex flex-1 flex-col justify-center">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#bdb7aa]">
            3D Artist / Designer
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Abraham Wondafrash
          </h1>
        </div>

        <div className="max-w-3xl space-y-6 text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8f8670]">
            Skills • What We Do
          </p>
          <div className="space-y-3 text-lg leading-8 text-[#d8d0c0]">
            <p>3D design, product visualization, and visual storytelling.</p>
            <p>Blender, Adobe Photoshop, Illustrator, and motion design.</p>
            <p>Crafting bold visual worlds with atmosphere, clarity, and impact.</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-[#f5f1e8]/15 py-4">
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap text-3xl font-semibold uppercase tracking-[0.4em] text-[#bdb7aa] sm:text-4xl lg:text-6xl">
          WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG • WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG • WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG •
        </div>
      </section>
    </main>
  );
}
