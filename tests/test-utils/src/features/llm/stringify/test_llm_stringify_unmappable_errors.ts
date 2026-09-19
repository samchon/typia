import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_unmappable_errors = (): void => {
  // Create a failure with errors that cannot be mapped to the data structure
  // This happens when error paths reference properties that don't exist in data
  const failure: IValidation.IFailure = {
    success: false,
    data: { name: "John" },
    errors: [
      {
        path: "$input.nonexistent.deeply.nested",
        expected: "string",
        value: undefined,
      },
      {
        path: "$input[999]",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  // Should contain the unmappable errors section
  TestEquality.equals(
    "contains unmappable section",
    output.includes("Unmappable validation errors"),
    true,
  );
  TestEquality.equals(
    "contains nonexistent path",
    output.includes("$input.nonexistent.deeply.nested"),
    true,
  );
  TestEquality.equals(
    "contains array index path",
    output.includes("$input[999]"),
    true,
  );

  // The main JSON block should still be present
  TestEquality.equals("contains code block", output.includes("```json"), true);
};
