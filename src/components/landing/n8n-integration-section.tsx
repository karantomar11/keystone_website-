"use client";

import { ArrowRight, Puzzle, Link as LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const WorkflowNode = ({
  icon,
  title,
  subtitle,
  accentColor,
  className,
  isActive = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accentColor: string;
  className?: string;
  isActive?: boolean;
}) => (
  <div
    className={cn(
      'relative rounded-lg border bg-[#131313] p-4 shadow-lg transition-all duration-500',
      isActive ? 'border-white/30' : 'border-white/10',
      className
    )}
    style={{
        transform: isActive ? 'scale(1.02)' : 'scale(1)',
    }}
  >
    <div
      className={cn(
        'absolute -top-px left-4 h-px w-2/3 transition-all duration-500',
        isActive ? 'opacity-100' : 'opacity-50'
      )}
      style={{
        background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
      }}
    />
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-xs text-zinc-400">{subtitle}</p>
      </div>
    </div>
  </div>
);


const AnimatedArrow = ({ isActive }: { isActive: boolean }) => (
    <div className="relative h-6 w-6 rotate-90 text-zinc-600 md:rotate-0">
        <ArrowRight className="h-6 w-6 transition-colors duration-300" />
        <div className={cn(
            "absolute top-0 left-0 h-full w-full bg-primary/50 rounded-full blur-sm transition-opacity duration-500",
            isActive ? "opacity-100 animate-ping" : "opacity-0"
        )} style={{ animationDuration: '1.5s' }} />
    </div>
)


export default function N8nIntegrationSection() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5); // 4 steps, 1 resting state
        }, 2000);
        return () => clearInterval(interval);
    }, []);

  const workflowSteps = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-red-400"
        >
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h14v-4" />
          <path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-4h-2z" />
        </svg>
      ),
      title: "Webhook Trigger",
      subtitle: "Receives Raw Patient Data",
      accentColor: "hsl(var(--destructive))",
    },
    {
      icon: <Puzzle className="h-5 w-5 text-primary" />,
      title: "Keystone Redact",
      subtitle: "Air-gaps PII & Vaults SSN",
      accentColor: "hsl(var(--primary))",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-400"
        >
          <path
            d="M21.707 10.293L19.414 8L21.707 5.707L20.293 4.293L18 6.586L15.707 4.293L14.293 5.707L16.586 8L14.293 10.293L15.707 11.707L18 9.414L20.293 11.707L21.707 10.293ZM10.5 19.5C10.2348 19.5 9.9804 19.3946 9.7929 19.2071C9.6054 19.0196 9.5 18.7652 9.5 18.5V17.5H4.5V10.5H11.5V5.5H12.5C12.7652 5.5 13.0196 5.60538 13.2071 5.79288C13.3946 5.98038 13.5 6.23478 13.5 6.5V18.5C13.5 18.7652 13.3946 19.0196 13.2071 19.2071C13.0196 19.3946 12.7652 19.5 12.5 19.5H10.5ZM2 21V8H13V9H4V19H11V15H9V13H11V11H13V15C13 15.5523 12.5523 16 12 16H9V19H2V21Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "OpenAI Chat",
      subtitle: "Analyzes Safe Placeholders",
      accentColor: "#3b82f6",
    },
    {
      icon: <Puzzle className="h-5 w-5 text-primary" />,
      title: "Keystone Restore",
      subtitle: "Unlocks Vault & Restores Original Data",
      accentColor: "hsl(var(--primary))",
    },
  ];

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
          Zero-Knowledge Automations. Zero Code Required.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Don&apos;t want to build from scratch? Integrate Keystone directly into
          your existing automation pipelines with our custom, self-hosted n8n
          nodes.
        </p>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <ul className="space-y-4 text-zinc-300">
            <li className="flex items-start gap-3">
              <Puzzle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                <span className="font-semibold text-white">
                  Drop-in Nodes:
                </span>{' '}
                Instantly add `Keystone Redact` and `Keystone Restore` to any
                workflow.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <LinkIcon className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                <span className="font-semibold text-white">
                  Compliant by Default:
                </span>{' '}
                Build HIPAA-compliant Gmail-to-OpenAI auto-responders in
                minutes.
              </span>
            </li>
          </ul>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Install in 3 Clicks:</h4>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">1</div>
                    <p className="pt-0.5 text-zinc-400">Open your n8n dashboard and navigate to <span className="font-medium text-zinc-200">Settings</span>.</p>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">2</div>
                    <p className="pt-0.5 text-zinc-400">Click on <span className="font-medium text-zinc-200">Community Nodes</span> and select 'Install'.</p>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">3</div>
                    <p className="pt-0.5 text-zinc-400">
                        Search for{' '}
                        <code className="rounded bg-white/10 px-2 py-1 font-mono text-sm text-primary">
                            n8n-nodes-keystone
                        </code>{' '}
                        and click 'I Agree'.
                    </p>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-2">
           {workflowSteps.map((step, index) => (
                <React.Fragment key={step.title}>
                    <WorkflowNode
                        {...step}
                        isActive={activeStep === index}
                        className="w-full max-w-sm"
                    />
                    {index < workflowSteps.length - 1 && (
                        <AnimatedArrow isActive={activeStep === index} />
                    )}
                </React.Fragment>
            ))}
        </div>
      </div>
    </motion.section>
  );
}
