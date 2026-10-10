import { useEffect, useRef, useState } from "react";

export function RevealText({ text, stagger = 28 }: { text: string; stagger?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let index = 0;
  const words = text.split(" ");

  return (
    <span ref={ref} aria-label={text} className="inline">
      {words.map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, c) => {
            const delay = index++ * stagger;
            return (
              <span
                key={c}
                className={visible ? "reveal-letter inline-block" : "reveal-pending inline-block"}
                style={{ animationDelay: `${delay}ms` }}
              >
                {char}
              </span>
            );
          })}
          {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
