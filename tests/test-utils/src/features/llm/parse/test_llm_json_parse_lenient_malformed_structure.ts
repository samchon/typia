import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_malformed_structure = (): void => {
  // Double colon
  const r1 = LlmJson.parse('{"key":: "value"}');
  TestValidator.equals("double-colon-success", r1.success, false);

  // Colon without key: {: "value"}
  const r2 = LlmJson.parse('{: "value"}');
  TestValidator.equals("colon-no-key-success", r2.success, false);

  // Value without key in object (string as first thing)
  // Parser treats "value" as a key, then looks for colon
  const r3 = LlmJson.parse('{"value"}');
  TestValidator.equals("val-no-key-success", r3.success, false);

  // Key without value, then another key-value
  const r4 = LlmJson.parse('{"lonely", "key": "val"}');
  TestValidator.equals("key-no-val-then-kv-success", r4.success, false);

  // Array with colons (not valid)
  const r5 = LlmJson.parse("[1: 2, 3: 4]");
  // 1 is parsed as number, then ':' is not comma or ]
  // Parser continues, skipWhitespace, check comma at ':'→ not comma
  // Loop back, check ']'→ no, check ','→ no, parseValue→ error for ':'
  TestValidator.equals("arr-colons-success", r5.success, false);

  // Extra closing braces
  const r6 = LlmJson.parse('{"key": 1}}');
  TestValidator.equals("extra-close-brace-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("extra-close-brace-data", r6.data, { key: 1 });

  // Extra closing brackets
  const r7 = LlmJson.parse("[1, 2]]");
  TestValidator.equals("extra-close-bracket-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("extra-close-bracket-data", r7.data, [1, 2]);

  // Object then array (two separate JSON values)
  const r8 = LlmJson.parse('{"a": 1}[2, 3]');
  TestValidator.equals("obj-then-arr-success", r8.success, true);
  // Should parse first complete JSON and ignore rest
  if (r8.success)
    TestValidator.equals("obj-then-arr-data", r8.data, { a: 1 });

  // Empty key with value
  const r9 = LlmJson.parse('{"": "empty key value"}');
  TestValidator.equals("empty-key-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("empty-key-data", r9.data, {
      "": "empty key value",
    });

  // Key that is only whitespace
  const r10 = LlmJson.parse('{" ": "space key"}');
  TestValidator.equals("space-key-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("space-key-data", r10.data, {
      " ": "space key",
    });

  // Number key (not valid as unquoted)
  const r11 = LlmJson.parse("{0: \"value\"}");
  TestValidator.equals("number-key-success", r11.success, false);

  // Semicolons instead of commas
  const r12 = LlmJson.parse('{"a": 1; "b": 2}');
  // ';' is not comma, not '}', not '"' or identifier → error at key position
  TestValidator.equals("semicolons-success", r12.success, false);

  // Object with boolean key (unquoted)
  const r13 = LlmJson.parse("{true: 1}");
  // 'true' is parsed as identifier (key), then colon, then 1
  TestValidator.equals("bool-key-success", r13.success, true);
  if (r13.success)
    TestValidator.equals("bool-key-data", r13.data, { true: 1 });

  // Object with null key (unquoted)
  const r14 = LlmJson.parse("{null: 1}");
  TestValidator.equals("null-key-success", r14.success, true);
  if (r14.success)
    TestValidator.equals("null-key-data", r14.data, { null: 1 });
};
