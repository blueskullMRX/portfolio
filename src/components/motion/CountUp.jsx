import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../lib/motion";

// Counts a number up from 0 when it first renders.
const CountUp = ({ value, decimals = 3, duration = 700 }) => {
  const [v, setV] = useState(prefersReducedMotion() ? value : 0);
  useEffect(() => {
    if (prefersReducedMotion()) {
      setV(value);
      return;
    }
    let raf;
    let start;
    const tick = (t) => {
      if (start === undefined) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return <>{v.toFixed(decimals)}</>;
};

export default CountUp;
