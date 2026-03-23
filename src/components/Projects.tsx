"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";

type Project = {
  id: number;
  name: string;
  image?: string;
  gitHub?: string;
  liveDemo?: string;
  summary: string;
  stack: string[];
  badge: string;
};

const featuredProjects: Project[] = [
  {
    id: 1,
    name: "Nxt Watch",
    image: "/Images/NxtWatch.png",
    gitHub: "https://github.com/143venkatsai/nxt-watch-updated-repo.git",
    liveDemo: "https://github.com/143venkatsai/nxt-watch-updated-repo.git",
    summary:
      "A YouTube-inspired platform with video listing, routing, theming, and an app-like browsing experience.",
    stack: ["React", "Routing", "Responsive UI"],
    badge: "Frontend clone",
  },
  {
    id: 2,
    name: "Notes Manager",
    image: "/Images/NotesManager.png",
    gitHub:
      "https://github.com/143venkatsai/personal-notes-manager-frontend.git",
    liveDemo: "https://personal-notes-manager-frontend-nzlc.vercel.app/",
    summary:
      "A personal productivity app for organizing notes with a clean dashboard and fast interactions.",
    stack: ["React", "Forms", "CRUD"],
    badge: "Productivity app",
  },
  {
    id: 3,
    name: "Nxt Trendz",
    image: "/Images/NxtTrendz.png",
    gitHub: "https://github.com/143venkatsai/react-nxtTrndsAppUpdated.git",
    liveDemo: "https://venkattrendzapp.ccbp.tech/",
    summary:
      "An e-commerce experience with product browsing, authentication flow, and responsive layouts.",
    stack: ["React", "API integration", "Auth"],
    badge: "E-commerce",
  },
  {
    id: 4,
    name: "Jobby App",
    image: "/Images/JobbyApp.png",
    gitHub: "https://github.com/143venkatsai/react-jobby-app-assignment-5.git",
    liveDemo: "https://jobbyvenkatapp.ccbp.tech/",
    summary:
      "A jobs board application with filters, search, protected routes, and detail views.",
    stack: ["React", "JWT auth", "Search"],
    badge: "Jobs platform",
  },
  {
    id: 5,
    name: "Weather App",
    image: "/Images/WeatherDashboard.png",
    gitHub: "https://github.com/143venkatsai/weather-dashboard.git",
    liveDemo: "https://weather-dashboard-67jq.vercel.app/",
    summary:
      "A live weather dashboard focused on quick lookup, readable forecasts, and practical UI states.",
    stack: ["React", "External API", "Dashboard"],
    badge: "Utility app",
  },
  {
    id: 6,
    name: "Food Store",
    image: "/Images/FoodMunch.png",
    gitHub: "https://github.com/143venkatsai/foodMunch.git",
    liveDemo: "https://venkatmenupage.ccbp.tech/",
    summary:
      "A food ordering and landing experience with polished presentation and conversion-focused sections.",
    stack: ["HTML", "CSS", "Responsive UI"],
    badge: "Landing page",
  },
];

const freelanceProjects: Project[] = [
  {
    id: 7,
    name: "Real Estate Project",
    image: "/Images/RealstateProject.png",
    liveDemo: "https://teluguproperty.in",
    summary:
      "A client-facing real estate web experience designed to showcase listings, highlight trust, and make property discovery easier for users.",
    stack: ["UI/UX", "Responsive design", "Client delivery"],
    badge: "Freelancing project",
  },
];

function ProjectCard({
  project,
  freelance = false,
}: {
  project: Project;
  freelance?: boolean;
}) {
  return (
    <motion.article
      className="hover-lift overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-slate-950/50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      {project.image ? (
        <div className="relative h-52 overflow-hidden border-b border-slate-800/80">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>
      ) : (
        <div className="relative flex h-52 items-end overflow-hidden border-b border-slate-800/80 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_32%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.88))] p-6">
          <div className="max-w-xs">
            <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              Client work
            </span>
            <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-white">
              Modern real estate experience
            </h3>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
              {project.badge}
            </span>
            <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-white">
              {project.name}
            </h3>
          </div>
          {freelance ? (
            <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-3 py-1 text-xs text-slate-400">
              <FiLock />
              Private build
            </span>
          ) : null}
        </div>

        <p className="text-muted mt-4 text-sm leading-7">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.gitHub ? (
            <a
              href={project.gitHub}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              <FiGithub />
              GitHub
            </a>
          ) : null}
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Live Demo
              <FiArrowUpRight />
            </a>
          ) : freelance ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-200">
              Client project available on request
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="portfolio" className="section-shell glass-panel">
      <span className="eyebrow">Portfolio</span>
      <div className="flex flex-col gap-10">
        <div className="max-w-3xl">
          <h2 className="section-title font-[var(--font-display)]">
            Selected builds and a dedicated section for freelance work.
          </h2>
          <p className="text-muted mt-4 text-sm leading-7 sm:text-base">
            I've separated product-style portfolio pieces from client work so
            the experience feels cleaner and easier to understand. The real
            estate project now stands on its own as a freelancing engagement.
          </p>
        </div>

        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">
              Featured Projects
            </h3>
            <span className="text-sm text-slate-400">
              {featuredProjects.length} builds
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">
              Freelancing Projects
            </h3>
            <span className="text-sm text-slate-400">
              {freelanceProjects.length} client project
            </span>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {freelanceProjects.map((project) => (
              <ProjectCard key={project.id} project={project} freelance />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
