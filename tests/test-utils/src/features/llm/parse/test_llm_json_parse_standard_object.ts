import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_standard_object = (): void => {
  const result = LlmJson.parse('{"name": "John", "age": 30}');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, { name: "John", age: 30 });
};
