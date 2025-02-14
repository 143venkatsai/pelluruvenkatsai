"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col mb-10" id="about">
      <h1 className="text-center sm:mb-10 mb-5 text-xl text-green-400 font-semibold">
        About Me
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <motion.div
          className="sm:w-[300px] sm:h-[300px] mx-auto sm:mx-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img
            src="https://res.cloudinary.com/djk1yczb2/image/upload/v1739163472/WhatsApp_Image_2025-02-10_at_10.26.16_4727fe8b_pv3zqz.jpg"
            alt="venkat_img"
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
          <p className="sm:mt-0 mt-10">
            I'm a Full Stack Developer with specializing in JavaScript, React to
            build clean, responsive web applications. I focus on crafting smooth
            user interfaces and integrating APIs efficiently.
          </p>
          <p className="mt-5">
            Currently, I train students in Full Stack Web Development at Koushik
            Software Solutions. I've developed projects like a personal notes
            manager and a YouTube-inspired Nxt Watch platform.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
