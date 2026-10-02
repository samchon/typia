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
 * @evidence contracts/testing.md#behavioral-verification Runs AI SDK generateText with one mock add10/5 call, verifies parsed name and arguments, and compares the single success result to15.
 * @evidence contracts/testing.md#independent-expectations The handwritten provider tool-call JSON and Calculator arithmetic establish call identity, parsed inputs and expected wrapped output.
 * @evidence contracts/testing.md#distinguishing-cases Single-call parsing and dispatch form the successful twin of SDK validation/runtime-error cases; multiple-tools covers ID association across three calls.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_generate_text_with_tool_call in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The real AI SDK orchestration consumes the native-generated schema or tool callbacks through its supported injected mock-model protocol. This tests SDK assembly without an external provider or network.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
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
