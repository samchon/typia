import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_function_value = (): void => {
  // Test: Function values should not crash
  // JSON.stringify(fn) returns undefined (JS value), then ?? String(fn) is used

  // Test 1: Function as a property value
  const fn = () => 42;
  const failure1: IValidation.IFailure = {
    success: false,
    data: { callback: fn, name: "test" },
    errors: [
      {
        path: "$input.callback",
        expected: "number",
        value: fn,
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("fn-code-block", output1.includes("```json"), true);
  TestValidator.equals("fn-error-marker", output1.includes("// ❌"), true);
  TestValidator.equals("fn-name-present", output1.includes("test"), true);
  // Should not crash — that's the main assertion
  TestValidator.equals(
    "fn-no-unmappable",
    output1.includes("Unmappable"),
    false,
  );

  // Test 2: Function as root value
  const rootFn = function hello() {
    return "world";
  };
  const failure2: IValidation.IFailure = {
    success: false,
    data: rootFn,
    errors: [
      {
        path: "$input",
        expected: "object",
        value: rootFn,
      },
    ],
  };

  // Should not throw
  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("root-fn-code-block", output2.includes("```json"), true);
  TestValidator.equals("root-fn-error-marker", output2.includes("// ❌"), true);
};
