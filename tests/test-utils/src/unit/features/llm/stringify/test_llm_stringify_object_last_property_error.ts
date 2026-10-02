import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies last object properties retain errors and missing siblings.
 *
 * A missing property after existing data must remain distinct from an error on
 * the last present property.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 */
export const test_llm_stringify_object_last_property_error = (): void => {
  // Test case: Error on the last property of an object

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

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  TestEquality.equals(
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
  TestEquality.equals("missing-code-block", output2.includes("```json"), true);
  // Both b and c should appear
  TestEquality.equals("missing-b", output2.includes('"b"'), true);
  TestEquality.equals("missing-c", output2.includes('"c"'), true);
  TestEquality.equals("missing-undefined", output2.includes("undefined"), true);

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
  TestEquality.equals("single-code-block", output3.includes("```json"), true);
  TestEquality.equals("single-error-marker", output3.includes("// ❌"), true);
  TestEquality.equals("single-only", output3.includes('"only"'), true);

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
  TestEquality.equals("nested-code-block", output4.includes("```json"), true);
  TestEquality.equals("nested-error-marker", output4.includes("// ❌"), true);
  TestEquality.equals("nested-last", output4.includes('"last"'), true);
  TestEquality.equals("nested-nested", output4.includes('"nested"'), true);
};
