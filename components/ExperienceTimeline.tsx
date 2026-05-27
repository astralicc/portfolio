"use client";

import React from "react";
import { GlassCard } from "./GlassCard";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";
import { Sparkles } from "./Sparkles";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative border-x border-black/5 dark:border-white/5 py-24 max-w-4xl mx-auto px-6 md:px-8">
      {/* Blueprint Corner Indicators */}
      <div className="absolute -top-[6px] -left-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -top-[6px] -right-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      
      {/* High-Visibility Monospace Section Watermark with Gold/Blue Stabilo Highlighter */}
      <div className="absolute right-8 top-8 pointer-events-none select-none leading-none z-0">
        <div className="absolute left-[-15%] right-[-15%] bottom-[18%] h-7 bg-gradient-to-r from-accent-gold/30 via-accent-gold/25 to-transparent dark:from-accent-blue/40 dark:via-accent-blue/25 dark:to-transparent -rotate-2 transform skew-x-12 blur-[1.5px]" />
        <span className="relative font-bold font-mono text-[12rem] tracking-tighter text-black/[0.045] dark:text-white/[0.09]">
          04
        </span>
      </div>

      {/* Title */}
      <div className="mb-16 text-center md:text-left relative">
        <div className="flex items-center gap-2 mb-4 select-none justify-center md:justify-start">
          <span className="w-8 h-px bg-accent-gold/60" />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
            - 04 EXPERIENCE TIMELINE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]">
          <span className="text-accent-blue dark:text-white font-bold block title-glow-blue dark:title-glow-white">Proven Journey,</span>
          <span className="text-accent-gold font-bold italic title-glow-gold relative inline-block">
            Tangible Impact.
            <Sparkles />
          </span>
        </h2>
      </div>

      {/* Vertical Timeline Track Container */}
      <div className="relative pl-6 md:pl-8 border-l border-black/5 dark:border-white/5 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative">
            {/* Timeline Bullet Nodule */}
            <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-black/10 dark:border-white/10 shadow-sm z-10">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  exp.isCurrent
                    ? "bg-accent-blue animate-pulse"
                    : "bg-foreground/35"
                }`}
              />
            </span>

            {/* Content card */}
            <GlassCard
              hoverEffect={true}
              delay={idx * 0.08}
              className={`relative border border-black/5 dark:border-white/5 ${
                exp.isCurrent ? "ring-1 ring-accent-blue/15" : ""
              }`}
            >
              {/* Header block info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-black/[0.03] dark:border-white/[0.03]">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground flex items-center gap-2">
                    {exp.role}
                    {exp.isCurrent && (
                      <span className="text-[9px] font-semibold tracking-wider font-mono uppercase bg-accent-blue/10 dark:bg-accent-blue/15 text-accent-blue px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    )}
                  </h3>
                  <div className="text-xs text-foreground/50 font-medium font-sans flex items-center gap-1 mt-0.5">
                    <Briefcase className="w-3 h-3 text-accent-blue/60" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="text-xs text-foreground/45 font-mono flex items-center gap-1.5 md:self-start mt-1 md:mt-0">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Work detail pointers */}
              <ul className="space-y-2.5">
                {exp.description.map((desc, pointIdx) => (
                  <li
                    key={pointIdx}
                    className="text-xs md:text-sm text-foreground/55 font-light leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue/50" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
