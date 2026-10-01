import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that nested escaping preserves opaque string content.
 *
 * Decoding one JSON string layer must not recursively parse quoted JSON data or
 * lose backslashes belonging to inner text.
 *
 * 1. Exercise double/triple escaping, repeated backslashes/quotes, known and
 *    unknown escapes, paths and log text.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns double/triple escaping, repeated backslashes/quotes, known and unknown escapes, paths and log text; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_string_multi_level_escape =
  (): void => {
    // Double-stringified JSON (common in LLM tool outputs)
    // Original: {"key": "value"}
    // Stringified once: "{\"key\": \"value\"}"
    // In JSON: {"data": "{\"key\": \"value\"}"}
    const r1 = LlmJson.parse('{"data": "{\\"key\\": \\"value\\"}"}');
    TestEquality.equals("double-stringify-success", r1.success, true);
    if (r1.success)
      TestEquality.equals("double-stringify-data", r1.data, {
        data: '{"key": "value"}',
      });

    // Triple-stringified (yes, this happens in real systems)
    // The value is: {"key": "value"}
    // After 1st stringify: "{\"key\": \"value\"}"
    // After 2nd stringify: "{\\\"key\\\": \\\"value\\\"}"
    // In JSON: {"data": "{\\\"key\\\": \\\"value\\\"}"}
    const r2 = LlmJson.parse(
      '{"data": "{\\\\\\"key\\\\\\": \\\\\\"value\\\\\\"}"}',
    );
    TestEquality.equals("triple-stringify-success", r2.success, true);
    if (r2.success)
      TestEquality.equals("triple-stringify-data", r2.data, {
        data: '{\\"key\\": \\"value\\"}',
      });

    // String with many consecutive backslashes
    // 8 backslashes in source: \\\\\\\\ → 4 in JSON → 2 in result
    const r3 = LlmJson.parse('{"bs": "\\\\\\\\\\\\\\\\"}');
    TestEquality.equals("8-backslashes-success", r3.success, true);
    if (r3.success)
      TestEquality.equals("8-backslashes-data", r3.data, {
        bs: "\\\\\\\\",
      });

    // Alternating backslashes and quotes
    const r4 = LlmJson.parse('{"text": "\\\\\\"\\\\\\"\\\\\\""}');
    TestEquality.equals("alt-bs-quote-success", r4.success, true);
    if (r4.success)
      TestEquality.equals("alt-bs-quote-data", r4.data, {
        text: '\\"\\"\\"',
      });

    // Backslash before every character
    const r5 = LlmJson.parse('{"text": "\\a\\b\\c\\d\\e\\f\\g\\h"}');
    TestEquality.equals("escape-every-char-success", r5.success, true);
    if (r5.success)
      // \a→a, \b→backspace, \c→c, \d→d, \e→e, \f→formfeed, \g→g, \h→h
      TestEquality.equals("escape-every-char-data", r5.data, {
        text: "a\bcde\fgh",
      });

    // Path-like string with many backslashes
    const r6 = LlmJson.parse(
      '{"path": "C:\\\\Users\\\\admin\\\\Documents\\\\file.txt"}',
    );
    TestEquality.equals("windows-path-success", r6.success, true);
    if (r6.success)
      TestEquality.equals("windows-path-data", r6.data, {
        path: "C:\\Users\\admin\\Documents\\file.txt",
      });

    // JSON containing a JSON string containing escape sequences
    const r7 = LlmJson.parse(
      '{"log": "Error at line 5:\\n\\tExpected: \\\\\\"hello\\\\\\"\\n\\tGot: null"}',
    );
    TestEquality.equals("log-message-success", r7.success, true);
    if (r7.success)
      TestEquality.equals("log-message-data", r7.data, {
        log: 'Error at line 5:\n\tExpected: \\"hello\\"\n\tGot: null',
      });
  };
