import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../lib/motion";

const GLYPHS = "01<>/{}[]=+*#ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Resolves text left to right out of random glyphs, once, on mount.
// An invisible copy of the final text holds the layout so nothing reflows.
// Uses wall-clock time on a timer so it always finishes, even in throttled tabs.
const DecodeText = ({ text, duration = 1400, delay = 150 }) => {
  const [out, setOut] = useState(() => (prefersReducedMotion() ? text : ""));

  useEffect(() => {
    if (prefersReducedMotion() || document.hidden) {
      setOut(text);
      return;
    }
    const start = performance.now() + delay;
    const id = setInterval(() => {
      const p = Math.min(1, Math.max(0, (performance.now() - start) / duration));
      const solved = Math.floor(p * text.length);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < solved || ch === " ") s += ch;
        else if (i < solved + 6) s += GLYPHS[(Math.random() * GLYPHS.length) | 0];
        else break;
      }
      setOut(p < 1 ? s : text);
      if (p >= 1) clearInterval(id);
    }, 33);
    // Safety net: whatever happens to the timer, show the real text.
    const done = setTimeout(() => setOut(text), delay + duration + 1500);
    return () => {
      clearInterval(id);
      clearTimeout(done);
    };
  }, [text, duration, delay]);

  return (
    <span className="decode">
      <span className="decode-ghost">{text}</span>
      <span className="decode-live" aria-hidden="true">{out}</span>
    </span>
  );
};

export default DecodeText;
