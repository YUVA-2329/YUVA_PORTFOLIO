"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function FullStack() {
  return (
    <section className="relative border-t border-white/5 bg-background px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px] flex flex-col items-center text-center">
        <AnimatedSection className="flex flex-col items-center gap-6 mb-16">
          <AnimatedItem>
            <EyebrowBadge>07</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-5xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
              FROM PIXEL<br />
              <span className="text-accent">TO SERVER.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col items-center gap-4 font-mono text-xl md:text-3xl tracking-widest text-zinc-300 font-medium">
          <AnimatedItem><div className="py-2">FRONTEND</div></AnimatedItem>
          <AnimatedItem><div className="text-accent text-sm">&darr;</div></AnimatedItem>
          <AnimatedItem><div className="py-2">API</div></AnimatedItem>
          <AnimatedItem><div className="text-accent text-sm">&darr;</div></AnimatedItem>
          <AnimatedItem><div className="py-2">BACKEND</div></AnimatedItem>
          <AnimatedItem><div className="text-accent text-sm">&darr;</div></AnimatedItem>
          <AnimatedItem><div className="py-2">DATABASE</div></AnimatedItem>
          <AnimatedItem><div className="text-accent text-sm">&darr;</div></AnimatedItem>
          <AnimatedItem><div className="py-2">DEPLOYMENT</div></AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
