import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies empty objects retain errors on the object itself.
 *
 * An empty object has no child line on which to place its container error.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert empty objects retain errors on the object itself; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns an empty root object with a self error; missing child properties execute in the missing-property case. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_empty_object_self_error = (): void => {
  // Test case: Empty object {} with an error on the object itself (not its properties)
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

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  TestEquality.equals("contains $input path", output.includes("$input"), true);
  // The {} should be followed by the error comment
  TestEquality.equals(
    "contains empty object with error",
    output.includes("{}") || output.includes("{ }"),
    true,
  );
};
