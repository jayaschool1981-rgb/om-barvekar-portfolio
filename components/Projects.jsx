'use client';
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI Career Companion — Frontend",
      desc: "Frontend of an AI-powered resume analyzer built with React, Vite, and Tailwind CSS. Integrates with Gemini AI backend to extract skills, analyze resumes, and provide ATS optimization feedback.",
      tech: ["React", "Vite", "Tailwind CSS", "Axios"],
      link: "https://github.com/jayaschool1981-rgb/ai-career-companion-frontend",
      live: "https://ai-career-companion-frontend-kufk1wntr.vercel.app/",
      image: "/projects/ai-career-companion.jpg",
    },
    {
      title: "AI Career Companion — Backend",
      desc: "Node.js backend with Express, MongoDB, and Gemini AI integration. Handles authentication (JWT), PDF parsing, resume analysis, and AI-based skill extraction.",
      tech: ["Node.js", "Express", "MongoDB", "Gemini API", "JWT"],
      link: "https://github.com/jayaschool1981-rgb/ai-career-companion-backend",
      image: "/projects/ai-career-companion-backend.jpg",
    },
    {
      title: "Portfolio Dynamic Auth",
      desc: "A dynamic portfolio system with secure JWT authentication, MongoDB backend, and Docker + GitHub Actions CI/CD pipeline. Deployed on Render and Vercel.",
      tech: ["React", "Express.js", "MongoDB", "JWT", "Docker", "Vercel"],
      link: "https://github.com/jayaschool1981-rgb/portfolio-dynamic-auth",
      live: "https://portfolio-dynamic-auth.vercel.app/login",
      image: "/projects/portfolio-dynamic.jpg",
    },
    {
      title: "VybeRide — Smart Ride-Sharing App",
      desc: "A JavaFX-based intelligent ride-sharing application designed with MVC pattern and MySQL integration. Enables real-time ride matching and user authentication.",
      tech: ["Java", "JavaFX", "MySQL", "Maven"],
      link: "https://github.com/jayaschool1981-rgb/VybeRide-JavaFX",
      image: "/projects/vyberide.jpg",
    },
    {
      title: "Om Barvekar Portfolio (Static)",
      desc: "Personal portfolio website built using Next.js and Tailwind CSS. Features smooth animations powered by Framer Motion and fully responsive design.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/jayaschool1981-rgb/om-barvekar-portfolio",
      live: "https://om-barvekar-portfolio.vercel.app/",
      image: "/projects/om-barvekar-portfolio.jpg",
    },
    {
      title: "Real-Time Accident Alert & Detection System",
      desc: "IoT and ML-based accident detection system using Flask backend. Utilizes vibration and tilt sensors to detect accidents and sends real-time alerts via GPS and GSM modules.",
      tech: ["Python", "Flask", "IoT", "ML", "GPS/GSM"],
      link: "https://github.com/jayaschool1981-rgb/accident-alert-server",
      image: "/projects/accident-server.jpeg",
    },
    {
      title: "AI-Based Autonomous Navigation System",
      desc: "An AI-powered robotic navigation model using Raspberry Pi and NVIDIA Jetson Nano. Combines YOLO object detection, lane tracking (OpenCV), ultrasonic sensors, and A* path planning.",
      tech: ["Python", "YOLOv5", "OpenCV", "TensorFlow", "Jetson Nano"],
      link: "https://github.com/jayaschool1981-rgb/AI-Based-Autonomous-Navigation-System",
      image: "/projects/AI-navigation.webp",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-10 text-cyan-300 text-center">
        🚀 Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass bg-slate-900/60 p-5 rounded-2xl border border-violet-400/20 hover:border-cyan-400/40 transition backdrop-blur-xl"
          >
            {/* Project Image */}
            <div className="relative w-full h-56 overflow-hidden rounded-xl mb-5 shadow-lg">
              <img
                src={p.image}
                alt={p.title}
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{p.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-800 px-2 py-1 rounded-md border border-slate-700 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 items-center mt-auto">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:underline"
              >
                View on GitHub →
              </a>

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:underline"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
