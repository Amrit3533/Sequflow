import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view.
 * Usage: const [ref, isVisible] = useScrollReveal();
 * <div ref={ref} className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
 */
export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};