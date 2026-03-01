import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Database, ShieldCheck, Workflow, ClipboardList } from "lucide-react";

const features = [
  {
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    title: "Local SQLite Persistence",
    description:
      "Zero cloud databases. All API keys, forensic audit logs, and vault mappings are stored locally via a ridiculously fast SQLite implementation.",
    span: "col-span-1",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 mb-4 text-primary" />,
    title: "OWASP 100% Compliant API",
    description:
      "Enterprise-grade security on day one. Passed the rigorous OWASP ZAP API Security audit with a 100% success rate. No structural vulnerabilities.",
    span: "col-span-1",
  },
  {
    icon: <Workflow className="h-8 w-8 mb-4 text-primary" />,
    title: "n8n Automation Integration",
    description:
      "Ship secure AI workflows instantly. Includes custom local n8n nodes for drag-and-drop privacy automation.",
    span: "col-span-1",
  },
  {
    icon: <ClipboardList className="h-8 w-8 mb-4 text-primary" />,
    title: "Forensic Audit Logging",
    description:
      "Every single redacted entity gets a unique cryptographic hash and forensic ID. Total traceability for your compliance team.",
    span: "col-span-1",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="container">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for Trust and Performance</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Keystone is more than a redaction tool; it's a complete privacy framework designed for developers.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
            <CardHeader>
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
