import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies that invalid tool arguments are rejected with a
 * `ToolInputParsingException`.
 *
 * Locks the validation-failure branch of `LangChainToolsRegistrar`. Passing a
 * string where a number is expected must result in `ToolInputParsingException`,
 * not a silent success or an untyped runtime crash.
 *
 * 1. Create an `ILlmController<Calculator>` and convert to LangChain tools.
 * 2. Invoke the `add` tool with `{ x: "not a number", y: 5 }`.
 * 3. Assert the invocation throws `ToolInputParsingException`.
 * 4. Invoke the same tool with valid arguments and assert success.
 */
export const test_langchain_class_controller_validation =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to LangChain tools
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });

    // 3. Find add tool
    const addTool = tools.find((t) => t.name === "add");
    if (!addTool) {
      throw new Error("Missing add tool");
    }

    // 4. Test with invalid arguments - should throw ToolInputParsingException
    //    (may be thrown by LangChain's JSON Schema validation or typia's validation)
    let caughtError: unknown = undefined;
    try {
      await addTool.invoke({ x: "not a number", y: 5 });
    } catch (error) {
      caughtError = error;
    }
    if (caughtError === undefined) {
      throw new Error(
        "Expected ToolInputParsingException to be thrown, but invoke succeeded.",
      );
    }
    TestValidator.predicate(
      "should throw ToolInputParsingException",
      () => caughtError instanceof ToolInputParsingException,
    );

    // 5. Test with valid arguments - should succeed
    const validResult = await addTool.invoke({ x: 10, y: 5 });
    TestValidator.equals("valid args should work", validResult, {
      success: true,
      data: { value: 15 },
    });
  };
