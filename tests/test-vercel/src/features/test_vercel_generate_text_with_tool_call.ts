import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import { generateText } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies end-to-end tool-call execution via the Vercel AI SDK's
 * `generateText`.
 *
 * Locks the happy-path integration between `VercelToolsRegistrar` and the
 * Vercel AI SDK. A mock model that requests the `add` tool must result in the
 * tool being executed and the correct numeric result appearing in
 * `toolResults`, confirming that tool wiring, argument dispatch, and result
 * wrapping all work together.
 *
 * 1. Convert a `Calculator` controller to Vercel tools.
 * 2. Run `generateText` with a mock model that calls `add(10, 5)`.
 * 3. Assert one tool call with name `"add"` and input `{ x: 10, y: 5 }`.
 * 4. Assert the tool result is `{ success: true, data: { value: 15 } }`.
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
    TestValidator.equals("should have 1 tool call", toolCalls.length, 1);
    TestValidator.equals(
      "tool name should be add",
      toolCalls[0]!.toolName,
      "add",
    );
    TestValidator.equals("tool args should match", toolCalls[0]!.input, {
      x: 10,
      y: 5,
    });

    // 6. Verify tool result
    const toolResults = result.toolResults as Array<{ output: unknown }>;
    TestValidator.equals("should have 1 tool result", toolResults.length, 1);
    TestValidator.equals("tool result should be 15", toolResults[0]!.output, {
      success: true,
      data: { value: 15 },
    });
  };
