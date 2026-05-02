import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_tojson_array = (): void => {
  // Test case: Object with toJSON that returns an array
  // This tests lines 140-152: toJSON handling where result is an array

  const objWithArrayToJson = {
    toJSON: () => [1, 2, 3],
  };

  const failure: IValidation.IFailure = {
    success: false,
    data: { value: objWithArrayToJson },
    errors: [
      {
        path: "$input.value[0]",
        expected: "string",
        value: 1,
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // The array should appear in output
  TestValidator.equals("contains array element 1", output.includes("1"), true);
  TestValidator.equals("contains array element 2", output.includes("2"), true);
  TestValidator.equals("contains array element 3", output.includes("3"), true);

  // Test toJSON returning array with nested objects
  const objWithNestedArrayToJson = {
    toJSON: () => [{ id: 1 }, { id: 2 }],
  };

  const failure2: IValidation.IFailure = {
    success: false,
    data: { value: objWithNestedArrayToJson },
    errors: [
      {
        path: "$input.value[1].id",
        expected: "string",
        value: 2,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals(
    "nested-contains code block",
    output2.includes("```json"),
    true,
  );
  TestValidator.equals(
    "nested-contains error marker",
    output2.includes("// ❌"),
    true,
  );
};
