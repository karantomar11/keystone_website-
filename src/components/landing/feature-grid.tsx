"use client";

import { Database, ShieldCheck, Workflow, ClipboardList } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Database className="h-6 w-6 text-white" />,
    title: "Local SQLite Persistence",
    description:
      "Zero cloud databases. All API keys, forensic audit logs, and vault mappings are stored locally in a high-performance, embedded SQLite database.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "OWASP Compliant Local API",
    description:
      "Your self-hosted instance runs a fully OWASP-compliant API. Passed the rigorous ZAP security audit, ensuring zero structural vulnerabilities in your local environment.",
  },
  {
    icon: <Workflow className="h-6 w-6 text-white" />,
    title: "Local Automation (n8n)",
    description:
      "Build secure AI workflows instantly with our custom, self-hosted n8n nodes for drag-and-drop privacy automation that runs entirely on your infrastructure.",
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    title: "Local Forensic Logging",
    description:
      "Every redaction is captured in a local, cryptographically-hashed audit log. Get total traceability for compliance without your log data ever leaving your control.",
  },
];

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative cursor-default rounded-2xl border border-white/10 bg-[#0F0F0F] p-8 transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-[#1A1A1A]"
      style={
        {
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="relative">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-white/5 bg-white/5">
          {feature.icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight">{feature.title}</h3>
        <p className="leading-relaxed text-zinc-400">{feature.description}</p>
      </div>
    </div>
  );
};

export default function FeatureGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      id="features"
      className="container"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">Built for Trust and Performance</h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Keystone is more than a redaction tool; it's a complete privacy framework designed for developers.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.section>
  );
}
