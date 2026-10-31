import type { Metadata } from "next";
import ThreeRotunda from "./ThreeRotunda";

export const metadata: Metadata = {
  title: "Inktober 2026 3D Interactive Gallery | Abraham Wondafrash",
  description:
    "An interactive 3D rotunda exhibition showcasing 31 original ink & conceptual artworks for Inktober 2026 by 3D artist and designer Abraham Wondafrash.",
  keywords: ["Inktober 2026", "3D Gallery", "Abraham Wondafrash", "Debliw", "Three.js", "Digital Art"],
};

export default function InktoberPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#050505]">
      <ThreeRotunda />
    </main>
  );
}
