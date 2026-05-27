"use client";

import React, { useEffect, useState } from "react";
import { GlassCard } from "./GlassCard";
import { personalInfo, skillCategories } from "@/data/portfolio";
import { MapPin, Briefcase, Clock, Radio } from "lucide-react";
import { Sparkles } from "./Sparkles";

export function AboutSection() {
  const [time, setTime] = useState("");

  // WESTERN INDONESIA TIME (WIB) / Jakarta Live Clock
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Date().toLocaleTimeString("en-US", options));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative border-x border-black/5 dark:border-white/5 py-24 max-w-6xl mx-auto px-6 md:px-8">
      {/* Blueprint Corner Indicators */}
      <div className="absolute -top-[6px] -left-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -top-[6px] -right-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      
      {/* High-Visibility Monospace Section Watermark with Gold Stabilo Highlighter */}
      <div className="absolute right-8 top-8 pointer-events-none select-none leading-none z-0">
        <div className="absolute left-[-15%] right-[-15%] bottom-[18%] h-7 bg-gradient-to-r from-accent-gold/30 via-accent-gold/25 to-transparent dark:from-accent-blue/40 dark:via-accent-blue/25 dark:to-transparent -rotate-2 transform skew-x-12 blur-[1.5px]" />
        <span className="relative font-bold font-mono text-[12rem] tracking-tighter text-black/[0.045] dark:text-white/[0.09]">
          01
        </span>
      </div>

      {/* Gold Tag & Serif Header with soft glowing shadow */}
      <div className="mb-16 relative">
        <div className="flex items-center gap-2 mb-4 select-none">
          <span className="w-8 h-px bg-accent-gold/60" />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
            - 01 ABOUT & PHILOSOPHY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]">
          <span className="text-accent-blue dark:text-white font-bold block title-glow-blue dark:title-glow-white">A Legacy Built,</span>
          <span className="text-accent-gold font-bold italic title-glow-gold relative inline-block">
            Ambitions Worldwide.
            <Sparkles />
          </span>
        </h2>
      </div>

      {/* Expanded Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Biography Card (Spans 2 columns on desktop) */}
        <GlassCard className="md:col-span-2 flex flex-col justify-between" delay={0.1}>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Constructing silent but expressive interfaces.
            </h3>
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light mb-6">
              {personalInfo.biography}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-foreground/50 border-t border-black/5 dark:border-white/5 pt-6 mt-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent-blue/80" />
              <span>Jakarta, ID & Remote</span>
            </div>
            <div className="hidden sm:block text-foreground/20">|</div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-accent-blue/80" />
              <span>UI Architect & Creative Developer</span>
            </div>
          </div>
        </GlassCard>

        {/* Highlight Stats (Spans 1 column on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:col-span-1">
          <GlassCard
            className="p-4 md:p-6 flex flex-col justify-center text-center md:text-left h-full"
            delay={0.15}
            hoverEffect={true}
          >
            <div className="text-2xl md:text-3xl font-bold text-foreground font-mono tracking-tight mb-1 flex items-baseline justify-center md:justify-start">
              <span>2</span>
              <span className="text-accent-blue text-lg ml-0.5">+</span>
            </div>
            <div className="text-[10px] md:text-xs font-mono tracking-wide uppercase text-foreground/45">
              Years Experience
            </div>
          </GlassCard>

          <GlassCard
            className="p-4 md:p-6 flex flex-col justify-center text-center md:text-left h-full"
            delay={0.2}
            hoverEffect={true}
          >
            <div className="text-2xl md:text-3xl font-bold text-foreground font-mono tracking-tight mb-1 flex items-baseline justify-center md:justify-start">
              <span>8</span>
              <span className="text-accent-blue text-lg ml-0.5">+</span>
            </div>
            <div className="text-[10px] md:text-xs font-mono tracking-wide uppercase text-foreground/45">
              Projects
            </div>
          </GlassCard>
        </div>

        {/* Live Jakarta Clock Card (1 Column) */}
        <GlassCard className="flex flex-col justify-between p-6 h-full" delay={0.22}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono tracking-wider uppercase text-foreground/45">Local Time</span>
            <Clock className="w-3.5 h-3.5 text-accent-blue/80" />
          </div>
          <div>
            <div className="text-2xl font-mono font-bold tracking-tight text-foreground mb-1">
              {time || "00:00:00"}
            </div>
            <div className="text-[11px] text-foreground/45 font-light">
              Jakarta, Indonesia (WIB)
            </div>
          </div>
        </GlassCard>

        {/* Availability Status Card (1 Column) */}
        <GlassCard className="flex flex-col justify-between p-6 h-full" delay={0.24}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono tracking-wider uppercase text-foreground/45">Availability</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Open for Partnerships</h4>
            <p className="text-[11px] text-foreground/50 leading-relaxed font-light">
              Accepting contract roles, product design, and creative frontend consultation.
            </p>
          </div>
        </GlassCard>

        {/* Now Playing Deep Focus Card (1 Column) */}
        <GlassCard className="flex flex-col justify-between p-6 h-full" delay={0.26}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono tracking-wider uppercase text-foreground/45">Deep Focus</span>
            <div className="flex items-end gap-0.5 h-3.5">
              <div className="w-[2px] bg-accent-blue rounded-full animate-wave-1"></div>
              <div className="w-[2px] bg-accent-blue rounded-full animate-wave-2"></div>
              <div className="w-[2px] bg-accent-blue rounded-full animate-wave-3"></div>
              <div className="w-[2px] bg-accent-blue rounded-full animate-wave-4"></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-accent-blue/80 shrink-0" />
              Ambient Studio
            </h4>
            <p className="text-[11px] text-foreground/50 leading-relaxed font-light">
              Building software, designing worlds, and sketching ideas between late-night experiments.
            </p>
          </div>
        </GlassCard>

        {/* Technical Skills Bento Panel (Full width under widgets on desktop) */}
        <GlassCard className="md:col-span-3" delay={0.3}>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Technical Stack & Focus Areas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIdx) => (
              <div key={category.category} className="flex flex-col">
                <span className="text-xs font-semibold tracking-wider font-mono text-accent-blue/95 uppercase mb-4 pb-2 border-b border-black/[0.03] dark:border-white/[0.03]">
                  {category.category}
                </span>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-foreground/60 dark:text-foreground/75 bg-black/[0.02] dark:bg-white/[0.015] border border-black/5 dark:border-white/5 rounded-full transition-all duration-300 hover:border-accent-blue/30 hover:text-accent-blue"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
        
      </div>
    </section>
  );
}
