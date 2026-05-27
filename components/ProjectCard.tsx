"use client";

import React from "react";
import Image from "next/image";
import { GlassCard } from "./GlassCard";
import { Project } from "@/data/portfolio";
import { Globe, ArrowUpRight } from "lucide-react";

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

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <GlassCard
      hoverEffect={true}
      delay={delay}
      className="group flex flex-col justify-between overflow-hidden p-0! rounded-2xl h-full border border-black/5 dark:border-white/5"
    >
      <div>
        {/* Project Preview Image with custom Zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/5 dark:border-white/5">
          <Image
            src={project.image}
            alt={`${project.title} Preview`}
            fill
            className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.featured}
          />
          {/* Subtle blue accent glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Details Block */}
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-accent-blue transition-colors duration-300">
              {project.title}
            </h3>
            {project.featured && (
              <span className="text-[9px] font-semibold tracking-wider font-mono uppercase bg-accent-blue/10 dark:bg-accent-blue/15 text-accent-blue px-2 py-0.5 rounded-full">
                Featured
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed font-light mb-6">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer tags and links */}
      <div className="px-6 md:px-8 pb-6 md:pb-8">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono tracking-wide font-medium text-foreground/40 bg-black/[0.02] dark:bg-white/[0.015] border border-black/5 dark:border-white/5 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Anchor Links */}
        <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
          <div className="flex items-center space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground font-mono transition-colors"
                aria-label={`View code for ${project.title}`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground font-mono transition-colors"
                aria-label={`Visit demo for ${project.title}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <a
            href={project.demo || "#"}
            className="w-7 h-7 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-center text-foreground/50 group-hover:text-foreground group-hover:bg-foreground group-hover:text-white dark:group-hover:text-black transition-all duration-300"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
