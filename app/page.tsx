"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles, ExternalLink, CheckCircle2, Box } from "lucide-react";
import Hero3DCanvas from "./components/Hero3DCanvas";
import ContactSection from "./components/ContactSection";
import LiveChessStats from "./components/LiveChessStats";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f1e8] selection:bg-[#c5a059]/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#050505]/85 px-6 py-4 backdrop-blur-md sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-base font-bold tracking-[0.25em] text-[#f5f1e8] uppercase">
            Debliw
          </span>
          <span className="text-xs text-[#8f8670]">&bull; Abraham Wondafrash</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-[#bdb7aa]">
          <a href="#work" className="font-medium text-[#f5f1e8] transition hover:text-[#c5a059]">
            Selected Work
          </a>
          <a
            href="https://www.artstation.com/abraham111"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-[#13aff0]"
          >
            <span>ArtStation</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~016b490890d2d64f7f"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-[#14a800]"
          >
            <span>Upwork</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
          <Link
            href="/inktober-2026"
            className="flex items-center gap-1.5 transition hover:text-[#c5a059]"
          >
            <span>Inktober 3D</span>
          </Link>
          <a href="#about" className="transition hover:text-white">
            Bio
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.artstation.com/abraham111"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-[#13aff0]/40 bg-[#13aff0]/10 px-3.5 py-1.5 text-xs text-[#f5f1e8] transition hover:bg-[#13aff0] hover:text-black hover:border-[#13aff0]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#13aff0]" />
            <span>ArtStation</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-white transition hover:bg-white hover:text-black"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[92vh] flex-col justify-center px-6 pt-32 pb-20 sm:px-10 lg:px-16">
        <Hero3DCanvas />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-400 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Commercial 3D Modeling &bull; Worldwide Clients</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#f5f1e8] sm:text-6xl lg:text-7xl">
            Abraham Wondafrash
          </h1>

          <p className="mt-3 text-lg font-medium text-[#c5a059] sm:text-xl">
            Commercial 3D Artist &bull; Hard-Surface CAD &bull; Product Visualization
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#d8d0c0] leading-relaxed">
            I craft high-fidelity 3D product renders, commercial vehicle wraps, hard-surface CAD assets, and additive manufacturing designs for businesses and brands.
          </p>

          <p className="mt-2 text-sm text-[#8f8670] leading-relaxed max-w-2xl">
            From photorealistic retail packaging and automotive livery to cultural heritage reconstructions (Lalibela) and precision 3D-printable assemblies—every project is engineered with production-ready topology in Blender, CAD, and Photoshop.
          </p>

          {/* Primary Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {/* Primary Highlight CTA: ArtStation */}
            <a
              href="https://www.artstation.com/abraham111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl bg-[#c5a059] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-[#c5a059]/20 transition hover:bg-[#d6b26c] hover:shadow-[#c5a059]/30"
            >
              <Box className="h-4 w-4" />
              <span>Explore ArtStation Portfolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Secondary CTA: Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~016b490890d2d64f7f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-semibold text-[#f5f1e8] transition hover:border-[#14a800] hover:bg-[#14a800]/10 hover:text-[#14a800]"
            >
              <span>Hire on Upwork</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            {/* Tertiary Action: Jump to Selected Work */}
            <a
              href="#work"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-xs text-[#bdb7aa] transition hover:border-white/30 hover:text-white"
            >
              <span>Selected Work</span>
            </a>

            {/* Creative Rotunda Link */}
            <Link
              href="/inktober-2026"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-xs text-[#8f8670] transition hover:border-[#c5a059]/50 hover:text-[#c5a059]"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Inktober 3D</span>
            </Link>
          </div>

          {/* Client Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-[#8f8670]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#c5a059]" />
              <span>Commercial Product Renders</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#c5a059]" />
              <span>Vehicle Fleet Livery CAD</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#c5a059]" />
              <span>FDM / SLA 3D Print Tolerances</span>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work & Commercial Projects */}
      <section id="work" className="border-t border-white/10 bg-[#080808] py-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">
                Client &amp; Commercial Showcase
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#f5f1e8]">
                Selected Commercial Work
              </h2>
              <p className="mt-2 text-sm text-[#bdb7aa] max-w-xl">
                A curation of commercial product packaging, vehicle fleet branding, hard-surface modeling, and engineered CAD designs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.artstation.com/abraham111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#13aff0]/40 bg-[#13aff0]/10 px-4 py-2.5 text-xs font-semibold text-[#13aff0] transition hover:bg-[#13aff0] hover:text-black"
              >
                <span>View Full Portfolio on ArtStation</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* ArtStation Direct Callout Banner */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-[#13aff0]/30 bg-gradient-to-r from-[#13aff0]/10 via-black to-[#c5a059]/10 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-md bg-[#13aff0]/20 px-2.5 py-1 font-mono text-[11px] text-[#13aff0] uppercase">
                  Featured on ArtStation
                </div>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  Inspect 3D Turntables, Clay Passes &amp; Wireframes
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#bdb7aa] leading-relaxed">
                  Visit Abraham&apos;s verified ArtStation profile to examine high-resolution mesh topology, ambient occlusion clay breakdowns, and commercial lighting studies.
                </p>
              </div>
              <a
                href="https://www.artstation.com/abraham111"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-center flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-black transition hover:bg-[#13aff0] hover:text-white shrink-0"
              >
                <span>Open @abraham111</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: Commercial Van Branding & Fleet Livery */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-[#c5a059]/50 hover:bg-white/[0.04]">
              <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                <Image
                  src="/portfolio/commercial-van-branding.jpg"
                  alt="Commercial Van Livery and Vehicle Wrap Design"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] text-[#c5a059] uppercase tracking-wider backdrop-blur-sm">
                  Commercial Fleet Branding
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#8f8670]">Vehicle Livery &bull; 3D Hard-Surface</span>
                <h3 className="mt-1 text-xl font-bold text-[#f5f1e8] group-hover:text-[#c5a059] transition">
                  Commercial Vehicle Fleet Wrap &amp; Livery
                </h3>
                <p className="mt-2 text-sm text-[#bdb7aa] leading-relaxed">
                  Production-grade vehicle branding and wrap visualization for commercial transport fleets. Accurately scaled CAD surfaces, distortion-free seam alignment across panels, and studio-grade automotive lighting.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[#8f8670]">
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Blender</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Automotive Wrap</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Livery Design</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Fleet Graphics</span>
                </div>
              </div>
            </div>

            {/* Project 2: Retail Food Packaging & Pouch Visualization */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-[#c5a059]/50 hover:bg-white/[0.04]">
              <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                <Image
                  src="/portfolio/product-label-packaging.jpg"
                  alt="Commercial Food Packaging and Label Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] text-[#c5a059] uppercase tracking-wider backdrop-blur-sm">
                  Client Packaging
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#8f8670]">Packaging &bull; Commercial Product Render</span>
                <h3 className="mt-1 text-xl font-bold text-[#f5f1e8] group-hover:text-[#c5a059] transition">
                  Food Packaging &amp; Retail Spice Pouches (Nur Mitin)
                </h3>
                <p className="mt-2 text-sm text-[#bdb7aa] leading-relaxed">
                  Full 3D product pouch renders and label packaging designs for client retail distribution. Custom procedural foil and matte paper shaders, organic wrinkles and folds, and print-accurate CMYK vector integration.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[#8f8670]">
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Product Visualization</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Retail Packaging</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Photoreal Shading</span>
                </div>
              </div>
            </div>

            {/* Project 3: Studio Product Modeling & Showcase */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-[#c5a059]/50 hover:bg-white/[0.04]">
              <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                <Image
                  src="/portfolio/product-shoot-render.jpg"
                  alt="3D Product Modeling and Studio Lighting Render"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] text-[#c5a059] uppercase tracking-wider backdrop-blur-sm">
                  Studio Lighting
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#8f8670]">Studio Shoot &bull; Hard-Surface Modeling</span>
                <h3 className="mt-1 text-xl font-bold text-[#f5f1e8] group-hover:text-[#c5a059] transition">
                  Commercial Product Modeling &amp; Studio Lighting
                </h3>
                <p className="mt-2 text-sm text-[#bdb7aa] leading-relaxed">
                  Clean commercial studio showcase highlighting product ergonomics, tight bevel geometry, and multi-light softbox configurations engineered for e-commerce catalog presentation and advertising.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[#8f8670]">
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Commercial Render</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Studio Lighting</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">E-Commerce</span>
                </div>
              </div>
            </div>

            {/* Project 4: Delivery Van Fleet Exterior Wrap */}
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-[#c5a059]/50 hover:bg-white/[0.04]">
              <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                <Image
                  src="/portfolio/van-commercial-wrap-2.jpg"
                  alt="Commercial Delivery Van Wrap Environment Render"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-black/80 px-2.5 py-1 font-mono text-[10px] text-[#c5a059] uppercase tracking-wider backdrop-blur-sm">
                  Fleet Showcase
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#8f8670]">Fleet Graphics &bull; Environmental Staging</span>
                <h3 className="mt-1 text-xl font-bold text-[#f5f1e8] group-hover:text-[#c5a059] transition">
                  Delivery Van Fleet Wrap Turnaround
                </h3>
                <p className="mt-2 text-sm text-[#bdb7aa] leading-relaxed">
                  Exterior livery presentation rendered in outdoor lighting scenarios to validate brand contrast, high-visibility highway legibility, and physical print alignment across side doors and rear hatches.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[#8f8670]">
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">3D Mockup</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Exterior Graphics</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 border border-white/10">Turnaround</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hard-Surface & CAD Engineering Highlights */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lalibela */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
              <span className="text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold">
                Cultural Heritage &bull; CAD
              </span>
              <h3 className="mt-2 text-lg font-bold text-[#f5f1e8]">
                Bete Giorgis (Lalibela) Monolithic 3D
              </h3>
              <p className="mt-2 text-xs text-[#bdb7aa] leading-relaxed">
                Detailed 3D reconstruction and CAD model of the famous cross-shaped monolithic rock-hewn church in Lalibela, Ethiopia. Designed in Blender and 3ds Max, downloaded and printed by 3D enthusiasts worldwide on GrabCAD and MyMiniFactory.
              </p>
              <div className="mt-4 text-[10px] font-mono text-[#8f8670]">
                GrabCAD &bull; MyMiniFactory
              </div>
            </div>

            {/* Travel Chess */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
              <span className="text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold">
                Additive Manufacturing &bull; Product CAD
              </span>
              <h3 className="mt-2 text-lg font-bold text-[#f5f1e8]">
                Compact 3D-Printable Travel Chess Set
              </h3>
              <p className="mt-2 text-xs text-[#bdb7aa] leading-relaxed">
                Functional, pocket-sized travel chess set engineered specifically for FDM and SLA 3D printing. Designed with tight mechanical tolerances, interlocking retention slots, and zero-support piece geometry.
              </p>
              <div className="mt-4 text-[10px] font-mono text-[#8f8670]">
                FDM / SLA 3D Printing &bull; Precision CAD
              </div>
            </div>

            {/* Interactive 3D Web Graphics */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
              <span className="text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold">
                WebGL &bull; Interactive Experiences
              </span>
              <h3 className="mt-2 text-lg font-bold text-[#f5f1e8]">
                Interactive 3D Web &amp; Virtual Rotunda
              </h3>
              <p className="mt-2 text-xs text-[#bdb7aa] leading-relaxed">
                Custom WebGL architectures and Three.js 3D environments built with React Three Fiber and Next.js, allowing clients to present physical products, architecture, and art in browser-based 3D space.
              </p>
              <div className="mt-4 text-[10px] font-mono text-[#8f8670]">
                Three.js &bull; WebGL &bull; React
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: Inktober 2026 Creative Exhibition (Demoted & Refocused) */}
      <section id="inktober" className="border-t border-b border-white/10 bg-black py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Personal Creative Project &bull; 31-Day Challenge</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
                Inktober 2026 in Interactive 3D
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#bdb7aa] max-w-md">
              Beyond client work, I completed all 31 prompts for Inktober 2026 and rendered them into an interactive 3D virtual rotunda.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { day: "01", title: "Apple", src: "/inktober-2026/day-01-apple.jpg" },
              { day: "10", title: "Mystical", src: "/inktober-2026/day-10-mystical.jpg" },
              { day: "21", title: "Hero", src: "/inktober-2026/day-21-hero.jpg" },
              { day: "31", title: "Flex", src: "/inktober-2026/day-31-flex.jpg" },
            ].map((art) => (
              <Link
                key={art.day}
                href="/inktober-2026"
                className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-2 transition hover:border-[#c5a059]/60 hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/60">
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 font-mono text-[10px] text-white">
                    DAY {art.day}
                  </div>
                </div>
                <div className="mt-2 px-1 text-xs">
                  <span className="font-semibold text-[#f5f1e8] group-hover:text-[#c5a059]">
                    {art.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/inktober-2026"
              className="inline-flex items-center gap-2 rounded-xl border border-[#c5a059]/50 bg-[#c5a059]/10 px-6 py-3 text-xs uppercase tracking-wider text-[#f5f1e8] transition hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059]"
            >
              <Compass className="h-4 w-4" />
              <span>Walk through all 31 artworks in the 3D rotunda</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="border-t border-white/10 bg-[#080808] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">Bio</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
                Hi, I&apos;m Abraham.
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#bdb7aa] leading-relaxed">
                <p>
                  I&apos;m a 3D artist and freelance visual generalist based in Ethiopia, collaborating with clients worldwide.
                </p>
                <p>
                  My work spans commercial product rendering, hard-surface CAD modeling, vehicle fleet livery visualization, cultural heritage preservation, and precision 3D printing.
                </p>
                <p>
                  I prioritize production-ready topology, believable physical materials, and designs engineered to solve real-world branding and manufacturing challenges.
                </p>
              </div>

              {/* Tools list */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#8f8670]">Tools I use daily:</span>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["Blender (Cycles/Eevee)", "Adobe Photoshop", "Illustrator", "3ds Max", "CAD & 3D Printing", "Three.js"].map((tool) => (
                    <span key={tool} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[#d8d0c0]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Chess Stats Component */}
            <LiveChessStats />
          </div>
        </div>
      </section>

      {/* Real Functional Contact Form */}
      <ContactSection />

      {/* Marquee */}
      <section className="overflow-hidden border-t border-b border-white/10 bg-black py-4">
        <div className="animate-marquee whitespace-nowrap text-xl font-bold uppercase tracking-[0.3em] text-[#8f8670] sm:text-2xl">
          WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG &bull; WE&apos;RE THE ONES WHO&apos;RE GOING TO MAKE ART MAKE IT BIG &bull;&nbsp;
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040404] px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row text-xs text-[#8f8670]">
          <div>&copy; 2026 Abraham Wondafrash &bull; debliw.com</div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="https://www.artstation.com/abraham111" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#13aff0]">
              ArtStation
            </a>
            <a href="https://www.upwork.com/freelancers/~016b490890d2d64f7f" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#14a800]">
              Upwork
            </a>
            <Link href="/inktober-2026" className="transition hover:text-white">
              Inktober 3D
            </Link>
            <a href="https://www.instagram.com/abrahamwondafrash/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#e1306c]">
              Instagram
            </a>
            <a href="https://t.me/artovw" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#229ED9]">
              Telegram
            </a>
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
