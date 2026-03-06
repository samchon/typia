import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_llm_function_call = (): void => {
  const result = LlmJson.parse('{"name": "get_weather", "arguments": {"city": "Seoul", "unit": "cel');
  TestValidator.equals("success", result.success, true);
  if (result.success) TestValidator.equals("value", result.data, {
    name: "get_weather",
    arguments: { city: "Seoul", unit: "cel" },
  });
};
