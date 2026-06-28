import { relationshipStatusConfig } from "./config";

export default function RelationshipStatusPage() {
  const { currentStatus } = relationshipStatusConfig;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 py-10 text-[#f5f1e8] sm:px-8 lg:px-10">
      <div className="w-full max-w-3xl text-center">
        <p className="text-4xl font-semibold tracking-[0.2em] uppercase sm:text-5xl lg:text-7xl">
          {currentStatus.label}
        </p>
      </div>
    </main>
  );
}
