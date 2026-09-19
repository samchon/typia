import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_empty_object_self_error = (): void => {
  // Test case: Empty object {} with an error on the object itself (not its properties)
  // This tests line 188-189: if (allKeys.length === 0) return `${indent}{}${errorComment}`
  const failure: IValidation.IFailure = {
    success: false,
    data: {},
    errors: [
      {
        path: "$input",
        expected: "object & { name: string; age: number }",
        value: {},
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  TestEquality.equals("contains $input path", output.includes("$input"), true);
  // The {} should be followed by the error comment
  TestEquality.equals(
    "contains empty object with error",
    output.includes("{}") || output.includes("{ }"),
    true,
  );
};
