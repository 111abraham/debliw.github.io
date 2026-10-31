"use client";

import { useEffect, useState } from "react";
import { Trophy, ExternalLink, Swords } from "lucide-react";

interface ChessStats {
  rapidRating: number;
  tacticsRating: number;
  totalGames: number;
  wins: number;
}

export default function LiveChessStats() {
  const [stats, setStats] = useState<ChessStats>({
    rapidRating: 390,
    tacticsRating: 1457,
    totalGames: 1239,
    wins: 592,
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Fetch live rating from official Chess.com Public API
    fetch("https://api.chess.com/pub/player/abrahamw111/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const rapid = data?.chess_rapid;
        const tactics = data?.tactics;

        const currentRapid = rapid?.last?.rating ?? 390;
        const currentTactics = tactics?.highest?.rating ?? 1457;
        const wins = rapid?.record?.win ?? 592;
        const losses = rapid?.record?.loss ?? 584;
        const draws = rapid?.record?.draw ?? 63;
        const total = wins + losses + draws;

        setStats({
          rapidRating: currentRapid,
          tacticsRating: currentTactics,
          totalGames: total,
          wins: wins,
        });
        setIsLive(true);
      })
      .catch((err) => {
        console.warn("Could not fetch live chess stats, using cached stats:", err);
      });
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur transition hover:border-[#c5a059]/40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-[#c5a059]/10 p-3 text-[#c5a059]">
            <Trophy className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#f5f1e8]">Chess Enthusiast</h3>
            <div className="flex items-center gap-2 text-xs text-[#8f8670]">
              <span>Chess.com: abrahamw111</span>
              {isLive && (
                <span className="flex items-center gap-1 rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              )}
            </div>
          </div>
        </div>

        <a
          href="https://www.chess.com/member/abrahamw111"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#d8d0c0] transition hover:bg-white hover:text-black hover:border-white"
        >
          <Swords className="h-3 w-3" />
          <span>Challenge</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 border-y border-white/10 py-4 text-center">
        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#c5a059]">
            {stats.rapidRating}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[#8f8670]">
            10-min Rapid
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#f5f1e8]">
            {stats.tacticsRating}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[#8f8670]">
            Peak Puzzles
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-[#bdb7aa]">
            {stats.totalGames}+
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[#8f8670]">
            Games Played
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-[#bdb7aa] leading-relaxed">
        When I&apos;m not modeling in Blender, I&apos;m on the board. The spatial reasoning and geometry of chess directly inspired my compact 3D-printable travel chess set design.
      </p>
    </div>
  );
}
