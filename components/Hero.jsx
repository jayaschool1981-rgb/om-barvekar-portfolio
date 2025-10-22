'use client';
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "next/image";

export default function Hero() {
  const particlesInit = async (main) => await loadFull(main);

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 40 },
      color: { value: ["#00FFF0", "#A855F7"] },
      links: { enable: true, color: "#00FFF0", opacity: 0.3 },
      move: { enable: true, speed: 1 },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30">
        <Particles init={particlesInit} options={particlesOptions} />
      </div>

      {/* Left Section */}
      <div className="flex-1 relative z-10 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I’m <span className="neon-text">Om Barvekar</span>
        </motion.h1>

        <p className="text-gray-300 text-lg max-w-2xl">
          I build intelligent systems for{" "}
          <span className="font-semibold text-white">real-world impact</span>.<br />
          <span className="text-cyan-400">AI Engineer</span> ·{" "}
          <span className="text-violet-400">Full-Stack Developer</span> · Open-Source Collaborator
        </p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start text-sm text-cyan-300">
          <span className="px-3 py-1 glass">AI Engineer</span>
          <span className="px-3 py-1 glass">Full-Stack Developer</span>
          <span className="px-3 py-1 glass">Open-Source Collaborator</span>
        </div>

        <div className="mt-10 flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Hire Me</a>
          <a href="/ombarvekarCV4.pdf" className="btn-primary" download>Download Resume</a>
        </div>
      </div>

      {/* Right Section - Circular Glowing Photo */}
      <div className="relative z-10 flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glow-circle">
          <Image
            src="/om-barvekar.jpg"
            alt="Om Barvekar"
            width={300}
            height={300}
            className="object-cover rounded-full brightness-125 contrast-110"
            priority
          />
        </div>
      </div>
    </section>
  );
}
