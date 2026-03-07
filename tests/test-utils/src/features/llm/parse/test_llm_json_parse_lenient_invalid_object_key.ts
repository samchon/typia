import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_object_key = (): void => {
  // Object key starting with a number is invalid (not a valid identifier)
  const result = LlmJson.parse('{123key: "value"}');
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    TestValidator.equals("has_errors", result.errors.length > 0, true);
    TestValidator.equals("error_expected", result.errors[0]?.expected, "string key");
  }

  // Key starting with special character (not $ or _) is invalid
  const result2 = LlmJson.parse('{@key: "value"}');
  TestValidator.equals("success2", result2.success, false);
  if (!result2.success) {
    TestValidator.equals("has_errors2", result2.errors.length > 0, true);
    TestValidator.equals("error_expected2", result2.errors[0]?.expected, "string key");
  }
};
