"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/portfolio";
import { Sparkles } from "./Sparkles";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<"featured" | "all">("featured");

  const filteredProjects = projects.filter((project) => {
    if (filter === "featured") return project.featured;
    return true;
  });

  return (
    <section id="projects" className="relative border-x border-black/5 dark:border-white/5 py-24 max-w-6xl mx-auto px-6 md:px-8">
      {/* Blueprint Corner Indicators */}
      <div className="absolute -top-[6px] -left-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      <div className="absolute -top-[6px] -right-[6px] text-accent-blue/30 font-mono text-xs select-none pointer-events-none">+</div>
      
      {/* High-Visibility Monospace Section Watermark with Gold/Blue Stabilo Highlighter */}
      <div className="absolute right-8 top-8 pointer-events-none select-none leading-none z-0">
        <div className="absolute left-[-15%] right-[-15%] bottom-[18%] h-7 bg-gradient-to-r from-accent-gold/30 via-accent-gold/25 to-transparent dark:from-accent-blue/40 dark:via-accent-blue/25 dark:to-transparent -rotate-2 transform skew-x-12 blur-[1.5px]" />
        <span className="relative font-bold font-mono text-[12rem] tracking-tighter text-black/[0.045] dark:text-white/[0.09]">
          03
        </span>
      </div>

      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative">
        <div>
          <div className="flex items-center gap-2 mb-4 select-none">
            <span className="w-8 h-px bg-accent-gold/60" />
            <span className="text-[10px] font-semibold tracking-[0.25em] text-accent-gold uppercase font-mono">
              - 03 SELECTED PROJECTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]">
            <span className="text-accent-blue dark:text-white font-bold block title-glow-blue dark:title-glow-white">Selected Works,</span>
            <span className="text-accent-gold font-bold italic title-glow-gold relative inline-block">
              Pioneering Innovation.
              <Sparkles />
            </span>
          </h2>
        </div>

        {/* Minimalist Segment Toggle Filter */}
        <div className="relative p-1 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-full flex items-center w-fit self-start md:self-auto">
          <button
            onClick={() => setFilter("featured")}
            className={`relative px-5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300 rounded-full cursor-pointer z-10 ${
              filter === "featured"
                ? "text-accent-blue dark:text-white font-bold"
                : "text-foreground/60 dark:text-foreground/50 hover:text-foreground"
            }`}
          >
            {filter === "featured" && (
              <motion.span
                layoutId="activeProjectTab"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="absolute inset-0 bg-white dark:bg-accent-blue rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_0_15px_rgba(45,110,247,0.45)] -z-10"
              />
            )}
            Featured
          </button>
          <button
            onClick={() => setFilter("all")}
            className={`relative px-5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300 rounded-full cursor-pointer z-10 ${
              filter === "all"
                ? "text-accent-blue dark:text-white font-bold"
                : "text-foreground/60 dark:text-foreground/50 hover:text-foreground"
            }`}
          >
            {filter === "all" && (
              <motion.span
                layoutId="activeProjectTab"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="absolute inset-0 bg-white dark:bg-accent-blue rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_0_15px_rgba(45,110,247,0.45)] -z-10"
              />
            )}
            All Projects
          </button>
        </div>
      </div>

      {/* Grid Layout Container */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ProjectCard project={project} delay={idx * 0.08} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
