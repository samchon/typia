import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_object_syntax_error = (): void => {
  // Double colon
  // '{"key":: "value"}' => 2 errors: [ 'JSON value', "':'" ]
  const r1 = LlmJson.parse('{"key":: "value"}');
  TestValidator.equals("double-colon-success", r1.success, false);
  if (!r1.success)
    TestValidator.equals(
      "double-colon-errors",
      [{ expected: "JSON value" }, { expected: "':'" }],
      r1.errors,
    );

  // Colon without key: {: "value"}
  // '{: "value"}' => 1 errors: [ 'string key' ]
  const r2 = LlmJson.parse('{: "value"}');
  TestValidator.equals("colon-no-key-success", r2.success, false);
  if (!r2.success)
    TestValidator.equals(
      "colon-no-key-errors",
      [{ expected: "string key" }],
      r2.errors,
    );

  // Value at key position (string treated as key, then no colon found)
  // '{"value"}' => 1 errors: [ "':'" ]
  const r3 = LlmJson.parse('{"value"}');
  TestValidator.equals("val-no-key-success", r3.success, false);
  if (!r3.success)
    TestValidator.equals("val-no-key-errors", [{ expected: "':'" }], r3.errors);

  // Key without value, then another key-value
  // '{"lonely", "key": "val"}' => 1 errors: [ "':'" ]
  const r4 = LlmJson.parse('{"lonely", "key": "val"}');
  TestValidator.equals("key-no-val-then-kv-success", r4.success, false);
  if (!r4.success)
    TestValidator.equals(
      "key-no-val-then-kv-errors",
      [{ expected: "':'" }],
      r4.errors,
    );

  // Array with colons (not valid)
  // '[1: 2, 3: 4]' => 2 errors: [ 'JSON value', 'JSON value' ]
  const r5 = LlmJson.parse("[1: 2, 3: 4]");
  TestValidator.equals("arr-colons-success", r5.success, false);
  if (!r5.success)
    TestValidator.equals(
      "arr-colons-errors",
      [{ expected: "JSON value" }, { expected: "JSON value" }],
      r5.errors,
    );

  // Semicolons instead of commas
  // '{"a": 1; "b": 2}' => 1 errors: [ 'string key' ]
  const r6 = LlmJson.parse('{"a": 1; "b": 2}');
  TestValidator.equals("semicolons-success", r6.success, false);
  if (!r6.success)
    TestValidator.equals(
      "semicolons-errors",
      [{ expected: "string key" }],
      r6.errors,
    );

  // Missing colon (= instead of :) should cause error
  // '{"key" = "value"}' => 1 errors: [ "':'" ]
  const r7 = LlmJson.parse('{"key" = "value"}');
  TestValidator.equals("equals-instead-colon-success", r7.success, false);
  if (!r7.success)
    TestValidator.equals(
      "equals-error-errors",
      [{ expected: "':'" }],
      r7.errors,
    );
};
