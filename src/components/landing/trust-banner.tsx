import { ShieldCheck } from "lucide-react";

const complianceItems = [
  "SOC2 Preparatory",
  "HIPAA Compliant Architecture",
  "PCI-DSS Safe",
];

export default function TrustBanner() {
  return (
    <section id="security" className="bg-card/50">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:justify-around md:gap-8">
          {complianceItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-primary" />
              <span className="font-semibold text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
