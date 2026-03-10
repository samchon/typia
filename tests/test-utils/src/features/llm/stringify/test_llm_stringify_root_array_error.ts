import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_root_array_error = (): void => {
  // Test case: Root level is an array with error on the array itself
  // This tests the array path at root level ($input)

  const failure: IValidation.IFailure = {
    success: false,
    data: [1, 2, 3],
    errors: [
      {
        path: "$input",
        expected: "Array<string>",
        value: [1, 2, 3],
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals(
    "contains code block",
    output.includes("```json"),
    true,
  );
  TestValidator.equals(
    "contains error marker",
    output.includes("// ❌"),
    true,
  );
  TestValidator.equals(
    "contains $input path",
    output.includes("$input"),
    true,
  );
  // Array elements should be present
  TestValidator.equals(
    "contains element 1",
    output.includes("1"),
    true,
  );

  // Test: Root array with element errors
  const failure2: IValidation.IFailure = {
    success: false,
    data: ["a", "b", 123],
    errors: [
      {
        path: "$input[2]",
        expected: "string",
        value: 123,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals(
    "element-code-block",
    output2.includes("```json"),
    true,
  );
  TestValidator.equals(
    "element-error-marker",
    output2.includes("// ❌"),
    true,
  );
  TestValidator.equals(
    "element-path",
    output2.includes("$input[2]"),
    true,
  );

  // Test: Empty root array with missing elements
  const failure3: IValidation.IFailure = {
    success: false,
    data: [],
    errors: [
      {
        path: "$input[]",
        expected: "string",
        value: undefined,
        description: "Array must have at least one element",
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals(
    "empty-code-block",
    output3.includes("```json"),
    true,
  );
  TestValidator.equals(
    "empty-error-marker",
    output3.includes("// ❌"),
    true,
  );
  TestValidator.equals(
    "empty-undefined",
    output3.includes("undefined"),
    true,
  );
};
