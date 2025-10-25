'use client';
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaDocker,
  FaServer,
  FaBrain,
  FaMicrochip
} from "react-icons/fa";
import {
  SiMongodb,
  SiTensorflow,
  SiKeras,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiFlask,
  SiNextdotjs,
  SiTailwindcss,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiYolo
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "Artificial Intelligence & ML",
      icon: <FaBrain size={26} />,
      desc: "Machine learning, deep learning, TensorFlow, Keras, YOLO, OpenCV, model evaluation, and real-time AI applications."
    },
    {
      name: "Python",
      icon: <FaPython size={26} />,
      desc: "Scripting, Flask backend, data pipelines, automation, and ML model integration with IoT devices."
    },
    {
      name: "Java & JavaFX",
      icon: <FaJava size={26} />,
      desc: "OOP, GUI applications, MVC pattern, MySQL integration, and backend logic development."
    },
    {
      name: "React.js",
      icon: <FaReact size={26} />,
      desc: "Modern frontend UI with Hooks, Vite, routing, Framer Motion, Tailwind CSS, and responsive design."
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={26} />,
      desc: "Static & server-rendered web apps with optimized performance and SEO-friendly structure."
    },
    {
      name: "Node.js & Express.js",
      icon: <FaNodeJs size={26} />,
      desc: "Building REST APIs, middleware, JWT auth, file uploads, and backend logic integration."
    },
    {
      name: "MongoDB & Mongoose",
      icon: <SiMongodb size={26} />,
      desc: "Schema design, NoSQL queries, aggregations, indexing, and Atlas cloud integration."
    },
    {
      name: "Flask (Python Backend)",
      icon: <SiFlask size={26} />,
      desc: "Used in AI/IoT projects for ML-powered data APIs and real-time alert systems."
    },
    {
      name: "Frontend Fundamentals",
      icon: <SiHtml5 size={26} />,
      desc: "HTML5, CSS3, and JavaScript (ES6+) for building clean, accessible, and interactive layouts."
    },
    {
      name: "Tailwind CSS & UI Animation",
      icon: <SiTailwindcss size={26} />,
      desc: "Modern component styling, dark/light themes, and smooth UI animations with Framer Motion."
    },
    {
      name: "AWS & Cloud Platforms",
      icon: <FaAws size={26} />,
      desc: "AWS EC2, S3, CloudFormation, Render, and Vercel deployments for scalable full-stack applications."
    },
    {
      name: "DevOps & Docker",
      icon: <FaDocker size={26} />,
      desc: "Containerized app deployment with Docker, Docker Compose, GitHub Actions, and CI/CD automation."
    },
    {
      name: "Version Control & CI/CD",
      icon: <FaGitAlt size={26} />,
      desc: "Git, GitHub workflows, branching strategies, and automated deployment pipelines."
    },
    {
      name: "Database Systems",
      icon: <FaDatabase size={26} />,
      desc: "SQL & NoSQL databases: MongoDB, MySQL, and PostgreSQL (familiar) with schema normalization."
    },
    {
      name: "IoT & Embedded Systems",
      icon: <FaMicrochip size={26} />,
      desc: "Integration of sensors, GSM/GPS modules, Raspberry Pi, and Jetson Nano for AI-powered IoT systems."
    },
    {
      name: "Hosting & Deployment",
      icon: <SiVercel size={26} />,
      desc: "Frontend hosting on Vercel, backend services on Render, GitHub Actions automation, and SSL setup."
    }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-8 text-cyan-300 text-center">
        🧠 Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-lg flex flex-col gap-3 border border-cyan-400/10 hover:border-cyan-400/30 transition"
          >
            <div className="text-cyan-400">{s.icon}</div>
            <h3 className="font-semibold">{s.name}</h3>
            <p className="text-sm text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
