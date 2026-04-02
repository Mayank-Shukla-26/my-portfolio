import { motion } from "framer-motion";
import { FiCode, FiLayers, FiTrendingUp, FiUsers } from "react-icons/fi";

const strengths = [
  {
    title: "Fast Learner",
    description:
      "I learn quickly by building, testing, and improving real projects instead of only staying in tutorials.",
    Icon: FiTrendingUp,
  },
  {
    title: "Full-Stack Mindset",
    description:
      "I like understanding both the interface users see and the logic that powers the experience behind it.",
    Icon: FiLayers,
  },
  {
    title: "Problem Solving",
    description:
      "I enjoy breaking large problems into small steps and improving the solution one iteration at a time.",
    Icon: FiCode,
  },
  {
    title: "Team Ready",
    description:
      "I am open to feedback, collaboration, and learning how real teams ship software together.",
    Icon: FiUsers,
  },
];

const workStyle = [
  "I focus on clean, readable UI code.",
  "I like turning ideas into working features step by step.",
  "I care about responsive layouts and polished user experience.",
  "I am actively looking for internships and junior opportunities.",
];

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-14 right-10 h-56 w-56 rounded-full bg-[#302b63]/35 blur-[130px]" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-[#1cd8d2]/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1cd8d2]">
            Strengths
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Why hire me without experience?</h2>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            I may be early in my career, but I bring project experience, strong learning momentum,
            and a real interest in building useful software. I am looking for a place where I can
            contribute, learn fast, and keep growing with real product work.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map(({ title, description, Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-[#1cd8d2]">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              What You Can Expect
            </p>
            <div className="mt-6 space-y-4">
              {workStyle.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1cd8d2]" />
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-[#1cd8d2]/30 bg-[#1cd8d2]/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1cd8d2]">
                Current Goal
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">
                Join a team where I can contribute to real projects, improve quickly, and grow into
                a dependable full-stack developer.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
