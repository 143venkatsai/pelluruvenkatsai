"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiencePoints = [
  "Trains students in Full Stack Web Development at Koushik Software Solutions.",
  "Builds user-friendly interfaces with React, Next.js, Tailwind CSS, and JavaScript.",
  "Ships backend-integrated projects with Node.js, Express, MongoDB, and REST APIs.",
];

export default function About() {
  return (
    <section id="about" className="section-shell glass-panel">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-br from-orange-400/25 to-sky-400/20 blur-sm" />
          <Image
            src="/Images/ProfileImage.jpg"
            alt="Pelluru Venkat Sai"
            width={420}
            height={480}
            className="relative h-full w-full rounded-[2rem] border border-slate-800 object-cover shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="eyebrow">About me</span>
          <h2 className="section-title font-[var(--font-display)]">
            Full stack developer focused on practical products and clean delivery.
          </h2>
          <p className="text-muted mt-5 max-w-2xl text-sm leading-7 sm:text-base">
            I enjoy turning requirements into responsive, production-ready web
            experiences. My work usually starts with intuitive UI design and
            finishes with API integration, data handling, and the small details
            that make a product feel reliable.
          </p>
          <div className="mt-8 grid gap-4">
            {experiencePoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-slate-800/80 bg-slate-950/45 p-4 text-sm leading-7 text-slate-300"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
