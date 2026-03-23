"use client";

import { Typewriter } from "react-simple-typewriter";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";

const highlights = [
  "Responsive product interfaces",
  "MERN stack applications",
  "Freelance client delivery",
];

const stats = [
  { label: "Projects built", value: "8+" },
  { label: "Core stack", value: "React, Next.js, Node.js" },
  { label: "Based in", value: "Nellore, AP" },
];

export default function Home() {
  return (
    <section
      id="home"
      className="section-shell glass-panel relative overflow-hidden pt-12 sm:pt-16"
    >
      <div className="absolute -left-24 top-8 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <span className="eyebrow">Available for full-time and freelance work</span>
          <p className="mb-4 flex items-center gap-2 text-sm text-slate-300">
            <FiMapPin className="text-orange-300" />
            Pelluru Venkat Sai
          </p>
          <h1 className="font-[var(--font-display)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building web products with
            <span className="gradient-text"> sharp UI and solid backend flow.</span>
          </h1>
          <div className="mt-5 text-base text-slate-300 sm:text-lg">
            <Typewriter
              words={[
                "Frontend Developer",
                "Full Stack Developer",
                "Freelance Web Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={55}
              delaySpeed={1200}
            />
          </div>
          <p className="text-muted mt-6 max-w-2xl text-sm leading-7 sm:text-base">
            I build polished, responsive applications with React, Next.js, Node.js,
            and modern UI systems. My focus is making products feel clean, fast,
            and easy to use across every screen size.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Pelluru-Venkat-Sai-Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
            >
              <FiDownload />
              Download Resume
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/40 hover:bg-slate-900/80"
            >
              View Projects
              <FiArrowRight />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700/70 bg-slate-950/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="hover-lift rounded-[1.5rem] border border-slate-800/80 bg-slate-950/55 p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-100 sm:text-xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
