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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions.
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The case owns the single scenario its assertions describe. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_class_controller_duplicate_error is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
