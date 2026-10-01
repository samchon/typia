import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies feedback preserves authored error descriptions.
 *
 * Explanations are part of model feedback and must survive both single and
 * grouped failures.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert feedback preserves authored error descriptions; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns one description, two descriptions at one path and an absent description. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_error_description = (): void => {
  // Test case: Error with description field

  const failure: IValidation.IFailure = {
    success: false,
    data: { email: "invalid-email" },
    errors: [
      {
        path: "$input.email",
        expected: "string & Format<email>",
        value: "invalid-email",
        description: "Email must be a valid email address",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // Should include the description in the error comment
  TestEquality.equals(
    "contains description",
    output.includes("Email must be a valid email address"),
    true,
  );

  // Test with multiple errors with different descriptions
  const failure2: IValidation.IFailure = {
    success: false,
    data: { password: "123" },
    errors: [
      {
        path: "$input.password",
        expected: "string & MinLength<8>",
        value: "123",
        description: "Password must be at least 8 characters",
      },
      {
        path: "$input.password",
        expected: "string & Pattern<[A-Z]>",
        value: "123",
        description: "Password must contain at least one uppercase letter",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestEquality.equals(
    "multi-contains description 1",
    output2.includes("Password must be at least 8 characters"),
    true,
  );
  TestEquality.equals(
    "multi-contains description 2",
    output2.includes("Password must contain at least one uppercase letter"),
    true,
  );

  // Test with undefined description (should not break)
  const failure3: IValidation.IFailure = {
    success: false,
    data: { value: "test" },
    errors: [
      {
        path: "$input.value",
        expected: "number",
        value: "test",
        // description is undefined
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestEquality.equals("no-desc-code-block", output3.includes("```json"), true);
  TestEquality.equals("no-desc-error-marker", output3.includes("// ❌"), true);
};
