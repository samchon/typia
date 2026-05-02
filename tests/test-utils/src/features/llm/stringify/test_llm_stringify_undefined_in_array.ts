import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_undefined_in_array = (): void => {
  // Test case: undefined value inside an array
  // This tests line 66-68: if (inArray && value === undefined)
  const failure: IValidation.IFailure = {
    success: false,
    data: { items: [1, undefined, 3] },
    errors: [
      {
        path: "$input.items[1]",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // Should show undefined in the array
  TestValidator.equals(
    "contains undefined",
    output.includes("undefined"),
    true,
  );
  TestValidator.equals(
    "contains items[1] path",
    output.includes("$input.items[1]"),
    true,
  );

  // Test with multiple undefined values
  const multiFailure: IValidation.IFailure = {
    success: false,
    data: { items: [undefined, undefined, undefined] },
    errors: [
      {
        path: "$input.items[0]",
        expected: "number",
        value: undefined,
      },
      {
        path: "$input.items[1]",
        expected: "number",
        value: undefined,
      },
      {
        path: "$input.items[2]",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const multiOutput: string = LlmJson.stringify(multiFailure);
  const undefinedCount = (multiOutput.match(/undefined/g) || []).length;
  TestValidator.equals(
    "contains 3 undefined values",
    undefinedCount >= 3,
    true,
  );
};
