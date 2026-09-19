import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_consecutive_escapes =
  (): void => {
    // Multiple consecutive escape sequences
    const r1 = LlmJson.parse('{"text": "\\n\\t\\r\\b\\f"}');
    TestEquality.equals("consecutive-success", r1.success, true);
    if (r1.success)
      TestEquality.equals("consecutive-data", r1.data, {
        text: "\n\t\r\b\f",
      });

    // Multiple consecutive backslashes
    const r2 = LlmJson.parse('{"path": "C:\\\\Users\\\\test\\\\file.txt"}');
    TestEquality.equals("backslashes-success", r2.success, true);
    if (r2.success)
      TestEquality.equals("backslashes-data", r2.data, {
        path: "C:\\Users\\test\\file.txt",
      });

    // Mixed escapes in sequence
    const r3 = LlmJson.parse(
      '{"mixed": "line1\\nline2\\t\\"quoted\\"\\tline3"}',
    );
    TestEquality.equals("mixed-success", r3.success, true);
    if (r3.success)
      TestEquality.equals("mixed-data", r3.data, {
        mixed: 'line1\nline2\t"quoted"\tline3',
      });

    // Escaped backslash followed by n (not newline)
    const r4 = LlmJson.parse('{"text": "\\\\n"}');
    TestEquality.equals("escaped-backslash-n-success", r4.success, true);
    if (r4.success)
      TestEquality.equals("escaped-backslash-n-data", r4.data, {
        text: "\\n",
      });

    // Escaped backslash followed by escaped quote
    const r5 = LlmJson.parse('{"text": "\\\\\\"end"}');
    TestEquality.equals("escaped-backslash-quote-success", r5.success, true);
    if (r5.success)
      TestEquality.equals("escaped-backslash-quote-data", r5.data, {
        text: '\\"end',
      });

    // All escapes together
    const r6 = LlmJson.parse('{"all": "\\"\\\\\\/ \\b\\f\\n\\r\\t"}');
    TestEquality.equals("all-escapes-success", r6.success, true);
    if (r6.success)
      TestEquality.equals("all-escapes-data", r6.data, {
        all: '"\\/ \b\f\n\r\t',
      });
  };
