'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
    { id: "clubs", label: "Clubs" },
    { id: "certificates", label: "Certificates" },
  ];

 const education = [
  {
    logo: "/projects/pdea.jpg",
    title: "Pune District Education Association’s College of Engineering, Pune",
    year: "2022 - Present",
    desc: "B.E. in Information Technology",
    location: "Pune",
  },
];


  const awards = [
    {
      title: "Winner - Shot Put Champion (College)",
      year: "2022 - 2024",
      desc: "Secured 1st place in Shot Put for 3 consecutive years.",
    },
    {
      title: "2nd Place - Discus Throw",
      year: "2023",
      desc: "Represented college in athletic event and secured 2nd position.",
    },
    {
      title: "University Power Lifter - SPPU",
      year: "2024",
      desc: "Represented PDEA COEM as official SPPU Power Lifter.",
    },
  ];

  const clubs = [
    {
      title: "AI Lead - Google Developer Group (GDG)",
      year: "2024",
      desc: "Leading AI-based learning sessions and projects for the student community.",
    },
    {
      title: "Member - Linux Club",
      year: "2023 - Present",
      desc: "Contributing to open-source and system-level automation activities.",
    },
  ];

  const certificates = [
    {
      title: "MERN Stack Certification",
      org: "Full-Stack Web Development (MongoDB, Express, React, Node.js)",
    },
    {
      title: "AI / ML Certification",
      org: "Hands-on training in Artificial Intelligence and Machine Learning",
    },
  ];

  const contentMap = {
    education,
    awards,
    clubs,
    certificates,
  };

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Education & Achievements</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === tab.id
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_10px_#00FFF040]"
                : "bg-transparent border-gray-600 text-gray-400 hover:text-cyan-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {contentMap[activeTab].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="glass rounded-xl p-5 border border-cyan-400/20 backdrop-blur-md"
          >
            {activeTab === "education" && (
              <div className="flex items-start gap-4">
                {item.logo && (
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.year}</p>
                  <p className="text-gray-400 text-sm italic">{item.location}</p>
                  <p className="text-gray-300 mt-1">{item.desc}</p>
                </div>
              </div>
            )}

            {activeTab === "awards" && (
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.year}</p>
                <p className="text-gray-300 mt-1">{item.desc}</p>
              </div>
            )}

            {activeTab === "clubs" && (
              <div>
                <h3 className="text-lg font-semibold text-violet-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.year}</p>
                <p className="text-gray-300 mt-1">{item.desc}</p>
              </div>
            )}

            {activeTab === "certificates" && (
              <div>
                <h3 className="text-lg font-semibold text-cyan-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.org}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
