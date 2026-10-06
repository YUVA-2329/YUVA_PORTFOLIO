"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { MagicBento, BentoItem } from "@/components/ui/MagicBento";

const moreExperiments = [
  { name: "SPARK-PRO", desc: "Experiment repository", tech: "TypeScript", github: "https://github.com/YUVA-2329/SPARK-PRO", colSpan: 2 },
  { name: "CLINICSASHA", desc: "Experiment repository", tech: "TypeScript", github: "https://github.com/YUVA-2329/CLINICSASHA" },
  { name: "MANIPAL", desc: "Experiment repository", tech: "TypeScript", github: "https://github.com/YUVA-2329/MANIPAL" },
  { name: "INFIYNIX", desc: "Experiment repository", tech: "TypeScript", github: "https://github.com/YUVA-2329/INFIYNIX" },
  { name: "MATCHTALK", desc: "Experiment repository", tech: "TypeScript", github: "https://github.com/YUVA-2329/MATCHTALK", colSpan: 2 },
  { name: "myai", desc: "Experiment repository", tech: "Python", github: "https://github.com/YUVA-2329/myai" },
];

export function BuiltInPublic() {
  const bentoItems: BentoItem[] = moreExperiments.map((exp, i) => ({
    title: exp.name,
    description: exp.desc,
    label: exp.tech,
    link: exp.github,
    colSpan: exp.colSpan,
    color: i === 0 || i === 4 ? "rgba(212, 162, 47, 0.05)" : "#120F17"
  }));

  return (
    <section id="built-in-public" className="relative border-t border-white/5 bg-transparent px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-20 flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>06</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              BUILT IN<br />
              <span className="text-accent">PUBLIC.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-lg text-zinc-400">
              A growing collection of experiments, projects and ideas. Active contributor.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection>
          <AnimatedItem>
            <MagicBento items={bentoItems} enableStars={true} enableSpotlight={true} />
          </AnimatedItem>
        </AnimatedSection>

      </div>
    </section>
  );
}
