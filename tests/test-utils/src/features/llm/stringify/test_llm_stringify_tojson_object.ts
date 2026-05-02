import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

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

  TestValidator.equals("contains code block", output.includes("```json"), true);
  TestValidator.equals("contains error marker", output.includes("// ❌"), true);
  // The transformed object should appear in output
  TestValidator.equals(
    "contains transformed key",
    output.includes("transformed"),
    true,
  );
  TestValidator.equals("contains data key", output.includes("data"), true);

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
  TestValidator.equals(
    "nested-contains code block",
    output2.includes("```json"),
    true,
  );
};
