
'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { interactiveRedactionDemo } from '@/ai/flows/interactive-redaction-demo';
import { Loader2 } from 'lucide-react';

export default function DemoPage() {
  const [inputText, setInputText] = useState(
    'Patient John Doe (DOB 01/01/1980, SSN: 987-65-4321) needs his API key sk-123xyz updated.'
  );
  const [redactedText, setRedactedText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleRedaction = useCallback(async (text: string) => {
    if (!text.trim()) {
      setRedactedText('');
      setError(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await interactiveRedactionDemo({ sensitiveText: text });
      setRedactedText(result.redactedText);
    } catch (e) {
      setError('An error occurred while redacting the text. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      handleRedaction(inputText);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [inputText, handleRedaction]);

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black">
      <Header />
      <main className="flex-1">
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Interactive Redaction Demo
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-400 sm:text-xl">
              Type any text containing sensitive information below. Our AI model will identify and redact PII in real-time, ensuring zero data ever leaves your environment.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="input-text" className="text-lg font-semibold">Sensitive Input</Label>
              <Textarea
                id="input-text"
                className="min-h-[250px] font-code text-base"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="e.g., 'John Doe's SSN is 123-45-6789 and his API key is sk-abc123...'"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="output-text" className="text-lg font-semibold">Zero-Knowledge Output to LLM</Label>
              <div className="relative">
                <Textarea
                  id="output-text"
                  readOnly
                  className="min-h-[250px] font-code text-base text-zinc-400 focus-visible:ring-primary/50"
                  value={isLoading ? 'Redacting...' : redactedText}
                  placeholder="Redacted output will appear here..."
                />
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/50">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
