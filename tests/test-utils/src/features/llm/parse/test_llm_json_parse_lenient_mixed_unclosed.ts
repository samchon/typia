import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_mixed_unclosed = (): void => {
  const result = LlmJson.parse('{"items": [{"id": 1}, {"id": 2');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { items: [{ id: 1 }, { id: 2 }] });
};
