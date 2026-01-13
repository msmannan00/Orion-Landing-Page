
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateThreatReport = async (target: string, type: 'website' | 'ioc') => {
  try {
    const prompt = `Perform a clinical technical analysis for the following ${type}: ${target}. 
    Focus on structural attributes, known associations, and potential attack vectors. 
    Use neutral, objective language suitable for an OSINT investigator. 
    Avoid marketing hype or alarmist adjectives.
    Include:
    - Target Identification
    - Observed Heuristics
    - Known Entities/Associations
    - Investigative Risk Level (CRITICAL, HIGH, MODERATE, LOW, NEUTRAL)`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.3, // Lower temperature for more factual/precise output
        topP: 0.8,
        maxOutputTokens: 800,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Orion Probe Error:", error);
    return "Error: Unable to complete remote probe. Check target syntax.";
  }
};

export const getBriefIntelligenceSummary = async () => {
  try {
    const prompt = `Provide a concise 3-sentence technical situational report of global cyber activity. Focus on infrastructure-level events, protocol vulnerabilities, or documented threat actor movements. Do not use buzzwords.`;
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        maxOutputTokens: 150,
      }
    });
    return response.text;
  } catch (error) {
    return "Intelligence stream synchronization failed.";
  }
};
