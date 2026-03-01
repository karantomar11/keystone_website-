import { ShieldCheck } from "lucide-react";

const complianceItems = [
  {
    title: "SOC2 Audit-Ready Logs",
    description:
      "Built-in forensic cryptographic hashing. Total traceability for your internal compliance team's next audit.",
  },
  {
    title: "HIPAA-Friendly Architecture",
    description:
      "Zero PHI leaves your local machine. Fully air-gapped redaction ensures patient data never hits third-party APIs.",
  },
  {
    title: "Zero-Knowledge by Design",
    description:
      "Open-source transparency. Keystone cannot see, store, or transmit your decrypted Vault mappings.",
  },
];

export default function TrustBanner() {
  return (
    <section id="security" className="bg-zinc-900/50">
      <div className="container">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 md:flex-row md:items-start"
            >
              <ShieldCheck className="h-8 w-8 flex-shrink-0 text-primary md:h-6 md:w-6" />
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
