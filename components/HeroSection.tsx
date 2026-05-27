"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { BigSparkles } from "./Sparkles";
import { TypewriterText } from "./TypewriterText";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const, // Custom easeOutExpo
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Hero Background Orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[380px] h-[380px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/5 dark:from-blue-600/8 dark:to-accent-gold/4 blur-[80px] opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Overhead Monospace Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4 md:mb-6 select-none">
            <span className="w-8 h-px bg-accent-gold/60" />
            <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
              Available for Hire
            </span>
            <span className="w-8 h-px bg-accent-gold/60" />
          </motion.div>

          {/* Large Serif Hero Name with soft glowing shadow */}
          <motion.h1
            variants={itemVariants}
            className="relative inline-block whitespace-nowrap text-4xl sm:text-5xl md:text-8xl font-normal font-serif tracking-normal text-foreground/75 dark:text-foreground/90 leading-[1.18] mb-2 drop-shadow-[0_2px_10px_rgba(27,58,107,0.04)] title-glow-white"
          >
            {personalInfo.name}
            <BigSparkles />
          </motion.h1>

          {/* Creative Developer subtitle — hover sparkle rotates, underline extends */}
          <motion.div
            variants={itemVariants}
            className="relative pb-3 mb-6 flex justify-center"
          >
            <div className="relative group/creative">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif italic font-bold tracking-tight text-accent-blue leading-[1.05] drop-shadow-[0_2px_10px_rgba(27,58,107,0.08)] title-glow-blue">
                Creative Developer
              </h2>

              {/* Hover-extending underline */}
              <div className="absolute bottom-0 left-[20%] right-[20%] group-hover/creative:left-0 group-hover/creative:right-0 h-[3px] bg-gradient-to-r from-accent-gold/50 via-accent-gold to-accent-gold/50 rounded-full transition-all duration-500 ease-out" />

              {/* Big sparkle — always visible, rotates 45° on hover */}
              {/* <div
                aria-hidden="true"
                className="absolute -top-4 -right-10 pointer-events-none select-none group-hover/creative:rotate-45 transition-transform duration-500 ease-out"
              >
                <svg
                  className="w-9 h-9 fill-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
                </svg>
              </div> */}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-foreground/50 leading-relaxed max-w-xl mb-4 font-sans font-light"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* Typewriter cycling motto */}
          <motion.div
            variants={itemVariants}
            className="text-[10px] sm:text-xs font-mono tracking-wider text-accent-gold font-semibold italic mb-8 select-none h-5 flex items-center justify-center"
          >
            <TypewriterText />
          </motion.div>

          {/* CTA Buttons restored to Projects and Contact */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group relative px-7 py-3 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-accent-gold via-accent-gold/90 to-[#b0873a] dark:from-accent-blue dark:via-blue-600 dark:to-indigo-600 hover:opacity-95 active:scale-95 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md shadow-accent-gold/15 dark:shadow-accent-blue/15 glow-btn-gold dark:glow-btn-blue"
            >
              Explore Selected Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3 text-xs font-bold tracking-wider uppercase text-accent-blue dark:text-white bg-white/45 dark:bg-black/15 hover:bg-white/70 dark:hover:bg-black/30 border border-black/10 dark:border-white/10 rounded-lg transition-all duration-300 active:scale-95 backdrop-blur-sm shadow-sm glow-btn-blue"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Monospace Developer Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 text-[10px] font-semibold tracking-wider font-mono text-foreground/45 mb-10 pb-6 border-b border-black/5 dark:border-white/5 w-full max-w-lg justify-center"
          >
            <span>LEARNING FULL-STACK</span>
            <span className="text-accent-gold">|</span>
            <span>8+ PROJECTS BUILT</span>
            <span className="text-accent-gold">|</span>
            <span>OPEN TO WORK</span>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 text-foreground/45"
          >
            {personalInfo.socials.github && (
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-foreground hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {personalInfo.socials.linkedin && (
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-foreground hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
            {personalInfo.socials.instagram && (
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-foreground hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            )}
            {personalInfo.socials.email && (
              <a
                href={personalInfo.socials.email}
                aria-label="Email"
                className="hover:text-foreground hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll indicator — double cascading chevrons */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0 group z-10"
      >
        <svg
          className="w-6 h-6 text-accent-gold/50 group-hover:text-accent-gold animate-scroll-dot transition-colors duration-300 [animation-delay:0ms]"
          viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <svg
          className="w-6 h-6 text-accent-gold/30 group-hover:text-accent-gold/70 animate-scroll-dot transition-colors duration-300 [animation-delay:200ms] -mt-2"
          viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
