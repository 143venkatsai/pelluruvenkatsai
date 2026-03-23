"use client";

import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiSqlite } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Responsive interfaces, reusable components, and polished user experiences built for mobile and desktop.",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    title: "Backend",
    description:
      "Server-side logic, API integration, and data handling for complete full stack applications.",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Workflow",
    description:
      "Version control and delivery tools that help keep projects organized and production-ready.",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell glass-panel overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:pr-6">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title font-[var(--font-display)]">
            A stack built for modern product work.
          </h2>
          <p className="text-muted mt-4 max-w-xl text-sm leading-7 sm:text-base">
            I work across UI, API integration, and deployment-ready application
            structure. The goal is always the same: deliver something fast,
            clear, and maintainable.
          </p>
        </div>

        <div className="grid gap-4 pr-0 sm:pr-1">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="w-full rounded-[1.5rem] border border-slate-800/80 bg-slate-950/45 p-5 sm:p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
              <p className="text-muted mt-3 text-sm leading-7">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-sm text-slate-300"
                  >
                    <span className="shrink-0 text-orange-300">{item.icon}</span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
