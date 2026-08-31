"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>01</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-5xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              WHO&apos;S BEHIND<br />
              <span className="text-accent">THE CODE?</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-xl">
              <span className="text-foreground">YUVA KISHORE</span><br />
              Second-year Computer Science student at REVA University.<br />
              <br />
              I work across:<br />
              <span className="text-zinc-300">C++ &middot; Java &middot; Python &middot; JavaScript &middot; TypeScript &middot; AI &middot; Data Structures & Algorithms &middot; Full-Stack Development &middot; React &middot; Next.js &middot; Node.js &middot; Databases &middot; Three.js &middot; GSAP &middot; Git & GitHub</span><br />
              <br />
              My focus is not just learning individual technologies.<br />
              I am learning how they connect to create complete products.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
