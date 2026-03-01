import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section id="architecture" className="container">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-md">
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <CardHeader className="flex flex-row items-center gap-4">
            <XCircle className="h-8 w-8 text-destructive" />
            <CardTitle>The Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-zinc-400">
              Sending raw PII, PHI, or API keys directly to OpenAI breaches HIPAA, SOC2, and trust. Every API call is a potential data leak, exposing your users and your company to massive compliance and reputational risk.
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
              A local-first, air-gapped redaction engine that ensures Cloud AI only sees mathematically irreversible placeholders. Keystone acts as a privacy firewall, protecting your data before it ever leaves your machine.
            </p>
          </CardContent>
        </div>
      </div>
    </section>
  );
}
