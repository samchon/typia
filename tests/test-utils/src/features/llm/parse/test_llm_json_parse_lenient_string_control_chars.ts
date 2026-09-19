import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

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
