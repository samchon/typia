import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // Complex nested structure should be preserved
  TestEquality.equals("contains user", output.includes("user"), true);
  TestEquality.equals("contains profile", output.includes("profile"), true);
  TestEquality.equals("contains email", output.includes("email"), true);
  TestEquality.equals("contains settings", output.includes("settings"), true);
  TestEquality.equals(
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
  TestEquality.equals("array-code-block", output2.includes("```json"), true);
  TestEquality.equals("array-error-marker", output2.includes("// ❌"), true);
  TestEquality.equals("array-Alice", output2.includes("Alice"), true);
  TestEquality.equals("array-Bob", output2.includes("Bob"), true);

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
  TestEquality.equals(
    "obj-error-code-block",
    output3.includes("```json"),
    true,
  );
  TestEquality.equals("obj-error-marker", output3.includes("// ❌"), true);
  TestEquality.equals(
    "obj-error-path",
    output3.includes("$input.config"),
    true,
  );
};
