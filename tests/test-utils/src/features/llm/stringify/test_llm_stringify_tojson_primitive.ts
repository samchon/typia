import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_tojson_primitive = (): void => {
  // Test case: Object with toJSON that returns a primitive value
  // This tests lines 140-152: toJSON handling where result is a primitive

  // Create object with toJSON that returns a string
  const objWithToJson = {
    toJSON: () => "serialized-string",
  };

  const failure: IValidation.IFailure = {
    success: false,
    data: { value: objWithToJson },
    errors: [
      {
        path: "$input.value",
        expected: "number",
        value: "serialized-string",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // The toJSON result should appear in output
  TestValidator.equals(
    "contains serialized value",
    output.includes("serialized-string"),
    true,
  );

  // Test toJSON returning number
  const objWithNumberToJson = {
    toJSON: () => 42,
  };

  const failure2: IValidation.IFailure = {
    success: false,
    data: { value: objWithNumberToJson },
    errors: [
      {
        path: "$input.value",
        expected: "string",
        value: 42,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals(
    "number-contains code block",
    output2.includes("```json"),
    true,
  );
  TestValidator.equals("number-contains 42", output2.includes("42"), true);

  // Test toJSON returning boolean
  const objWithBoolToJson = {
    toJSON: () => true,
  };

  const failure3: IValidation.IFailure = {
    success: false,
    data: { value: objWithBoolToJson },
    errors: [
      {
        path: "$input.value",
        expected: "string",
        value: true,
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals(
    "bool-contains code block",
    output3.includes("```json"),
    true,
  );
  TestValidator.equals("bool-contains true", output3.includes("true"), true);

  // Test toJSON returning null
  const objWithNullToJson = {
    toJSON: () => null,
  };

  const failure4: IValidation.IFailure = {
    success: false,
    data: { value: objWithNullToJson },
    errors: [
      {
        path: "$input.value",
        expected: "string",
        value: null,
      },
    ],
  };

  const output4: string = LlmJson.stringify(failure4);
  TestValidator.equals(
    "null-contains code block",
    output4.includes("```json"),
    true,
  );
  TestValidator.equals("null-contains null", output4.includes("null"), true);
};
