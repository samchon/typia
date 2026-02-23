import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController, IValidation } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { stringifyValidationFailure } from "@typia/utils";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

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
    const addTool = tools.find((t) => t.name === "calculator_add");
    if (!addTool) {
      throw new Error("Missing add tool");
    }

    // 4. Test with invalid arguments - string instead of number
    // typia validates and returns stringifyValidationFailure format
    const invalidResult = await addTool.invoke({ x: "not a number", y: 5 });

    // Generate expected validation error message using typia
    const expected: IValidation = typia.validate<Calculator.IProps>({
      x: "not a number",
      y: 5,
    });
    if (expected.success === true) {
      throw new Error("Expected validation to fail, but it succeeded.");
    }

    const expectedMessage: string = stringifyValidationFailure(expected);
    TestValidator.equals(
      "Validation failure message should match",
      invalidResult,
      expectedMessage,
    );

    // 5. Test with valid arguments - should succeed
    const validResult = await addTool.invoke({ x: 10, y: 5 });
    TestValidator.equals("valid args should work", validResult, "15");
  };
