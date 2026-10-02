import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

class AnotherCalculator {
  /** Another add function that will conflict. */
  add(p: { a: number; b: number }): { value: number } {
    return { value: p.a + p.b };
  }
}

/**
 * Verifies vercel class controller duplicate error against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts its result.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Constructs two native class controllers and checks that unprefixed add collision throws with the Duplicate tool name diagnostic.
 * @evidence contracts/testing.md#independent-expectations Calculator and AnotherCalculator each declare add, so prefix:false must not silently overwrite either tool.
 * @evidence contracts/testing.md#distinguishing-cases The colliding pair is the negative naming case; class_controller_no_prefix owns the noncolliding explicit-false population, and prefixed_tool_name_namespace owns positive distinct controller names.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_class_controller_duplicate_error in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary The actual native producer emits controller or structured-output metadata consumed by the public Vercel adapter. This retains a producer-to-adapter assembly check that handwritten metadata alone would not exercise.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each entry creates its own controller, seeds and mock model or callback counters. Awaited tool/SDK Promises expose failures to DynamicExecutor; this case opens no server, live-provider session or separate process.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_class_controller_duplicate_error =
  async (): Promise<void> => {
    // 1. Create two controllers with same function names (when prefix is false)
    const controller1: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calc1", new Calculator());

    const controller2: ILlmController<AnotherCalculator> =
      typia.llm.controller<AnotherCalculator>("calc2", new AnotherCalculator());

    // 2. Should throw due to duplicate name when prefix is false
    let threw: boolean = false;
    let errorMessage: string = "";
    try {
      toVercelTools({
        controllers: [controller1, controller2],
        prefix: false, // This will cause "add" to conflict
      });
    } catch (e) {
      threw = true;
      errorMessage = (e as Error).message;
    }

    if (!threw) {
      throw new Error("Expected duplicate tool name error");
    }
    if (!errorMessage.includes("Duplicate tool name")) {
      throw new Error(
        `Expected error message to include "Duplicate tool name", got: ${errorMessage}`,
      );
    }
  };
