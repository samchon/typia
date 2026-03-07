import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_object_key = (): void => {
  // Object key without quotes should cause an error
  const result = LlmJson.parse('{invalid: "value"}');
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    TestValidator.equals("has_errors", result.errors.length > 0, true);
    TestValidator.equals("error_expected", result.errors[0]?.expected, "string key");
  }
};
