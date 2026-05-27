import React from "react";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CursorFollower } from "@/components/CursorFollower";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Visual Canvas Backdrop */}
      <AnimatedBackground />

      {/* Spring-loaded mix-blend negated cursor follower (desktop only) */}
      <CursorFollower />

      {/* Primary Sticky Header with Scroll Indicator */}
      <Navbar />

      {/* Main Single Page Grid Flow */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-0 flex flex-col items-center">
        {/* Hero Segment */}
        <div className="w-full">
          <HeroSection />
        </div>

        {/* Spacious Layout Dividers */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        {/* Bento About Segment */}
        <div className="w-full">
          <AboutSection />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        {/* Achievements Segment */}
        <div className="w-full">
          <AchievementsSection />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        {/* Selected Works Grid Segment */}
        <div className="w-full">
          <ProjectsGrid />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        {/* Experience Timeline Segment */}
        <div className="w-full">
          <ExperienceTimeline />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        {/* New Testimonials Segment */}
        <div className="w-full">
          <TestimonialsSection />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        {/* Direct Email Action Segment */}
        <div className="w-full">
          <ContactForm />
        </div>
      </main>

      {/* Symmetrical Footer */}
      <Footer />
    </>
  );
}
