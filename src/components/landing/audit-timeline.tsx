"use client";

import { motion } from "framer-motion";

const TimelineStep = ({
  time,
  badge,
  title,
  copy,
  logContent,
  isLast = false,
}: {
  time: string;
  badge: string;
  title: string;
  copy: string;
  logContent: React.ReactNode;
  isLast?: boolean;
}) => {
  return (
    <div className="relative pl-12">
      {!isLast && (
        <div className="absolute left-[22px] top-5 h-full w-px bg-white/10" />
      )}
      <div className="absolute left-0 top-1.5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900">
          <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
      <div className="mb-10 last:mb-0">
        <div className="mb-2 flex items-center gap-4">
          <span className="font-mono text-xs text-zinc-500">{time}</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {badge}
          </span>
        </div>
        <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
        <p className="mb-4 text-sm text-zinc-400">{copy}</p>
        <div className="rounded-md border border-white/5 bg-black/40 p-4 font-mono text-xs text-zinc-400">
          {logContent}
        </div>
      </div>
    </div>
  );
};

export default function AuditTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 md:p-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="relative">
        <TimelineStep
          time="T=4ms"
          badge="[POLICY: FINANCIAL]"
          title="Ingestion & Policy Match"
          copy="Sensitive data is identified and mapped to a secure, reversible placeholder."
          logContent={
            <p>
              Detected:{' '}
              <span className="text-red-400/70">"Visa ending in 4242"</span>{' '}
              -&gt; Mapped to{' '}
              <span className="text-primary/70">[CARD_1]</span> in 4.2ms
            </p>
          }
        />
        <TimelineStep
          time="T=15ms"
          badge="[NETWORK: OUTBOUND]"
          title="Air-Gapped Request to OpenAI"
          copy="Transmitting zero-knowledge payload. Original data securely stored in local SQLite Vault."
          logContent={<p>Local Overhead: 15.1ms. Awaiting Model response...</p>}
        />
        <TimelineStep
          time="T=68ms"
          badge="[RESTORE: SUCCESS]"
          title="Cryptographic Restoration"
          copy="LLM response received. Vault lock released. Data restored seamlessly."
          logContent={
            <p>
              Network Latency: 49ms | Local Restoration: 3.8ms | Total Overhead:
              68.1ms
            </p>
          }
          isLast={true}
        />
      </div>
    </motion.div>
  );
}
