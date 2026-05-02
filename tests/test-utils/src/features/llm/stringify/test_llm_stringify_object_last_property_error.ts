import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_object_last_property_error = (): void => {
  // Test case: Error on the last property of an object
  // This tests line 226-227: comma handling for last property

  const failure: IValidation.IFailure = {
    success: false,
    data: { a: 1, b: 2, c: "wrong" },
    errors: [
      {
        path: "$input.c",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  TestValidator.equals(
    "contains $input.c path",
    output.includes("$input.c"),
    true,
  );

  // Test: Last property error with missing properties after
  const failure2: IValidation.IFailure = {
    success: false,
    data: { a: 1, b: "wrong" },
    errors: [
      {
        path: "$input.b",
        expected: "number",
        value: "wrong",
      },
      {
        path: "$input.c",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("missing-code-block", output2.includes("```json"), true);
  // Both b and c should appear
  TestValidator.equals("missing-b", output2.includes('"b"'), true);
  TestValidator.equals("missing-c", output2.includes('"c"'), true);
  TestValidator.equals(
    "missing-undefined",
    output2.includes("undefined"),
    true,
  );

  // Test: Single property object with error
  const failure3: IValidation.IFailure = {
    success: false,
    data: { only: "wrong" },
    errors: [
      {
        path: "$input.only",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("single-code-block", output3.includes("```json"), true);
  TestValidator.equals("single-error-marker", output3.includes("// ❌"), true);
  TestValidator.equals("single-only", output3.includes('"only"'), true);

  // Test: Complex object as last property with error inside
  const failure4: IValidation.IFailure = {
    success: false,
    data: {
      first: "ok",
      last: { nested: "wrong" },
    },
    errors: [
      {
        path: "$input.last.nested",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output4: string = LlmJson.stringify(failure4);
  TestValidator.equals("nested-code-block", output4.includes("```json"), true);
  TestValidator.equals("nested-error-marker", output4.includes("// ❌"), true);
  TestValidator.equals("nested-last", output4.includes('"last"'), true);
  TestValidator.equals("nested-nested", output4.includes('"nested"'), true);
};
