import { motion } from "framer-motion";
import { FiBookOpen, FiMapPin, FiStar } from "react-icons/fi";

const timeline = [
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Specialization in Artificial Intelligence and Machine Learning",
    place: "G. L. Bajaj Institute of Technology and Management, Greater Noida",
    period: "2023 - 2027",
    value: "CGPA 8.0",
  },
  {
    title: "Science Intermediate",
    subtitle: "R.S.S International School, Noida",
    place: "Uttar Pradesh",
    period: "2021 - 2022",
    value: "76.8%",
  },
  {
    title: "Science High School",
    subtitle: "R.S.S International School, Noida",
    place: "Uttar Pradesh",
    period: "2019 - 2020",
    value: "68.6%",
  },
];

const highlights = [
  { label: "Degree", value: "B.Tech CSE-AIML", Icon: FiBookOpen },
  { label: "Current Score", value: "CGPA 8.0", Icon: FiStar },
  { label: "Location", value: "Greater Noida", Icon: FiMapPin },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-6 md:px-10 md:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-8 h-52 w-52 rounded-full bg-[#1cd8d2]/15 blur-[120px] sm:left-10 sm:h-60 sm:w-60" />
        <div className="absolute right-8 bottom-8 h-56 w-56 rounded-full bg-[#302b63]/30 blur-[140px] sm:right-12 sm:h-64 sm:w-64" />
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
            Education
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Academic background that supports my development work.</h2>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            As a student developer, my academic foundation is a big part of my story. It gives
            recruiters context around where I am now, how I am growing, and the environment where
            I built my technical base.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Snapshot
            </p>
            <div className="mt-6 space-y-4">
              {highlights.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#1cd8d2]">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/55">{label}</p>
                    <p className="mt-1 text-base font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#1cd8d2] sm:text-base">{item.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                      {item.place}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-left sm:items-end sm:text-right">
                    <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/90">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-[#1cd8d2]/25 bg-[#1cd8d2]/10 px-4 py-2 text-sm font-semibold text-[#1cd8d2]">
                      {item.value}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
