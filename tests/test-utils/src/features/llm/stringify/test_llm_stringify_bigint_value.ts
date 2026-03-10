import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_bigint_value = (): void => {
  // Test: BigInt values should not crash JSON.stringify
  // BigInt cannot be serialized by JSON.stringify (throws TypeError)
  // The implementation should handle this gracefully

  // Test 1: BigInt as a property value (use safe integer to avoid float64 precision loss)
  const failure1: IValidation.IFailure = {
    success: false,
    data: { amount: BigInt(42) },
    errors: [
      {
        path: "$input.amount",
        expected: "number",
        value: BigInt(42),
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("prop-code-block", output1.includes("```json"), true);
  TestValidator.equals("prop-error-marker", output1.includes("// ❌"), true);
  // BigInt should render with 'n' suffix
  TestValidator.equals("prop-bigint-rendered", output1.includes("42n"), true);

  // Test 2: BigInt as root value
  const failure2: IValidation.IFailure = {
    success: false,
    data: BigInt(42),
    errors: [
      {
        path: "$input",
        expected: "number",
        value: BigInt(42),
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("root-code-block", output2.includes("```json"), true);
  TestValidator.equals("root-bigint", output2.includes("42n"), true);
  TestValidator.equals("root-error", output2.includes("// ❌"), true);

  // Test 3: BigInt in array
  const failure3: IValidation.IFailure = {
    success: false,
    data: { values: [BigInt(1), BigInt(2), BigInt(3)] },
    errors: [
      {
        path: "$input.values[0]",
        expected: "number",
        value: BigInt(1),
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("arr-code-block", output3.includes("```json"), true);
  TestValidator.equals("arr-bigint", output3.includes("1n"), true);
};
