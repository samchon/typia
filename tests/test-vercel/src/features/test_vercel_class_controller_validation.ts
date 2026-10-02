import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel class controller validation against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts result should be a failure
 * object, error should contain title, error should contain json code block.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Executes add with a nonnumeric x string and asserts success:false, the argument-error title and a JSON feedback fence.
 * @evidence contracts/testing.md#independent-expectations Calculator.IProps requires numbers, so the adapter must reject a noncoercible string before dispatching and explain the add arguments.
 * @evidence contracts/testing.md#distinguishing-cases The malformed numeric argument owns rejection; class_controller_execute owns valid arithmetic and tool_error_single_json_fence tightens formatting multiplicity.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_class_controller_validation in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The native numeric argument validator connects to the adapter's coercion and feedback path. A noncoercible x must fail with an add argument title and JSON fence; arithmetic execution supplies the valid twin.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_class_controller_validation =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
    });

    // 3. Test validation failure: wrong type (string instead of number)
    const addTool: Tool = tools["add"]!;
    const result: unknown = await addTool.execute!(
      { x: "not a number", y: 5 },
      { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
    );

    // 4. Verify the result contains validation error
    const res = result as { success?: boolean; error?: string };
    TestValidator.predicate(
      "result should be a failure object",
      () => res.success === false && typeof res.error === "string",
    );
    TestValidator.predicate("error should contain title", () =>
      res.error!.includes('Type errors in "add" arguments'),
    );
    TestValidator.predicate("error should contain json code block", () =>
      res.error!.includes("```json"),
    );
  };
