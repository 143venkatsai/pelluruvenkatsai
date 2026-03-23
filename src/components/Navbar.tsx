"use client";

import { useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";

const navItems = [
  { id: "home", icon: <FaHome />, label: "Home", url: "#home" },
  { id: "about", icon: <FaUser />, label: "About", url: "#about" },
  { id: "skills", icon: <FaBriefcase />, label: "Skills", url: "#skills" },
  { id: "portfolio", icon: <FaProjectDiagram />, label: "Projects", url: "#portfolio" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-max -translate-x-1/2 lg:left-auto lg:right-6 lg:top-1/2 lg:w-auto lg:translate-x-0 lg:-translate-y-1/2">
      <ul className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/75 p-2 shadow-2xl backdrop-blur-xl lg:flex-col">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              aria-label={item.label}
              onClick={() => setActive(item.id)}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-lg transition ${
                active === item.id
                  ? "bg-orange-500 text-slate-950"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
