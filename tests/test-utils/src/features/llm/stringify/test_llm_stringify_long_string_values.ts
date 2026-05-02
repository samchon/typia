import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_long_string_values = (): void => {
  // Test case: Very long string values in data and expected fields
  // This tests that JSON.stringify handles long strings correctly

  const longString = "a".repeat(10000);

  const failure: IValidation.IFailure = {
    success: false,
    data: { content: longString },
    errors: [
      {
        path: "$input.content",
        expected: "string & MaxLength<1000>",
        value: longString,
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // The long string should be present (at least partially)
  TestValidator.equals("contains long string", output.includes("aaaa"), true);
  TestValidator.equals("output is long enough", output.length > 10000, true);

  // Test: Long expected type description
  const longExpected = "string & " + Array(100).fill("Constraint").join(" & ");

  const failure2: IValidation.IFailure = {
    success: false,
    data: { value: "test" },
    errors: [
      {
        path: "$input.value",
        expected: longExpected,
        value: "test",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals(
    "long-expected-code-block",
    output2.includes("```json"),
    true,
  );
  TestValidator.equals(
    "long-expected-constraint",
    output2.includes("Constraint"),
    true,
  );

  // Test: Long description
  const longDescription =
    "This validation failed because " + "reason ".repeat(500);

  const failure3: IValidation.IFailure = {
    success: false,
    data: { value: "test" },
    errors: [
      {
        path: "$input.value",
        expected: "number",
        value: "test",
        description: longDescription,
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals(
    "long-desc-code-block",
    output3.includes("```json"),
    true,
  );
  TestValidator.equals("long-desc-content", output3.includes("reason"), true);
};
