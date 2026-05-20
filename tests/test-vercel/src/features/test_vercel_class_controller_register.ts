import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies that class-controller tools are correctly registered in the Vercel
 * tool map.
 *
 * Locks the basic registration branch of `VercelToolsRegistrar`. The returned
 * `Record<string, Tool>` must contain the expected four arithmetic tool names
 * (no prefix by default), and each tool must have `description`, `inputSchema`,
 * and a callable `execute` property.
 *
 * 1. Convert a `Calculator` controller to Vercel tools via `toVercelTools`.
 * 2. Assert the tool map has four entries with the expected names.
 * 3. Assert each of `description`, `inputSchema`, and `execute` is present on the
 *    `add` tool.
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
    TestValidator.equals("should have 4 tools", toolNames.length, 4);
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
