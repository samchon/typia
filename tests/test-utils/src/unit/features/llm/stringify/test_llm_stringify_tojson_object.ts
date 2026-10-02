import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies object-valued toJSON feedback retains returned fields.
 *
 * The outer hook's object and an inner hook require recursive handling at the
 * data owner.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 */
export const test_llm_stringify_tojson_object = (): void => {
  // Test case: Object with toJSON that returns another object
  // This tests the full recursion path after toJSON transformation

  const objWithObjectToJson = {
    toJSON: () => ({ transformed: true, data: "value" }),
  };

  const failure: IValidation.IFailure = {
    success: false,
    data: { value: objWithObjectToJson },
    errors: [
      {
        path: "$input.value.data",
        expected: "number",
        value: "value",
      },
    ],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals("contains error marker", output.includes("// ❌"), true);
  // The transformed object should appear in output
  TestEquality.equals(
    "contains transformed key",
    output.includes("transformed"),
    true,
  );
  TestEquality.equals("contains data key", output.includes("data"), true);

  // Test nested toJSON (object inside object with toJSON)
  const innerObjWithToJson = {
    toJSON: () => "inner-serialized",
  };
  const outerObjWithToJson = {
    toJSON: () => ({ inner: innerObjWithToJson }),
  };

  // Note: After outer.toJSON() returns, the inner toJSON should also be called
  // because inToJson is reset to false for nested stringify calls
  const failure2: IValidation.IFailure = {
    success: false,
    data: { value: outerObjWithToJson },
    errors: [
      {
        path: "$input.value.inner",
        expected: "number",
        value: "inner-serialized",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestEquality.equals(
    "nested-contains code block",
    output2.includes("```json"),
    true,
  );
};
