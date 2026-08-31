"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code, BracketsCurly, TreeStructure, Brain, Layout } from "@phosphor-icons/react";
import { EyebrowBadge } from "../ui/EyebrowBadge";

export function LanguageReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Creates a 500vh scroll container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate Opacity for each beat (fade in, hold, fade out)
  const op1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const op4 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const op5 = useTransform(scrollYProgress, [0.8, 0.85, 1.0], [0, 1, 1]); // Stays visible

  // Calculate Scale for each beat (slight cinematic zoom)
  const scale1 = useTransform(scrollYProgress, [0.0, 0.2], [0.8, 1.1]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1.1]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1.1]);
  const scale4 = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1.1]);
  const scale5 = useTransform(scrollYProgress, [0.8, 1.0], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-transparent text-foreground">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pointer-events-none">
        
        {/* Beat 1: JAVA */}
        <motion.div style={{ opacity: op1, scale: scale1 }} className="absolute flex flex-col items-center text-center">
          <EyebrowBadge><Code weight="bold" size={14} className="mr-1 inline" /> CORE FOUNDATION</EyebrowBadge>
          <h2 className="font-sans text-[clamp(4rem,15vw,12rem)] font-bold tracking-tighter leading-none mt-6">
            JAVA
          </h2>
          <p className="font-mono text-zinc-400 mt-4 tracking-widest uppercase text-sm">Object-Oriented Architecture</p>
        </motion.div>

        {/* Beat 2: C++ */}
        <motion.div style={{ opacity: op2, scale: scale2 }} className="absolute flex flex-col items-center text-center">
          <EyebrowBadge><BracketsCurly weight="bold" size={14} className="mr-1 inline" /> SYSTEMS & MEMORY</EyebrowBadge>
          <h2 className="font-sans text-[clamp(4rem,15vw,12rem)] font-bold tracking-tighter leading-none mt-6">
            C++
          </h2>
          <p className="font-mono text-zinc-400 mt-4 tracking-widest uppercase text-sm">Pointers &middot; References &middot; Allocation</p>
        </motion.div>

        {/* Beat 3: DSA */}
        <motion.div style={{ opacity: op3, scale: scale3 }} className="absolute flex flex-col items-center text-center">
          <EyebrowBadge><TreeStructure weight="bold" size={14} className="mr-1 inline" /> LOGIC & OPTIMIZATION</EyebrowBadge>
          <h2 className="font-sans text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter leading-[0.9] mt-6">
            DATA<br />STRUCTURES
          </h2>
          <p className="font-mono text-zinc-400 mt-6 tracking-widest uppercase text-sm">Trees &middot; Graphs &middot; Algorithms</p>
        </motion.div>

        {/* Beat 4: AI & WEB */}
        <motion.div style={{ opacity: op4, scale: scale4 }} className="absolute flex flex-col items-center text-center">
          <EyebrowBadge><Brain weight="bold" size={14} className="mr-1 inline" /> INTELLIGENCE</EyebrowBadge>
          <h2 className="font-sans text-[clamp(4rem,15vw,12rem)] font-bold tracking-tighter leading-[0.9] mt-6">
            AI & WEB
          </h2>
          <p className="font-mono text-zinc-400 mt-6 tracking-widest uppercase text-sm">Python &middot; TypeScript &middot; React</p>
        </motion.div>

        {/* Beat 5: CONCLUSION & CTA */}
        <motion.div style={{ opacity: op5, scale: scale5 }} className="absolute flex flex-col items-center text-center w-full px-6 pointer-events-auto">
          <EyebrowBadge><Layout weight="bold" size={14} className="mr-1 inline" /> THE RESULT</EyebrowBadge>
          <h2 className="font-sans text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mt-8 mb-12">
            BUILDING<br />
            <span className="text-accent">INTELLIGENT SYSTEMS.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#projects" 
              className="group flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest font-bold hover:bg-accent transition-colors"
            >
              VIEW MY WORK <ArrowUpRight size={18} weight="bold" />
            </a>
            <a 
              href="https://github.com/YUVA-2329" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center gap-2 border border-white/20 bg-black/50 backdrop-blur-md px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-colors"
            >
              GITHUB <ArrowUpRight size={18} weight="bold" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
