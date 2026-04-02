import { motion } from "framer-motion";
import p from "../assets/p.jpeg";

export default function About() {
  const stats = [
    { label: "Projects Built", value: "3+" },
    { label: "Current CGPA", value: "8.0" },
    { label: "Current Goal", value: "First Dev Role" },
  ];

  const glows = [
    "-top-10 -left-10 h-[360px] w-[360px] opacity-20 blur-[120px]",
    "right-10 bottom-0 h-[420px] w-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        {glows.map((classes, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${classes}`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          className="flex flex-col items-center gap-8 md:flex-row md:items-stretch"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            className="relative h-40 w-40 overflow-hidden rounded-2xl border border-[#1cd8d2]/25 bg-linear-to-br from-[#1cd8d2]/20 to-[#302b63]/20 shadow-2xl md:h-48 md:w-48"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={p} alt="profile" className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>

          <div className="flex flex-1 flex-col justify-center text-center md:text-left">
            <h2 className="bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
              Mayank Shukla
            </h2>
            <p className="mt-2 text-lg font-semibold text-white/90 sm:text-xl">
              Aspiring Full Stack Developer
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              I am a Computer Science student focused on building clean, responsive web
              applications and strengthening my problem-solving skills. Most of my learning
              comes from building projects, exploring how modern apps work, and improving each
              project one feature at a time.
            </p>

            <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white transition hover:bg-white/20"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">About Me</h3>
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              My journey started in college, but most of my progress has come from self-learning,
              practice, and building personal projects. I enjoy turning ideas into working
              products and learning the details behind both frontend and backend development.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">What I&apos;m Looking For</h3>
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              I am looking for internships, entry-level opportunities, and collaborative projects
              where I can keep growing as a developer. My goal is to join a team where I can
              contribute, learn fast, and build software that solves real problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
