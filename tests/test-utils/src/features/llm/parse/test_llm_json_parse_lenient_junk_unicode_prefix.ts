import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_junk_unicode_prefix = (): void => {
  // LLM may output explanatory text in various languages before JSON
  // Test with Japanese, Korean, Chinese text as junk prefix
  const result1 = LlmJson.parse('日本語テキスト {"msg": "hello"}');
  TestValidator.equals("success_jp", result1.success, true);
  if (result1.success) TestValidator.equals("value_jp", result1.data, { msg: "hello" });

  const result2 = LlmJson.parse('한국어 텍스트입니다 {"msg": "hello"}');
  TestValidator.equals("success_kr", result2.success, true);
  if (result2.success) TestValidator.equals("value_kr", result2.data, { msg: "hello" });

  const result3 = LlmJson.parse('中文文本 {"msg": "hello"}');
  TestValidator.equals("success_cn", result3.success, true);
  if (result3.success) TestValidator.equals("value_cn", result3.data, { msg: "hello" });
};
