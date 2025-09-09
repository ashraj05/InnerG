'use server';

/**
 * @fileOverview Provides an AI chatbot for personalized motivational support when human motivators are unavailable.
 *
 * - getMotivationalMessage - A function that generates a motivational message using AI.
 * - MotivationalMessageInput - The input type for the getMotivationalMessage function.
 * - MotivationalMessageOutput - The return type for the getMotivationalMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MotivationalMessageInputSchema = z.object({
  userInput: z
    .string()
    .describe('The user input or question requiring motivational support.'),
  userContext: z
    .string()
    .optional()
    .describe(
      'Additional context about the user, their goals, and their current situation.'
    ),
});
export type MotivationalMessageInput = z.infer<
  typeof MotivationalMessageInputSchema
>;

const MotivationalMessageOutputSchema = z.object({
  message: z.string().describe('The AI-generated motivational message.'),
});
export type MotivationalMessageOutput = z.infer<
  typeof MotivationalMessageOutputSchema
>;

export async function getMotivationalMessage(
  input: MotivationalMessageInput
): Promise<MotivationalMessageOutput> {
  return aiSOSFallbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSOSFallbackPrompt',
  input: {schema: MotivationalMessageInputSchema},
  output: {schema: MotivationalMessageOutputSchema},
  prompt: `You are a motivational chatbot designed to provide support and guidance to users. 
You should respond to the user's input with an encouraging and helpful message.

User Input: {{{userInput}}}

{{#if userContext}}
User Context: {{{userContext}}}
{{/if}}

Response:`,
});

const aiSOSFallbackFlow = ai.defineFlow(
  {
    name: 'aiSOSFallbackFlow',
    inputSchema: MotivationalMessageInputSchema,
    outputSchema: MotivationalMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
