import Education from "../components/Education";

import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";




export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-300 max-w-3xl">
          Hi, I’m Om Barvekar — I turn algorithms into experiences that improve
          lives — from AI-driven accident detection to cloud-powered analytics.
          My goal is to merge intelligence with empathy.
        </p>
      </section>

      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
