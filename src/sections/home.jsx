import { useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import avator from "../assets/avator-optimized.png";

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/mayank020040" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/mayank020040" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Mayank-Shukla-26" },
];

const quickProof = [
  "Open to internships",
  "Project-based learning",
  "Problem solving mindset",
];

const snapshot = [
  { label: "Current Focus", value: "Full-Stack Web Development" },
  { label: "Opportunity", value: "Internships / Junior Roles" },
  { label: "Strength", value: "Clean UI + Consistent Learning" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(
    () => ["MERN Stack Developer", "Computer Science Student", "Problem Solver"],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((value) => value + 1);
      else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((value) => value - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((value) => (value + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      <ParticlesBackground />

      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[70vw] w-[70vw] max-h-[500px] max-w-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] animate-pulse sm:h-[50vw] sm:w-[50vw] sm:opacity-20 sm:blur-[130px] md:h-[40vw] md:w-[40vw] md:opacity-10 md:blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[70vw] w-[70vw] max-h-[500px] max-w-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] animate-pulse sm:h-[50vw] sm:w-[50vw] sm:opacity-20 sm:blur-[130px] md:h-[40vw] md:w-[40vw] md:opacity-10 md:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 px-4 pt-28 pb-16 lg:grid-cols-2 lg:pt-24">
        <div className="relative flex h-full flex-col justify-center text-center lg:text-left">
          <div className="mx-auto w-full max-w-3xl lg:pr-24">
            <motion.div
              className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {quickProof.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mb-3 min-h-[1.6em] text-xl font-semibold tracking-wide text-white sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="ml-1 inline-block w-0.5 animate-pulse bg-white align-middle"
                style={{ height: "1em" }}
              />
            </motion.div>

            <motion.h1
              className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-4xl font-bold text-transparent drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I&apos;m
              <br />
              <span className="text-5xl font-bold whitespace-normal text-white sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Mayank Shukla
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science student building real projects, improving problem-solving skills,
              and looking for opportunities to grow as a full-stack developer on a strong team.
            </motion.p>

            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              {snapshot.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-white sm:text-base">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="/Mayank_Shukla_Resume.pdf"
                download
                className="rounded-full bg-white px-6 py-3 text-lg font-medium text-black shadow-lg transition-all hover:scale-105 hover:bg-gray-200"
              >
                My Resume
              </a>
            </motion.div>

            <motion.p
              className="mt-4 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.8 }}
            >
              Best ways to reach me right now: email or LinkedIn.
            </motion.p>

            <div className="mt-10 flex justify-center gap-5 text-2xl md:text-3xl lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="pointer-events-none absolute top-1/2 -translate-y-1/2"
            style={{
              right: "10px",
              width: "min(22vw, 410px)",
              height: "min(40vw, 760px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)",
            }}
          />
          <motion.img
            src={avator}
            alt="Mayank Shukla"
            className="pointer-events-none absolute top-1/2 object-contain select-none -translate-y-1/2"
            style={{
              right: "-30px",
              width: "min(45vw, 780px)",
              maxHeight: "90vh",
            }}
            decoding="async"
            fetchPriority="high"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
