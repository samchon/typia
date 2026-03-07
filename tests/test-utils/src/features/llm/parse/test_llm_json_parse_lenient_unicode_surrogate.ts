import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_surrogate = (): void => {
  // Handle surrogate pairs for emoji (characters > U+FFFF)
  // \uD83D\uDE00 = 😀 (grinning face emoji)
  const result = LlmJson.parse('{"emoji": "\\uD83D\\uDE00"}');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { emoji: "😀" });
};
