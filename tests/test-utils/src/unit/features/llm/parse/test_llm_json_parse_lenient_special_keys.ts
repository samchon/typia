import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that quoted keys preserve whitespace, escapes and punctuation.
 *
 * Quoted object keys are data rather than identifiers and must retain their
 * decoded spelling.
 *
 * 1. Exercise spaces, quotes, Unicode, empty/numeric keys, newline/tab/backslash
 *    escapes and punctuation.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns spaces, quotes, Unicode, empty/numeric keys, newline/tab/backslash escapes and punctuation; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_special_keys = (): void => {
  // Key with spaces
  const r1 = LlmJson.parse('{"key with spaces": 42}');
  TestEquality.equals("space-key-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("space-key-data", r1.data, {
      "key with spaces": 42,
    });

  // Key with escape sequences
  const r2 = LlmJson.parse('{"key\\"with\\"quotes": 1}');
  TestEquality.equals("escape-key-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("escape-key-data", r2.data, {
      'key"with"quotes': 1,
    });

  // Key with unicode escape
  const r3 = LlmJson.parse('{"\\u0041\\u0042": "AB key"}');
  TestEquality.equals("unicode-key-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("unicode-key-data", r3.data, { AB: "AB key" });

  // Empty string key
  const r4 = LlmJson.parse('{"": "empty key"}');
  TestEquality.equals("empty-key-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("empty-key-data", r4.data, { "": "empty key" });

  // Key with newline escape
  const r5 = LlmJson.parse('{"line\\none": 1}');
  TestEquality.equals("newline-key-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("newline-key-data", r5.data, { "line\none": 1 });

  // Key with backslash
  const r6 = LlmJson.parse('{"path\\\\to\\\\file": "value"}');
  TestEquality.equals("backslash-key-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("backslash-key-data", r6.data, {
      "path\\to\\file": "value",
    });

  // Key that looks like a number
  const r7 = LlmJson.parse('{"123": "numeric key"}');
  TestEquality.equals("numeric-key-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("numeric-key-data", r7.data, {
      "123": "numeric key",
    });

  // Key with special characters
  const r8 = LlmJson.parse('{"@#$%^&*()": "special"}');
  TestEquality.equals("special-char-key-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("special-char-key-data", r8.data, {
      "@#$%^&*()": "special",
    });

  // Key with tab and other control escapes
  const r9 = LlmJson.parse('{"col1\\tcol2": "tabbed"}');
  TestEquality.equals("tab-key-success", r9.success, true);
  if (r9.success)
    TestEquality.equals("tab-key-data", r9.data, { "col1\tcol2": "tabbed" });

  // Key that is only whitespace
  const r10 = LlmJson.parse('{" ": "space key"}');
  TestEquality.equals("ws-key-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("ws-key-data", r10.data, { " ": "space key" });
};
