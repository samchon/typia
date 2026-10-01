import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies root-array feedback distinguishes container and element errors.
 *
 * The root path, a particular index and a missing-element wildcard describe
 * different correction locations.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert root-array feedback distinguishes container and element errors; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns root array self error, a third-element error and an empty array with a missing-element description. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
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

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  TestEquality.equals("contains $input path", output.includes("$input"), true);
  // Array elements should be present
  TestEquality.equals("contains element 1", output.includes("1"), true);

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
  TestEquality.equals("element-code-block", output2.includes("```json"), true);
  TestEquality.equals("element-error-marker", output2.includes("// ❌"), true);
  TestEquality.equals("element-path", output2.includes("$input[2]"), true);

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
  TestEquality.equals("empty-code-block", output3.includes("```json"), true);
  TestEquality.equals("empty-error-marker", output3.includes("// ❌"), true);
  TestEquality.equals("empty-undefined", output3.includes("undefined"), true);
};
