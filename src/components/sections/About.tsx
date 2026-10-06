"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import DepthText from "@/components/ui/DepthText";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-transparent px-6 md:px-10 min-h-screen w-full flex flex-col justify-center items-center overflow-hidden py-24"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center text-center gap-12 md:gap-16">
        <AnimatedSection className="flex flex-col items-center gap-8">
          <AnimatedItem>
            <EyebrowBadge>01</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <div className="py-4 flex justify-center w-full">
              <DepthText 
                text="ABOUT ME" 
                faceColor="var(--foreground)" 
                depthColor="var(--accent)" 
                fontSize="clamp(3.5rem, 8vw, 6rem)" 
                tilt={5} 
                layers={15} 
              />
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div className="max-w-[60ch] mt-4 mx-auto flex flex-col items-center">
              <h3 className="font-mono text-lg md:text-xl font-bold text-accent mb-8 uppercase tracking-[0.2em] shadow-accent/20 text-center">
                Code. Create. Experiment. Repeat.
              </h3>
              <p className="font-sans text-xl leading-[1.7] text-zinc-400 md:text-3xl font-light tracking-tight text-center">
                I’m a CSE student exploring the space between <span className="text-foreground font-medium">logic and imagination</span> — building with <span className="text-foreground font-medium">C, Java, DSA, AI and modern web technologies</span>.
                <br /><br />
                I learn by building, grow by breaking things, and keep pushing until an idea becomes <span className="text-foreground font-medium relative inline-block">something real.<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent/40 blur-[1px]"></span></span>
              </p>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
