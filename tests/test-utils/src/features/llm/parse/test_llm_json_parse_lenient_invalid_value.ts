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
};
