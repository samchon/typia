import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_special_keys = (): void => {
  // Key with spaces
  const r1 = LlmJson.parse('{"key with spaces": 42}');
  TestValidator.equals("space-key-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("space-key-data", r1.data, {
      "key with spaces": 42,
    });

  // Key with escape sequences
  const r2 = LlmJson.parse('{"key\\"with\\"quotes": 1}');
  TestValidator.equals("escape-key-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("escape-key-data", r2.data, {
      'key"with"quotes': 1,
    });

  // Key with unicode escape
  const r3 = LlmJson.parse('{"\\u0041\\u0042": "AB key"}');
  TestValidator.equals("unicode-key-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("unicode-key-data", r3.data, { AB: "AB key" });

  // Empty string key
  const r4 = LlmJson.parse('{"": "empty key"}');
  TestValidator.equals("empty-key-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("empty-key-data", r4.data, { "": "empty key" });

  // Key with newline escape
  const r5 = LlmJson.parse('{"line\\none": 1}');
  TestValidator.equals("newline-key-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("newline-key-data", r5.data, { "line\none": 1 });

  // Key with backslash
  const r6 = LlmJson.parse('{"path\\\\to\\\\file": "value"}');
  TestValidator.equals("backslash-key-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("backslash-key-data", r6.data, {
      "path\\to\\file": "value",
    });

  // Key that looks like a number
  const r7 = LlmJson.parse('{"123": "numeric key"}');
  TestValidator.equals("numeric-key-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("numeric-key-data", r7.data, {
      "123": "numeric key",
    });

  // Key with special characters
  const r8 = LlmJson.parse('{"@#$%^&*()": "special"}');
  TestValidator.equals("special-char-key-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("special-char-key-data", r8.data, {
      "@#$%^&*()": "special",
    });

  // Key with tab and other control escapes
  const r9 = LlmJson.parse('{"col1\\tcol2": "tabbed"}');
  TestValidator.equals("tab-key-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("tab-key-data", r9.data, { "col1\tcol2": "tabbed" });

  // Key that is only whitespace
  const r10 = LlmJson.parse('{" ": "space key"}');
  TestValidator.equals("ws-key-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("ws-key-data", r10.data, { " ": "space key" });
};
