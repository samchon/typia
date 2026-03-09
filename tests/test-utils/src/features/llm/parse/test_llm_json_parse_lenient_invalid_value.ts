import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_value = (): void => {
  // Invalid character as value (not a valid JSON token)
  const result = LlmJson.parse('{"key": @invalid}');
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    TestValidator.equals("has_errors", result.errors.length > 0, true);
    TestValidator.equals("error_expected", result.errors[0]?.expected, "JSON value");
  }

  // Invalid @ in value with partial recovery (valid key 'a' preserved)
  const r2 = LlmJson.parse('{"a": 1, "b": @, "c": 3}');
  TestValidator.equals("at-sign-success", r2.success, false);
  if (!r2.success) {
    TestValidator.equals("at-sign-a", (r2.data as any)?.a, 1);
  }

  // Multiple invalid characters in values
  const r3 = LlmJson.parse('{"a": #, "b": %, "c": 3}');
  TestValidator.equals("multi-invalid-success", r3.success, false);
  if (!r3.success) {
    TestValidator.equals("multi-invalid-errors", r3.errors.length >= 1, true);
  }

  // Invalid character in array value
  const r4 = LlmJson.parse("[1, @, 3]");
  TestValidator.equals("arr-invalid-success", r4.success, false);
  if (!r4.success) {
    TestValidator.equals("arr-invalid-errors", r4.errors.length >= 1, true);
  }
};
