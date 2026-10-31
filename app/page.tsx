"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Box, Compass, Sparkles, Cpu, Palette, Globe, ChevronDown } from "lucide-react";
import Hero3DCanvas from "./components/Hero3DCanvas";
import CustomCursor from "./components/CustomCursor";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f1e8] selection:bg-[#c5a059]/30">
      <CustomCursor />

      {/* Top Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#050505]/80 px-6 py-4 backdrop-blur-md sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-mono text-base font-bold tracking-[0.35em] text-[#f5f1e8] uppercase">
            Debliw
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-[#8f8670] sm:inline">
            / Abraham Wondafrash
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-[#bdb7aa]">
          <Link
            href="/inktober-2026"
            className="group flex items-center gap-1.5 text-[#f5f1e8] transition hover:text-[#c5a059]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059] animate-pulse" />
            <span>Inktober 3D</span>
            <span className="rounded bg-[#c5a059]/20 px-1 py-0.5 text-[9px] text-[#c5a059]">NEW</span>
          </Link>
          <a href="#disciplines" className="transition hover:text-white">Disciplines</a>
          <a href="#featured" className="transition hover:text-white">Work</a>
          <a href="#pipeline" className="transition hover:text-white">Pipeline</a>
          <a href="#contact" className="transition hover:text-white">Connect</a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/inktober-2026"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-[#c5a059]/40 bg-[#c5a059]/10 px-3.5 py-1.5 text-xs uppercase tracking-wider text-[#f5f1e8] transition hover:bg-[#c5a059] hover:text-black"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>3D Rotunda</span>
          </Link>

          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white transition hover:bg-white hover:text-black hover:border-white"
          >
            Inquire
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-32 pb-12 sm:px-10 lg:px-16">
        <Hero3DCanvas />

        {/* Ambient Radial Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.06),transparent_60%)]" />

        <div className="relative z-10 my-auto max-w-5xl">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-[#bdb7aa] backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-[0.25em] text-[11px]">
              Available for Q4 2026 / 2027 Projects &bull; Remote Worldwide
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#8f8670] sm:text-sm">
            3D Artist &bull; Visual Generalist &bull; Digital Sculptor
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#f5f1e8] sm:text-6xl lg:text-7xl">
            Abraham Wondafrash
          </h1>

          <div className="mt-6 max-w-2xl space-y-3 text-lg leading-relaxed text-[#d8d0c0] sm:text-xl">
            <p>
              Crafting bold visual worlds with atmosphere, clarity, and impact.
            </p>
            <p className="text-base text-[#8f8670]">
              Specializing in 3D product visualization, digital heritage reconstruction, precision additive manufacturing (3D printing), and concept storytelling.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/inktober-2026"
              className="group flex items-center gap-2.5 rounded-full border border-[#c5a059] bg-[#c5a059] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-black shadow-[0_0_35px_rgba(197,160,89,0.35)] transition hover:bg-[#e0b96b] hover:scale-[1.02]"
            >
              <Compass className="h-4 w-4 transition-transform group-hover:rotate-45" />
              <span>Enter Inktober 3D Rotunda</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href="#disciplines"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-[#d8d0c0] backdrop-blur transition hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              <span>Explore Disciplines</span>
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Highlights Strip at bottom of Hero */}
        <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 text-xs text-[#8f8670] uppercase tracking-widest">
          <div>
            <span className="block text-white font-mono text-sm">31 / 31</span>
            <span>Inktober Artworks</span>
          </div>
          <div>
            <span className="block text-white font-mono text-sm">Blender &amp; Cycles</span>
            <span>Photorealistic 3D</span>
          </div>
          <div>
            <span className="block text-white font-mono text-sm">Lalibela / Bete Giorgis</span>
            <span>Heritage Reconstruction</span>
          </div>
          <div>
            <span className="block text-white font-mono text-sm">CAD &bull; CAM &bull; 3D Print</span>
            <span>Additive Prototyping</span>
          </div>
        </div>
      </section>

      {/* Featured Headline Exhibition Banner: Inktober 2026 */}
      <section className="relative overflow-hidden border-t border-b border-white/10 bg-gradient-to-b from-[#080808] to-[#040404] py-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#c5a059]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Featured Exhibition</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f1e8]">
                Inktober 2026: 3D Rotunda
              </h2>
            </div>
            <p className="mt-4 lg:mt-0 max-w-md text-sm text-[#bdb7aa] leading-relaxed">
              31 daily original ink and conceptual artworks presented in a fully interactive 3D virtual cylinder with real-time lighting and spatial audio.
            </p>
          </div>

          {/* 4 Preview Artwork Cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { day: "01", title: "Apple", src: "/inktober-2026/day-01-apple.jpg", note: "Day 01 • Form & Weight" },
              { day: "10", title: "Mystical", src: "/inktober-2026/day-10-mystical.jpg", note: "Day 10 • Arcane Glow" },
              { day: "21", title: "Hero", src: "/inktober-2026/day-21-hero.jpg", note: "Day 21 • Monumental" },
              { day: "31", title: "Flex", src: "/inktober-2026/day-31-flex.jpg", note: "Day 31 • Grand Finale" },
            ].map((item) => (
              <Link
                key={item.day}
                href="/inktober-2026"
                className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-2.5 transition-all duration-300 hover:border-[#c5a059]/60 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/60">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 font-mono text-[10px] tracking-widest text-[#f5f1e8] backdrop-blur">
                    DAY {item.day}
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <h3 className="font-semibold text-sm text-[#f5f1e8] group-hover:text-[#c5a059]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8f8670] uppercase tracking-wider">
                    {item.note}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/inktober-2026"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5f1e8] backdrop-blur transition hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-black"
            >
              <span>Explore All 31 Artworks in 3D</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Disciplines / What We Do */}
      <section id="disciplines" className="py-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8f8670]">
              Capabilities &bull; What We Do
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f1e8]">
              Disciplines &amp; Craft
            </h2>
            <p className="mt-4 text-base text-[#bdb7aa] leading-relaxed">
              Bridging precision digital craftsmanship, engineering tolerances, and cinematic narrative.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Discipline 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <Box className="h-8 w-8 text-[#c5a059]" />
                <span className="font-mono text-xs text-[#8f8670]">01 / 04</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#f5f1e8]">
                3D Product &amp; Commercial Visualization
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#bdb7aa]">
                Photorealistic studio renders, complex PBR materials, custom studio lighting setups, and visual storytelling for consumer goods, tech hardware, and packaging.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded-full border border-white/10 px-2.5 py-1">Blender Cycles</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">Studio Lighting</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">Texture Synthesizing</span>
              </div>
            </div>

            {/* Discipline 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <Globe className="h-8 w-8 text-[#c5a059]" />
                <span className="font-mono text-xs text-[#8f8670]">02 / 04</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#f5f1e8]">
                Cultural Architecture &amp; Heritage in 3D
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#bdb7aa]">
                Digital reconstruction and historical preservation of iconic Ethiopian monuments, including the monolithic rock-hewn churches of Lalibela (Bete Giorgis).
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded-full border border-white/10 px-2.5 py-1">Lalibela Reconstruction</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">GrabCAD</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">Architectural Accuracy</span>
              </div>
            </div>

            {/* Discipline 3 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <Cpu className="h-8 w-8 text-[#c5a059]" />
                <span className="font-mono text-xs text-[#8f8670]">03 / 04</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#f5f1e8]">
                Additive Manufacturing &amp; 3D Printing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#bdb7aa]">
                Engineering functional 3D printable designs (such as compact travel chess sets), mechanical tolerances, and vector toolpaths for CNC/laser machining.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded-full border border-white/10 px-2.5 py-1">MyMiniFactory</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">Tolerance Engineering</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">CAM / Vector Graphics</span>
              </div>
            </div>

            {/* Discipline 4 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <Palette className="h-8 w-8 text-[#c5a059]" />
                <span className="font-mono text-xs text-[#8f8670]">04 / 04</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#f5f1e8]">
                Concept Art, Ink &amp; Motion Direction
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#bdb7aa]">
                Worldbuilding, character design, and daily ink craftsmanship. Synthesizing traditional cross-hatching and linework with real-time 3D web environments.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded-full border border-white/10 px-2.5 py-1">Inktober Marathon</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">Three.js / WebGL</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1">Adobe Creative Suite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Production Pipeline */}
      <section id="pipeline" className="border-t border-white/10 bg-[#080808] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-[#8f8670]">Toolkit &bull; Software Pipeline</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#f5f1e8]">
                Engineered for Impact
              </h2>
            </div>
            <p className="mt-2 sm:mt-0 text-sm text-[#bdb7aa]">
              Every tool in the stack chosen for maximum fidelity and output speed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs text-[#c5a059] font-mono">PRIMARY 3D</span>
              <h4 className="mt-1 text-lg font-bold text-white">Blender</h4>
              <p className="mt-2 text-xs text-[#8f8670] leading-relaxed">
                Cycles, Eevee, procedural shading, sculpting, and geometry nodes.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs text-[#c5a059] font-mono">POST &amp; CONCEPT</span>
              <h4 className="mt-1 text-lg font-bold text-white">Photoshop</h4>
              <p className="mt-2 text-xs text-[#8f8670] leading-relaxed">
                Color grading, composite matte painting, texture creation.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs text-[#c5a059] font-mono">VECTOR &amp; CAM</span>
              <h4 className="mt-1 text-lg font-bold text-white">Illustrator / CAD</h4>
              <p className="mt-2 text-xs text-[#8f8670] leading-relaxed">
                Vector geometry for machining, laser profiling, and CAD assets.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="text-xs text-[#c5a059] font-mono">INTERACTIVE WEB</span>
              <h4 className="mt-1 text-lg font-bold text-white">Three.js / WebGL</h4>
              <p className="mt-2 text-xs text-[#8f8670] leading-relaxed">
                Real-time 3D spatial experiences, rotunda carousels, and shaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works & Case Studies */}
      <section id="featured" className="py-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8f8670]">Selected Projects</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f1e8]">
              Featured Work
            </h2>
          </div>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 transition hover:border-[#c5a059]/50">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#c5a059]">
                    <span>Exhibition</span>
                    <span>&bull;</span>
                    <span>Interactive 3D</span>
                  </div>
                  <h3 className="mt-2 text-3xl font-bold text-[#f5f1e8] group-hover:text-[#c5a059] transition">
                    Inktober 2026: 31-Day Spatial Rotunda
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#bdb7aa]">
                    A complete 31-day original artwork collection rendered as an interactive cylindrical 3D rotunda with smooth physics, procedural dust, dynamic inspection, and synthesized audio.
                  </p>
                </div>
                <Link
                  href="/inktober-2026"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-wider text-white transition hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059]"
                >
                  <span>Experience in 3D</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 transition hover:border-[#c5a059]/50">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#8f8670]">
                    <span>Heritage Preservation</span>
                    <span>&bull;</span>
                    <span>CAD / 3D Reconstruction</span>
                  </div>
                  <h3 className="mt-2 text-3xl font-bold text-[#f5f1e8]">
                    Bete Giorgis (Lalibela): Monolithic Heritage in 3D
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#bdb7aa]">
                    Digital architectural reconstruction of the historic cross-shaped rock-hewn monolithic church of Lalibela, Ethiopia. Featured across engineering CAD communities on GrabCAD.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-[#8f8670]">
                  <span>GrabCAD &amp; MyMiniFactory</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 transition hover:border-[#c5a059]/50">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#8f8670]">
                    <span>Additive Manufacturing</span>
                    <span>&bull;</span>
                    <span>3D Printing</span>
                  </div>
                  <h3 className="mt-2 text-3xl font-bold text-[#f5f1e8]">
                    Precision Engineered Travel Chess Set
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#bdb7aa]">
                    Functional, interlocking compact travel chess set engineered for FDM/SLA 3D printing. Features print-in-place tolerances and magnetic retention.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-[#8f8670]">
                  <span>Functional Prototype</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <ContactSection />

      {/* Infinite Signature Marquee */}
      <section className="overflow-hidden border-t border-b border-white/15 bg-black py-5">
        <div className="animate-marquee whitespace-nowrap text-2xl font-bold uppercase tracking-[0.4em] text-[#bdb7aa] sm:text-3xl lg:text-5xl">
          WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG &bull; WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG &bull; WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG &bull;&nbsp;
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040404] px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row text-xs text-[#8f8670]">
          <div>
            &copy; 2026 Abraham Wondafrash &bull; Debliw.com. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/inktober-2026" className="transition hover:text-white">
              Inktober 3D
            </Link>
            <a href="https://github.com/111abraham" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <Link href="/relationship/status" className="transition hover:text-[#c5a059]">
              Status
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
