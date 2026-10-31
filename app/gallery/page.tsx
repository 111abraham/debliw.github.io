import type { Metadata } from "next";
import ThreeRotunda from "../inktober-2026/ThreeRotunda";

export const metadata: Metadata = {
  title: "3D Art Gallery | Abraham Wondafrash",
  description: "Interactive 3D gallery by Abraham Wondafrash.",
};

export default function GalleryPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#050505]">
      <ThreeRotunda />
    </main>
  );
}
