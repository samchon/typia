import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { toVercelTools } from "@typia/vercel";
import { generateText } from "ai";
import typia from "typia";

import { TestGlobal } from "../TestGlobal";

class Calculator {
  /** Add two numbers. */
  add(input: { a: number; b: number }): { value: number } {
    return { value: input.a + input.b };
  }

  /** Subtract two numbers. */
  subtract(input: { a: number; b: number }): { value: number } {
    return { value: input.a - input.b };
  }

  /** Multiply two numbers. */
  multiply(input: { a: number; b: number }): { value: number } {
    return { value: input.a * input.b };
  }
}

const main = async () => {
  const tools = toVercelTools({
    controllers: [
      typia.llm.controller<Calculator>("calculator", new Calculator()),
    ],
    prefix: false,
  });

  const openrouter = createOpenAICompatible({
    name: "openrouter",
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: TestGlobal.getEnvironments().OPENROUTER_API_KEY,
  });

  const response = await generateText({
    model: openrouter("qwen/qwen3.5-35b-a3b"),
    tools,
    prompt: "What is 10 + 5?",
  });

  console.log("=== Tool Calls ===");
  for (const toolCall of response.toolCalls ?? []) {
    console.log(`Tool: ${toolCall.toolName}`);
    console.log(`Args: ${JSON.stringify(toolCall.input)}`);
  }

  console.log("\n=== Tool Results ===");
  for (const toolResult of response.toolResults ?? []) {
    console.log(`Result: ${JSON.stringify(toolResult.output)}`);
  }
};
main().catch(console.error);
