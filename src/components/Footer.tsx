"use client";

import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";

const menuList = [
  {
    id: 1,
    name: "Home",
    url: "#home",
  },
  {
    id: 2,
    name: "About",
    url: "#about",
  },
  {
    id: 3,
    name: "Skills",
    url: "#skills",
  },
  {
    id: 4,
    name: "Portfolio",
    url: "#portfolio",
  },
  {
    id: 5,
    name: "Contact",
    url: "#contact",
  },
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
    name: "Github",
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
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    url: "https://x.com/venkat_pelluru?s=09",
  },
];

export default function Footer() {
  return (
    <footer className="footer bg-green-500 p-10">
      <div className="container mx-auto p-4">
        <motion.div
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {menuList.map((menuItem) => (
            <a
              key={menuItem.id}
              href={menuItem.url}
              className="text-green-950 hover:text-slate-100 transition-all duration-100"
            >
              {menuItem.name}
            </a>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center mt-7 gap-5 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.id}
              href={socialLink.url}
              target="_blank"
              className="bg-green-950 text-green-400 text-lg p-1.5 rounded hover:text-white transition-all transform hover:scale-125 duration-200"
            >
              {socialLink.icon}
            </a>
          ))}
        </motion.div>
      </div>
      <motion.p
        className="flex justify-center text-xs mt-3 mb-20 sm:mb-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Copyright <FaRegCopyright className="relative text-xs mx-1" /> Pelluru
        Venkat Sai all rights reserved.
      </motion.p>
    </footer>
  );
}
