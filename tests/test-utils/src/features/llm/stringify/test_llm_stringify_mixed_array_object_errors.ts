import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_mixed_array_object_errors = (): void => {
  // Test case: Complex structure with errors at multiple levels and types
  // This tests the full integration of array and object handling

  const failure: IValidation.IFailure = {
    success: false,
    data: {
      users: [
        {
          id: 1,
          profile: {
            name: "Alice",
            tags: ["admin", 123, "user"],
          },
        },
        {
          id: "two",
          profile: {
            name: 456,
            tags: [],
          },
        },
      ],
      metadata: {
        count: "wrong",
        items: [{ valid: true }, { valid: "false" }],
      },
    },
    errors: [
      {
        path: "$input.users[0].profile.tags[1]",
        expected: "string",
        value: 123,
      },
      {
        path: "$input.users[1].id",
        expected: "number",
        value: "two",
      },
      {
        path: "$input.users[1].profile.name",
        expected: "string",
        value: 456,
      },
      {
        path: "$input.users[1].profile.tags[]",
        expected: "string",
        value: undefined,
        description: "Tags array needs at least one element",
      },
      {
        path: "$input.metadata.count",
        expected: "number",
        value: "wrong",
      },
      {
        path: "$input.metadata.items[1].valid",
        expected: "boolean",
        value: "false",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);

  // Count error markers - should have multiple
  const errorMarkerCount = (output.match(/\/\/ ❌/g) || []).length;
  TestValidator.equals(
    "has multiple error markers",
    errorMarkerCount >= 5,
    true,
  );

  // Check all error paths are present
  TestValidator.equals(
    "contains tags[1] path",
    output.includes("$input.users[0].profile.tags[1]"),
    true,
  );
  TestValidator.equals(
    "contains users[1].id path",
    output.includes("$input.users[1].id"),
    true,
  );
  TestValidator.equals(
    "contains metadata.count path",
    output.includes("$input.metadata.count"),
    true,
  );

  // Check structure is preserved
  TestValidator.equals("contains users", output.includes('"users"'), true);
  TestValidator.equals("contains profile", output.includes('"profile"'), true);
  TestValidator.equals(
    "contains metadata",
    output.includes('"metadata"'),
    true,
  );

  // Check missing element placeholder
  TestValidator.equals(
    "contains undefined for missing tag",
    output.includes("undefined"),
    true,
  );
};
