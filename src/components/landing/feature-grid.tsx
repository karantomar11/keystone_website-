import { Database, ShieldCheck, Workflow, ClipboardList } from "lucide-react";

const features = [
  {
    icon: <Database className="h-6 w-6 text-white" />,
    title: "Local SQLite Persistence",
    description:
      "Zero cloud databases. All API keys, forensic audit logs, and vault mappings are stored locally via a ridiculously fast SQLite implementation.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "OWASP 100% Compliant API",
    description:
      "Enterprise-grade security on day one. Passed the rigorous OWASP ZAP API Security audit with a 100% success rate. No structural vulnerabilities.",
  },
  {
    icon: <Workflow className="h-6 w-6 text-white" />,
    title: "n8n Automation Integration",
    description:
      "Ship secure AI workflows instantly. Includes custom local n8n nodes for drag-and-drop privacy automation.",
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    title: "Forensic Audit Logging",
    description:
      "Every single redacted entity gets a unique cryptographic hash and forensic ID. Total traceability for your compliance team.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="container">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">Built for Trust and Performance</h2>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">
          Keystone is more than a redaction tool; it's a complete privacy framework designed for developers.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="cursor-default rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 ease-in-out hover:border-white/10 hover:bg-white/[0.04]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03]">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight">{feature.title}</h3>
            <p className="leading-relaxed text-zinc-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
