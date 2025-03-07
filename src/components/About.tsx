"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col mb-10" id="about">
      <h1 className="text-center sm:mb-10 mb-5 text-2xl text-green-400 font-semibold">
        About Me
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <motion.div
          className="sm:w-[400px] sm:h-[400px] mx-auto sm:mx-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/Images/ProfileImage.jpg"
            alt="venkat_img"
            width={350}
            height={350}
            className="rounded-3xl w-full h-full shadow-2xl transition-all duration-500 filter grayscale hover:grayscale-0"
          />
        </motion.div>
        <motion.div
          className="text-slate-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="sm:mt-0 mt-10 text-md">
            I&apos;m a Full Stack Developer with specializing in JavaScript,
            React to build clean, responsive web applications. I focus on
            crafting smooth user interfaces and integrating APIs efficiently.
          </p>
          <p className="mt-5 text-md">
            Currently, I train students in Full Stack Web Development at Koushik
            Software Solutions. I&apos;ve developed projects like a personal
            notes manager and a YouTube-inspired Nxt Watch platform.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
