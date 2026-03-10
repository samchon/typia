import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_primitive_root = (): void => {
  // Test case: Root level is a primitive value (not object or array)
  // This tests lines 259-264: primitive type handling

  // Test 1: String at root
  const failure1: IValidation.IFailure = {
    success: false,
    data: "hello",
    errors: [
      {
        path: "$input",
        expected: "number",
        value: "hello",
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("string-code-block", output1.includes("```json"), true);
  TestValidator.equals("string-error-marker", output1.includes("// ❌"), true);
  TestValidator.equals("string-value", output1.includes('"hello"'), true);

  // Test 2: Number at root
  const failure2: IValidation.IFailure = {
    success: false,
    data: 42,
    errors: [
      {
        path: "$input",
        expected: "string",
        value: 42,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("number-code-block", output2.includes("```json"), true);
  TestValidator.equals("number-value", output2.includes("42"), true);

  // Test 3: Boolean at root
  const failure3: IValidation.IFailure = {
    success: false,
    data: true,
    errors: [
      {
        path: "$input",
        expected: "string",
        value: true,
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("boolean-code-block", output3.includes("```json"), true);
  TestValidator.equals("boolean-value", output3.includes("true"), true);

  // Test 4: null at root
  const failure4: IValidation.IFailure = {
    success: false,
    data: null,
    errors: [
      {
        path: "$input",
        expected: "object",
        value: null,
      },
    ],
  };

  const output4: string = LlmJson.stringify(failure4);
  TestValidator.equals("null-code-block", output4.includes("```json"), true);
  TestValidator.equals("null-value", output4.includes("null"), true);

  // Test 5: undefined at root
  const failure5: IValidation.IFailure = {
    success: false,
    data: undefined,
    errors: [
      {
        path: "$input",
        expected: "object",
        value: undefined,
      },
    ],
  };

  const output5: string = LlmJson.stringify(failure5);
  TestValidator.equals("undefined-code-block", output5.includes("```json"), true);
  TestValidator.equals("undefined-value", output5.includes("undefined"), true);
};
