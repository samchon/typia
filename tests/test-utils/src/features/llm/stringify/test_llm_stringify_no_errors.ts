import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_no_errors = (): void => {
  // Test case: Failure object with empty errors array
  // This is an edge case - normally failures have errors

  const failure: IValidation.IFailure = {
    success: false,
    data: { name: "John", age: 30 },
    errors: [],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals(
    "ends with code block",
    output.trim().endsWith("```"),
    true,
  );
  // Should have no error markers
  TestValidator.equals("no error markers", output.includes("// ❌"), false);
  // Should not have unmappable section
  TestValidator.equals(
    "no unmappable section",
    output.includes("Unmappable"),
    false,
  );
  // Data should still be present
  TestValidator.equals("contains name", output.includes('"name"'), true);
  TestValidator.equals("contains John", output.includes('"John"'), true);
};
