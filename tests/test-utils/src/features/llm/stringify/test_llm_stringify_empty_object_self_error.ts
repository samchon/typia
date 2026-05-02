import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_empty_object_self_error = (): void => {
  // Test case: Empty object {} with an error on the object itself (not its properties)
  // This tests line 188-189: if (allKeys.length === 0) return `${indent}{}${errorComment}`
  const failure: IValidation.IFailure = {
    success: false,
    data: {},
    errors: [
      {
        path: "$input",
        expected: "object & { name: string; age: number }",
        value: {},
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  TestValidator.equals("contains $input path", output.includes("$input"), true);
  // The {} should be followed by the error comment
  TestValidator.equals(
    "contains empty object with error",
    output.includes("{}") || output.includes("{ }"),
    true,
  );
};
