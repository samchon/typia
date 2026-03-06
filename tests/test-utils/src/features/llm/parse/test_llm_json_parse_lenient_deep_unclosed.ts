import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_deep_unclosed = (): void => {
  const result = LlmJson.parse('{"a": {"b": {"c": {"d": 1');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { a: { b: { c: { d: 1 } } } });
};
