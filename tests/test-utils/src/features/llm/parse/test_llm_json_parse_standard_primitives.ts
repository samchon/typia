import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_standard_primitives = (): void => {
  TestValidator.equals("number", LlmJson.parse("42").data, 42);
  TestValidator.equals("string", LlmJson.parse('"hello"').data, "hello");
  TestValidator.equals("true", LlmJson.parse("true").data, true);
  TestValidator.equals("false", LlmJson.parse("false").data, false);
  TestValidator.equals("null", LlmJson.parse("null").data, null);
};
