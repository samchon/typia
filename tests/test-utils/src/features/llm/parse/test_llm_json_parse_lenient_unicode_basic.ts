import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_basic = (): void => {
  // Handle basic unicode escape (U+0000 to U+FFFF)
  // \u0041 = 'A', \u4E2D = '中'
  const result = LlmJson.parse('{"char": "\\u0041", "chinese": "\\u4E2D"}');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { char: "A", chinese: "中" });
};
