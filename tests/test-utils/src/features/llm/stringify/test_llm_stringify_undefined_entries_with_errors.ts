import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_undefined_entries_with_errors = (): void => {
  // Test case: Object with undefined entries that have errors
  // This tests lines 161-163 and 173-180: undefinedEntryKeys and undefinedKeysWithErrors

  // Create object with explicit undefined values (not missing, but set to undefined)
  const data: Record<string, unknown> = {
    name: "John",
    email: undefined, // explicitly set to undefined
    age: undefined, // explicitly set to undefined
  };

  const failure: IValidation.IFailure = {
    success: false,
    data,
    errors: [
      {
        path: "$input.email",
        expected: "string & Format<email>",
        value: undefined,
      },
      {
        path: "$input.age",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // Both undefined fields should appear in output
  TestValidator.equals("contains email", output.includes("email"), true);
  TestValidator.equals("contains age", output.includes("age"), true);
  // Should show undefined values
  TestValidator.equals(
    "contains undefined",
    output.includes("undefined"),
    true,
  );

  // Test: Object with only undefined entries that have errors
  const onlyUndefined: Record<string, unknown> = {
    field1: undefined,
    field2: undefined,
  };

  const failure2: IValidation.IFailure = {
    success: false,
    data: onlyUndefined,
    errors: [
      {
        path: "$input.field1",
        expected: "string",
        value: undefined,
      },
      {
        path: "$input.field2",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals(
    "only-undefined-code-block",
    output2.includes("```json"),
    true,
  );
  TestValidator.equals(
    "only-undefined-field1",
    output2.includes("field1"),
    true,
  );
  TestValidator.equals(
    "only-undefined-field2",
    output2.includes("field2"),
    true,
  );
};
