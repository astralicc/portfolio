"use client";

import React from "react";
import { GlassCard } from "./GlassCard";
import { Layers, Terminal, Sparkles } from "lucide-react";
import { Sparkles as SparklingStars } from "./Sparkles";

export function ServicesSection() {
  return (
    <section id="services" className="relative border-x border-black/5 dark:border-white/5 py-24 max-w-6xl mx-auto px-6 md:px-8">
      {/* Blueprint Corner Indicators */}
      <div className="absolute -top-[6px] -left-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -top-[6px] -right-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      
      {/* High-Visibility Monospace Section Watermark with Gold Stabilo Highlighter */}
      <div className="absolute right-8 top-8 pointer-events-none select-none leading-none z-0">
        <div className="absolute left-[-15%] right-[-15%] bottom-[18%] h-7 bg-gradient-to-r from-accent-gold/30 via-accent-gold/25 to-transparent dark:from-accent-blue/40 dark:via-accent-blue/25 dark:to-transparent -rotate-2 transform skew-x-12 blur-[1.5px]" />
        <span className="relative font-bold font-mono text-[12rem] tracking-tighter text-black/[0.045] dark:text-white/[0.09]">
          02
        </span>
      </div>

      {/* Gold Tag & Serif Header with soft glowing shadow */}
      <div className="mb-16 relative">
        <div className="flex items-center gap-2 mb-4 select-none">
          <span className="w-8 h-px bg-accent-gold/60" />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
            - 02 SERVICES & CAPABILITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]">
          <span className="text-accent-blue dark:text-white font-bold block title-glow-blue dark:title-glow-white">Intelligent Solutions,</span>
          <span className="text-accent-gold font-bold italic title-glow-gold relative inline-block">
            Exceptional Design.
            <SparklingStars />
          </span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Service 1: UI/UX Engineering */}
        <GlassCard className="flex flex-col justify-between h-full group" delay={0.1}>
          <div>
            {/* Custom SVG Illustration for UI/UX Wireframe Grid */}
            <div className="w-full aspect-video rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full text-foreground/5 dark:text-white/5 absolute inset-0" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.5">
                <rect x="10" y="10" width="80" height="40" rx="3" />
                <line x1="10" y1="20" x2="90" y2="20" />
                <line x1="30" y1="20" x2="30" y2="50" />
                <circle cx="20" cy="15" r="2" />
                <circle cx="26" cy="15" r="2" />
                <circle cx="32" cy="15" r="2" />
                <rect x="40" y="28" width="40" height="4" rx="1" />
                <rect x="40" y="36" width="30" height="4" rx="1" />
                <rect x="40" y="44" width="20" height="4" rx="1" />
              </svg>
              <div className="w-10 h-10 rounded-full bg-accent-blue/10 dark:bg-accent-blue/15 text-accent-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-10">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-3">
              UI/UX Engineering
            </h3>
            <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed font-light">
              Designing modular visual design languages, robust Figma token maps, responsive layout architectures, and clean type hierarchies styled to look premium.
            </p>
          </div>
          
          <div className="text-[10px] font-mono text-accent-blue uppercase tracking-wider mt-6 pt-4 border-t border-black/5 dark:border-white/5">
            Figma • Tailwind v4 • Tokens
          </div>
        </GlassCard>

        {/* Service 2: Product Architecture */}
        <GlassCard className="flex flex-col justify-between h-full group" delay={0.15}>
          <div>
            {/* Custom SVG Illustration for Server nodes / database query */}
            <div className="w-full aspect-video rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full text-foreground/5 dark:text-white/5 absolute inset-0" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="50" cy="15" r="4" />
                <circle cx="25" cy="40" r="4" />
                <circle cx="75" cy="40" r="4" />
                <path d="M47 18 L28 37" />
                <path d="M53 18 L72 37" />
                <path d="M29 40 L71 40" strokeDasharray="2 2" />
                <circle cx="50" cy="40" r="3" />
              </svg>
              <div className="w-10 h-10 rounded-full bg-accent-blue/10 dark:bg-accent-blue/15 text-accent-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-10">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Product Architecture
            </h3>
            <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed font-light">
              Building lightweight, high-performance Next.js full-stack structures, server-side caching schemes, optimized state stores, and secure edge API layers.
            </p>
          </div>
          
          <div className="text-[10px] font-mono text-accent-blue uppercase tracking-wider mt-6 pt-4 border-t border-black/5 dark:border-white/5">
            Next.js • React • REST/GraphQL
          </div>
        </GlassCard>

        {/* Service 3: Creative Interaction */}
        <GlassCard className="flex flex-col justify-between h-full group" delay={0.2}>
          <div>
            {/* Custom SVG Illustration for Animation curves / keyframes */}
            <div className="w-full aspect-video rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full text-foreground/5 dark:text-white/5 absolute inset-0" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M15 45 C 35 45, 45 15, 85 15" stroke="currentColor" strokeWidth="0.75" />
                <circle cx="15" cy="45" r="2.5" fill="currentColor" fillOpacity="0.3" />
                <circle cx="85" cy="15" r="2.5" fill="currentColor" fillOpacity="0.3" />
                <line x1="15" y1="45" x2="35" y2="45" strokeDasharray="1 1" />
                <line x1="85" y1="15" x2="65" y2="15" strokeDasharray="1 1" />
                <rect x="33" y="43" width="4" height="4" rx="0.5" transform="rotate(45 35 45)" />
                <rect x="63" y="13" width="4" height="4" rx="0.5" transform="rotate(45 65 15)" />
              </svg>
              <div className="w-10 h-10 rounded-full bg-accent-blue/10 dark:bg-accent-blue/15 text-accent-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-10">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Creative Interaction
            </h3>
            <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed font-light">
              Adding organic micro-interactions, spring-loaded transition controllers, visual scroll physics, and complex Framer Motion timing trees that make layouts feel alive.
            </p>
          </div>
          
          <div className="text-[10px] font-mono text-accent-blue uppercase tracking-wider mt-6 pt-4 border-t border-black/5 dark:border-white/5">
            Framer Motion • WebGL • SVG Paths
          </div>
        </GlassCard>

      </div>
    </section>
  );
}
