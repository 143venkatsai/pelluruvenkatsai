"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Nxt Watch - YT Clone",
    image: "/Images/NxtWatch.png",
    gitHub: "https://github.com/143venkatsai/nxt-watch-updated-repo.git",
    liveDemo: "https://github.com/143venkatsai/nxt-watch-updated-repo.git",
  },
  {
    id: 2,
    name: "Notes Manager",
    image: "/Images/NotesManager.png",
    gitHub:
      "https://github.com/143venkatsai/personal-notes-manager-frontend.git",
    liveDemo: "https://personal-notes-manager-frontend-nzlc.vercel.app/",
  },
  {
    id: 3,
    name: "Nxt Trendz - E-Commerce",
    image: "/Images/NxtTrendz.png",
    gitHub: "https://github.com/143venkatsai/react-nxtTrndsAppUpdated.git",
    liveDemo: "https://venkattrendzapp.ccbp.tech/",
  },
  {
    id: 4,
    name: "Jobby App - Jobs board",
    image: "/Images/JobbyApp.png",
    gitHub: "https://github.com/143venkatsai/react-jobby-app-assignment-5.git",
    liveDemo: "https://jobbyvenkatapp.ccbp.tech/",
  },
  {
    id: 5,
    name: "Weather App - Live",
    image: "/Images/WeatherDashboard.png",
    gitHub: "https://github.com/143venkatsai/weather-dashboard.git",
    liveDemo: "https://weather-dashboard-67jq.vercel.app/",
  },
  {
    id: 6,
    name: "Food Store",
    image: "/Images/FoodMunch.png",
    gitHub: "https://github.com/143venkatsai/foodMunch.git",
    liveDemo: "https://venkatmenupage.ccbp.tech/",
  },
];

export default function Projects() {
  return (
    <div className="my-20" id="portfolio">
      <h1 className="text-center sm:mb-10 mb-10 text-2xl text-green-400 font-semibold">
        Portfolio
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            className="border border-green-400 p-4 rounded-lg shadow-lg hover:green-blue-500 hover:shadow-md transition-shadow duration-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={250}
              className="h-[180px] sm:h-[180px] w-full rounded"
            />
            <h2 className="text-center text-white text-md font-bolder py-3">
              {item.name}
            </h2>
            <div className="flex justify-center gap-5">
              <a
                href={item.gitHub}
                target="_blank"
                className="text-green-400 border border-green-400 px-3 py-2 rounded hover:bg-slate-100 transition-all duration-100"
              >
                GitHub
              </a>
              <a
                href={item.liveDemo}
                target="_blank"
                className="bg-green-400 px-3 py-2 rounded hover:bg-slate-100 transition-all duration-100 hover:text-green-400"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
