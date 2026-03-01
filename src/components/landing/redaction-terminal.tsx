"use client";

import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

const Cursor = () => <span className="ml-1 animate-pulse bg-foreground">_</span>;

const datasets = [
    {
        userInput: `> User Input: "Patient John Doe (DOB 01/01/1980) has a high fever."`,
        pii: "[KEYSTONE LOCAL] Identifying PII...",
        safePayload: `> Safe Payload To OpenAI: "Patient [PERSON_1] (DOB [DATE_1]) has a high fever."`,
        processing: "[OPEN_AI] Processing...",
        aiResponse: `> AI Response: "Recommend rest and fluids for Patient [PERSON_1] due to fever on [DATE_1]."`,
        unlocking: "[KEYSTONE LOCAL] Unlocking Vault Hash...",
        finalOutput: `> Final Output to User: "Recommend rest and fluids for Patient John Doe due to fever on 01/01/1980."`,
    },
    {
        userInput: `> User Input: "My card is 4242-4242-4242-4242, key is sk-123xyz."`,
        pii: "[KEYSTONE LOCAL] Identifying PII...",
        safePayload: `> Safe Payload To OpenAI: "My card is [CARD_1], key is [API_KEY_1]."`,
        processing: "[OPEN_AI] Processing...",
        aiResponse: `> AI Response: "Acknowledged [CARD_1] and [API_KEY_1]."`,
        unlocking: "[KEYSTONE LOCAL] Unlocking Vault Hash...",
        finalOutput: `> Final Output to User: "Acknowledged card 4242-4242-4242-4242, key sk-123xyz."`,
    },
];

const STAGE_DELAY = 1200;
const LOOP_DELAY = 4000;

export default function RedactionTerminal() {
    const [datasetIndex, setDatasetIndex] = useState(0);
    const [lines, setLines] = useState<any[]>([]);
    const [isAnimating, setIsAnimating] = useState(true);

    const currentData = useMemo(() => datasets[datasetIndex], [datasetIndex]);

    useEffect(() => {
        const animationSteps = [
            { text: currentData.userInput, color: 'text-red-400' },
            { text: currentData.pii, color: 'text-yellow-400' },
            { text: currentData.safePayload, color: 'text-green-400', highlight: true },
            { text: currentData.processing, color: 'text-zinc-400' },
            { text: currentData.aiResponse, color: 'text-zinc-400', highlight: true },
            { text: currentData.unlocking, color: 'text-blue-400' },
            { text: currentData.finalOutput, color: 'text-blue-400' },
        ];

        setLines([]);
        setIsAnimating(true);
        let delay = 0;
        const timeouts: NodeJS.Timeout[] = [];

        animationSteps.forEach((step, index) => {
            delay += STAGE_DELAY;
            timeouts.push(setTimeout(() => {
                setLines(prev => [...prev, step]);
                if (index === animationSteps.length - 1) {
                    setIsAnimating(false);
                    timeouts.push(setTimeout(() => {
                        setDatasetIndex(prev => (prev + 1) % datasets.length);
                    }, LOOP_DELAY));
                }
            }, delay));
        });

        return () => timeouts.forEach(clearTimeout);

    }, [datasetIndex, currentData]);

    const HighlightedLine = ({ text, color }: { text: string, color: string }) => {
        const parts = text.split(/(\[.*?\])/g);
        return <div className={cn("flex items-start", color)}>
            <p className="flex-1 break-all">
                {parts.map((part, i) =>
                    part.startsWith("[") && part.endsWith("]") ? (
                        <span key={i} className="text-primary">
                            {part}
                        </span>
                    ) : (
                        part
                    )
                )}
            </p>
        </div>
    };

    return (
        <div className="w-full rounded-lg border border-white/10 bg-[#0A0A0A]/80 font-code text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
            <div className="flex flex-row items-center gap-2 border-b border-white/10 bg-white/5 p-3">
                <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500"></div>
                    <div className="size-2.5 rounded-full bg-yellow-500"></div>
                    <div className="size-2.5 rounded-full bg-green-500"></div>
                </div>
                <p className="flex-1 text-center text-xs text-muted-foreground">Keystone E2E</p>
            </div>
            <div className="space-y-2 p-4 md:p-6 min-h-[320px] md:min-h-[280px]">
                {lines.map((line, index) => (
                    <div key={index} className="animate-in fade-in duration-500">
                        {line.highlight ? (
                            <HighlightedLine text={line.text} color={line.color} />
                        ) : (
                            <div className={line.color}>{line.text}</div>
                        )}
                    </div>
                ))}
                {isAnimating && <Cursor />}
            </div>
        </div>
    );
}
