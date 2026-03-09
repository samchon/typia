import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_object_syntax_error = (): void => {
  // Double colon
  const r1 = LlmJson.parse('{"key":: "value"}');
  TestValidator.equals("double-colon-success", r1.success, false);
  if (!r1.success) {
    TestValidator.equals("double-colon-errors-len", r1.errors.length, 2);
    TestValidator.equals("double-colon-errors-expected", r1.errors[0]?.expected, "JSON value");
    TestValidator.equals("double-colon-errors-path", r1.errors[0]?.path, "$input.key");
  }

  // Colon without key: {: "value"}
  const r2 = LlmJson.parse('{: "value"}');
  TestValidator.equals("colon-no-key-success", r2.success, false);
  if (!r2.success) {
    TestValidator.equals("colon-no-key-errors-len", r2.errors.length, 1);
    TestValidator.equals("colon-no-key-errors-expected", r2.errors[0]?.expected, "string key");
    TestValidator.equals("colon-no-key-errors-path", r2.errors[0]?.path, "$input");
  }

  // Value at key position (string treated as key, then no colon found)
  const r3 = LlmJson.parse('{"value"}');
  TestValidator.equals("val-no-key-success", r3.success, false);
  if (!r3.success) {
    TestValidator.equals("val-no-key-errors-len", r3.errors.length, 1);
    TestValidator.equals("val-no-key-errors-expected", r3.errors[0]?.expected, "':'");
    TestValidator.equals("val-no-key-errors-path", r3.errors[0]?.path, "$input.value");
  }

  // Key without value, then another key-value
  const r4 = LlmJson.parse('{"lonely", "key": "val"}');
  TestValidator.equals("key-no-val-then-kv-success", r4.success, false);
  if (!r4.success) {
    TestValidator.equals("key-no-val-then-kv-errors-len", r4.errors.length, 1);
    TestValidator.equals("key-no-val-then-kv-errors-expected", r4.errors[0]?.expected, "':'");
    TestValidator.equals("key-no-val-then-kv-errors-path", r4.errors[0]?.path, "$input.lonely");
  }

  // Array with colons (not valid)
  const r5 = LlmJson.parse("[1: 2, 3: 4]");
  TestValidator.equals("arr-colons-success", r5.success, false);
  if (!r5.success) {
    TestValidator.equals("arr-colons-errors-len", r5.errors.length, 2);
    TestValidator.equals("arr-colons-errors-expected", r5.errors[0]?.expected, "JSON value");
    TestValidator.equals("arr-colons-errors-path", r5.errors[0]?.path, "$input[1]");
  }

  // Semicolons instead of commas
  const r6 = LlmJson.parse('{"a": 1; "b": 2}');
  TestValidator.equals("semicolons-success", r6.success, false);
  if (!r6.success) {
    TestValidator.equals("semicolons-errors-len", r6.errors.length, 1);
    TestValidator.equals("semicolons-errors-expected", r6.errors[0]?.expected, "string key");
    TestValidator.equals("semicolons-errors-path", r6.errors[0]?.path, "$input");
  }

  // Missing colon (= instead of :) should cause error
  const r7 = LlmJson.parse('{"key" = "value"}');
  TestValidator.equals("equals-instead-colon-success", r7.success, false);
  if (!r7.success) {
    TestValidator.equals("equals-has-errors", r7.errors.length > 0, true);
    TestValidator.equals("equals-error-expected", r7.errors[0]?.expected, "':'");
  }
};
