import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that lenient strings preserve raw and escaped control characters.
 *
 * Raw controls require fallback parsing while equivalent escaped code units
 * still retain the same data.
 *
 * 1. Exercise raw tab/newline/return/CRLF and escaped NBSP, null and bell
 *    characters.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns raw tab/newline/return/CRLF and escaped NBSP, null and bell characters; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_string_control_chars = (): void => {
  // String with raw tab character (should be handled leniently)
  const r1 = LlmJson.parse('{"text": "hello\tworld"}');
  TestEquality.equals("raw-tab-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("raw-tab-data", r1.data, {
      text: "hello\tworld",
    });

  // String with raw newline (multi-line string - lenient)
  const r2 = LlmJson.parse('{"text": "line1\nline2"}');
  TestEquality.equals("raw-newline-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("raw-newline-data", r2.data, {
      text: "line1\nline2",
    });

  // String with carriage return
  const r3 = LlmJson.parse('{"text": "line1\rline2"}');
  TestEquality.equals("raw-cr-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("raw-cr-data", r3.data, {
      text: "line1\rline2",
    });

  // String with CRLF
  const r4 = LlmJson.parse('{"text": "line1\r\nline2"}');
  TestEquality.equals("raw-crlf-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("raw-crlf-data", r4.data, {
      text: "line1\r\nline2",
    });

  // String with various Unicode whitespace characters (literal)
  const r5 = LlmJson.parse('{"text": "non\\u00A0breaking"}');
  TestEquality.equals("nbsp-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("nbsp-data", r5.data, {
      text: "non\u00A0breaking",
    });

  // Null character via unicode escape
  const r6 = LlmJson.parse('{"text": "has\\u0000null"}');
  TestEquality.equals("null-char-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("null-char-data", r6.data, {
      text: "has\u0000null",
    });

  // Bell character via unicode escape
  const r7 = LlmJson.parse('{"text": "\\u0007bell"}');
  TestEquality.equals("bell-char-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("bell-char-data", r7.data, {
      text: "\u0007bell",
    });
};
