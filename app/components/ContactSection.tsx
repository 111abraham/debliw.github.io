"use client";

import { useState } from "react";
import { Check, Copy, Send, Mail, MessageCircle, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "abrish.wondafrash@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="border-t border-white/10 bg-[#070707] py-20 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8f8670]">Get in Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#f5f1e8]">
            Let&apos;s talk about your project
          </h2>
          <p className="mt-3 text-sm text-[#bdb7aa] leading-relaxed">
            Whether you need 3D product renders, a cultural architectural model, 3D print engineering, or just want to talk about art or chess—send me an email or a message on Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Direct Contact Options */}
          <div className="space-y-4 md:col-span-5">
            {/* Real Gmail Box */}
            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-5">
              <span className="text-[11px] uppercase tracking-wider text-[#8f8670]">Direct Email</span>
              <div className="mt-2 text-sm font-mono text-[#f5f1e8] break-all">{emailAddress}</div>
              <div className="mt-4 flex gap-2">
                <a
                  href={`mailto:${emailAddress}?subject=Project%20Inquiry`}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#c5a059] bg-[#c5a059] px-3 py-2 text-xs font-semibold text-black transition hover:bg-[#d6b26c]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-[#d8d0c0] transition hover:bg-white/10"
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

            {/* Telegram Card */}
            <a
              href="https://t.me/artovw"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-[#229ED9]/60 hover:bg-[#229ED9]/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#229ED9]/10 p-2 text-[#229ED9]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f5f1e8] group-hover:text-[#229ED9]">
                    Telegram: @artovw
                  </div>
                  <div className="text-xs text-[#8f8670]">Art of W channel &amp; direct chat</div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-[#8f8670] transition group-hover:text-[#229ED9]" />
            </a>

            {/* Profiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-xs transition hover:border-[#14a800] hover:text-[#14a800]"
              >
                <span className="font-semibold block text-[#f5f1e8]">Upwork</span>
                <span className="text-[11px] text-[#8f8670]">Freelance Profile</span>
              </a>

              <a
                href="https://www.artstation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-xs transition hover:border-[#13aff0] hover:text-[#13aff0]"
              >
                <span className="font-semibold block text-[#f5f1e8]">ArtStation</span>
                <span className="text-[11px] text-[#8f8670]">Portfolio Renders</span>
              </a>
            </div>
          </div>

          {/* Working Functional Email Form (posts to FormSubmit -> abrish.wondafrash@gmail.com) */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:col-span-7">
            <h3 className="text-base font-semibold text-[#f5f1e8]">Send a quick message</h3>
            <p className="mt-1 text-xs text-[#8f8670]">
              This message goes directly to my personal inbox at {emailAddress}.
            </p>

            <form
              action="https://formsubmit.co/abrish.wondafrash@gmail.com"
              method="POST"
              className="mt-5 space-y-4 text-xs"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Message from debliw.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://debliw.com#contact" />

              <div>
                <label className="block text-[#8f8670] uppercase tracking-wider text-[10px] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#8f8670] uppercase tracking-wider text-[10px] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#8f8670] uppercase tracking-wider text-[10px] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="What are you looking to create?"
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm text-[#f5f1e8] placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#f5f1e8] transition hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059]"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Send to abrish.wondafrash@gmail.com</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
