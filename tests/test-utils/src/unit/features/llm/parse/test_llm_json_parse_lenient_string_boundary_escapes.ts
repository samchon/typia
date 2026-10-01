import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that string escape recovery preserves EOF and closing boundaries.
 *
 * Escapes at either end of a string must not lose decoded content or absorb its
 * closing delimiter.
 *
 * 1. Exercise trailing backslash, leading/only newline, unclosed escaped quote,
 *    escaped backslash before close, empty and whitespace-only strings.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns trailing backslash, leading/only newline, unclosed escaped quote, escaped backslash before close, empty and whitespace-only strings; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
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
