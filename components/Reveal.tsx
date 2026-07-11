"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Reveals children with a subtle fade + rise when scrolled into view.
 *
 * Fail-safe by design: the default state is VISIBLE, so if JavaScript, the
 * IntersectionObserver, or "reduce motion" is in play, the content always shows.
 * The hide-then-animate only happens for below-the-fold sections once JS confirms
 * it can drive the effect — so no failure mode ever leaves content invisible.
 */
type State = "idle" | "hidden" | "shown";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("idle"); // idle renders visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setState("shown");
      return;
    }

    // Already on screen at load -> show immediately (no flash for above-the-fold).
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setState("shown");
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = state === "hidden";
  return (
    <div
      ref={ref}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(16px)" : "none",
        transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
      }}
    >
      {children}
    </div>
  );
}
