import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_unmappable_errors = (): void => {
  // Create a failure with errors that cannot be mapped to the data structure
  // This happens when error paths reference properties that don't exist in data
  const failure: IValidation.IFailure = {
    success: false,
    data: { name: "John" },
    errors: [
      {
        path: "$input.nonexistent.deeply.nested",
        expected: "string",
        value: undefined,
      },
      {
        path: "$input[999]",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  // Should contain the unmappable errors section
  TestValidator.equals(
    "contains unmappable section",
    output.includes("Unmappable validation errors"),
    true,
  );
  TestValidator.equals(
    "contains nonexistent path",
    output.includes("$input.nonexistent.deeply.nested"),
    true,
  );
  TestValidator.equals(
    "contains array index path",
    output.includes("$input[999]"),
    true,
  );

  // The main JSON block should still be present
  TestValidator.equals(
    "contains code block",
    output.includes("```json"),
    true,
  );
};
