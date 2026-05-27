"use client";

import React, { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Sparkles } from "./Sparkles";
import { achievements } from "@/data/portfolio";
import { Trophy, Star, BookOpen, Code2, Users, Award } from "lucide-react";

type Category = "All" | "Competition" | "Award" | "Academic" | "Project" | "Leadership";

const CATEGORY_COLORS: Record<string, string> = {
  Competition : "text-amber-500   dark:text-amber-400  bg-amber-500/10   dark:bg-amber-400/10  border-amber-500/20   dark:border-amber-400/20",
  Award       : "text-accent-gold dark:text-accent-gold bg-accent-gold/10 dark:bg-accent-gold/10 border-accent-gold/20 dark:border-accent-gold/20",
  Academic    : "text-accent-blue dark:text-sky-400     bg-accent-blue/10 dark:bg-sky-400/10     border-accent-blue/20 dark:border-sky-400/20",
  Project     : "text-emerald-600 dark:text-emerald-400 bg-emerald-600/10 dark:bg-emerald-400/10 border-emerald-600/20 dark:border-emerald-400/20",
  Leadership  : "text-violet-600  dark:text-violet-400  bg-violet-600/10  dark:bg-violet-400/10  border-violet-600/20  dark:border-violet-400/20",
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Competition : <Trophy  className="w-4 h-4" />,
  Award       : <Award   className="w-4 h-4" />,
  Academic    : <BookOpen className="w-4 h-4" />,
  Project     : <Code2   className="w-4 h-4" />,
  Leadership  : <Users   className="w-4 h-4" />,
};

// const FILTERS: Category[] = ["All", "Competition", "Award", "Academic", "Project", "Leadership"];
const FILTERS: Category[] = ["All", "Competition", "Project", "Leadership"];

export function AchievementsSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All"
    ? achievements
    : achievements.filter((a) => a.category === active);

  // Highlights always first
  const sorted = [...filtered].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));

  return (
    <section id="achievements" className="relative border-x border-black/5 dark:border-white/5 py-24 max-w-6xl mx-auto px-6 md:px-8">
      {/* Blueprint Corner Indicators */}
      <div className="absolute -top-[6px] -left-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -top-[6px] -right-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>

      {/* Section Watermark */}
      <div className="absolute right-8 top-8 pointer-events-none select-none leading-none z-0">
        <div className="absolute left-[-15%] right-[-15%] bottom-[18%] h-7 bg-gradient-to-r from-accent-gold/30 via-accent-gold/25 to-transparent dark:from-accent-blue/40 dark:via-accent-blue/25 dark:to-transparent -rotate-2 transform skew-x-12 blur-[1.5px]" />
        <span className="relative font-bold font-mono text-[12rem] tracking-tighter text-black/[0.045] dark:text-white/[0.09]">
          02
        </span>
      </div>

      {/* Header */}
      <div className="mb-12 relative">
        <div className="flex items-center gap-2 mb-4 select-none">
          <span className="w-8 h-px bg-accent-gold/60" />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
            - 02 ACHIEVEMENTS &amp; HONORS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]">
          <span className="text-accent-blue dark:text-white font-bold block title-glow-blue dark:title-glow-white">
            Earned Through
          </span>
          <span className="text-accent-gold font-bold italic title-glow-gold relative inline-block px-6 pb-3">
            Hard Work &amp; Passion.
            <Sparkles />
          </span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-semibold font-mono tracking-wider uppercase border transition-all duration-300 ${
              active === cat
                ? "bg-accent-blue text-white border-accent-blue dark:bg-accent-blue dark:border-accent-blue shadow-md shadow-accent-blue/20"
                : "text-foreground/50 border-black/10 dark:border-white/10 hover:border-accent-gold/40 hover:text-foreground/80 bg-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((ach, idx) => (
          <GlassCard
            key={ach.id}
            className={`flex flex-col gap-4 p-6 group transition-all duration-300 ${
              ach.highlight ? "md:col-span-1 ring-1 ring-accent-gold/20 dark:ring-accent-gold/15" : ""
            }`}
            delay={idx * 0.06}
            hoverEffect={true}
          >
            {/* Top row: category badge + year */}
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold font-mono uppercase tracking-wider border ${CATEGORY_COLORS[ach.category]}`}>
                {CATEGORY_ICONS[ach.category]}
                {ach.category}
              </span>
              <span className="text-[10px] font-mono text-foreground/35 tracking-wider">{ach.year}</span>
            </div>

            {/* Trophy icon for highlights */}
            {ach.highlight && (
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" />
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-accent-gold/70 font-semibold">
                  Featured
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug group-hover:text-accent-blue dark:group-hover:text-accent-blue transition-colors duration-300">
              {ach.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-foreground/55 leading-relaxed font-light flex-1">
              {ach.description}
            </p>

            {/* Issuer footer */}
            <div className="flex items-center gap-2 pt-3 border-t border-black/5 dark:border-white/5 mt-auto">
              <Trophy className="w-3 h-3 text-accent-gold/50 shrink-0" />
              <span className="text-[10px] font-mono text-foreground/40 truncate">
                {ach.issuer}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
