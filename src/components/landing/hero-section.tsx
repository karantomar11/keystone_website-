import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import RedactionTerminal from "./redaction-terminal";

export default function HeroSection() {
  return (
    <section className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl lg:leading-[1.1]">
          The Zero-Knowledge AI Privacy Middleware.
        </h1>
        <p className="max-w-2xl leading-relaxed text-zinc-400 sm:text-xl">
          Harness the power of Cloud LLMs without leaking a single byte of PII. Local redaction. Offline storage. Automated restoration.
        </p>
        <div className="flex w-full items-center justify-center space-x-4">
          <Button size="lg" className="shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
            <Download className="mr-2" />
            Download Desktop App
          </Button>
          <Button variant="outline" size="lg" asChild className="transition-colors hover:bg-white hover:text-black">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <RedactionTerminal />
      </div>
    </section>
  );
}
