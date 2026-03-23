"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const menuList = [
  { id: 1, name: "Home", url: "#home" },
  { id: 2, name: "About", url: "#about" },
  { id: 3, name: "Skills", url: "#skills" },
  { id: 4, name: "Portfolio", url: "#portfolio" },
  { id: 5, name: "Contact", url: "#contact" },
];

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/pelluru-venkat-sai-9881aa245/",
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/143venkatsai",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/pelluruvenkat/",
  },
  {
    id: 4,
    name: "X",
    icon: <FaSquareXTwitter />,
    url: "https://x.com/venkat_pelluru?s=09",
  },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-10">
      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/70 px-6 py-8 backdrop-blur-xl sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Pelluru Venkat Sai
            </p>
            <h2 className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-white">
              Full Stack Developer
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {menuList.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-700 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            Crafted with a refreshed layout focused on clarity, color balance, and better project storytelling.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="rounded-full border border-slate-800 bg-slate-900/80 p-3 text-slate-300 transition hover:border-orange-400/40 hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
