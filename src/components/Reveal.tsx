"use client";

import { useEffect } from "react";

function revealAll() {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((node) => {
    node.classList.add("is-in");
  });
}

export function Reveal() {
  useEffect(() => {
    const nodes = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealAll();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 },
    );

    const observe = () => {
      nodes().forEach((node) => observer.observe(node));
    };

    observe();
    const raf = window.requestAnimationFrame(observe);
    const retry = window.setTimeout(observe, 150);
    // Fail-safe: never leave content permanently hidden
    const failSafe = window.setTimeout(revealAll, 2500);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(retry);
      window.clearTimeout(failSafe);
      observer.disconnect();
    };
  }, []);

  return null;
}
