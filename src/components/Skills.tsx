"use client";
import { useRef } from "react";

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
  { id: 1, icon: <FaHtml5 /> },
  { id: 2, icon: <FaCss3Alt /> },
  { id: 3, icon: <FaBootstrap /> },
  { id: 4, icon: <FaJsSquare /> },
  { id: 5, icon: <BiLogoTypescript /> },
  { id: 6, icon: <RiTailwindCssFill /> },
  { id: 7, icon: <FaReact /> },
  { id: 8, icon: <TbBrandNextjs /> },
  { id: 9, icon: <FaNodeJs /> },
  { id: 10, icon: <SiExpress /> },
  { id: 11, icon: <SiSqlite /> },
  { id: 12, icon: <BiLogoMongodb /> },
  { id: 13, icon: <FaGitAlt /> },
  { id: 14, icon: <FaGithub /> },
  { id: 15, icon: <FaPython /> },
];

// Duplicate skills array to create an infinite loop
const duplicatedSkills = [...skills, ...skills];

export default function Skills() {
  const scrollRef = useRef(null);

  return (
    <div id="skills" className="mb-10 mt-15">
      <h1 className="text-center sm:mb-10 mb-10 text-2xl text-green-400 font-semibold">
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
