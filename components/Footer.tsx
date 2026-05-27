"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-auto border-t border-black/5 dark:border-white/5 py-12 bg-black/[0.01] dark:bg-white/[0.01] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left segment - Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-[10px] font-mono tracking-wider text-foreground/45 uppercase">
            © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}
          </span>
          <span className="text-[9px] font-mono tracking-wide text-foreground/30">
            Aesthetics & UI Architecture
          </span>
        </div>

        {/* Middle segment - Minimal brand name */}
        <div className="hidden md:block text-[11px] font-semibold tracking-[0.3em] text-foreground/20 uppercase font-mono">
          REFINE • SIMPLIFY • DELIVER
        </div>

        {/* Right segment - Jump back up button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group w-9 h-9 rounded-full border border-black/5 dark:border-white/5 bg-white/45 dark:bg-black/15 flex items-center justify-center text-foreground/50 hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
        
      </div>
    </footer>
  );
}
