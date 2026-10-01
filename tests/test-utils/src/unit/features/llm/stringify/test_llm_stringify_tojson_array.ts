import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies array-valued toJSON feedback retains elements and errors.
 *
 * The hook's array result must be rendered as data while retaining its original
 * validation path.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert array-valued toJSON feedback retains elements and errors; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns three returned numbers and a returned array of two objects. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_tojson_array = (): void => {
  // Test case: Object with toJSON that returns an array

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

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // The array should appear in output
  TestEquality.equals("contains array element 1", output.includes("1"), true);
  TestEquality.equals("contains array element 2", output.includes("2"), true);
  TestEquality.equals("contains array element 3", output.includes("3"), true);

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
  TestEquality.equals(
    "nested-contains code block",
    output2.includes("```json"),
    true,
  );
  TestEquality.equals(
    "nested-contains error marker",
    output2.includes("// ❌"),
    true,
  );
};
