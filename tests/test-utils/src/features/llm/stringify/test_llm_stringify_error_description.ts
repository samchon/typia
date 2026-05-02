import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_error_description = (): void => {
  // Test case: Error with description field
  // This tests lines 299-303: the description field is included in error comment

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

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // Should include the description in the error comment
  TestValidator.equals(
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
  TestValidator.equals(
    "multi-contains description 1",
    output2.includes("Password must be at least 8 characters"),
    true,
  );
  TestValidator.equals(
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
  TestValidator.equals("no-desc-code-block", output3.includes("```json"), true);
  TestValidator.equals("no-desc-error-marker", output3.includes("// ❌"), true);
};
