import React from "react";
import { motion } from "framer-motion";

function SectionHeader({ title }) {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <motion.h1
        className="text-primary text-4xl font-medium text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      <div className="relative h-1 mb-8">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 h-1 bg-[var(--color-darkPrimary)] w-5/6 origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-1/3 bg-[var(--color-primary)] origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        />
      </div>
    </div>
  );
}

export default SectionHeader;