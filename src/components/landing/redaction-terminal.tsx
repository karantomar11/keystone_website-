"use client";

import { useState, useEffect, useMemo } from "react";
import { interactiveRedactionDemo } from "@/ai/flows/interactive-redaction-demo";

const Cursor = () => <span className="ml-1 animate-pulse bg-foreground">_</span>;

export default function RedactionTerminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRedacting, setIsRedacting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const fullInput = "Patient John Doe (DOB 01/01/1980) has a high fever. His SSN is 987-65-4321 and his API key is sk-123xyz.";
  
  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (input.length < fullInput.length) {
      typingTimeout = setTimeout(() => {
        setInput(fullInput.slice(0, input.length + 1));
      }, 30);
    } else {
      setIsRedacting(true);
      (async () => {
        const result = await interactiveRedactionDemo({ sensitiveText: fullInput });
        let outputTypingTimeout: NodeJS.Timeout;
        
        const typeOutput = (index = 0) => {
          if (index <= result.redactedText.length) {
            setOutput(result.redactedText.slice(0, index));
            outputTypingTimeout = setTimeout(() => typeOutput(index + 1), 30);
          } else {
            setIsRedacting(false);
            setIsComplete(true);
          }
        };

        setTimeout(() => typeOutput(), 500);

        return () => clearTimeout(outputTypingTimeout);
      })();
    }

    return () => clearTimeout(typingTimeout);
  }, [input]);

  const formattedOutput = useMemo(() => {
    const parts = output.split(/(\[.*?\])/g);
    return parts.map((part, i) =>
      part.startsWith("[") && part.endsWith("]") ? (
        <span key={i} className="text-primary">
          {part}
        </span>
      ) : (
        part
      )
    );
  }, [output]);

  return (
    <div className="w-full rounded-lg border border-white/10 bg-[#0A0A0A] font-code text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="flex flex-row items-center gap-2 border-b border-white/10 bg-white/5 p-3">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-red-500"></div>
          <div className="size-2.5 rounded-full bg-yellow-500"></div>
          <div className="size-2.5 rounded-full bg-green-500"></div>
        </div>
        <p className="flex-1 text-center text-xs text-muted-foreground">Keystone Redaction</p>
      </div>
      <div className="min-h-[160px] space-y-2 p-4 md:p-6">
        <div className="flex items-start">
          <span className="text-primary mr-2 flex-shrink-0 font-bold">$</span>
          <p className="flex-1 break-all">
            <span className="text-muted-foreground">{"curl -X POST -d '{"}</span>
            <span className="text-foreground">{`"text": "${input}"`}</span>
            <span className="text-muted-foreground">{"}' https://api.openai.com/v1/..."}</span>
            {!isRedacting && !output && <Cursor />}
          </p>
        </div>
        <div className="flex items-start">
          <span className="text-red-500 mr-2 flex-shrink-0 font-bold">!</span>
          <p className="text-red-500">Warning: Sending PII to third-party APIs is a security risk.</p>
        </div>
        {isRedacting && (
           <div className="flex items-start transition-opacity duration-300">
             <span className="text-primary mr-2 flex-shrink-0 font-bold">$</span>
             <p className="text-primary animate-pulse">KEYSTONE: Intercepting and redacting PII...</p>
           </div>
        )}
        {output && (
          <div className="flex items-start">
            <span className="text-primary mr-2 flex-shrink-0 font-bold">$</span>
            <p className="flex-1 break-all">
              <span className="text-muted-foreground">{"curl -X POST -d '{"}</span>
              <span className="text-foreground">{`"text": "`}</span>
              {formattedOutput}
              <span className="text-foreground">{`"}`}</span>
              <span className="text-muted-foreground">{"' https://api.openai.com/v1/..."}</span>
              {isComplete ? null : <Cursor />}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
