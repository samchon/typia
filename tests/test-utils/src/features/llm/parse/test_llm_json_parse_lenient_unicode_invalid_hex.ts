import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_invalid_hex = (): void => {
  // Invalid hex characters in unicode escape (GGGG is not valid hex)
  const result = LlmJson.parse('{"text": "\\uGGGG"}');
  TestValidator.equals("success", result.success, true);
  // Should preserve the invalid escape literally
  if (result.success) TestValidator.equals("value", result.data, { text: "\\uGGGG" });
};
