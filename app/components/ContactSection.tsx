"use client";

import { useState } from "react";
import { Check, Copy, Send, ExternalLink, Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "abrish.wondafrash@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative border-t border-white/10 bg-[#070707] py-24 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8f8670]">
            Let&apos;s Build Something Bold
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#f5f1e8] sm:text-5xl">
            Start a Collaboration
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#bdb7aa]">
            Available for selected freelance 3D visualization, additive manufacturing engineering, and creative direction projects worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Links & Upwork/LinkedIn */}
          <div className="space-y-4 lg:col-span-5">
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8f8670]">Direct Email</span>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base font-medium text-[#f5f1e8] break-all">{emailAddress}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-wider text-[#d8d0c0] transition hover:bg-white hover:text-black hover:border-white shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="mt-4">
                <a
                  href={`mailto:${emailAddress}?subject=Project%20Inquiry`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#c5a059] px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-[#d6b26c]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Platform Direct Connect Links */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8f8670]">Direct Profiles</span>
              
              <a
                href="https://www.upwork.com/freelancers/~016b490890d2d64f7f"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#14a800]/60 hover:bg-[#14a800]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#14a800]">Upwork</div>
                  <div className="text-xs text-[#8f8670]">3D Generalist (Blender) &bull; Verified Profile</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#14a800]" />
              </a>

              <a
                href="https://www.artstation.com/abraham111"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#13aff0]/60 hover:bg-[#13aff0]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#13aff0]">ArtStation (@abraham111)</div>
                  <div className="text-xs text-[#8f8670]">High-Resolution 3D Renders &amp; Portfolio</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#13aff0]" />
              </a>

              <a
                href="https://t.me/artovw"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#229ED9]/60 hover:bg-[#229ED9]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#229ED9]">Telegram (@artovw)</div>
                  <div className="text-xs text-[#8f8670]">Art of W Channel &bull; Daily Turntables &amp; WIPs</div>
                </div>
                <MessageCircle className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#229ED9]" />
              </a>

              <a
                href="https://www.instagram.com/abrahamwondafrash/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#e1306c]/60 hover:bg-[#e1306c]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#e1306c]">Instagram</div>
                  <div className="text-xs text-[#8f8670]">@abrahamwondafrash &bull; Art &amp; Visual Lab</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#e1306c]" />
              </a>

              <a
                href="https://github.com/111abraham"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-white/40 hover:bg-white/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-white">GitHub (111abraham)</div>
                  <div className="text-xs text-[#8f8670]">Open-source repos &bull; Interactive 3D Web &bull; Code</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8f8670]">Quick Project Inquiry</span>
            <h3 className="mt-1 text-2xl font-semibold text-[#f5f1e8]">Tell me about your concept</h3>
            <p className="mt-1 text-xs text-[#8f8670]">
              Messages are sent directly to {emailAddress}.
            </p>

            <form
              action="https://formsubmit.co/abrish.wondafrash@gmail.com"
              method="POST"
              className="mt-6 space-y-4"
            >
              <input type="hidden" name="_subject" value="New Portfolio Inquiry from debliw.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://debliw.com#contact" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8f8670]">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8f8670]">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8f8670]">Project Discipline</label>
                <select
                  name="discipline"
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/60 px-3.5 py-2.5 text-sm text-[#f5f1e8] focus:border-[#c5a059] focus:outline-none"
                >
                  <option value="3D Product Visualization">3D Product Visualization &amp; Rendering</option>
                  <option value="Cultural Heritage & Reconstruction">Cultural Heritage &amp; 3D Archaeology (Lalibela)</option>
                  <option value="Additive Manufacturing & 3D Print Design">Additive Manufacturing &amp; 3D Print Engineering</option>
                  <option value="Concept Art & Motion Design">Concept Art, Storyboarding &amp; Motion Design</option>
                  <option value="Web 3D Interactive (Three.js)">Web 3D Interactive (Three.js / WebGL)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8f8670]">Project Overview</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Briefly describe your timeline, scope, and vision..."
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#c5a059] bg-[#c5a059] px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#e0b96b] hover:shadow-[0_0_25px_rgba(197,160,89,0.35)]"
              >
                <Send className="h-4 w-4" />
                <span>Send Project Brief</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
