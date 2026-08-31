"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function CurrentState() {
  const skills = ["JAVA", "C++", "DSA", "AI", "FULL STACK", "SYSTEM DESIGN", "THREE.JS"];
  
  return (
    <section className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="flex flex-col gap-6 mb-16">
          <AnimatedItem>
            <EyebrowBadge>03</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-5xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              CURRENTLY<br />
              <span className="text-accent">BUILDING.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap gap-4 md:gap-6 max-w-[800px] mb-20">
          {skills.map((skill) => (
            <AnimatedItem key={skill}>
              <span className="font-mono text-xl md:text-3xl uppercase tracking-wider text-zinc-300">
                {skill}
              </span>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-4 max-w-[600px]">
          <AnimatedItem>
            <h3 className="font-sans text-3xl md:text-5xl font-semibold text-foreground">
              LEARNING THE<br />
              FUNDAMENTALS.
            </h3>
          </AnimatedItem>
          <AnimatedItem>
            <p className="font-sans text-lg text-zinc-400">
              While building things that make me curious.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
