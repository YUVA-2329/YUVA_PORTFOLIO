"use client";

import { useEffect, useRef, useState } from "react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { HudFrame } from "@/components/ui/HudFrame";
import { BEATS } from "@/lib/cinematic";

export function CinematicReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const h2InevitableRef = useRef<HTMLHeadingElement | null>(null);
  const h2IronManRef = useRef<HTMLHeadingElement | null>(null);
  const outroRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);

  const tickingRef = useRef(false);
  const prevVisibleIdsRef = useRef("");

  const [visibleBeats, setVisibleBeats] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        tickingRef.current = false;
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress =
          scrollable <= 0
            ? 0
            : Math.min(1, Math.max(0, -rect.top / scrollable));

        if (h2InevitableRef.current) {
          const op = Math.min(1, Math.max(0, (0.52 - progress) / 0.1));
          h2InevitableRef.current.style.opacity = String(op);
        }

        if (h2IronManRef.current) {
          const op = Math.min(1, Math.max(0, (progress - 0.48) / 0.1));
          h2IronManRef.current.style.opacity = String(op);
        }

        if (outroRef.current) {
          const op = Math.min(1, Math.max(0, (progress - 0.86) / 0.06));
          outroRef.current.style.opacity = String(op);
          outroRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
        }

        if (progressFillRef.current) {
          progressFillRef.current.style.transform = `scaleX(${progress})`;
        }

        const newVisible = new Set<string>();
        for (const b of BEATS) {
          if (progress >= b.show && progress <= b.hide) newVisible.add(b.id);
        }
        const newIds = [...newVisible].sort().join(",");
        if (newIds !== prevVisibleIdsRef.current) {
          prevVisibleIdsRef.current = newIds;
          setVisibleBeats(newVisible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cinematic"
      className="scroll-animation relative border-t border-white/5 bg-background"
    >
      <div
        className="sticky top-0 min-h-[100dvh] w-full overflow-hidden bg-background"
        style={{ height: "100dvh", willChange: "transform", transform: "translateZ(0)" }}
      >

        <div className="pointer-events-none absolute left-6 top-24 text-accent md:left-10 md:top-28">
          <HudFrame corner="tl" size={26} />
        </div>
        <div className="pointer-events-none absolute right-6 top-24 text-accent md:right-10 md:top-28">
          <HudFrame corner="tr" size={26} />
        </div>
        <div className="pointer-events-none absolute bottom-14 left-6 text-accent md:bottom-16 md:left-10">
          <HudFrame corner="bl" size={26} />
        </div>
        <div className="pointer-events-none absolute bottom-14 right-6 text-accent md:bottom-16 md:right-10">
          <HudFrame corner="br" size={26} />
        </div>

        <div className="pointer-events-none absolute right-6 top-28 z-10 flex max-w-[46ch] flex-col items-end gap-5 text-right md:right-12 md:top-32">
          <EyebrowBadge>02</EyebrowBadge>
          <div className="relative self-stretch">
            <h2
              ref={h2InevitableRef}
              className="font-sans text-3xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-5xl lg:text-6xl"
              style={{ transition: "opacity 240ms ease-out" }}
            >
              A person,<br />
              <span className="text-accent">versioned like software.</span>
            </h2>
            <h2
              ref={h2IronManRef}
              className="absolute inset-0 font-sans text-3xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-5xl lg:text-6xl"
              style={{ opacity: 0, transition: "opacity 240ms ease-out" }}
            >
              Every release<br />
              <span className="text-accent">shipped something real.</span>
            </h2>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="mx-6 mb-3 h-px bg-white/10 md:mx-10">
            <div
              ref={progressFillRef}
              className="h-full origin-left bg-accent"
              style={{ transform: "scaleX(0)", transition: "transform 80ms linear" }}
            />
          </div>
          <div className="mx-6 flex items-center justify-between pb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:mx-10">
            <span>SCROLL &darr;</span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
          {BEATS.map((b, i) => {
            const visible = visibleBeats.has(b.id);
            const position =
              i === 0
                ? "top-1/4 right-6 md:right-12"
                : i === 1
                ? "top-1/2 -translate-y-1/2 left-6 md:left-12"
                : "bottom-24 left-6 md:bottom-28 md:left-12";
            return (
              <div
                key={b.id}
                className={`pointer-events-none absolute ${position} z-20 hidden w-[420px] max-w-[90vw] md:block`}
              >
                <figure
                  className={`card-surface pointer-events-auto p-6 transition-all duration-400 ease-out ${
                    visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                >
                  <EyebrowBadge>{b.label}</EyebrowBadge>
                  <h2 className="mt-3 font-sans text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                    {b.quote}
                  </h2>
                </figure>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[36%] z-20 flex flex-col gap-3 px-6 md:hidden">
          {BEATS.map((b) => {
            const visible = visibleBeats.has(b.id);
            return (
              <figure
                key={b.id}
                className={`card-surface pointer-events-auto p-5 transition-all duration-400 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-accent">
                  {b.label}
                </span>
                <h3 className="mt-2 font-sans text-2xl font-semibold leading-snug text-foreground">
                  {b.quote}
                </h3>
              </figure>
            );
          })}
        </div>

        <div
          ref={outroRef}
          className="pointer-events-none absolute bottom-24 right-6 z-10 flex flex-col items-end gap-4 md:bottom-32 md:right-12"
          style={{ opacity: 0, transition: "opacity 80ms linear" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            04
          </span>
          <h2 className="text-right font-sans text-3xl font-semibold leading-[0.9] tracking-tighter text-foreground md:text-5xl lg:text-6xl">
            SECOND YEAR.<br />
            FIRST PRINCIPLES.<br />
            <span className="text-accent">NEXT: ENGINEER.</span>
          </h2>
          <p className="max-w-[40ch] text-right font-sans text-base leading-relaxed text-zinc-300 md:text-xl">
            Still learning. Still building. Still shipping.
          </p>
        </div>
      </div>
    </section>
  );
}
