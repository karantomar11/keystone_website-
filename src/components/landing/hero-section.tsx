
"use client";

import { Button } from "@/components/ui/button";
import RedactionTerminal from "./redaction-terminal";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="container grid items-center gap-8 pb-8 pt-6 md:py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-black leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
        >
          The Zero-Knowledge AI Privacy Middleware.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="max-w-2xl leading-relaxed text-zinc-400 sm:text-xl"
        >
          Harness the power of Cloud LLMs without leaking a single byte of PII. Local redaction. Offline storage. Automated restoration.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex w-full items-center justify-center space-x-4"
        >
          <Button asChild size="lg" className="shadow-lg shadow-primary/20 transition-transform duration-300 ease-in-out hover:-translate-y-0.5">
            <Link href="/demo">
              Try Live Demo
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/contact">
              Contact Sales
            </Link>
          </Button>
        </motion.div>
      </div>
      <motion.div variants={itemVariants} className="mx-auto w-full max-w-3xl">
        <RedactionTerminal />
      </motion.div>
    </motion.section>
  );
}
