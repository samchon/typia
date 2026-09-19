import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_boundary_escapes = (): void => {
  // String ending with escape character at EOF (unclosed)
  const r1 = LlmJson.parse('{"text": "hello\\');
  TestEquality.equals("trailing-backslash-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("trailing-backslash-data", r1.data, {
      text: "hello",
    });

  // String starting with escape sequence
  const r2 = LlmJson.parse('{"text": "\\nhello"}');
  TestEquality.equals("leading-escape-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("leading-escape-data", r2.data, {
      text: "\nhello",
    });

  // String that is only an escape sequence
  const r3 = LlmJson.parse('{"text": "\\n"}');
  TestEquality.equals("only-escape-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("only-escape-data", r3.data, { text: "\n" });

  // Unclosed string ending with escaped quote (no closing quote)
  const r4 = LlmJson.parse('{"text": "hello\\"');
  TestEquality.equals("unclosed-escaped-quote-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("unclosed-escaped-quote-data", r4.data, {
      text: 'hello"',
    });

  // String with escaped backslash right before closing quote
  const r5 = LlmJson.parse('{"text": "path\\\\"}');
  TestEquality.equals("escape-before-close-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("escape-before-close-data", r5.data, {
      text: "path\\",
    });

  // Empty string value
  const r6 = LlmJson.parse('{"empty": ""}');
  TestEquality.equals("empty-string-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("empty-string-data", r6.data, { empty: "" });

  // String containing only spaces
  const r7 = LlmJson.parse('{"spaces": "   "}');
  TestEquality.equals("spaces-only-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("spaces-only-data", r7.data, { spaces: "   " });

  // Multiple empty strings
  const r8 = LlmJson.parse('{"a": "", "b": "", "c": ""}');
  TestEquality.equals("multi-empty-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("multi-empty-data", r8.data, {
      a: "",
      b: "",
      c: "",
    });
};
