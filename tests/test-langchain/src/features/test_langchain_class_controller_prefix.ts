import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_langchain_class_controller_prefix =
  async (): Promise<void> => {
    // 1. Create class-based controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Test with prefix: true (default)
    const toolsWithPrefix: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
      prefix: true,
    });

    // Tools should be named calculator_add, calculator_subtract, etc.
    const toolNamesWithPrefix = toolsWithPrefix.map((t) => t.name).sort();
    TestValidator.equals("tool names with prefix", toolNamesWithPrefix, [
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
    TestValidator.equals("tool names without prefix", toolNamesWithoutPrefix, [
      "add",
      "divide",
      "multiply",
      "subtract",
    ]);
  };
