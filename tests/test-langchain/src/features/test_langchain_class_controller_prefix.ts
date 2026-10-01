import { DynamicStructuredTool } from "@langchain/core/tools";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies langchain class controller prefix against the native
 * typia.llm.controller output.
 *
 * The case builds its input in this file and asserts tool names with prefix,
 * tool names without prefix.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (tool names with prefix; tool names without prefix).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (tool names with prefix; tool names without prefix) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_class_controller_prefix is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_langchain_class_controller_prefix =
  async (): Promise<void> => {
    // 1. Create class-based controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Test with prefix: true
    const toolsWithPrefix: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
      prefix: true,
    });

    // Tools should be named calculator_add, calculator_subtract, etc.
    const toolNamesWithPrefix = toolsWithPrefix.map((t) => t.name).sort();
    TestEquality.equals("tool names with prefix", toolNamesWithPrefix, [
      "calculator_add",
      "calculator_divide",
      "calculator_multiply",
      "calculator_subtract",
    ]);

    // 3. Test with prefix: false
    const toolsWithoutPrefix: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
      prefix: false,
    });

    // Tools should be named add, subtract, etc.
    const toolNamesWithoutPrefix = toolsWithoutPrefix.map((t) => t.name).sort();
    TestEquality.equals("tool names without prefix", toolNamesWithoutPrefix, [
      "add",
      "divide",
      "multiply",
      "subtract",
    ]);
  };
