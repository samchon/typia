import { generateText } from "ai";
import { MockLanguageModelV1 } from "ai/test";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
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
    const mockModel = new MockLanguageModelV1({
      doGenerate: async () => ({
        rawCall: { rawPrompt: null, rawSettings: {} },
        finishReason: "tool-calls",
        usage: { promptTokens: 10, completionTokens: 5 },
        toolCalls: [
          {
            toolCallType: "function",
            toolCallId: "call-1",
            toolName: "calculator_add",
            args: JSON.stringify({ x: 10, y: 5 }),
          },
          {
            toolCallType: "function",
            toolCallId: "call-2",
            toolName: "calculator_multiply",
            args: JSON.stringify({ x: 3, y: 7 }),
          },
          {
            toolCallType: "function",
            toolCallId: "call-3",
            toolName: "calculator_subtract",
            args: JSON.stringify({ x: 100, y: 42 }),
          },
        ],
      }),
    });

    // 4. Call generateText with our tools and mock model
    const result = await generateText({
      model: mockModel,
      tools,
      prompt: "Calculate multiple things",
    });

    // 5. Verify all tool calls were made
    TestValidator.equals("should have 3 tool calls", result.toolCalls.length, 3);

    // 6. Verify tool results (cast to any[] due to Record<string, Tool> type inference)
    const toolResults = result.toolResults as Array<{
      toolCallId: string;
      toolName: string;
      result: unknown;
    }>;
    TestValidator.equals("should have 3 tool results", toolResults.length, 3);

    // Find results by toolCallId
    const addResult = toolResults.find((r) => r.toolCallId === "call-1")!;
    const multiplyResult = toolResults.find((r) => r.toolCallId === "call-2")!;
    const subtractResult = toolResults.find((r) => r.toolCallId === "call-3")!;

    TestValidator.equals("add(10, 5) should be 15", addResult.result, 15);
    TestValidator.equals(
      "multiply(3, 7) should be 21",
      multiplyResult.result,
      21,
    );
    TestValidator.equals(
      "subtract(100, 42) should be 58",
      subtractResult.result,
      58,
    );
  };
