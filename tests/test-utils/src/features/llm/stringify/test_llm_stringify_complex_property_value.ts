import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_complex_property_value = (): void => {
  // Test case: Property value is a complex object (not primitive)
  // This tests lines 231-252: the else branch for complex property values

  const failure: IValidation.IFailure = {
    success: false,
    data: {
      user: {
        profile: {
          email: "invalid",
          settings: {
            notifications: true,
          },
        },
      },
    },
    errors: [
      {
        path: "$input.user.profile.email",
        expected: "string & Format<email>",
        value: "invalid",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // Complex nested structure should be preserved
  TestValidator.equals("contains user", output.includes("user"), true);
  TestValidator.equals("contains profile", output.includes("profile"), true);
  TestValidator.equals("contains email", output.includes("email"), true);
  TestValidator.equals("contains settings", output.includes("settings"), true);
  TestValidator.equals(
    "contains notifications",
    output.includes("notifications"),
    true,
  );

  // Test: Array as property value with error in nested element
  const failure2: IValidation.IFailure = {
    success: false,
    data: {
      users: [
        { id: 1, name: "Alice" },
        { id: "two", name: "Bob" },
      ],
    },
    errors: [
      {
        path: "$input.users[1].id",
        expected: "number",
        value: "two",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("array-code-block", output2.includes("```json"), true);
  TestValidator.equals("array-error-marker", output2.includes("// ❌"), true);
  TestValidator.equals("array-Alice", output2.includes("Alice"), true);
  TestValidator.equals("array-Bob", output2.includes("Bob"), true);

  // Test: Complex object with error on the object itself (not property)
  const failure3: IValidation.IFailure = {
    success: false,
    data: {
      config: { nested: { deep: "value" } },
    },
    errors: [
      {
        path: "$input.config",
        expected: "string",
        value: { nested: { deep: "value" } },
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals(
    "obj-error-code-block",
    output3.includes("```json"),
    true,
  );
  TestValidator.equals("obj-error-marker", output3.includes("// ❌"), true);
  TestValidator.equals(
    "obj-error-path",
    output3.includes("$input.config"),
    true,
  );
};
