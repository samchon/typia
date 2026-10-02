import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies grouped feedback retains every expected constraint.
 *
 * Several failures at one value must remain distinguishable rather than
 * replacing each other in the path index.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert grouped feedback retains every expected constraint; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns three expected constraints on one email path with no unmappable section. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_multiple_errors_same_path = (): void => {
  // Test case: Multiple errors on the exact same path
  // This tests the code path where errorsByPath has multiple errors for one path
  const failure: IValidation.IFailure = {
    success: false,
    data: { email: "invalid" },
    errors: [
      {
        path: "$input.email",
        expected: "string & Format<email>",
        value: "invalid",
      },
      {
        path: "$input.email",
        expected: "string & MinLength<5>",
        value: "invalid",
      },
      {
        path: "$input.email",
        expected: "string & Pattern<^[a-z]+@>",
        value: "invalid",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  // All three errors should be in a single error comment array
  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // The error comment should contain all three expected values
  TestEquality.equals(
    "contains Format<email>",
    output.includes("Format<email>"),
    true,
  );
  TestEquality.equals(
    "contains MinLength<5>",
    output.includes("MinLength<5>"),
    true,
  );
  TestEquality.equals("contains Pattern", output.includes("Pattern"), true);
  // Should NOT have unmappable errors section
  TestEquality.equals(
    "no unmappable section",
    output.includes("Unmappable"),
    false,
  );
};
