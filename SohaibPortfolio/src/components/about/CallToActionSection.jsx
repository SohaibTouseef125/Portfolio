import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const CallToActionSection = () => {
  return (
    <section className="py-16 w-full bg-gradient-to-r from-accent/10 to-background">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div variants={item} className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            I'm actively seeking opportunities to bring innovative ideas to life.
            Whether you have a project in mind, need a skilled developer for your team,
            or want to discuss potential collaborations, I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 text-center"
          >
            Get In Touch
          </Link>

          <Link
            href="/projects"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300 text-center"
          >
            View My Work
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-8 pt-8 border-t border-accent/30">
          <p className="text-foreground">
            Available for full-time positions, freelance projects, and internships
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;