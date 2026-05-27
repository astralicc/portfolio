"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background">
      {/* Editorial Grid Texture */}
      <div className="absolute inset-0 bg-grid-texture opacity-80" />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute inset-0 flex items-center justify-center filter blur-[120px]">
        {/* Orb 1: Soft Cyan/Blue */}
        <motion.div
          animate={{
            x: [-100, 100, -50],
            y: [-50, 120, -100],
            scale: [1, 1.2, 0.9],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute w-[450px] h-[450px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 mix-blend-multiply dark:mix-blend-screen left-[15%] top-[10%]"
        />

        {/* Orb 2: Soft Violet/Purple */}
        <motion.div
          animate={{
            x: [100, -120, 50],
            y: [80, -100, 120],
            scale: [0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/8 dark:bg-indigo-700/5 mix-blend-multiply dark:mix-blend-screen right-[10%] bottom-[15%]"
        />

        {/* Orb 3: School Gold Glow (Vibrant addition for color balance) */}
        <motion.div
          animate={{
            x: [120, -80, -120],
            y: [-100, 80, -50],
            scale: [1.1, 0.9, 1.2],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute w-[400px] h-[400px] rounded-full bg-accent-gold/10 dark:bg-accent-gold/4 mix-blend-multiply dark:mix-blend-screen left-[40%] bottom-[20%]"
        />
      </div>

      {/* Sleek top lighting overlay */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-900/5" />
    </div>
  );
}
