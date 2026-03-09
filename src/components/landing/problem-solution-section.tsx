"use client";

import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSolutionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      id="architecture"
      className="container"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-md">
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <CardHeader className="flex flex-row items-center gap-4">
            <XCircle className="h-8 w-8 text-destructive" />
            <CardTitle>The Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-zinc-400">
              Sending raw PII, PHI, or API keys directly to Cloud AI breaches GDPR, HIPAA, SOC2, and trust. Every API call is a potential data leak, exposing your users and your company to massive compliance and reputational risk.
            </p>
          </CardContent>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-md">
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <CardHeader className="flex flex-row items-center gap-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <CardTitle>The Keystone Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-zinc-400">
              A local-first, air-gapped redaction engine that runs entirely on your infrastructure. Keystone acts as a self-hosted privacy firewall, ensuring sensitive data is redacted *before* it ever leaves your machine, so Cloud AI only sees mathematically irreversible placeholders.
            </p>
          </CardContent>
        </div>
      </div>
    </motion.section>
  );
}
