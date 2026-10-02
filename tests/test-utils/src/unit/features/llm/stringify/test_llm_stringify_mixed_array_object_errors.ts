import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies feedback retains errors across mixed nested containers.
 *
 * Independent paths in object/array mixtures must remain visible alongside the
 * structure and missing-element feedback.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert feedback retains errors across mixed nested containers; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns nested array/object paths, at least five markers and a missing tag placeholder. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
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

  TestEquality.equals("contains code block", output.includes("```json"), true);

  // Count error markers - should have multiple
  const errorMarkerCount = (output.match(/\/\/ ❌/g) || []).length;
  TestEquality.equals(
    "has multiple error markers",
    errorMarkerCount >= 5,
    true,
  );

  // Check all error paths are present
  TestEquality.equals(
    "contains tags[1] path",
    output.includes("$input.users[0].profile.tags[1]"),
    true,
  );
  TestEquality.equals(
    "contains users[1].id path",
    output.includes("$input.users[1].id"),
    true,
  );
  TestEquality.equals(
    "contains metadata.count path",
    output.includes("$input.metadata.count"),
    true,
  );

  // Check structure is preserved
  TestEquality.equals("contains users", output.includes('"users"'), true);
  TestEquality.equals("contains profile", output.includes('"profile"'), true);
  TestEquality.equals("contains metadata", output.includes('"metadata"'), true);

  // Check missing element placeholder
  TestEquality.equals(
    "contains undefined for missing tag",
    output.includes("undefined"),
    true,
  );
};
