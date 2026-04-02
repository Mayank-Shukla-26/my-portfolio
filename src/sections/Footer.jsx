const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Strengths", href: "#strengths" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white md:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-bold">Mayank Shukla</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Student developer building modern web projects and looking for opportunities to grow,
            contribute, and learn with a strong team.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-300">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-[#1cd8d2]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 Mayank Shukla. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, Framer Motion, and EmailJS-ready contact flow.</p>
      </div>
    </footer>
  );
}
