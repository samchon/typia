import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_colon = (): void => {
  // Missing colon (has = instead) should cause an error
  const result = LlmJson.parse('{"key" = "value"}');
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    TestValidator.equals("has_errors", result.errors.length > 0, true);
    TestValidator.equals("error_expected", result.errors[0]?.expected, "':'");
  }
};
