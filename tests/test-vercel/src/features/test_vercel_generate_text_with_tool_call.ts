import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import { generateText } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel generate text with tool call against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts should have 1 tool call,
 * tool name should be add, tool args should match, should have 1 tool result,
 * tool result should be 15.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (should have 1 tool call; tool name should be add; tool args should match; should have 1 tool result; tool result should be 15).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (should have 1 tool call; tool name should be add; tool args should match; should have 1 tool result; tool result should be 15) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_generate_text_with_tool_call is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_vercel_generate_text_with_tool_call =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools = toVercelTools({
      controllers: [controller],
    });

    // 3. Create a mock model that returns a tool call
    const mockModel = new MockLanguageModelV3({
      doGenerate: async () => ({
        content: [
          {
            type: "tool-call" as const,
            toolCallId: "call-1",
            toolName: "add",
            input: JSON.stringify({ x: 10, y: 5 }),
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

    // 5. Verify the tool was called and returned correct result
    const toolCalls = result.toolCalls as Array<{
      toolName: string;
      input: unknown;
    }>;
    TestEquality.equals("should have 1 tool call", toolCalls.length, 1);
    TestEquality.equals(
      "tool name should be add",
      toolCalls[0]!.toolName,
      "add",
    );
    TestEquality.equals("tool args should match", toolCalls[0]!.input, {
      x: 10,
      y: 5,
    });

    // 6. Verify tool result
    const toolResults = result.toolResults as Array<{ output: unknown }>;
    TestEquality.equals("should have 1 tool result", toolResults.length, 1);
    TestEquality.equals("tool result should be 15", toolResults[0]!.output, {
      success: true,
      data: { value: 15 },
    });
  };
