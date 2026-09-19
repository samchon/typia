import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  TestEquality.equals(
    "contains $input.items path",
    output.includes("$input.items"),
    true,
  );
  // Should show [] with error comment
  TestEquality.equals("contains empty array", output.includes("[]"), true);

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
  TestEquality.equals("root-code-block", output2.includes("```json"), true);
  TestEquality.equals("root-error-marker", output2.includes("// ❌"), true);
  TestEquality.equals("root-$input", output2.includes("$input"), true);
};
