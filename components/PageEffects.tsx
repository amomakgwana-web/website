"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Scroll-triggered animations ported from the original design:
// fade-up cards, cinematic reveals, staggered grid pops, count-up stats,
// and 3D tilt on glass cards. Re-initialised on every route change.
export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const fadeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            fadeObs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>(".lift-card,.metric-big,.stat-ticker").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity .5s ease, transform .5s ease";
      fadeObs.observe(el);
    });
    observers.push(fadeObs);

    const cineObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            cineObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    document.querySelectorAll(".cine-reveal:not(.vis)").forEach((el) => cineObs.observe(el));
    observers.push(cineObs);

    const gridObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains("grid-pop"));
          const idx = sibs.indexOf(el) % 6;
          el.classList.add("vis", "g" + (idx + 1));
          gridObs.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".grid-pop:not(.vis)").forEach((el) => gridObs.observe(el));
    observers.push(gridObs);

    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const pre = el.getAttribute("data-prefix") || "";
      const suf = el.getAttribute("data-suffix") || "";
      const dur = 1400;
      let t0: number | null = null;
      const frame = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = pre + (dec ? val.toFixed(dec) : Math.round(val).toLocaleString()) + suf;
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount(e.target as HTMLElement);
            countObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll<HTMLElement>(".count-up:not(.counted)").forEach((el) => {
      el.classList.add("counted");
      countObs.observe(el);
    });
    observers.push(countObs);

    const stackObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("spread");
            stackObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".stack-cards:not(.spread)").forEach((el) => stackObs.observe(el));
    observers.push(stackObs);

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const card = (e.target as Element | null)?.closest?.(".tilt") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${(px * 6).toFixed(2)}deg) rotateX(${(-py * 6).toFixed(2)}deg) translateY(-4px)`;
    };
    const onOut = (e: MouseEvent) => {
      const card = (e.target as Element | null)?.closest?.(".tilt") as HTMLElement | null;
      if (card && (!e.relatedTarget || !card.contains(e.relatedTarget as Node))) {
        card.style.transform = "";
      }
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return null;
}
