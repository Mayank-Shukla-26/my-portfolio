import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);

        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full px-4 py-4 transition-transform duration-300 sm:px-6 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] text-sm font-bold text-black shadow-lg">
              MS
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Portfolio
              </div>
              <div className="text-lg font-bold text-white sm:text-xl">Mayank</div>
            </div>
          </div>

          <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-3xl text-white focus:outline-none"
              aria-label="Open Menu"
            >
              <FiMenu />
            </button>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="rounded-full bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] px-5 py-2 font-medium text-black shadow-lg transition hover:scale-[1.02]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
