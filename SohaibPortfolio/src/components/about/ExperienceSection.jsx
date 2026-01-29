import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Hackathon Projects",
    period: "2023 - Present",
    description: "Developed multiple full-stack applications using modern technologies including React, Next.js, Node.js, and Python. Implemented AI integrations and worked on scalable solutions.",
    type: "Professional Experience"
  },
  {
    title: "AI-Powered Application Development",
    company: "Personal Projects",
    period: "2024",
    description: "Built a full-stack Todo application with integrated AI chatbot using OpenAI API, Python FastAPI, and Next.js with Three.js for interactive UI.",
    type: "Notable Project"
  },
  {
    title: "Hackathon Participation",
    company: "Various Tech Events",
    period: "2023-2024",
    description: "Participated in multiple hackathons focusing on innovative web solutions, AI integrations, and full-stack development challenges.",
    type: "Competition"
  },
  {
    title: "E-commerce Platform Development",
    company: "Furniture Store Project",
    period: "2024",
    description: "Designed and developed a responsive e-commerce platform from Figma designs using Next.js, TypeScript, and Tailwind CSS.",
    type: "Major Project"
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-16 w-full bg-background/10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Experience & Achievements</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Practical development experience and notable achievements in the field
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset p-6 rounded-lg hover:shadow-glass-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-accent">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="mt-2 md:mt-0 inline-block px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-foreground mb-2">{exp.description}</p>
              <span className="inline-block px-2 py-1 bg-muted/20 text-accent border border-muted/30 rounded-full text-xs">
                {exp.type}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;