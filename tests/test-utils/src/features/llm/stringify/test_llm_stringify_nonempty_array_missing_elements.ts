import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_nonempty_array_missing_elements = (): void => {
  // Test case: Non-empty array with missing element errors (path ending with [])
  // This tests lines 122-130: adding missing element placeholders at the end
  // and line 104: needsComma = !isLastElement || hasMissingElements
  const failure: IValidation.IFailure = {
    success: false,
    data: { items: ["a", "b"] },
    errors: [
      {
        path: "$input.items[]",
        expected: "string",
        value: undefined,
        description: "Array needs at least 3 elements",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // Should show the existing elements plus undefined placeholder
  TestEquality.equals(
    "contains existing element a",
    output.includes('"a"'),
    true,
  );
  TestEquality.equals(
    "contains existing element b",
    output.includes('"b"'),
    true,
  );
  TestEquality.equals(
    "contains undefined placeholder",
    output.includes("undefined"),
    true,
  );
  TestEquality.equals(
    "contains items[] path",
    output.includes("$input.items[]"),
    true,
  );

  // Test with multiple missing elements
  const multiFailure: IValidation.IFailure = {
    success: false,
    data: { items: [1] },
    errors: [
      {
        path: "$input.items[]",
        expected: "number",
        value: undefined,
        description: "First missing",
      },
      {
        path: "$input.items[]",
        expected: "number",
        value: undefined,
        description: "Second missing",
      },
    ],
  };

  const multiOutput: string = LlmJson.stringify(multiFailure);
  // Should have multiple undefined placeholders
  const undefinedMatches = multiOutput.match(/undefined/g) || [];
  TestEquality.equals(
    "contains multiple undefined",
    undefinedMatches.length >= 2,
    true,
  );
};
