import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section id="architecture" className="container">
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-destructive/50 transition-all hover:border-destructive">
          <CardHeader className="flex flex-row items-center gap-4">
            <XCircle className="h-8 w-8 text-destructive" />
            <CardTitle>The Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Sending raw PII, PHI, or API keys directly to OpenAI breaches HIPAA, SOC2, and trust. Every API call is a potential data leak, exposing your users and your company to massive compliance and reputational risk.
            </p>
          </CardContent>
        </Card>
        <Card className="border-primary/50 transition-all hover:border-primary">
          <CardHeader className="flex flex-row items-center gap-4">
            <CheckCircle className="h-8 w-8 text-primary" />
            <CardTitle>The Keystone Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A local-first, air-gapped redaction engine that ensures Cloud AI only sees mathematically irreversible placeholders. Keystone acts as a privacy firewall, protecting your data before it ever leaves your machine.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
