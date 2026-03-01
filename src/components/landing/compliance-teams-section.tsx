"use client";

import { Landmark, ServerCog, ShieldPlus } from "lucide-react";
import { motion } from "framer-motion";

const compliancePersonas = [
  {
    icon: <ShieldPlus className="h-6 w-6 text-white" />,
    title: "Health-Tech & Clinics",
    copy: "Safely summarize patient notes and medical records with Cloud AI. Keystone’s local redaction ensures Zero Protected Health Information (PHI) ever leaves your HIPAA-compliant environment.",
  },
  {
    icon: <Landmark className="h-6 w-6 text-white" />,
    title: "Fintech & Accounting",
    copy: "Analyze support tickets and financial reports via LLMs without risking GLBA or PCI-DSS violations. Credit card numbers and bank details are mathematically air-gapped from OpenAI.",
  },
  {
    icon: <ServerCog className="h-6 w-6 text-white" />,
    title: "Enterprise DevOps & Legal",
    copy: "Process server error logs or massive legal contracts through AI without accidentally leaking raw API keys, passwords, or attorney-client privileged information into the cloud.",
  },
];

export default function ComplianceTeamsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="container"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
          Built for High-Compliance Teams.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Whether you are protecting patient records or financial data, Keystone unlocks Cloud LLMs without compromising your compliance posture.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {compliancePersonas.map((persona) => (
          <div
            key={persona.title}
            className="rounded-2xl border border-white/5 bg-[#131313] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03]">
              {persona.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight">
              {persona.title}
            </h3>
            <p className="leading-relaxed text-zinc-400">{persona.copy}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
