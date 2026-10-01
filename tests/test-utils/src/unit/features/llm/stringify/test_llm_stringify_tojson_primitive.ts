import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies primitive-valued toJSON feedback retains returned values.
 *
 * Hook results must be rendered instead of the hook-bearing object's
 * implementation fields.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert primitive-valued toJSON feedback retains returned values; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns string, number, boolean and null hook results. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_tojson_primitive = (): void => {
  // Test case: Object with toJSON that returns a primitive value

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

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // The toJSON result should appear in output
  TestEquality.equals(
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
  TestEquality.equals(
    "number-contains code block",
    output2.includes("```json"),
    true,
  );
  TestEquality.equals("number-contains 42", output2.includes("42"), true);

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
  TestEquality.equals(
    "bool-contains code block",
    output3.includes("```json"),
    true,
  );
  TestEquality.equals("bool-contains true", output3.includes("true"), true);

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
  TestEquality.equals(
    "null-contains code block",
    output4.includes("```json"),
    true,
  );
  TestEquality.equals("null-contains null", output4.includes("null"), true);
};
