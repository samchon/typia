import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import { generateText } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel generate text validation error against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts should have 1 tool call,
 * should have 1 tool result, result should be failure, error should contain
 * validation failure, error should indicate type error.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs AI SDK generateText with mock add arguments containing a nonnumeric x, then checks one call/result and failure feedback containing a JSON fence and number expectation.
 * @evidence contracts/testing.md#independent-expectations The explicit mock payload violates Calculator.IProps; the expected SDK result is a tool failure wrapper describing the numeric type mismatch.
 * @evidence contracts/testing.md#distinguishing-cases Argument rejection is distinct from controller runtime exception; generate_text_with_tool_call provides the valid single-call twin.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_generate_text_validation_error in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real SDK orchestration parses the injected nonnumeric add argument and must expose the adapter's corrective failure result. This proves SDK validation does not prevent typia feedback; the runtime-error sibling exercises later controller failure.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
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
    TestEquality.equals("should have 1 tool call", toolCalls.length, 1);

    // 6. Verify tool result contains validation error
    const toolResults = result.toolResults as Array<{ output: unknown }>;
    TestEquality.equals("should have 1 tool result", toolResults.length, 1);

    const toolResult = toolResults[0]!.output as {
      success: boolean;
      error: string;
    };
    TestEquality.equals("result should be failure", toolResult.success, false);
    TestValidator.predicate("error should contain validation failure", () =>
      toolResult.error.includes("```json"),
    );
    TestValidator.predicate("error should indicate type error", () =>
      toolResult.error.includes("number"),
    );
  };
