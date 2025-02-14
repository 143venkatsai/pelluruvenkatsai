"use client";
import { useRef } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiSqlite } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt /> },
  { id: 3, name: "Bootstrap", icon: <FaBootstrap /> },
  { id: 4, name: "JavaScript", icon: <FaJsSquare /> },
  { id: 5, name: "TypeScript", icon: <BiLogoTypescript /> },
  { id: 6, name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { id: 7, name: "React.js", icon: <FaReact /> },
  { id: 8, name: "Next.js", icon: <TbBrandNextjs /> },
  { id: 9, name: "Node.js", icon: <FaNodeJs /> },
  { id: 10, name: "Express.js", icon: <SiExpress /> },
  { id: 11, name: "SQLite", icon: <SiSqlite /> },
  { id: 12, name: "MongoDB", icon: <BiLogoMongodb /> },
  { id: 13, name: "Git", icon: <FaGitAlt /> },
  { id: 14, name: "GitHub", icon: <FaGithub /> },
  { id: 15, name: "Python", icon: <FaPython /> },
];

// Duplicate skills array to create an infinite loop
const duplicatedSkills = [...skills, ...skills];

export default function Skills() {
  const scrollRef = useRef(null);

  return (
    <div id="skills" className="mb-10">
      <h1 className="text-center sm:mb-10 mb-10 text-xl text-green-400 font-semibold">
        Skills
      </h1>
      <div className="relative overflow-hidden w-full">
        {/* Scrolling Wrapper */}
        <div ref={scrollRef} className="flex w-max animate-marquee hover:pause">
          {duplicatedSkills.map((item, index) => (
            <div key={index} className="px-5">
              <div className="flex items-center gap-10">
                <span className="text-6xl text-green-600">{item.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
