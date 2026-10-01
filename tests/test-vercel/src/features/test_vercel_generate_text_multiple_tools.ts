import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import { generateText } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel generate text multiple tools against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts should have 3 tool calls,
 * should have 3 tool results, add(10, 5) should be 15, multiply(3, 7) should be
 * 21, subtract(100, 42) should be 58.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (should have 3 tool calls; should have 3 tool results; add(10, 5) should be 15; multiply(3, 7) should be 21; subtract(100, 42) should be 58).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (should have 3 tool calls; should have 3 tool results; add(10, 5) should be 15; multiply(3, 7) should be 21; subtract(100, 42) should be 58) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_generate_text_multiple_tools is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
    TestEquality.equals("should have 3 tool calls", result.toolCalls.length, 3);

    // 6. Verify tool results (cast to any[] due to Record<string, Tool> type inference)
    const toolResults = result.toolResults as Array<{
      toolCallId: string;
      toolName: string;
      output: unknown;
    }>;
    TestEquality.equals("should have 3 tool results", toolResults.length, 3);

    // Find results by toolCallId
    const addResult = toolResults.find((r) => r.toolCallId === "call-1")!;
    const multiplyResult = toolResults.find((r) => r.toolCallId === "call-2")!;
    const subtractResult = toolResults.find((r) => r.toolCallId === "call-3")!;

    TestEquality.equals("add(10, 5) should be 15", addResult.output, {
      success: true,
      data: { value: 15 },
    });
    TestEquality.equals("multiply(3, 7) should be 21", multiplyResult.output, {
      success: true,
      data: { value: 21 },
    });
    TestEquality.equals(
      "subtract(100, 42) should be 58",
      subtractResult.output,
      { success: true, data: { value: 58 } },
    );
  };
