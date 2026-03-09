import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_object_syntax_error = (): void => {
  // Double colon
  const r1 = LlmJson.parse('{"key":: "value"}');
  TestValidator.equals("double-colon-success", r1.success, false);
  if (!r1.success)
    TestValidator.equals("double-colon-errors", "JSON value", r1.errors[0]?.expected);

  // Colon without key: {: "value"}
  const r2 = LlmJson.parse('{: "value"}');
  TestValidator.equals("colon-no-key-success", r2.success, false);
  if (!r2.success)
    TestValidator.equals("colon-no-key-errors", "string key", r2.errors[0]?.expected);

  // Value at key position (string treated as key, then no colon found)
  const r3 = LlmJson.parse('{"value"}');
  TestValidator.equals("val-no-key-success", r3.success, false);
  if (!r3.success)
    TestValidator.equals("val-no-key-errors", "':'", r3.errors[0]?.expected);

  // Key without value, then another key-value
  const r4 = LlmJson.parse('{"lonely", "key": "val"}');
  TestValidator.equals("key-no-val-then-kv-success", r4.success, false);
  if (!r4.success)
    TestValidator.equals("key-no-val-then-kv-errors", "':'", r4.errors[0]?.expected);

  // Array with colons (not valid)
  const r5 = LlmJson.parse("[1: 2, 3: 4]");
  TestValidator.equals("arr-colons-success", r5.success, false);
  if (!r5.success)
    TestValidator.equals("arr-colons-errors", "JSON value", r5.errors[0]?.expected);

  // Semicolons instead of commas
  const r6 = LlmJson.parse('{"a": 1; "b": 2}');
  TestValidator.equals("semicolons-success", r6.success, false);
  if (!r6.success)
    TestValidator.equals("semicolons-errors", "string key", r6.errors[0]?.expected);

  // Missing colon (= instead of :) should cause error
  const r7 = LlmJson.parse('{"key" = "value"}');
  TestValidator.equals("equals-instead-colon-success", r7.success, false);
  if (!r7.success)
    TestValidator.equals("equals-error-errors", "':'", r7.errors[0]?.expected);
};
