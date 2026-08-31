"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent text-foreground px-6 md:px-10">
      <div className="flex flex-col items-center text-center z-10">
        <EyebrowBadge>REVA UNIVERSITY &middot; COMPUTER SCIENCE &middot; YEAR 02</EyebrowBadge>
        <h1 className="mt-8 font-sans text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.85] tracking-tighter text-foreground">
          YUVA<br />
          KISHORE
        </h1>
        <h2 className="flex flex-col items-center font-sans text-3xl font-semibold leading-[0.95] tracking-tighter text-zinc-300 md:text-5xl mt-12 mb-16">
          <span>I BUILD</span>
          <span>INTELLIGENT</span>
          <span className="text-accent">SYSTEMS.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#projects" className="group flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest font-bold hover:bg-accent transition-colors">
            VIEW MY WORK <ArrowUpRight size={18} weight="bold" />
          </a>
          <a href="https://github.com/YUVA-2329" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 border border-white/20 bg-black/50 backdrop-blur-md px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-colors">
            GITHUB <ArrowUpRight size={18} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
