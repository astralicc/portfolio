"use client";

import React from "react";

const STAR = "M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z";

/* -------------------------------------------------------------------
 * Sparkles — small gold twinkling stars around an inline text element.
 * Requires parent to be `relative inline-block` (with px-6 pb-3 room).
 * ------------------------------------------------------------------- */
export function Sparkles() {
  return (
    <>
      {/* Top-right — large */}
      <svg
        aria-hidden="true"
        className="absolute -top-3 -right-4 w-4 h-4 fill-amber-400 animate-sparkle-1 pointer-events-none select-none drop-shadow-[0_0_5px_rgba(251,191,36,0.95)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Bottom-left — medium */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-3 -left-4 w-3 h-3 fill-amber-300 animate-sparkle-2 pointer-events-none select-none drop-shadow-[0_0_5px_rgba(251,191,36,0.85)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Mid-left — small */}
      <svg
        aria-hidden="true"
        className="absolute top-1 -left-5 w-2.5 h-2.5 fill-yellow-300 animate-sparkle-3 pointer-events-none select-none drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Top-left tiny */}
      <svg
        aria-hidden="true"
        className="absolute -top-2 left-2 w-2 h-2 fill-amber-200 animate-sparkle-4 pointer-events-none select-none drop-shadow-[0_0_4px_rgba(251,191,36,0.75)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>
    </>
  );
}

/* -------------------------------------------------------------------
 * BigSparkles — gold burst for the hero name.
 * Parent must be `relative inline-block`.
 * ------------------------------------------------------------------- */
export function BigSparkles() {
  return (
    <>
      {/* Large — top right */}
      <svg
        aria-hidden="true"
        className="absolute -top-5 -right-6 w-7 h-7 fill-amber-400 animate-sparkle-1 pointer-events-none select-none drop-shadow-[0_0_8px_rgba(251,191,36,0.95)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Medium — bottom left */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-4 -left-6 w-5 h-5 fill-amber-300 animate-sparkle-2 pointer-events-none select-none drop-shadow-[0_0_7px_rgba(251,191,36,0.85)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Medium — top left */}
      <svg
        aria-hidden="true"
        className="absolute -top-4 left-8 w-5 h-5 fill-yellow-300 animate-sparkle-3 pointer-events-none select-none drop-shadow-[0_0_7px_rgba(251,191,36,0.85)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Small — bottom right */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-3 right-4 w-4 h-4 fill-amber-200 animate-sparkle-4 pointer-events-none select-none drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Tiny — far right mid */}
      <svg
        aria-hidden="true"
        className="absolute top-1/2 -right-7 w-3 h-3 fill-amber-300 animate-sparkle-1 [animation-delay:1.2s] pointer-events-none select-none drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>

      {/* Tiny — far left mid */}
      <svg
        aria-hidden="true"
        className="absolute top-1/3 -left-7 w-3.5 h-3.5 fill-yellow-400 animate-sparkle-2 [animation-delay:0.4s] pointer-events-none select-none drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]"
        viewBox="0 0 24 24"
      >
        <path d={STAR} />
      </svg>
    </>
  );
}
