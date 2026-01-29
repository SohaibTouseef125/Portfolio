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
  show: { opacity: 1, y: 0 },
};

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    icon: "💻"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "Express.js", "RESTful APIs", "GraphQL"],
    icon: "⚙️"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "Supabase"],
    icon: "🗄️"
  },
  {
    title: "AI & Machine Learning",
    skills: ["OpenAI API", "TensorFlow", "PyTorch", "LangChain", "ChatGPT API", "AI Agents"],
    icon: "🤖"
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "Docker", "AWS", "CI/CD Pipelines"],
    icon: "🛠️"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-16 w-full">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Technical Skills</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-accent">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;