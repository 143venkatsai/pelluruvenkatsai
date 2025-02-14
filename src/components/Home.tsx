"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center mt-20 mb-20"
      id="home"
    >
      <p className="text-sm text-slate-400 mb-3">Hello, I&apos;m</p>
      <h1 className="text-4xl text-white font-bold">Pelluru Venkat Sai</h1>
      <div className="text-sm text-slate-400 mt-2 flex justify-center w-full">
        <Typewriter
          words={[
            "FRONTEND DEVELOPER",
            "BACKEND DEVELOPER",
            "FULL STACK DEVELOPER",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="mt-8 flex gap-5">
        <a
          href="https://drive.google.com/uc?export=download&id=1wPHv8WB8RXUXXeMR5mmAfGxHNko61P0q"
          className="border border-green-400 text-green-400 text-sm py-3 px-5 rounded"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="bg-green-600 text-blue-950 text-sm py-3 px-5 rounded"
        >
          Let&apos;s Connect
        </a>
      </div>
    </div>
  );
}
