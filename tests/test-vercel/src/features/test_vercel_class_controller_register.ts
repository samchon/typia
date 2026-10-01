import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies vercel class controller register against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts should have 4 tools,
 * should have add, should have subtract, should have multiply, should have
 * divide, tool should have description.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (should have 4 tools; should have add; should have subtract; should have multiply; should have divide; tool should have description).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (should have 4 tools; should have add; should have subtract; should have multiply; should have divide; tool should have description) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_class_controller_register is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_vercel_class_controller_register =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
    });

    // 3. Verify all tools are registered without prefix (default)
    const toolNames: string[] = Object.keys(tools).sort();
    TestEquality.equals("should have 4 tools", toolNames.length, 4);
    TestValidator.predicate("should have add", () => toolNames.includes("add"));
    TestValidator.predicate("should have subtract", () =>
      toolNames.includes("subtract"),
    );
    TestValidator.predicate("should have multiply", () =>
      toolNames.includes("multiply"),
    );
    TestValidator.predicate("should have divide", () =>
      toolNames.includes("divide"),
    );

    // 4. Verify tool structure
    const addTool: Tool = tools["add"]!;
    TestValidator.predicate(
      "tool should have description",
      () => addTool.description !== undefined,
    );
    TestValidator.predicate(
      "tool should have inputSchema",
      () => addTool.inputSchema !== undefined,
    );
    TestValidator.predicate(
      "tool should have execute function",
      () => typeof addTool.execute === "function",
    );
  };
