"use client";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: <FaHome />, url: "#home" },
    { id: "about", icon: <FaUser />, url: "#about" },
    { id: "skills", icon: <FaBriefcase />, url: "#skills" },
    { id: "portfolio", icon: <FaProjectDiagram />, url: "#portfolio" },
    { id: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed md:top-1/2 md:right-5 md:transform md:-translate-y-1/2 bottom-5 left-1/2 md:left-auto md:translate-x-0 -translate-x-1/2 z-50">
      <ul className="bg-gray-800/50 backdrop-blur border-2 border-gray-600 rounded-full p-2 flex md:flex-col gap-2 text-white shadow-lg">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`rounded-full p-2 flex items-center justify-center text-xl cursor-pointer transition-all duration-300 ${
              active === item.id
                ? "bg-green-700 text-white"
                : "hover:bg-gray-600"
            }`}
            onClick={() => setActive(item.id)}
            href={item.url}
          >
            {item.icon}
          </a>
        ))}
      </ul>
    </nav>
  );
}
