import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import { generateText } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_generate_text_multiple_tools =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools = toVercelTools({
      controllers: [controller],
    });

    // 3. Create a mock model that returns multiple tool calls
    const mockModel = new MockLanguageModelV3({
      doGenerate: async () => ({
        content: [
          {
            type: "tool-call" as const,
            toolCallId: "call-1",
            toolName: "add",
            input: JSON.stringify({ x: 10, y: 5 }),
          },
          {
            type: "tool-call" as const,
            toolCallId: "call-2",
            toolName: "multiply",
            input: JSON.stringify({ x: 3, y: 7 }),
          },
          {
            type: "tool-call" as const,
            toolCallId: "call-3",
            toolName: "subtract",
            input: JSON.stringify({ x: 100, y: 42 }),
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
      prompt: "Calculate multiple things",
    });

    // 5. Verify all tool calls were made
    TestValidator.equals(
      "should have 3 tool calls",
      result.toolCalls.length,
      3,
    );

    // 6. Verify tool results (cast to any[] due to Record<string, Tool> type inference)
    const toolResults = result.toolResults as Array<{
      toolCallId: string;
      toolName: string;
      output: unknown;
    }>;
    TestValidator.equals("should have 3 tool results", toolResults.length, 3);

    // Find results by toolCallId
    const addResult = toolResults.find((r) => r.toolCallId === "call-1")!;
    const multiplyResult = toolResults.find((r) => r.toolCallId === "call-2")!;
    const subtractResult = toolResults.find((r) => r.toolCallId === "call-3")!;

    TestValidator.equals("add(10, 5) should be 15", addResult.output, {
      success: true,
      data: { value: 15 },
    });
    TestValidator.equals("multiply(3, 7) should be 21", multiplyResult.output, {
      success: true,
      data: { value: 21 },
    });
    TestValidator.equals(
      "subtract(100, 42) should be 58",
      subtractResult.output,
      { success: true, data: { value: 58 } },
    );
  };
