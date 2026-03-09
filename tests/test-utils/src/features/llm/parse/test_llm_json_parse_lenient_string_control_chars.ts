import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_control_chars = (): void => {
  // String with raw tab character (should be handled leniently)
  const r1 = LlmJson.parse('{"text": "hello\tworld"}');
  TestValidator.equals("raw-tab-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("raw-tab-data", r1.data, {
      text: "hello\tworld",
    });

  // String with raw newline (multi-line string - lenient)
  const r2 = LlmJson.parse('{"text": "line1\nline2"}');
  TestValidator.equals("raw-newline-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("raw-newline-data", r2.data, {
      text: "line1\nline2",
    });

  // String with carriage return
  const r3 = LlmJson.parse('{"text": "line1\rline2"}');
  TestValidator.equals("raw-cr-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("raw-cr-data", r3.data, {
      text: "line1\rline2",
    });

  // String with CRLF
  const r4 = LlmJson.parse('{"text": "line1\r\nline2"}');
  TestValidator.equals("raw-crlf-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("raw-crlf-data", r4.data, {
      text: "line1\r\nline2",
    });

  // String with various Unicode whitespace characters (literal)
  const r5 = LlmJson.parse('{"text": "non\\u00A0breaking"}');
  TestValidator.equals("nbsp-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("nbsp-data", r5.data, {
      text: "non\u00A0breaking",
    });

  // Null character via unicode escape
  const r6 = LlmJson.parse('{"text": "has\\u0000null"}');
  TestValidator.equals("null-char-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("null-char-data", r6.data, {
      text: "has\u0000null",
    });

  // Bell character via unicode escape
  const r7 = LlmJson.parse('{"text": "\\u0007bell"}');
  TestValidator.equals("bell-char-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("bell-char-data", r7.data, {
      text: "\u0007bell",
    });
};
