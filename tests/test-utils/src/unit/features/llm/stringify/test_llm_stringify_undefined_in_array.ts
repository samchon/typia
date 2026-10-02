import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies undefined array elements retain index feedback.
 *
 * Array positions remain meaningful even when their values have no JSON
 * spelling.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert undefined array elements retain index feedback; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns one undefined slot between numbers and three undefined slots with separate index errors. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_undefined_in_array = (): void => {
  // Test case: undefined value inside an array
  const failure: IValidation.IFailure = {
    success: false,
    data: { items: [1, undefined, 3] },
    errors: [
      {
        path: "$input.items[1]",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // Should show undefined in the array
  TestEquality.equals("contains undefined", output.includes("undefined"), true);
  TestEquality.equals(
    "contains items[1] path",
    output.includes("$input.items[1]"),
    true,
  );

  // Test with multiple undefined values
  const multiFailure: IValidation.IFailure = {
    success: false,
    data: { items: [undefined, undefined, undefined] },
    errors: [
      {
        path: "$input.items[0]",
        expected: "number",
        value: undefined,
      },
      {
        path: "$input.items[1]",
        expected: "number",
        value: undefined,
      },
      {
        path: "$input.items[2]",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const multiOutput: string = LlmJson.stringify(multiFailure);
  const undefinedCount = (multiOutput.match(/undefined/g) || []).length;
  TestEquality.equals("contains 3 undefined values", undefinedCount >= 3, true);
};
