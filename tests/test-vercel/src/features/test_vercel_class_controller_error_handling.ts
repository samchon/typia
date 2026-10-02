import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel class controller error handling against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts result should be a failure
 * object, error should contain division by zero.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes the transformed Calculator divide tool with x=10,y=0 and asserts failure plus the declared Division by zero message.
 * @evidence contracts/testing.md#independent-expectations Calculator.divide deliberately throws when y is zero; the adapter contract returns success:false with actionable error text instead of rejecting its tool Promise.
 * @evidence contracts/testing.md#distinguishing-cases The zero denominator is the runtime-exception branch; class_controller_execute owns a valid 20/4 division through the same adapter.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_class_controller_error_handling in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The actual native producer emits controller or structured-output metadata consumed by the public Vercel adapter. This retains a producer-to-adapter assembly check that handwritten metadata alone would not exercise.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_class_controller_error_handling =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
    });

    // 3. Test divide by zero (throws an error)
    const divideTool: Tool = tools["divide"]!;
    const result: unknown = await divideTool.execute!(
      { x: 10, y: 0 },
      { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
    );

    // 4. Verify the result contains error
    TestValidator.predicate("result should be a failure object", () => {
      const res = result as { success?: boolean; error?: string };
      return res.success === false && typeof res.error === "string";
    });

    TestValidator.predicate("error should contain division by zero", () => {
      const res = result as { success: boolean; error: string };
      return res.error.includes("Division by zero");
    });
  };
