'use server';
/**
 * @fileOverview A Genkit flow for demonstrating real-time PII redaction.
 *
 * - interactiveRedactionDemo - A function that handles the interactive redaction process.
 * - InteractiveRedactionDemoInput - The input type for the interactiveRedactionDemo function.
 * - InteractiveRedactionDemoOutput - The return type for the interactiveRedactionDemo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const InteractiveRedactionDemoInputSchema = z.object({
  sensitiveText: z.string().describe('The sensitive text to be redacted.'),
});
export type InteractiveRedactionDemoInput = z.infer<typeof InteractiveRedactionDemoInputSchema>;

const InteractiveRedactionDemoOutputSchema = z.object({
  redactedText: z.string().describe('The text with PII and sensitive data replaced by secure placeholders.'),
});
export type InteractiveRedactionDemoOutput = z.infer<typeof InteractiveRedactionDemoOutputSchema>;

const redactionPrompt = ai.definePrompt({
  name: 'redactionPrompt',
  input: { schema: InteractiveRedactionDemoInputSchema },
  output: { schema: InteractiveRedactionDemoOutputSchema },
  prompt: `You are an expert PII (Personally Identifiable Information) and sensitive data redactor.
Your task is to identify and replace all instances of PII, SSNs, and API keys in the provided text with secure, generic placeholders.
Maintain the original sentence structure and context.
Use the following placeholder formats:
-   Names (persons, organizations): [PERSON_N] or [ORGANIZATION_N] (e.g., [PERSON_1], [PERSON_2])
-   Dates (DOB, specific dates): [DATE_N] (e.g., [DATE_1])
-   Social Security Numbers (SSNs): [SSN_N] (e.g., [SSN_1])
-   API Keys: [API_KEY_N] (e.g., [API_KEY_1])
-   Other sensitive information (e.g., medical conditions, specific addresses if they appear as PII): [SENSITIVE_DATA_N] (e.g., [SENSITIVE_DATA_1])

Example:
Input: "Patient John Doe (DOB 01/01/1980) has a high fever. His SSN is 987-65-4321 and his API key is sk-123xyz."
Output: "Patient [PERSON_1] (DOB [DATE_1]) has a high fever. His SSN is [SSN_1] and his API key is [API_KEY_1]."

Now, redact the following text:

Sensitive Text: {{{sensitiveText}}}

Output in the specified JSON format with the 'redactedText' field.`,
});

const interactiveRedactionDemoFlow = ai.defineFlow(
  {
    name: 'interactiveRedactionDemoFlow',
    inputSchema: InteractiveRedactionDemoInputSchema,
    outputSchema: InteractiveRedactionDemoOutputSchema,
  },
  async (input) => {
    const { output } = await redactionPrompt(input);
    if (!output) {
      throw new Error('Failed to redact text: output was null or undefined.');
    }
    return output;
  }
);

export async function interactiveRedactionDemo(
  input: InteractiveRedactionDemoInput
): Promise<InteractiveRedactionDemoOutput> {
  return interactiveRedactionDemoFlow(input);
}
