import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_tojson_self_return = (): void => {
  // Test: toJSON returning `this` should not cause infinite recursion
  // The `inToJson` flag prevents re-calling toJSON on the same object

  // Test 1: Object with toJSON returning this
  const selfRef: Record<string, unknown> & { toJSON: () => unknown } = {
    name: "test",
    value: 42,
    toJSON() {
      return this;
    },
  };

  const failure1: IValidation.IFailure = {
    success: false,
    data: { item: selfRef },
    errors: [
      {
        path: "$input.item.value",
        expected: "string",
        value: 42,
      },
    ],
  };

  // Must not stack overflow
  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("self-code-block", output1.includes("```json"), true);
  TestValidator.equals("self-error-marker", output1.includes("// ❌"), true);
  TestValidator.equals("self-name", output1.includes("test"), true);
  TestValidator.equals("self-value", output1.includes("42"), true);

  // Test 2: Root-level object with toJSON returning this
  const rootSelf: Record<string, unknown> & { toJSON: () => unknown } = {
    data: "hello",
    toJSON() {
      return this;
    },
  };

  const failure2: IValidation.IFailure = {
    success: false,
    data: rootSelf,
    errors: [
      {
        path: "$input.data",
        expected: "number",
        value: "hello",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals(
    "root-self-code-block",
    output2.includes("```json"),
    true,
  );
  TestValidator.equals("root-self-data", output2.includes("hello"), true);
  TestValidator.equals(
    "root-self-error",
    output2.includes("$input.data"),
    true,
  );
};
