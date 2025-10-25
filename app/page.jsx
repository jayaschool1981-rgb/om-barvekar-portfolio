'use client';

import Hero from "../components/Hero";
import About from "../components/about";   // ✅ Keep this (your expanded About section)
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      {/* 🧠 Hero Section */}
      <Hero />

      {/* 👇 Full About Me Section (from About.jsx) */}
      <About />

      {/* 💡 Skills Section */}
      <Skills />

      {/* 🚀 Projects Section */}
      <Projects />

      {/* 🎓 Education Section */}
      <Education />

      {/* 📞 Contact Section */}
      <Contact />
    </>
  );
}
