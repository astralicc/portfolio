"use client";

import React from "react";

const items = [
  "NEXT.JS 15",
  "REACT 19",
  "TYPESCRIPT",
  "TAILWIND CSS V4",
  "FRAMER MOTION",
  "SHADCN / UI",
  "UI / UX ARCHITECTURE",
  "CREATIVE DEVELOPER",
  "SMAN 13 JAKARTA (GALAS)",
  "EDITORIAL TYPOGRAPHY",
  "MINIMALIST DESIGN SYSTEM",
  "HIGH PERFORMANCE SYSTEMS",
];

export function TechMarquee() {
  // Duplicate the array of items to allow for an infinite loop with no empty gaps
  const doubledItems = [...items, ...items];

  return (
    <div className="w-full border-y border-black/5 dark:border-white/5 py-4 bg-black/[0.01] dark:bg-white/[0.01] overflow-hidden select-none pointer-events-none">
      <div className="flex w-max">
        <div className="animate-marquee flex items-center space-x-12 pr-12">
          {doubledItems.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-6 text-[10px] sm:text-xs font-semibold font-mono tracking-[0.25em] text-foreground/40 dark:text-foreground/35">
              <span>{item}</span>
              <span className="text-accent-blue/40">◆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
