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
 * Verifies that conflicting tool names across controllers raise an error.
 *
 * Locks the duplicate-detection branch of `VercelToolsRegistrar`. When `prefix:
 * false` is used and two controllers both expose a function named `add`,
 * `toVercelTools` must throw an error whose message contains `"Duplicate tool
 * names found"` before returning any tool map.
 *
 * 1. Create two controllers each exposing an `add` function.
 * 2. Call `toVercelTools` with `prefix: false`.
 * 3. Assert the call throws.
 * 4. Assert the error message contains `"Duplicate tool names found"`.
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
    if (!errorMessage.includes("Duplicate tool names found")) {
      throw new Error(
        `Expected error message to include "Duplicate tool names found", got: ${errorMessage}`,
      );
    }
  };
