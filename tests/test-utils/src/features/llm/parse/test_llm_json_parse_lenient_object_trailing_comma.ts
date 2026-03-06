import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_object_trailing_comma = (): void => {
  const result = LlmJson.parse('{"a": 1, "b": 2,}');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { a: 1, b: 2 });
};
