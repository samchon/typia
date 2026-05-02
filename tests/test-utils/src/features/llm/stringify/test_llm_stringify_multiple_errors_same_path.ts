import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_multiple_errors_same_path = (): void => {
  // Test case: Multiple errors on the exact same path
  // This tests the code path where errorsByPath has multiple errors for one path
  // (lines 12-16 in stringifyValidationFailure.ts)
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
  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // The error comment should contain all three expected values
  TestValidator.equals(
    "contains Format<email>",
    output.includes("Format<email>"),
    true,
  );
  TestValidator.equals(
    "contains MinLength<5>",
    output.includes("MinLength<5>"),
    true,
  );
  TestValidator.equals("contains Pattern", output.includes("Pattern"), true);
  // Should NOT have unmappable errors section
  TestValidator.equals(
    "no unmappable section",
    output.includes("Unmappable"),
    false,
  );
};
