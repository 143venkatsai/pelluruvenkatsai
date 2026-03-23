"use client";

import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    id: 1,
    icon: <MdEmail />,
    label: "Email",
    value: "venkatsaipelluru@gmail.com",
    href: "mailto:venkatsaipelluru@gmail.com",
  },
  {
    id: 2,
    icon: <IoLogoWhatsapp />,
    label: "WhatsApp",
    value: "+91 9705441781",
    href: "https://wa.me/919705441781",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    label: "Location",
    value: "Nellore, Andhra Pradesh",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell glass-panel">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title font-[var(--font-display)]">
            Let&apos;s build something clean, fast, and useful.
          </h2>
          <p className="text-muted mt-4 max-w-xl text-sm leading-7 sm:text-base">
            Reach out for frontend roles, full stack opportunities, or freelance
            projects. I&apos;m especially interested in product work that values
            thoughtful UI and smooth user experience.
          </p>
          <div className="mt-8 space-y-4">
            {contactDetails.map((contact) => {
              const content = (
                <div className="flex items-center gap-4 rounded-[1.5rem] border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-slate-700">
                  <span className="rounded-2xl bg-orange-400/10 p-3 text-xl text-orange-300">
                    {contact.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {contact.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-200 sm:text-base">
                      {contact.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.href ? (
                    <a href={contact.href} target="_blank" rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="rounded-[2rem] border border-slate-800/80 bg-slate-950/55 p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Quick introduction
            </p>
            <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-white">
              Share your idea or opportunity
            </h3>
          </div>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-400/40"
            />
            <input
              type="email"
              placeholder="Your email"
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-400/40"
            />
            <textarea
              placeholder="Tell me about the role or project"
              rows={6}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-orange-400/40"
            />
            <a
              href="mailto:venkatsaipelluru143@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
            >
              Send via Email
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
