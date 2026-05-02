import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import { generateText } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_generate_text_validation_error =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools = toVercelTools({
      controllers: [controller],
    });

    // 3. Create a mock model that returns invalid tool call arguments
    const mockModel = new MockLanguageModelV3({
      doGenerate: async () => ({
        content: [
          {
            type: "tool-call" as const,
            toolCallId: "call-1",
            toolName: "add",
            // Invalid: x should be number, not string
            input: JSON.stringify({ x: "not a number", y: 5 }),
          },
        ],
        finishReason: { unified: "tool-calls" as const, raw: "tool_calls" },
        usage: {
          inputTokens: { total: 10, noCache: 10, cacheRead: 0, cacheWrite: 0 },
          outputTokens: { total: 5, text: 5, reasoning: 0 },
        },
        warnings: [],
      }),
    });

    // 4. Call generateText with our tools and mock model
    const result = await generateText({
      model: mockModel,
      tools,
      prompt: "What is 10 + 5?",
    });

    // 5. Verify the tool was called
    const toolCalls = result.toolCalls as Array<unknown>;
    TestValidator.equals("should have 1 tool call", toolCalls.length, 1);

    // 6. Verify tool result contains validation error
    const toolResults = result.toolResults as Array<{ output: unknown }>;
    TestValidator.equals("should have 1 tool result", toolResults.length, 1);

    const toolResult = toolResults[0]!.output as {
      success: boolean;
      error: string;
    };
    TestValidator.equals("result should be failure", toolResult.success, false);
    TestValidator.predicate("error should contain validation failure", () =>
      toolResult.error.includes("```json"),
    );
    TestValidator.predicate("error should indicate type error", () =>
      toolResult.error.includes("number"),
    );
  };
