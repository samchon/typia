import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies that `prefix: false` produces bare function names as tool keys.
 *
 * Locks the prefix-disabled branch of `VercelToolsRegistrar`. When `prefix:
 * false`, the returned `Record<string, Tool>` must use bare function names
 * (`add`, `subtract`, etc.) rather than `<controller>_<function>` names.
 *
 * 1. Convert a `Calculator` controller to Vercel tools with `prefix: false`.
 * 2. Assert the tool map contains exactly the four bare arithmetic names.
 */
export const test_vercel_class_controller_no_prefix =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools without prefix
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
      prefix: false,
    });

    // 3. Verify all tools are registered without prefix
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
  };
