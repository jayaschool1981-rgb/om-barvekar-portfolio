'use client';

import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 md:px-12 py-24 text-center md:text-left"
    >
      {/* 🧠 Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-white text-center md:text-left"
      >
        About Me
      </motion.h2>

      {/* 💬 Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6 text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto md:mx-0"
      >
        <p>
          Hi, I'm <span className="text-cyan-400 font-semibold">Om Barvekar</span> — 
          an <span className="text-violet-400 font-semibold">AI Engineer</span> and{" "}
          <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> 
          passionate about building intelligent, scalable, and future-ready digital systems.
        </p>

        <p>
          I specialize in combining{" "}
          <span className="text-cyan-300 font-semibold">Machine Learning</span>,{" "}
          <span className="text-cyan-300 font-semibold">Cloud Infrastructure</span>, and{" "}
          <span className="text-cyan-300 font-semibold">modern web technologies</span>{" "}
          to create impactful, real-world solutions — from{" "}
          AI-powered analytics to IoT-driven safety automation.
        </p>

        <p>
          Some of my flagship projects include{" "}
          <span className="text-emerald-400 font-semibold">AI Career Companion</span> — 
          an intelligent resume analyzer built using Gemini AI, and{" "}
          <span className="text-emerald-400 font-semibold">Real-Time Accident Detection</span> — 
          an ML + IoT-based safety system integrating GSM, GPS, and smart sensors.
        </p>

        <p>
          My mission is to engineer systems that not only solve problems but also
          inspire innovation — merging artificial intelligence with real-world functionality.
        </p>

        <div className="pt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#projects" className="btn-primary">
            Explore My Projects
          </a>
          <a href="#contact" className="btn-outline">
            Let’s Collaborate
          </a>
        </div>
      </motion.div>
    </section>
  );
}
