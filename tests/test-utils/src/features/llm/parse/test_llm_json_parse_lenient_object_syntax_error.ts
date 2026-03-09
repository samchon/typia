import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_object_syntax_error = (): void => {
  // Double colon
  const r1 = LlmJson.parse('{"key":: "value"}');
  TestValidator.equals("double-colon-success", r1.success, false);

  // Colon without key: {: "value"}
  const r2 = LlmJson.parse('{: "value"}');
  TestValidator.equals("colon-no-key-success", r2.success, false);

  // Value at key position (string treated as key, then no colon found)
  const r3 = LlmJson.parse('{"value"}');
  TestValidator.equals("val-no-key-success", r3.success, false);

  // Key without value, then another key-value
  const r4 = LlmJson.parse('{"lonely", "key": "val"}');
  TestValidator.equals("key-no-val-then-kv-success", r4.success, false);

  // Array with colons (not valid)
  const r5 = LlmJson.parse("[1: 2, 3: 4]");
  TestValidator.equals("arr-colons-success", r5.success, false);

  // Semicolons instead of commas
  const r6 = LlmJson.parse('{"a": 1; "b": 2}');
  TestValidator.equals("semicolons-success", r6.success, false);

  // Missing colon (= instead of :) should cause error
  const r7 = LlmJson.parse('{"key" = "value"}');
  TestValidator.equals("equals-instead-colon-success", r7.success, false);
  if (!r7.success) {
    TestValidator.equals("equals-has-errors", r7.errors.length > 0, true);
    TestValidator.equals("equals-error-expected", r7.errors[0]?.expected, "':'");
  }
};
