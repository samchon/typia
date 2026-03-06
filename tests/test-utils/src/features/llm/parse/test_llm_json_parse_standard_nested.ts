import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_standard_nested = (): void => {
  const result = LlmJson.parse('{"user": {"name": "John", "scores": [1, 2, 3]}}');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { user: { name: "John", scores: [1, 2, 3] } });
};
