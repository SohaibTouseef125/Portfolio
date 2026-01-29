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

const differencePoints = [
  {
    title: "Full-Stack + AI Expertise",
    description: "Combining frontend mastery with backend proficiency and AI integration capabilities to deliver complete, intelligent solutions."
  },
  {
    title: "Real-World Problem Solving",
    description: "Focus on practical, scalable solutions that address genuine business needs and user pain points."
  },
  {
    title: "Clean Code & Performance",
    description: "Writing maintainable, efficient code with emphasis on performance optimization and best practices."
  },
  {
    title: "Production-Ready Mindset",
    description: "Building applications with scalability, security, and maintainability in mind from day one."
  }
];

const DifferenceSection = () => {
  return (
    <section className="py-16 w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">What Makes Me Different</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Unique qualities and approaches that set my work apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differencePoints.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset p-6 rounded-lg hover:shadow-glass-sm transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-accent mb-3">{point.title}</h3>
              <p className="text-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DifferenceSection;