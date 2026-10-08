import claude from "../assets/logos/claude.svg?raw";
import cursor from "../assets/logos/cursor.svg?raw";
import gemini from "../assets/logos/gemini.svg?raw";
import githubcopilot from "../assets/logos/githubcopilot.svg?raw";
import grok from "../assets/logos/grok.svg?raw";
import kimi from "../assets/logos/kimi.svg?raw";
import minimax from "../assets/logos/minimax.svg?raw";
import mistral from "../assets/logos/mistral.svg?raw";
import openai from "../assets/logos/openai.svg?raw";
import perplexity from "../assets/logos/perplexity.svg?raw";
import windsurf from "../assets/logos/windsurf.svg?raw";
import zai from "../assets/logos/zai.svg?raw";

/**
 * Subscriptions and platforms Helmet can work with.
 * Marks come from @lobehub/icons-static-svg and belong to their owners.
 */
const strip = (svg: string) =>
  svg
    .replace(/<title>.*?<\/title>/, "")
    .replace(/ style="[^"]*"/, "")
    .replace(/ (width|height)="[^"]*"/g, "")
    .replace("<svg ", '<svg aria-hidden="true" ');

export const providers = [
  { name: "ChatGPT", svg: strip(openai) },
  { name: "Claude", svg: strip(claude) },
  { name: "Gemini", svg: strip(gemini) },
  { name: "GitHub Copilot", svg: strip(githubcopilot) },
  { name: "Cursor", svg: strip(cursor) },
  { name: "Perplexity", svg: strip(perplexity) },
  { name: "Grok", svg: strip(grok) },
  { name: "Kimi", svg: strip(kimi) },
  { name: "Z.ai", svg: strip(zai) },
  { name: "MiniMax", svg: strip(minimax) },
  { name: "Mistral", svg: strip(mistral) },
  { name: "Windsurf", svg: strip(windsurf) },
] as const;
