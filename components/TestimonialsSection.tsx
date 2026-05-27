"use client";

import React from "react";
import { GlassCard } from "./GlassCard";
import { Quote } from "lucide-react";
import { Sparkles } from "./Sparkles";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Kenji possesses a rare capability: combining Swiss design precision with bulletproof software engineering. He transformed our messy design systems into an extremely fast React infrastructure that our design team absolutely loves.",
    author: "Haruto Tanaka",
    role: "Director of Engineering",
    company: "Aura Creative",
    initials: "HT",
  },
  {
    id: "test-2",
    quote: "Working with Kenji was a revelation. He does not just write code; he reads visual layouts with extreme empathy. The micro-animations and physics-based transitions he built for our dashboards gave the product a premium feel.",
    author: "Sarah Jenkins",
    role: "Senior Product Designer",
    company: "Nova Labs Inc.",
    initials: "SJ",
  },
  {
    id: "test-3",
    quote: "Kenji engineered three highly complex landing systems for our school launch, delivering perfect responsiveness and exceptional performance under heavy user loads. He is a premier UI developer who understands modern layout speeds.",
    author: "Budi Santoso",
    role: "Chief IT Coordinator",
    company: "GALAS Consortium",
    initials: "BS",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative border-x border-black/5 dark:border-white/5 py-24 max-w-6xl mx-auto px-6 md:px-8">
      {/* Blueprint Corner Indicators */}
      <div className="absolute -top-[6px] -left-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -top-[6px] -right-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      
      {/* High-Visibility Monospace Section Watermark with Gold/Blue Stabilo Highlighter */}
      <div className="absolute right-8 top-8 pointer-events-none select-none leading-none z-0">
        <div className="absolute left-[-15%] right-[-15%] bottom-[18%] h-7 bg-gradient-to-r from-accent-gold/30 via-accent-gold/25 to-transparent dark:from-accent-blue/40 dark:via-accent-blue/25 dark:to-transparent -rotate-2 transform skew-x-12 blur-[1.5px]" />
        <span className="relative font-bold font-mono text-[12rem] tracking-tighter text-black/[0.045] dark:text-white/[0.09]">
          05
        </span>
      </div>

      {/* Title */}
      <div className="mb-16 text-center md:text-left relative">
        <div className="flex items-center gap-2 mb-4 select-none justify-center md:justify-start">
          <span className="w-8 h-px bg-accent-gold/60" />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
            - 05 CLIENT TESTIMONIALS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]">
          <span className="text-accent-blue dark:text-white font-bold block title-glow-blue dark:title-glow-white">Client Appreciation,</span>
          <span className="text-accent-gold font-bold italic title-glow-gold relative inline-block px-6 pb-3">
            Synergetic Growth.
            <Sparkles />
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, idx) => (
          <GlassCard
            key={test.id}
            className="flex flex-col justify-between h-full p-8"
            delay={idx * 0.08}
            hoverEffect={true}
          >
            <div>
              {/* Quote Mark */}
              <Quote className="w-8 h-8 text-accent-blue/15 mb-6 rotate-180" />
              
              <p className="text-xs sm:text-sm italic text-foreground/75 leading-relaxed font-light mb-8">
                &ldquo;{test.quote}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="flex items-center gap-3.5 border-t border-black/5 dark:border-white/5 pt-4 mt-auto">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent-blue/15 to-accent-blue/5 text-accent-blue flex items-center justify-center font-mono text-xs font-bold shrink-0">
                {test.initials}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground">
                  {test.author}
                </span>
                <span className="text-[10px] text-foreground/45 font-mono">
                  {test.role} • {test.company}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
