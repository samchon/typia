import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_keyword = (): void => {
  // Invalid keyword starting with valid letter but not matching any keyword
  const result = LlmJson.parse('{"value": tralse}');
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    TestValidator.equals("has_errors", result.errors.length > 0, true);
  }
};
