import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies empty arrays expose missing-element placeholders.
 *
 * An empty array's missing-element errors describe absent slots rather than a
 * failure of the array value itself.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 */
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
  TestEquality.equals(
    "contains undefined placeholder",
    output.includes("undefined"),
    true,
  );
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  TestEquality.equals(
    "contains items path",
    output.includes("$input.items[]"),
    true,
  );
  TestEquality.equals("contains code block", output.includes("```json"), true);

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
  TestEquality.equals(
    "contains multiple undefined placeholders",
    undefinedCount >= 2,
    true,
  );
};
