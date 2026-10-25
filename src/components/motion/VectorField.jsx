import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../../lib/motion";

// Hero background: drifting "document vectors" linked to their neighbours.
// The cursor acts as a query vector and lights up its top-3 nearest points.
const LINK = 130;
const QUERY_K = 3;
const BRAND = "111, 179, 224";
const SIGNAL = "242, 182, 50";

const VectorField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = prefersReducedMotion();
    let w = 0, h = 0, dpr = 1, raf = 0, running = true, visible = true;
    let pts = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(140, Math.round((w * h) / 9500));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.8,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // neighbour links
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            const alpha = (1 - Math.sqrt(d2) / LINK) * 0.16;
            ctx.strokeStyle = `rgba(${BRAND}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // query: nearest points to the cursor
      let nearest = [];
      if (mouse.active) {
        nearest = pts
          .map((p) => ({ p, d: Math.hypot(p.x - mouse.x, p.y - mouse.y) }))
          .sort((a, b) => a.d - b.d)
          .slice(0, QUERY_K)
          .filter((n) => n.d < 260);
        nearest.forEach(({ p, d }) => {
          const g = ctx.createLinearGradient(mouse.x, mouse.y, p.x, p.y);
          g.addColorStop(0, `rgba(${SIGNAL}, 0.9)`);
          g.addColorStop(1, `rgba(${SIGNAL}, ${0.15 + (1 - d / 260) * 0.4})`);
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        });
        ctx.fillStyle = `rgba(${SIGNAL}, 0.95)`;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      const lit = new Set(nearest.map((n) => n.p));
      pts.forEach((p) => {
        if (lit.has(p)) {
          ctx.fillStyle = `rgba(${SIGNAL}, 0.25)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgb(${SIGNAL})`;
        } else {
          ctx.fillStyle = `rgba(${BRAND}, 0.55)`;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const step = () => {
      pts.forEach((p) => {
        if (mouse.active) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 180 && d > 1) {
            p.vx += (dx / d) * 0.006;
            p.vy += (dy / d) * 0.006;
          }
        }
        p.vx *= 0.995;
        p.vy *= 0.995;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp < 0.08) {
          p.vx += (Math.random() - 0.5) * 0.02;
          p.vy += (Math.random() - 0.5) * 0.02;
        }
        if (sp > 0.6) {
          p.vx *= 0.6 / sp;
          p.vy *= 0.6 / sp;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      });
    };

    const loop = () => {
      if (!running || !visible) return;
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      if (!reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    draw();
    start();

    const host = canvas.parentElement;
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
      if (reduce) draw();
    };
    const onLeave = () => {
      mouse.active = false;
      if (reduce) draw();
    };
    const onVis = () => {
      running = !document.hidden;
      if (running) start();
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        draw();
      }, 150);
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="vector-field" aria-hidden="true" />;
};

export default VectorField;
