"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

export function BootScreen() {
  const [stage, setStage] = useState<"booting" | "complete">("booting");
  const [isClient, setIsClient] = useState(false);
  const [statusState, setStatusState] = useState(0);
  
  // Springs for smooth, inertial cursor tracking
  const mouseX = useSpring(0, { stiffness: 40, damping: 25, mass: 1 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 25, mass: 1 });

  // Map mouse position to subtle environmental rotations and translations
  const rotateX = useTransform(mouseY, [-1, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [-1, 1], [-4, 4]);
  const translateX = useTransform(mouseX, [-1, 1], [-25, 25]);
  const translateY = useTransform(mouseY, [-1, 1], [-25, 25]);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.matches) {
      setStage("complete");
      return;
    }

    // Storyboard Timings (matching exact requested timeline)
    const t1 = setTimeout(() => setStatusState(1), 500);   // SYSTEM INITIALIZING
    const t2 = setTimeout(() => setStatusState(2), 1000);  // ENVIRONMENT ONLINE
    const t3 = setTimeout(() => setStatusState(3), 1500);  // IDENTITY SYNCHRONIZED
    const t4 = setTimeout(() => setStatusState(4), 2000);  // WELCOME PROTOCOL

    const finish = setTimeout(() => setStage("complete"), 3800);

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(nx);
      mouseY.set(ny);
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => { 
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(finish); 
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (stage !== "complete") {
      document.body.style.overflow = "hidden";
      window.scrollTo(0,0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [stage]);

  if (!isClient) return null;
  if (stage === "complete" || prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="boot-screen"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.3, // Camera pull-through effect revealing hero
          filter: "blur(25px)",
          transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#010101] overflow-hidden"
        style={{ perspective: 1500 }}
      >
        {/* FRAME 00 & 01: DARKNESS to MICRO SIGNAL (0.00 -> 0.15s) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.1, 0], scale: [0, 1, 4, 10] }}
          transition={{ delay: 0.15, duration: 2, ease: "easeOut" }}
          className="absolute center w-[2px] h-[2px] bg-white rounded-full blur-[0.5px]"
        />

        {/* FRAME 03: ATMOSPHERE & ENVIRONMENT (0.30s -> 0.80s) */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ x: translateX, y: translateY, rotateX, rotateY }}
        >
          {/* Subtle Ambient Glow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 3 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] blur-3xl" 
          />
          
          {/* Subtle Depth Scan */}
          <motion.div
            initial={{ opacity: 0, backgroundPositionY: "100%" }}
            animate={{ opacity: [0, 0.04, 0], backgroundPositionY: "0%" }}
            transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0)_100%)] bg-[length:100%_200%]"
          />
        </motion.div>

        {/* FRAME 02: SYSTEM UI (0.50s) */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="absolute top-6 right-6 md:top-10 md:right-12 flex flex-col items-end font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-zinc-500 uppercase z-50 pointer-events-none"
        >
          {/* Header */}
          <div className="flex flex-col items-end gap-1.5 mb-4 opacity-80">
            <div className="flex items-center gap-3">
              <span className="text-zinc-300">SYSTEM STATUS</span>
              <motion.span 
                animate={{ opacity: [1, 0.2, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
            </div>
            <div className="h-[1px] w-full bg-gradient-to-l from-zinc-700 to-transparent" />
          </div>

          {/* Dynamic States */}
          <div className="flex flex-col items-end gap-2 text-right">
            <StatusRow text="SYSTEM INITIALIZING" active={statusState >= 1} />
            <StatusRow text="ENVIRONMENT ONLINE" active={statusState >= 2} />
            <StatusRow text="IDENTITY SYNCHRONIZED" active={statusState >= 3} />
            <StatusRow text="WELCOME PROTOCOL" active={statusState >= 4} highlight />
          </div>
        </motion.div>

        {/* LIGHT SOURCE (1.10s) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1.1, duration: 2 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"
        />

        {/* TYPOGRAPHIC SEQUENCE (1.40s - 2.50s) */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center w-full pointer-events-none"
          style={{ x: translateX, y: translateY, rotateX, rotateY }}
        >
          <motion.div
             // Geometric -> Gain Depth -> Sharp Resolution -> Micro Pause
             initial={{ opacity: 0, scale: 0.8, filter: "blur(30px) contrast(200%)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px) contrast(100%)" }}
             transition={{ delay: 1.4, duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
             className="relative flex flex-col items-center text-center overflow-hidden mix-blend-screen"
          >
             <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-sans font-bold leading-[0.8] text-white select-none flex items-baseline">
                <motion.span
                  className="block relative"
                  initial={{ opacity: 0, y: 40, filter: "blur(20px)", letterSpacing: "0.2em" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", letterSpacing: "-0.04em" }}
                  transition={{ delay: 1.4, duration: 2, ease: [0.16, 1, 0.3, 1] }}
                >
                  HELLO
                  {/* Chromatic Edge Effect */}
                  <motion.span 
                    initial={{ opacity: 0, x: -3 }}
                    animate={{ opacity: [0, 0.5, 0], x: 0 }}
                    transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 text-red-500 mix-blend-screen blur-[1px] pointer-events-none"
                    aria-hidden="true"
                  >
                    HELLO
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 3 }}
                    animate={{ opacity: [0, 0.5, 0], x: 0 }}
                    transition={{ delay: 2.1, duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 text-blue-500 mix-blend-screen blur-[1px] pointer-events-none"
                    aria-hidden="true"
                  >
                    HELLO
                  </motion.span>

                  {/* LIGHT SWEEP */}
                  <motion.div
                    initial={{ left: "-150%" }}
                    animate={{ left: "200%" }}
                    transition={{ delay: 2.3, duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-20 w-1/4 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-30deg] mix-blend-overlay opacity-90 pointer-events-none"
                  />
                </motion.span>

                {/* The Period — punchy, delayed, gold */}
                <motion.span
                  className="block text-accent leading-none ml-2"
                  initial={{ opacity: 0, x: -20, scale: 0 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 2.6, duration: 0.6, type: "spring", stiffness: 200, damping: 10 }}
                  style={{ fontSize: "0.9em" }}
                >
                  .
                </motion.span>
             </h1>
          </motion.div>
        </motion.div>
        
        {/* CINEMATIC ATMOSPHERIC GRAIN */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay z-[100]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="cinematic-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#cinematic-grain)"/>
          </svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function StatusRow({ text, active, highlight = false }: { text: string; active: boolean; highlight?: boolean }) {
  return (
    <div className={`flex items-center gap-3 transition-all duration-700 ${active ? 'opacity-100' : 'opacity-0 translate-x-2'}`}>
      <span className={active ? (highlight ? 'text-accent font-bold' : 'text-zinc-300') : 'text-zinc-600'}>{text}</span>
      <span className={`w-1 h-1 rounded-full ${active ? (highlight ? 'bg-accent shadow-[0_0_8px_rgba(212,162,47,0.8)]' : 'border border-accent bg-accent/20') : 'border border-zinc-700'}`} />
    </div>
  );
}
