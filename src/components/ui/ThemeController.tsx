"use client";

import { useEffect } from "react";

export function ThemeController() {
  useEffect(() => {
    let keysTyped = "";
    const targetWord = "yuva";

    const handleKeyDown = (e: KeyboardEvent) => {
      keysTyped += e.key.toLowerCase();

      // Keep only the last N characters where N is the length of the target word
      if (keysTyped.length > targetWord.length) {
        keysTyped = keysTyped.slice(-targetWord.length);
      }

      if (keysTyped === targetWord) {
        document.documentElement.classList.toggle("light-theme");
        keysTyped = ""; // Reset after trigger
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
