import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abraham Wondafrash | 3D Artist & Visual Generalist | Debliw",
  description:
    "Abraham Wondafrash (Debliw) is a 3D artist, visual generalist, and additive manufacturing designer specializing in Blender photorealism, cultural heritage reconstruction (Lalibela), and interactive 3D web experiences.",
  keywords: [
    "Abraham Wondafrash",
    "Abreham Wondafrash",
    "Debliw",
    "3D artist Ethiopia",
    "Blender",
    "Lalibela 3D",
    "Additive Manufacturing",
    "Inktober 2026",
    "3D portfolio",
    "Three.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
