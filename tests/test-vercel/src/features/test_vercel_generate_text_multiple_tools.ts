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
 * @evidence contracts/testing.md#behavioral-verification Runs real AI SDK generateText with three official mock tool calls and checks call/result counts plus add15, multiply21 and subtract58 outputs matched by call IDs.
 * @evidence contracts/testing.md#independent-expectations The mock protocol specifies three distinct call IDs and literal arithmetic inputs; handwritten outputs follow Calculator methods independently of native schema generation.
 * @evidence contracts/testing.md#distinguishing-cases Multiple dispatch and call-ID association differ from the single-call case; generate_text_validation_error and generate_text_runtime_error cover failure outputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_generate_text_multiple_tools in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The real AI SDK orchestration consumes the native-generated schema or tool callbacks through its supported injected mock-model protocol. This tests SDK assembly without an external provider or network.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
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
