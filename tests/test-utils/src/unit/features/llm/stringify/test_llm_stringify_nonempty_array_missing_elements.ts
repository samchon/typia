import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies missing elements follow existing array data.
 *
 * Feedback must show the available values and each missing-element failure
 * together.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert missing elements follow existing array data; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns two existing strings plus a placeholder and a singleton number plus two missing descriptions. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_nonempty_array_missing_elements = (): void => {
  // Test case: Non-empty array with missing element errors (path ending with [])
  const failure: IValidation.IFailure = {
    success: false,
    data: { items: ["a", "b"] },
    errors: [
      {
        path: "$input.items[]",
        expected: "string",
        value: undefined,
        description: "Array needs at least 3 elements",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // Should show the existing elements plus undefined placeholder
  TestEquality.equals(
    "contains existing element a",
    output.includes('"a"'),
    true,
  );
  TestEquality.equals(
    "contains existing element b",
    output.includes('"b"'),
    true,
  );
  TestEquality.equals(
    "contains undefined placeholder",
    output.includes("undefined"),
    true,
  );
  TestEquality.equals(
    "contains items[] path",
    output.includes("$input.items[]"),
    true,
  );

  // Test with multiple missing elements
  const multiFailure: IValidation.IFailure = {
    success: false,
    data: { items: [1] },
    errors: [
      {
        path: "$input.items[]",
        expected: "number",
        value: undefined,
        description: "First missing",
      },
      {
        path: "$input.items[]",
        expected: "number",
        value: undefined,
        description: "Second missing",
      },
    ],
  };

  const multiOutput: string = LlmJson.stringify(multiFailure);
  // Should have multiple undefined placeholders
  const undefinedMatches = multiOutput.match(/undefined/g) || [];
  TestEquality.equals(
    "contains multiple undefined",
    undefinedMatches.length >= 2,
    true,
  );
};
