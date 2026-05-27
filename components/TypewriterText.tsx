"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "Build, Ship, Iterate",
  "Design, Code, Inspire",
  "Lead, Learn, Evolve",
];

const TYPE_SPEED = 55;   // ms per character when typing
const DELETE_SPEED = 28; // ms per character when deleting
const PAUSE_AFTER = 2200; // ms to pause when phrase is complete

export function TypewriterText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];

    if (pausing) {
      const t = setTimeout(() => {
        setPausing(false);
        setDeleting(true);
      }, PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (charIdx <= phrase.length) {
        const t = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx));
          setCharIdx((i) => i + 1);
        }, TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        setPausing(true);
      }
    } else {
      if (charIdx >= 0) {
        const t = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx));
          setCharIdx((i) => i - 1);
        }, DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
        setCharIdx(0);
      }
    }
  }, [charIdx, deleting, pausing, phraseIdx]);

  return (
    <span className="inline-flex items-center gap-0.5">
      &ldquo;
      <span>{displayed}</span>
      <span
        aria-hidden="true"
        className="inline-block w-px h-[1em] bg-accent-gold/80 align-middle animate-[cursor-blink_1s_step-end_infinite]"
      />
      &rdquo;
    </span>
  );
}
