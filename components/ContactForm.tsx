"use client";

import React from "react";
import { GlassCard } from "./GlassCard";
import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Sparkles } from "./Sparkles";

export function ContactForm() {
  return (
    <section id="contact" className="relative border-x border-black/5 dark:border-white/5 py-24 max-w-4xl mx-auto px-6 w-full">
      {/* Blueprint Corner Indicators */}
      <div className="absolute -top-[6px] -left-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -top-[6px] -right-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>

      {/* High-Visibility Monospace Section Watermark with Gold/Blue Stabilo Highlighter */}
      <div className="absolute right-8 top-8 pointer-events-none select-none leading-none z-0">
        <div className="absolute left-[-15%] right-[-15%] bottom-[18%] h-7 bg-gradient-to-r from-accent-gold/30 via-accent-gold/25 to-transparent dark:from-accent-blue/40 dark:via-accent-blue/25 dark:to-transparent -rotate-2 transform skew-x-12 blur-[1.5px]" />
        <span className="relative font-bold font-mono text-[12rem] tracking-tighter text-black/[0.045] dark:text-white/[0.09]">
          06
        </span>
      </div>

      {/* Title */}
      <div className="mb-12 text-center relative">
        <div className="flex items-center justify-center gap-2 mb-4 select-none">
          <span className="w-8 h-px bg-accent-gold/60" />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
            - 06 GET IN TOUCH
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]">
          <span className="text-accent-blue dark:text-white font-bold block title-glow-blue dark:title-glow-white">Connect With Me,</span>
          <span className="text-accent-gold font-bold italic title-glow-gold relative inline-block">
            Let's Build Together.
            <Sparkles />
          </span>
        </h2>
      </div>

      {/* Streamlined Direct Connection Card */}
      <GlassCard className="relative overflow-hidden p-8 md:p-12 text-center max-w-2xl mx-auto" delay={0.1}>
        {/* Subtle background orb behind the contact button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div className="w-[180px] h-[180px] rounded-full bg-accent-blue/5 blur-[50px]" />
        </div>

        {/* Small Monospace Status Flag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.015] mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[9px] font-mono tracking-wider uppercase text-foreground/50">
            Open for Commissions
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
          Have an idea? Let&apos;s bring it to life.
        </h3>

        <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed font-light mb-8 max-w-md mx-auto">
          Available for selected projects involving software development and interactive digital experiences. Drop an email, and I will get back to you within 24 hours.
        </p>

        {/* Massive Direct Email Action Button in School Gold Gradient */}
        <a
          href={personalInfo.socials.email}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white dark:text-white bg-gradient-to-r from-accent-gold via-accent-gold/90 to-[#b0873a] dark:from-accent-blue dark:via-blue-600 dark:to-indigo-600 hover:opacity-95 active:scale-[0.98] transition-all duration-300 shadow-md shadow-accent-gold/15 dark:shadow-accent-blue/15 cursor-pointer glow-btn-gold dark:glow-btn-blue"
        >
          <Mail className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span>innzwha@gmail.com</span>
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {/* Quick Social Anchors */}
        <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-black/5 dark:border-white/5 text-xs font-mono text-foreground/45">
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-accent-blue transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {personalInfo.socials.linkedin && (
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-accent-blue transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {personalInfo.socials.instagram && (
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-accent-blue transition-colors"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </GlassCard>
    </section>
  );
}
