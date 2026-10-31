"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles, ExternalLink, Play, Layers, Box, Cpu, PenTool } from "lucide-react";
import Hero3DCanvas from "./components/Hero3DCanvas";
import CustomCursor from "./components/CustomCursor";
import ContactSection from "./components/ContactSection";
import LiveChessStats from "./components/LiveChessStats";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f1e8] selection:bg-[#c5a059]/30">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#050505]/85 px-6 py-4 backdrop-blur-md sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-base font-bold tracking-[0.25em] text-[#f5f1e8] uppercase">
            Debliw
          </span>
          <span className="text-xs text-[#8f8670]">&bull; Abraham Wondafrash</span>
        </Link>

        {/* Clean Nav Items - Telegram removed, 'Chess & Bio' renamed to 'Bio' */}
        <div className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider text-[#bdb7aa]">
          <a href="#work" className="transition hover:text-white">Selected Work</a>
          <a
            href="https://abraham111.artstation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#13aff0]"
          >
            ArtStation
          </a>
          <a
            href="https://www.upwork.com/freelancers/~016b490890d2d64f7f"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#14a800]"
          >
            Upwork
          </a>
          <a href="#bio" className="transition hover:text-white">Bio</a>
          <a href="#inktober" className="transition hover:text-[#c5a059]">Inktober 3D</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/inktober-2026"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#bdb7aa] transition hover:border-[#c5a059] hover:text-[#c5a059]"
          >
            <Compass className="h-3.5 w-3.5" />
            <span>3D Rotunda</span>
          </Link>

          <a
            href="#contact"
            className="rounded-full border border-[#c5a059] bg-[#c5a059] px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-[#d6b26c]"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section - Business & ArtStation Focused */}
      <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-32 pb-16 sm:px-10 lg:px-16">
        <Hero3DCanvas />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-[#bdb7aa] mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Available for Commercial 3D Visualization, Product CGI &amp; CAD</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#f5f1e8] sm:text-6xl">
            Abraham Wondafrash
          </h1>

          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#c5a059] font-medium">
            3D Artist &bull; Visual Generalist &bull; Digital Sculptor
          </p>

          <p className="mt-5 text-lg sm:text-xl text-[#d8d0c0] leading-relaxed">
            I help businesses, brands, and creators bring physical and digital concepts to life with high-impact 3D product renders, CAD modeling, and visual storytelling.
          </p>

          <p className="mt-2 text-sm text-[#8f8670] leading-relaxed max-w-2xl">
            From photorealistic consumer product visualizations and monolithic heritage reconstructions (Lalibela) to functional 3D-printable prototypes and precision vector assets—engineered with clean topology and real-world lighting.
          </p>

          {/* Primary CTA leading to ArtStation as requested */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://abraham111.artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-[#c5a059] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black shadow-lg transition hover:bg-[#d6b26c] hover:scale-[1.02]"
            >
              <span>View ArtStation Portfolio</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~016b490890d2d64f7f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs text-[#f5f1e8] transition hover:border-[#14a800] hover:text-[#14a800]"
            >
              <span>Hire on Upwork</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <Link
              href="/inktober-2026"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3.5 text-xs text-[#8f8670] transition hover:border-white/20 hover:text-white"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Inktober 3D Rotunda</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Commercial & Professional Works (Highlight of the Page) */}
      <section id="work" className="border-t border-white/10 bg-[#080808] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#c5a059] font-mono">Portfolio</span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-bold text-[#f5f1e8]">
                Selected Work &amp; Capabilities
              </h2>
              <p className="mt-2 text-sm text-[#bdb7aa] max-w-xl">
                Commercial 3D assets, physical product design, and architectural reconstructions built for clients and production.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-3">
              <a
                href="https://abraham111.artstation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#13aff0] transition hover:border-[#13aff0] hover:bg-[#13aff0]/10"
              >
                <span>ArtStation Feed</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~016b490890d2d64f7f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#14a800] transition hover:border-[#14a800] hover:bg-[#14a800]/10"
              >
                <span>Upwork Profile</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Work 1: Commercial 3D Product Visualization */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-[#c5a059]/10 p-2.5 text-[#c5a059]">
                  <Box className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-[#8f8670]">Commercial CGI</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#f5f1e8]">
                3D Product &amp; Packaging Visualization
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#bdb7aa]">
                High-end photorealistic studio lighting, complex PBR materials (metals, frosted glass, liquids), and promotional hero renders for consumer brands, hardware, and packaging.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded border border-white/10 px-2 py-0.5">Blender Cycles</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Studio Lighting</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Photorealism</span>
              </div>
            </div>

            {/* Work 2: Lalibela Monolithic Heritage */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-[#c5a059]/10 p-2.5 text-[#c5a059]">
                  <Layers className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-[#8f8670]">Heritage 3D</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#f5f1e8]">
                Bete Giorgis (Lalibela) Reconstruction
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#bdb7aa]">
                Architectural reconstruction and precision CAD modeling of the iconic cross-shaped rock-hewn church in Lalibela, Ethiopia. Designed in Blender and 3ds Max, published on GrabCAD and MyMiniFactory.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded border border-white/10 px-2 py-0.5">GrabCAD</span>
                <span className="rounded border border-white/10 px-2 py-0.5">MyMiniFactory</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Architectural 3D</span>
              </div>
            </div>

            {/* Work 3: Additive Manufacturing & 3D Print Engineering */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-[#c5a059]/10 p-2.5 text-[#c5a059]">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-[#8f8670]">Additive Design</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#f5f1e8]">
                Compact 3D-Printable Travel Chess Set
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#bdb7aa]">
                Functional, pocket-sized travel chess set engineered for physical 3D printing. Features print-in-place tolerances and mechanical snap-fit retention so pieces lock firmly during transport.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded border border-white/10 px-2 py-0.5">3D Print Engineering</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Tolerance Testing</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Functional Prototyping</span>
              </div>
            </div>

            {/* Work 4: 2019 Demo Reel & Animation */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-[#c5a059]/10 p-2.5 text-[#c5a059]">
                  <Play className="h-6 w-6" />
                </div>
                <a
                  href="https://www.youtube.com/watch?v=L8ZSjawVD1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs text-[#c5a059] hover:underline"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#f5f1e8]">
                3D Demo Reel &amp; Motion Breakdown
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#bdb7aa]">
                Comprehensive animation breakdown showing camera choreography, character topology, vehicle mechanical rigs, and dynamic lighting passes.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded border border-white/10 px-2 py-0.5">Motion Cinematography</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Mechanical Rigging</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Lighting Breakdown</span>
              </div>
            </div>

            {/* Work 5: Vector Graphics for Machining & Laser */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#c5a059]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-[#c5a059]/10 p-2.5 text-[#c5a059]">
                  <PenTool className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-[#8f8670]">CAM &bull; Vector Tooling</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#f5f1e8]">
                Vector Graphics &amp; CNC / Laser Profiles
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#bdb7aa]">
                Creation of clean vector paths in Adobe Illustrator and CAD software calibrated for CNC toolpaths, laser cutting, signage, and precision sheet metal fabrication.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded border border-white/10 px-2 py-0.5">Illustrator</span>
                <span className="rounded border border-white/10 px-2 py-0.5">CNC &bull; Laser Toolpaths</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Technical Specs</span>
              </div>
            </div>

            {/* Work 6: Art of W Channel */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[#229ED9]/40 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-[#229ED9]/10 p-2.5 text-[#229ED9]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <a
                  href="http://t.me/ArtOfW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs text-[#229ED9] hover:underline"
                >
                  <span>t.me/ArtOfW</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#f5f1e8]">
                Daily 3D Turntables &amp; Renders
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#bdb7aa]">
                Personal Telegram channel featuring active 3D turntables, procedural shaders, and behind-the-scenes viewport clips directly from my Blender workstation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-[#8f8670]">
                <span className="rounded border border-white/10 px-2 py-0.5">Daily Turntables</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Viewport Demos</span>
                <span className="rounded border border-white/10 px-2 py-0.5">WIP Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inktober 2026 - Repositioned as a personal marathon showcase */}
      <section id="inktober" className="border-t border-white/10 bg-[#050505] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] uppercase tracking-wider">
                <Compass className="h-3.5 w-3.5" />
                <span>Creative Marathon</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
                Inktober 2026 &bull; 31-Day 3D Rotunda
              </h2>
              <p className="mt-2 text-sm text-[#bdb7aa] max-w-xl">
                Alongside commercial work, I maintain a strict daily discipline. In October 2026, I completed all 31 original ink &amp; concept prompts, now curated in an interactive 3D virtual cylinder.
              </p>
            </div>
            <Link
              href="/inktober-2026"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-lg border border-[#c5a059]/40 bg-[#c5a059]/10 px-4 py-2 text-xs text-[#f5f1e8] transition hover:bg-[#c5a059] hover:text-black"
            >
              <span>Launch 3D Rotunda</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 4 Preview Cards with Skeletons to Prevent Layout Shifts */}
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
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/80">
                  <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02]">
                    <div className="h-4 w-4 animate-spin rounded-full border border-white/20 border-t-[#c5a059]" />
                  </div>
                  <Image
                    src={art.src}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover relative z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 z-20 rounded bg-black/75 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur">
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
        </div>
      </section>

      {/* Bio Section (Renamed from 'Chess & Bio') */}
      <section id="bio" className="border-t border-white/10 bg-[#080808] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#c5a059] font-mono">Background</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
                Bio &bull; Abraham Wondafrash
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#bdb7aa] leading-relaxed">
                <p>
                  I&apos;m a 3D artist and freelance generalist based in Ethiopia. I specialize in commercial product visualization, hard-surface CAD modeling, cultural architecture, and vector toolpath generation.
                </p>
                <p>
                  I prioritize clean topology, accurate physical proportions, and dependable communication for commercial clients and remote teams worldwide.
                </p>
              </div>

              {/* Tools list */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#8f8670]">Primary Toolset:</span>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["Blender (Cycles/Eevee)", "Adobe Photoshop", "Illustrator (Vectors)", "3ds Max", "CAD & 3D Printing", "Three.js"].map((tool) => (
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

      {/* Real Working Contact Form */}
      <ContactSection />

      {/* Infinite Signature Marquee */}
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
            <a href="https://abraham111.artstation.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#13aff0]">
              ArtStation
            </a>
            <a href="https://www.upwork.com/freelancers/~016b490890d2d64f7f" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#14a800]">
              Upwork
            </a>
            <Link href="/inktober-2026" className="transition hover:text-white">
              Inktober 3D
            </Link>
            <a href="http://t.me/ArtOfW" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#229ED9]">
              Telegram
            </a>
            <a href="https://www.instagram.com/abrahamwondafrash/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#e1306c]">
              Instagram
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
