import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_incomplete = (): void => {
  // Handle incomplete unicode escape sequence
  const result = LlmJson.parse('{"text": "hello\\u00');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { text: "hello\\u00" });
};
