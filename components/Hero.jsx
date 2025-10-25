'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "next/image";
import Typewriter from "typewriter-effect"; // 👈 add this library

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

  // 🖼 Image swapping logic
  const images = ["/om-barvekar.jpg", "/profile2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
      {/* 🌌 Background Particles */}
      <div className="absolute inset-0 opacity-30">
        <Particles init={particlesInit} options={particlesOptions} />
      </div>

      {/* 🧠 Left Section */}
      <div className="flex-1 relative z-10 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I’m <span className="neon-text">Om Barvekar</span>
        </motion.h1>

        {/* 🖋 Typing Effect */}
        <div className="text-gray-300 text-xl h-16 mb-4">
          <Typewriter
            options={{
              strings: [
                "I build intelligent systems for real-world impact.",
                "I design full-stack AI-driven applications.",
                "I connect Machine Learning with scalable cloud systems.",
                "I turn innovative ideas into deployed digital products.",
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 25,
            }}
          />
        </div>

        {/* 🌍 Tagline */}
        <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
          As an <span className="text-cyan-400 font-semibold">AI Engineer</span> and{" "}
          <span className="text-violet-400 font-semibold">Full-Stack Developer</span>, 
          I specialize in integrating Machine Learning models, cloud infrastructure, 
          and scalable web systems to create real-world automation and insights.
          I’m passionate about turning data into impactful products.
        </p>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start text-sm text-cyan-300">
          <span className="px-3 py-1 glass">AI Engineer</span>
          <span className="px-3 py-1 glass">Full-Stack Developer</span>
          <span className="px-3 py-1 glass">Cloud + DevOps Enthusiast</span>
          <span className="px-3 py-1 glass">Open-Source Collaborator</span>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Hire Me</a>
          <a href="/ombarvekarCV7.pdf" className="btn-primary" download>Download Resume</a>
        </div>
      </div>

      {/* 🧍‍♂️ Right Section - Animated Circular Profile */}
      <div className="relative z-10 flex-1 flex justify-center">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glow-circle">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Om Barvekar"
              width={300}
              height={300}
              className="object-cover rounded-full brightness-110 contrast-110"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
