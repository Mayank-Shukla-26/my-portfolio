import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiMail } from "react-icons/fi";
import img1 from "../assets/img1.png";

const GMAIL_COMPOSE =
  "https://mail.google.com/mail/?view=cm&fs=1&to=mayank020040@gmail.com&su=Portfolio%20Inquiry";
const GITHUB_PROFILE = "https://github.com/Mayank-Shukla-26";

const project = {
  title: "WanderLust",
  subtitle: "Full-Stack Listings & Reviews App",
  description:
    "A full-stack property listing platform where users can explore listings, create their own posts, and interact through reviews in a complete end-to-end flow.",
  stack: ["Node.js", "Express", "MongoDB", "Mongoose", "Passport.js", "EJS"],
  highlights: [
    "Built secure user login and session handling for authentication and protected routes.",
    "Added CRUD operations for listings so users can create, edit, and manage their content.",
    "Implemented nested reviews to make listing pages feel more complete and interactive.",
    "Used MongoDB Atlas and Mongoose for data modeling, storage, and relationships.",
  ],
  learned:
    "This project taught me how authentication, database relationships, CRUD workflows, and deployment come together in one real application.",
  liveLink: "https://major-project-hk14.onrender.com",
  image: img1,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-6 md:px-10 md:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-8 h-56 w-56 rounded-full bg-[#302b63]/30 blur-[130px] sm:left-10 sm:h-60 sm:w-60" />
        <div className="absolute right-8 bottom-10 h-52 w-52 rounded-full bg-[#1cd8d2]/14 blur-[120px] sm:right-10 sm:h-60 sm:w-60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1cd8d2]">
              Featured Project
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              One project that best represents my current skills.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              I am focusing on quality over quantity here. This is the project that best shows my
              full-stack learning, backend understanding, and ability to build a complete product
              flow from login to content management.
            </p>
          </div>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <FiGithub />
            View GitHub Profile
          </a>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-[1.8rem] border border-white/10"
          style={{ background: "linear-gradient(135deg, #0d4d3d 0%, #145c51 45%, #0f1e22 100%)" }}
        >
          <div className="grid gap-7 p-5 sm:p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/65">
                {project.subtitle}
              </p>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 space-y-3">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/18 px-4 py-3"
                  >
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1cd8d2]" />
                    <p className="text-sm leading-relaxed text-white/88 sm:text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-dashed border-white/18 bg-black/18 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1cd8d2]">
                  What I Learned
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/82 sm:text-base">
                  {project.learned}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200"
                >
                  Live Preview
                  <FiArrowUpRight />
                </a>
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/18"
                >
                  <FiGithub />
                  Source on GitHub
                </a>
                <a
                  href={GMAIL_COMPOSE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/18"
                >
                  <FiMail />
                  Email Me
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25 p-3 shadow-2xl sm:rounded-[1.7rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-[1.1rem] bg-black/30 object-contain sm:rounded-[1.2rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
