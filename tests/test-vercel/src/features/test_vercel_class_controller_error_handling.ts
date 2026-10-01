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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (result should be a failure object; error should contain division by zero).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (result should be a failure object; error should contain division by zero) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_class_controller_error_handling is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
