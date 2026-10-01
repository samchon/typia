import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies root JSON strings preserve escaped and partial content.
 *
 * String values may carry JSON punctuation as data. Complete strings follow
 * JSON escape semantics, while the documented lenient mode recovers an
 * unfinished string.
 *
 * 1. Parse ordinary, escaped, empty, unfinished and Unicode-escaped root strings.
 * 2. Compare success and complete decoded text, including every standard escape
 *    type.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmJson.parse is called directly and each data assertion checks decoded text rather than merely successful acceptance.
 * @evidence contracts/testing.md#independent-expectations Literal decoded strings follow JSON escape semantics; the unfinished-string expectation follows the public parse comment permitting unclosed strings and partial recovery.
 * @evidence contracts/testing.md#distinguishing-cases Plain text, newline escape, empty content, unclosed content, Unicode escapes and combined quote, slash, backslash and control escapes preserve six success/data pairs; malformed escape coverage remains in the dedicated escape cases.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported function with node:test; it imports the plugin-free oracle and calls the utility directly without a transformed fixture, native artifact, SDK host or process protocol.
 */
export const test_llm_json_parse_lenient_primitive_string = (): void => {
  // Simple string at root
  const r1 = LlmJson.parse('"hello"');
  TestEquality.equals("simple-success", r1.success, true);
  if (r1.success) TestEquality.equals("simple-data", r1.data, "hello");

  // String with escape at root
  const r2 = LlmJson.parse('"hello\\nworld"');
  TestEquality.equals("escape-success", r2.success, true);
  if (r2.success) TestEquality.equals("escape-data", r2.data, "hello\nworld");

  // Empty string at root
  const r3 = LlmJson.parse('""');
  TestEquality.equals("empty-success", r3.success, true);
  if (r3.success) TestEquality.equals("empty-data", r3.data, "");

  // Unclosed string at root
  const r4 = LlmJson.parse('"unclosed');
  TestEquality.equals("unclosed-success", r4.success, true);
  if (r4.success) TestEquality.equals("unclosed-data", r4.data, "unclosed");

  // String with unicode at root
  const r5 = LlmJson.parse('"\\u0041\\u0042\\u0043"');
  TestEquality.equals("unicode-success", r5.success, true);
  if (r5.success) TestEquality.equals("unicode-data", r5.data, "ABC");

  // String with all escape types at root
  const r6 = LlmJson.parse('"\\"\\\\\\/\\b\\f\\n\\r\\t"');
  TestEquality.equals("all-esc-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("all-esc-data", r6.data, '"\\/\b\f\n\r\t');
};
