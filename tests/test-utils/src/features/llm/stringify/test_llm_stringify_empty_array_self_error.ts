import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_empty_array_self_error = (): void => {
  // Test case: Empty array [] with an error on the array itself (not its elements)
  // This tests line 94: return `${indent}[]${errorComment}`

  const failure: IValidation.IFailure = {
    success: false,
    data: { items: [] },
    errors: [
      {
        path: "$input.items",
        expected: "Array<string> & MinItems<1>",
        value: [],
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  TestValidator.equals(
    "contains $input.items path",
    output.includes("$input.items"),
    true,
  );
  // Should show [] with error comment
  TestValidator.equals("contains empty array", output.includes("[]"), true);

  // Test: Root empty array with self error
  const failure2: IValidation.IFailure = {
    success: false,
    data: [],
    errors: [
      {
        path: "$input",
        expected: "Array<number> & MinItems<1>",
        value: [],
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("root-code-block", output2.includes("```json"), true);
  TestValidator.equals("root-error-marker", output2.includes("// ❌"), true);
  TestValidator.equals("root-$input", output2.includes("$input"), true);
};
