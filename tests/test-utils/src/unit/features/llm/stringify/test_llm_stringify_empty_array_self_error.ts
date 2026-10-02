import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies empty arrays retain errors on the array itself.
 *
 * Container validation failures differ from missing-element placeholders and
 * need their own annotation.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert empty arrays retain errors on the array itself; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns nested and root empty arrays with self errors. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_empty_array_self_error = (): void => {
  // Test case: Empty array [] with an error on the array itself (not its elements)

  const failure: IValidation.IFailure = {
    success: false,
    data: { items: [] },
    errors: [
      {
        path: "$input.items",
        expected: "Array<string> & MinItems<1>",
        value: [],
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  TestEquality.equals(
    "contains $input.items path",
    output.includes("$input.items"),
    true,
  );
  // Should show [] with error comment
  TestEquality.equals("contains empty array", output.includes("[]"), true);

  // Test: Root empty array with self error
  const failure2: IValidation.IFailure = {
    success: false,
    data: [],
    errors: [
      {
        path: "$input",
        expected: "Array<number> & MinItems<1>",
        value: [],
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestEquality.equals("root-code-block", output2.includes("```json"), true);
  TestEquality.equals("root-error-marker", output2.includes("// ❌"), true);
  TestEquality.equals("root-$input", output2.includes("$input"), true);
};
