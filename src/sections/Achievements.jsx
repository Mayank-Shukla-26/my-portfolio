import { motion } from "framer-motion";
import { FiAward, FiUsers, FiCpu, FiCheckCircle } from "react-icons/fi";

const achievements = [
  {
    title: "Problem Solving Certificate",
    detail: "HackerRank",
    Icon: FiAward,
  },
  {
    title: "Python Basic Certificate",
    detail: "HackerRank",
    Icon: FiCheckCircle,
  },
  {
    title: "AI-ML Virtual Internship",
    detail: "AICTE",
    Icon: FiCpu,
  },
  {
    title: "NSS Volunteer",
    detail: "Supported college events and social activities",
    Icon: FiUsers,
  },
  {
    title: "Class Representative (CR)",
    detail: "Coordinated between faculty and students",
    Icon: FiUsers,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-6 md:px-10 md:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-8 h-52 w-52 rounded-full bg-[#302b63]/30 blur-[130px] sm:right-10 sm:h-60 sm:w-60" />
        <div className="absolute bottom-8 left-8 h-48 w-48 rounded-full bg-[#1cd8d2]/15 blur-[120px] sm:left-10 sm:h-56 sm:w-56" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1cd8d2]">
            Achievements
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Proof that I keep learning and showing up consistently.</h2>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Certifications, internships, and leadership roles help show how I approach growth even
            before full-time industry experience. They add trust, initiative, and consistency to my profile.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map(({ title, detail, Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#1cd8d2]">
                <Icon />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
