"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-md border-b border-border/80"
          : "py-6 bg-transparent border-b border-transparent"
      )}
    >
      {/* Viewport Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-accent-blue origin-left z-50"
        style={{ scaleX }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-wider font-mono hover:opacity-85 transition-opacity"
        >
          {personalInfo.name.toUpperCase()}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/45 dark:bg-black/15 border border-black/5 dark:border-white/5 px-2 py-1 rounded-full backdrop-blur-sm">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative px-4 py-1.5 text-[13px] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {hoveredIdx === idx && (
                <motion.span
                  layoutId="navHover"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full -z-10"
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls (Theme and Menu toggle) */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-black/5 dark:border-white/5 bg-white/45 dark:bg-black/15 text-foreground/70 hover:text-foreground hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground py-2 border-b border-black/[0.03] dark:border-white/[0.03]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
