import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setEnabled(
        finePointerQuery.matches && !reducedMotionQuery.matches && window.innerWidth >= 1024
      );
    };

    updateEnabled();

    finePointerQuery.addEventListener("change", updateEnabled);
    reducedMotionQuery.addEventListener("change", updateEnabled);
    window.addEventListener("resize", updateEnabled);

    return () => {
      finePointerQuery.removeEventListener("change", updateEnabled);
      reducedMotionQuery.removeEventListener("change", updateEnabled);
      window.removeEventListener("resize", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const moveHandler = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ transform: `translate(${position.x - 40}px, ${position.y - 40}px)` }}
    >
      <div className="h-20 w-20 rounded-full bg-linear-to-r from-pink-500 to-blue-500 opacity-80 blur-3xl" />
    </div>
  );
}
