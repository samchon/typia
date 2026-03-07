import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_escape_unknown = (): void => {
  // Unknown escape sequence should be preserved as-is (lenient behavior)
  // \q is not a valid JSON escape, but lenient parser should handle it
  const result = LlmJson.parse('{"text": "hello\\qworld');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { text: "helloqworld" });
};
