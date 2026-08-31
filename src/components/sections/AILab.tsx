"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function AILab() {
  const fields = ["GENERATIVE AI", "COMPUTER VISION", "AI AGENTS", "AUTOMATION"];

  return (
    <section id="ailab" className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(212,162,47,0.03) 0%, transparent 70%)",
        }}
      />
      
      <div className="mx-auto max-w-[1400px] relative z-10">
        <AnimatedSection className="mb-20 flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>06</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-5xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              TEACHING<br />
              MACHINES<br />
              <span className="text-accent">TO THINK.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col gap-4 max-w-[600px] mb-20">
          {fields.map((field) => (
            <AnimatedItem key={field}>
              <div className="font-sans text-2xl md:text-4xl font-semibold text-zinc-300">
                {field}
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
