import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiCheck, FiCopy, FiMail, FiPhoneCall, FiSend } from "react-icons/fi";

const EMAIL = "mayank020040@gmail.com";
const PHONE = "+91 9971856228";
const WHATSAPP_LINK = "https://wa.me/919971856228";
const GMAIL_COMPOSE =
  "https://mail.google.com/mail/?view=cm&fs=1&to=mayank020040@gmail.com&su=Portfolio%20Inquiry";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactLinks = [
  {
    title: "Email",
    value: EMAIL,
    href: GMAIL_COMPOSE,
    Icon: FiMail,
  },
  {
    title: "Phone / WhatsApp",
    value: PHONE,
    href: WHATSAPP_LINK,
    Icon: FaWhatsapp,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/mayank020040",
    href: "https://linkedin.com/in/mayank020040",
    Icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "github.com/Mayank-Shukla-26",
    href: "https://github.com/Mayank-Shukla-26",
    Icon: FaGithub,
  },
  {
    title: "X / Twitter",
    value: "x.com/mayank020040",
    href: "https://x.com/mayank020040",
    Icon: FaXTwitter,
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [copied, setCopied] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState(initialForm);

  const isEmailJsConfigured =
    Boolean(EMAILJS_SERVICE_ID) && Boolean(EMAILJS_TEMPLATE_ID) && Boolean(EMAILJS_PUBLIC_KEY);

  const copyText = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  };

  const buildComposeUrl = () => {
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: EMAIL,
      su: form.subject || "Portfolio Inquiry",
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    });

    return `https://mail.google.com/mail/?${params.toString()}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: "error", message: "Please fill in all fields before sending." });
      return;
    }

    if (!isEmailJsConfigured) {
      window.open(buildComposeUrl(), "_blank", "noopener,noreferrer");
      setStatus({
        type: "info",
        message:
          "Opened Gmail compose with your message. Add EmailJS keys later if you want direct in-site sending.",
      });
      return;
    }

    try {
      setIsSending(true);
      setStatus({ type: "", message: "" });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: "Mayank Shukla",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent successfully. I will get back to you soon." });
    } catch {
      setStatus({
        type: "error",
        message:
          "The message could not be sent automatically right now. You can still use the email or WhatsApp options beside the form.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const statusStyles = {
    success: "border-green-400/30 bg-green-400/10 text-green-200",
    error: "border-red-400/30 bg-red-400/10 text-red-200",
    info: "border-[#1cd8d2]/30 bg-[#1cd8d2]/10 text-[#c9fffb]",
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-6 md:px-10 md:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-12 left-8 h-48 w-48 rounded-full bg-[#1cd8d2]/20 blur-[120px] sm:left-10 sm:h-52 sm:w-52" />
        <div className="absolute right-8 bottom-10 h-56 w-56 rounded-full bg-[#302b63]/35 blur-[140px] sm:right-10 sm:h-64 sm:w-64" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <span className="inline-flex rounded-full border border-[#1cd8d2]/35 bg-[#1cd8d2]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1cd8d2]">
            Open to internships and junior roles
          </span>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#1cd8d2]">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Let&apos;s connect directly.</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            If you&apos;re hiring, collaborating, or want to discuss a project, you can reach me
            directly by email, WhatsApp, LinkedIn, or the form below.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Email Me
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              WhatsApp Me
            </a>
            <a
              href="/Mayank_Shukla_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => copyText(EMAIL, "email")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {copied === "email" ? <FiCheck /> : <FiCopy />}
              {copied === "email" ? "Email Copied" : "Copy Email"}
            </button>
            <button
              type="button"
              onClick={() => copyText(PHONE, "phone")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {copied === "phone" ? <FiCheck /> : <FiCopy />}
              {copied === "phone" ? "Number Copied" : "Copy Number"}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#1cd8d2]/40"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#1cd8d2]/40"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#1cd8d2]/40"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about the role, project, or collaboration."
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#1cd8d2]/40"
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] px-6 py-3 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiSend />
                {isSending ? "Sending..." : "Send Message"}
              </button>
              <p className="text-sm text-white/55">
                {isEmailJsConfigured
                  ? "Form is configured for direct in-site sending."
                  : "Form will open Gmail compose until EmailJS keys are added."}
              </p>
            </div>

            {status.message ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                  statusStyles[status.type] || statusStyles.info
                }`}
              >
                {status.message}
              </div>
            ) : null}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-4"
        >
          {contactLinks.map(({ title, value, href, Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#1cd8d2]/40 hover:bg-white/10 sm:p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#1cd8d2] transition group-hover:scale-105">
                <Icon />
              </div>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">{title}</p>
                <p className="mt-1 break-all text-base font-medium text-white sm:text-lg">{value}</p>
              </div>
            </a>
          ))}

          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Availability</p>
            <p className="mt-2 text-base leading-relaxed text-gray-300">
              Available for internships, junior roles, freelance work, and collaborative builds
              where I can grow while contributing to real product work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
