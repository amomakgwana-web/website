"use client";

import { useEffect, useRef, useState } from "react";

// Top scroll-progress bar + back-to-top button
export default function ScrollChrome() {
  const barRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (barRef.current) barRef.current.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      setShowTop(h.scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="scroll-progress" ref={barRef}></div>
      <button
        id="back-top"
        className={showTop ? "show" : ""}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
      </button>
    </>
  );
}
