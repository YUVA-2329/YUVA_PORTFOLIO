"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowUpRight } from "@phosphor-icons/react";

export function FinalSection() {
  return (
    <section className="relative border-t border-white/5 bg-transparent px-6 py-32 md:px-10 md:py-48 min-h-screen flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col gap-20">
        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>08</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-[clamp(3.5rem,8vw,10rem)] font-semibold leading-[0.85] tracking-tighter text-foreground">
              COMPILING...
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="font-mono text-lg md:text-2xl uppercase tracking-widest text-zinc-300 mt-4">
              NEXT: SOFTWARE ENGINEER.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <AnimatedSection className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <AnimatedItem><span className="text-foreground">WHO:</span> YUVA KISHORE</AnimatedItem>
            <AnimatedItem><span className="text-foreground">WHERE:</span> REVA UNIVERSITY</AnimatedItem>
            <AnimatedItem><span className="text-foreground">YEAR:</span> SECOND YEAR</AnimatedItem>
            <AnimatedItem><span className="text-foreground">WHAT:</span> COMPUTER SCIENCE</AnimatedItem>
            <AnimatedItem><span className="text-foreground">BUILDS:</span> AI &middot; SOFTWARE &middot; FULL STACK &middot; IoT &middot; INTERACTIVE EXPERIENCES</AnimatedItem>
            <AnimatedItem><span className="text-foreground">LANGUAGES:</span> C++ &middot; JAVA &middot; PYTHON &middot; JAVASCRIPT &middot; TYPESCRIPT</AnimatedItem>
            <AnimatedItem><span className="text-foreground">CURRENT DIRECTION:</span> AI + SOFTWARE ENGINEERING</AnimatedItem>
            <AnimatedItem><span className="text-foreground">PROOF:</span> GITHUB + REAL PROJECTS</AnimatedItem>
            <AnimatedItem><span className="text-foreground">NEXT:</span> SOFTWARE ENGINEER</AnimatedItem>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col md:flex-row gap-8 md:gap-16">
            <AnimatedItem>
              <a href="https://github.com/YUVA-2329" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 font-sans text-xl font-medium text-foreground hover:text-accent transition-colors">
                GITHUB
                <ArrowUpRight size={18} weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </AnimatedItem>
            {["LINKEDIN", "EMAIL", "RESUME"].map((link) => (
              <AnimatedItem key={link}>
                <a href="#" className="group flex items-center gap-2 font-sans text-xl font-medium text-foreground hover:text-accent transition-colors">
                  {link}
                  <ArrowUpRight size={18} weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          <AnimatedItem>
            <span>BUILD &middot; LEARN &middot; SHIP</span>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
