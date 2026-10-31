"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Sparkles, MessageCircle, ExternalLink, Trophy, Mail } from "lucide-react";
import Hero3DCanvas from "./components/Hero3DCanvas";
import CustomCursor from "./components/CustomCursor";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f1e8] selection:bg-[#c5a059]/30">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#050505]/80 px-6 py-4 backdrop-blur-md sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-base font-bold tracking-[0.25em] text-[#f5f1e8] uppercase">
            Debliw
          </span>
          <span className="text-xs text-[#8f8670]">&bull; Abraham Wondafrash</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider text-[#bdb7aa]">
          <Link
            href="/inktober-2026"
            className="flex items-center gap-1.5 text-[#f5f1e8] transition hover:text-[#c5a059]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
            <span>Inktober 3D</span>
          </Link>
          <a href="#work" className="transition hover:text-white">Selected Work</a>
          <a href="#about" className="transition hover:text-white">About &amp; Chess</a>
          <a
            href="https://t.me/artovw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-[#229ED9]"
          >
            <MessageCircle className="h-3 w-3" />
            <span>Telegram</span>
          </a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/inktober-2026"
            className="flex items-center gap-1.5 rounded-full border border-[#c5a059]/50 bg-[#c5a059]/10 px-3.5 py-1.5 text-xs text-[#f5f1e8] transition hover:bg-[#c5a059] hover:text-black"
          >
            <Compass className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">3D Rotunda</span>
            <span className="sm:hidden">Gallery</span>
          </Link>

          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs text-white transition hover:bg-white hover:text-black"
          >
            Email Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-32 pb-16 sm:px-10 lg:px-16">
        <Hero3DCanvas />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-[#bdb7aa] mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Based in Ethiopia &bull; Open for freelance 3D &amp; design work</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#f5f1e8] sm:text-6xl">
            Abraham Wondafrash
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-[#d8d0c0] leading-relaxed">
            I&apos;m a 3D artist and designer. I build 3D models, product renders, 3D-printable designs, and illustrations.
          </p>

          <p className="mt-2 text-sm text-[#8f8670] leading-relaxed max-w-2xl">
            Most of my time is spent in Blender, Photoshop, and exploring additive manufacturing. Whether it&apos;s recreating the monolithic rock-hewn churches of Lalibela, engineering a travel chess set, or finishing 31 original Inktober ink pieces—I like building things that feel tangible.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/inktober-2026"
              className="flex items-center gap-2 rounded-xl bg-[#c5a059] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black shadow-lg transition hover:bg-[#d6b26c]"
            >
              <Compass className="h-4 w-4" />
              <span>Explore Inktober 2026 in 3D</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href="https://t.me/artovw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-[#d8d0c0] transition hover:bg-white/10 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#229ED9]" />
              <span>Telegram (@artovw)</span>
            </a>

            <a
              href={`mailto:abrish.wondafrash@gmail.com`}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-[#d8d0c0] transition hover:bg-white/10 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>abrish.wondafrash@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured: Inktober 2026 3D Rotunda */}
      <section id="inktober" className="border-t border-b border-white/10 bg-[#080808] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Exhibition</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-4xl font-bold text-[#f5f1e8]">
                Inktober 2026 (31 Days)
              </h2>
            </div>
            <p className="mt-2 sm:mt-0 text-sm text-[#bdb7aa] max-w-md">
              I completed all 31 prompts for Inktober 2026. Here are four highlights, or you can walk through the entire month in an interactive 3D rotunda.
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
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-wider text-white transition hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059]"
            >
              <span>View all 31 artworks in the 3D gallery</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work & Projects */}
      <section id="work" className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-wider text-[#8f8670]">Projects</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
              Selected Work
            </h2>
          </div>

          <div className="space-y-6">
            {/* Lalibela */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition hover:border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <span className="text-xs text-[#c5a059] uppercase tracking-wider">Cultural Architecture</span>
                  <h3 className="mt-1 text-xl font-bold text-[#f5f1e8]">
                    Bete Giorgis (Lalibela) &bull; Monolithic 3D Heritage
                  </h3>
                  <p className="mt-2 text-sm text-[#bdb7aa] leading-relaxed max-w-2xl">
                    Detailed 3D reconstruction and CAD model of the famous cross-shaped monolithic rock church in Lalibela, Ethiopia. Designed in Blender and 3ds Max, and shared with the open design community on GrabCAD and MyMiniFactory.
                  </p>
                </div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#8f8670] self-start whitespace-nowrap">
                  GrabCAD &bull; MyMiniFactory
                </span>
              </div>
            </div>

            {/* Travel Chess Set */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition hover:border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <span className="text-xs text-[#c5a059] uppercase tracking-wider">Additive Manufacturing</span>
                  <h3 className="mt-1 text-xl font-bold text-[#f5f1e8]">
                    Compact 3D-Printable Travel Chess Set
                  </h3>
                  <p className="mt-2 text-sm text-[#bdb7aa] leading-relaxed max-w-2xl">
                    A functional, pocket-sized travel chess set engineered specifically for 3D printing. Designed with precise tolerances so pieces lock securely into place during transit.
                  </p>
                </div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#8f8670] self-start whitespace-nowrap">
                  3D Print Design
                </span>
              </div>
            </div>

            {/* Telegram Channel */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition hover:border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <span className="text-xs text-[#229ED9] uppercase tracking-wider">Telegram &bull; Art of W</span>
                  <h3 className="mt-1 text-xl font-bold text-[#f5f1e8]">
                    Daily 3D Turntables &amp; Renders (@artovw)
                  </h3>
                  <p className="mt-2 text-sm text-[#bdb7aa] leading-relaxed max-w-2xl">
                    My personal channel where I post work-in-progress renders, 3D turntables, Inktober videos, and experiment files directly from Blender.
                  </p>
                </div>
                <a
                  href="https://t.me/artovw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-[#229ED9]/40 bg-[#229ED9]/10 px-3.5 py-1.5 text-xs text-[#229ED9] transition hover:bg-[#229ED9] hover:text-black self-start"
                >
                  <span>Open @artovw</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me & Chess */}
      <section id="about" className="border-t border-white/10 bg-[#080808] py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#8f8670]">About Me</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#f5f1e8]">
                Hi, I&apos;m Abraham.
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#bdb7aa] leading-relaxed">
                <p>
                  I&apos;m a 3D artist and freelance generalist based in Ethiopia. I work across 3D product rendering, hard-surface modeling, cultural heritage visualization, and vector graphics for machining.
                </p>
                <p>
                  I prefer clean, intentional work over clutter. I take pride in good topology, believable materials, and designs that solve actual physical or visual problems.
                </p>
              </div>

              {/* Tools list */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#8f8670]">Tools I use daily:</span>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["Blender", "Adobe Photoshop", "Illustrator", "3ds Max", "CAD & 3D Printing", "Three.js"].map((tool) => (
                    <span key={tool} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[#d8d0c0]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Chess Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#c5a059]/10 p-3 text-[#c5a059]">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f5f1e8]">Chess Enthusiast</h3>
                  <span className="text-xs text-[#8f8670]">Strategy &bull; Pattern Recognition</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-[#bdb7aa] leading-relaxed">
                When I&apos;m not in Blender or drawing, you&apos;ll probably find me playing chess. The spatial reasoning and pattern recognition in chess deeply influences how I approach 3D geometry and structural design—which is what inspired me to engineer the 3D-printable travel chess set.
              </p>

              <div className="mt-5 rounded-lg border border-white/10 bg-black/40 p-3 text-xs text-[#8f8670]">
                Always up for a game—reach out if you&apos;d like to play on Chess.com or Lichess!
              </div>
            </div>
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
          <div className="flex items-center gap-5">
            <Link href="/inktober-2026" className="transition hover:text-white">
              Inktober 3D
            </Link>
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
