import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_array_last_element_error = (): void => {
  // Test case: Error on the last element of an array
  // This tests line 102-104: isLastElement and needsComma logic

  const failure: IValidation.IFailure = {
    success: false,
    data: { items: [1, 2, "wrong"] },
    errors: [
      {
        path: "$input.items[2]",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  TestValidator.equals(
    "contains items[2] path",
    output.includes("$input.items[2]"),
    true,
  );
  // Last element should not have a comma after it
  // Check structure is valid

  // Test: Last element error with missing elements after
  const failure2: IValidation.IFailure = {
    success: false,
    data: { items: [1, 2, "wrong"] },
    errors: [
      {
        path: "$input.items[2]",
        expected: "number",
        value: "wrong",
      },
      {
        path: "$input.items[]",
        expected: "number",
        value: undefined,
        description: "Need more elements",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("missing-code-block", output2.includes("```json"), true);
  // In this case, the last data element needs a comma because missing elements follow
  TestValidator.equals(
    "missing-undefined",
    output2.includes("undefined"),
    true,
  );

  // Test: Single element array with error
  const failure3: IValidation.IFailure = {
    success: false,
    data: { items: ["wrong"] },
    errors: [
      {
        path: "$input.items[0]",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("single-code-block", output3.includes("```json"), true);
  TestValidator.equals("single-error-marker", output3.includes("// ❌"), true);
};
