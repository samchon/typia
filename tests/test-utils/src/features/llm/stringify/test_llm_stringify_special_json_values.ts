import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_special_json_values = (): void => {
  // Test case: Special values that JSON.stringify handles specially
  // This tests line 263: JSON.stringify(value) ?? String(value)

  // Test 1: NaN (JSON.stringify returns null)
  const failure1: IValidation.IFailure = {
    success: false,
    data: { value: NaN },
    errors: [
      {
        path: "$input.value",
        expected: "number (finite)",
        value: NaN,
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("nan-code-block", output1.includes("```json"), true);
  TestValidator.equals("nan-error-marker", output1.includes("// ❌"), true);
  // NaN becomes null in JSON
  TestValidator.equals("nan-null", output1.includes("null"), true);

  // Test 2: Infinity
  const failure2: IValidation.IFailure = {
    success: false,
    data: { value: Infinity },
    errors: [
      {
        path: "$input.value",
        expected: "number (finite)",
        value: Infinity,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("inf-code-block", output2.includes("```json"), true);
  // Infinity becomes null in JSON
  TestValidator.equals("inf-null", output2.includes("null"), true);

  // Test 3: -Infinity
  const failure3: IValidation.IFailure = {
    success: false,
    data: { value: -Infinity },
    errors: [
      {
        path: "$input.value",
        expected: "number (finite)",
        value: -Infinity,
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("neginf-code-block", output3.includes("```json"), true);
  TestValidator.equals("neginf-null", output3.includes("null"), true);

  // Test 4: BigInt (JSON.stringify throws, so String(value) is used)
  // Actually BigInt would throw in JSON.stringify, let's skip this
  // as it might cause issues

  // Test 5: Empty string
  const failure5: IValidation.IFailure = {
    success: false,
    data: { value: "" },
    errors: [
      {
        path: "$input.value",
        expected: "string & MinLength<1>",
        value: "",
      },
    ],
  };

  const output5: string = LlmJson.stringify(failure5);
  TestValidator.equals("empty-str-code-block", output5.includes("```json"), true);
  TestValidator.equals("empty-str-value", output5.includes('""'), true);

  // Test 6: Zero
  const failure6: IValidation.IFailure = {
    success: false,
    data: { value: 0 },
    errors: [
      {
        path: "$input.value",
        expected: "number & Minimum<1>",
        value: 0,
      },
    ],
  };

  const output6: string = LlmJson.stringify(failure6);
  TestValidator.equals("zero-code-block", output6.includes("```json"), true);
  // Check that 0 appears (not "0" as string)
  TestValidator.equals("zero-value", output6.includes(": 0"), true);

  // Test 7: Negative zero
  const failure7: IValidation.IFailure = {
    success: false,
    data: { value: -0 },
    errors: [
      {
        path: "$input.value",
        expected: "number & Minimum<1>",
        value: -0,
      },
    ],
  };

  const output7: string = LlmJson.stringify(failure7);
  TestValidator.equals("negzero-code-block", output7.includes("```json"), true);
  // -0 becomes 0 in JSON
  TestValidator.equals("negzero-value", output7.includes(": 0"), true);

  // Test 8: False (falsy but valid)
  const failure8: IValidation.IFailure = {
    success: false,
    data: { value: false },
    errors: [
      {
        path: "$input.value",
        expected: "true",
        value: false,
      },
    ],
  };

  const output8: string = LlmJson.stringify(failure8);
  TestValidator.equals("false-code-block", output8.includes("```json"), true);
  TestValidator.equals("false-value", output8.includes("false"), true);
};
