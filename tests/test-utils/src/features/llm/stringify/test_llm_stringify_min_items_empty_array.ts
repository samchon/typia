import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_min_items_empty_array = (): void => {
  // Test case: Empty array with MinItems constraint violation
  // The error path ends with [] to indicate missing array elements
  const failure: IValidation.IFailure = {
    success: false,
    data: { items: [] },
    errors: [
      {
        path: "$input.items[]",
        expected: "string",
        value: undefined,
        description: "Missing required array element",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  // Should show undefined placeholder for missing element
  TestValidator.equals(
    "contains undefined placeholder",
    output.includes("undefined"),
    true,
  );
  TestValidator.equals(
    "contains error marker",
    output.includes("// ❌"),
    true,
  );
  TestValidator.equals(
    "contains items path",
    output.includes("$input.items[]"),
    true,
  );
  TestValidator.equals(
    "contains code block",
    output.includes("```json"),
    true,
  );

  // Test with multiple missing elements
  const multiFailure: IValidation.IFailure = {
    success: false,
    data: { items: [] },
    errors: [
      {
        path: "$input.items[]",
        expected: "string",
        value: undefined,
        description: "First missing element",
      },
      {
        path: "$input.items[]",
        expected: "string",
        value: undefined,
        description: "Second missing element",
      },
    ],
  };

  const multiOutput: string = LlmJson.stringify(multiFailure);

  // Should show multiple undefined placeholders
  const undefinedCount = (multiOutput.match(/undefined/g) || []).length;
  TestValidator.equals(
    "contains multiple undefined placeholders",
    undefinedCount >= 2,
    true,
  );
};
