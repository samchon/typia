import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies that invalid tool arguments produce a structured validation-error
 * response.
 *
 * Locks the validation-failure branch of `VercelToolsRegistrar`. When a
 * controller tool receives a wrong-type argument it must return `{ success:
 * false, error: string }` where the error string contains the validation title
 * and a JSON code block, rather than throwing or silently proceeding with the
 * invalid input.
 *
 * 1. Convert a `Calculator` controller to Vercel tools.
 * 2. Invoke the `add` tool with `{ x: "not a number", y: 5 }`.
 * 3. Assert the result is `{ success: false, error: string }`.
 * 4. Assert the error contains the validation title and a `\```json` block.
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
