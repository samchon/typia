import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_primitive_string = (): void => {
  // Simple string at root
  const r1 = LlmJson.parse('"hello"');
  TestValidator.equals("simple-success", r1.success, true);
  if (r1.success) TestValidator.equals("simple-data", r1.data, "hello");

  // String with escape at root
  const r2 = LlmJson.parse('"hello\\nworld"');
  TestValidator.equals("escape-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("escape-data", r2.data, "hello\nworld");

  // Empty string at root
  const r3 = LlmJson.parse('""');
  TestValidator.equals("empty-success", r3.success, true);
  if (r3.success) TestValidator.equals("empty-data", r3.data, "");

  // Unclosed string at root
  const r4 = LlmJson.parse('"unclosed');
  TestValidator.equals("unclosed-success", r4.success, true);
  if (r4.success) TestValidator.equals("unclosed-data", r4.data, "unclosed");

  // String with unicode at root
  const r5 = LlmJson.parse('"\\u0041\\u0042\\u0043"');
  TestValidator.equals("unicode-success", r5.success, true);
  if (r5.success) TestValidator.equals("unicode-data", r5.data, "ABC");

  // String with all escape types at root
  const r6 = LlmJson.parse(
    '"\\"\\\\\\/\\b\\f\\n\\r\\t"',
  );
  TestValidator.equals("all-esc-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("all-esc-data", r6.data, '"\\/\b\f\n\r\t');
};
