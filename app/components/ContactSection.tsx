"use client";

import { useState } from "react";
import { Check, Copy, Send, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "3D Product Visualization",
    message: "",
  });

  const emailAddress = "contact@debliw.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate inquiry submission
    setFormSubmitted(true);
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
          <div className="space-y-6 lg:col-span-5">
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8f8670]">Direct Email</span>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-lg font-medium text-[#f5f1e8]">{emailAddress}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-wider text-[#d8d0c0] transition hover:bg-white hover:text-black hover:border-white"
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
            </div>

            {/* Platform Direct Connect Links */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8f8670]">Direct Profiles</span>
              
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#14a800]/60 hover:bg-[#14a800]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#14a800]">Upwork</div>
                  <div className="text-xs text-[#8f8670]">Hire as Top 3D Freelancer &bull; Escrow Protection</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#14a800]" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#0077b5]/60 hover:bg-[#0077b5]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#0077b5]">LinkedIn</div>
                  <div className="text-xs text-[#8f8670]">Professional Career &bull; Network &amp; Inquiries</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#0077b5]" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#e1306c]/60 hover:bg-[#e1306c]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#e1306c]">Instagram</div>
                  <div className="text-xs text-[#8f8670]">Daily Renders &bull; Inktober WIPs &bull; Visual Lab</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#e1306c]" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-[#1877f2]/60 hover:bg-[#1877f2]/5"
              >
                <div>
                  <div className="font-semibold text-[#f5f1e8] group-hover:text-[#1877f2]">Facebook</div>
                  <div className="text-xs text-[#8f8670]">Community &bull; Creative Updates &amp; Stories</div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:translate-x-0.5 group-hover:text-[#1877f2]" />
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

            {formSubmitted ? (
              <div className="mt-8 rounded-xl border border-[#c5a059]/40 bg-[#c5a059]/10 p-6 text-center">
                <Check className="mx-auto h-8 w-8 text-[#c5a059]" />
                <h4 className="mt-3 text-lg font-semibold text-[#f5f1e8]">Thank you for reaching out!</h4>
                <p className="mt-2 text-sm text-[#bdb7aa]">
                  Your message has been received. I review all inquiries within 24 hours. You can also reach me directly at {emailAddress}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-[#f5f1e8] hover:bg-white/10"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8f8670]">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8f8670]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2.5 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8f8670]">Project Discipline</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
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
                    rows={4}
                    required
                    placeholder="Briefly describe your timeline, scope, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
