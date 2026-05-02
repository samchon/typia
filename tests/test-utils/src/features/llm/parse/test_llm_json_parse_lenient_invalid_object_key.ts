import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_object_key = (): void => {
  // Object key starting with a number is invalid (not a valid identifier)
  const result = LlmJson.parse('{123key: "value"}');
  TestValidator.equals("success", result.success, false);
  if (!result.success)
    TestValidator.equals("errors", [{ expected: "string key" }], result.errors);

  // Key starting with special character (not $ or _) is invalid
  const result2 = LlmJson.parse('{@key: "value"}');
  TestValidator.equals("success2", result2.success, false);
  if (!result2.success)
    TestValidator.equals(
      "errors2",
      [{ expected: "string key" }],
      result2.errors,
    );

  // Pure number as key (0: "value")
  const result3 = LlmJson.parse('{0: "value"}');
  TestValidator.equals("num-key-success", result3.success, false);
  if (!result3.success)
    TestValidator.equals(
      "num-key-errors",
      [{ expected: "string key" }],
      result3.errors,
    );
};
