import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies that runtime errors inside a Vercel tool execution return a failure
 * envelope.
 *
 * Locks the error-catching branch of `VercelToolsRegistrar`. When a controller
 * method throws (e.g. division by zero), the tool's `execute` function must
 * catch the error and return `{ success: false, error: string }` instead of
 * propagating the exception to the Vercel AI SDK caller.
 *
 * 1. Convert a `Calculator` controller to Vercel tools.
 * 2. Call the `divide` tool with `{ x: 10, y: 0 }`.
 * 3. Assert the result is `{ success: false, error: string }`.
 * 4. Assert the error string contains "Division by zero".
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
