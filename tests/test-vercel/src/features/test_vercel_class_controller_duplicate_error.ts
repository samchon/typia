import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

class AnotherCalculator {
  /** Another add function that will conflict. */
  add(p: { a: number; b: number }): number {
    return p.a + p.b;
  }
}

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
