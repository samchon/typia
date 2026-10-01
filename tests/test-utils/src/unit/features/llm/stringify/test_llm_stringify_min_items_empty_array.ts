import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies empty arrays expose missing-element placeholders.
 *
 * An empty array's missing-element errors describe absent slots rather than a
 * failure of the array value itself.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert empty arrays expose missing-element placeholders; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns one placeholder and two independently described placeholders in an empty nested array. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
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
