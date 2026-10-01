import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that valid JSON escape decoding returns the declared characters.
 *
 * The public utility must preserve native JSON escape semantics as well as its
 * fallback behavior.
 *
 * 1. Exercise quote, backslash, slash, backspace, formfeed, newline, carriage
 *    return and tab fields.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns quote, backslash, slash, backspace, formfeed, newline, carriage return and tab fields; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_escape_standard_path = (): void => {
  // Test all standard escape sequences
  const result = LlmJson.parse(
    '{"quote": "\\"", "backslash": "\\\\", "slash": "\\/", "backspace": "\\b", "formfeed": "\\f", "newline": "\\n", "return": "\\r", "tab": "\\t"}',
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "quote",
      (result.data as Record<string, string>).quote,
      '"',
    );
    TestEquality.equals(
      "backslash",
      (result.data as Record<string, string>).backslash,
      "\\",
    );
    TestEquality.equals(
      "slash",
      (result.data as Record<string, string>).slash,
      "/",
    );
    TestEquality.equals(
      "backspace",
      (result.data as Record<string, string>).backspace,
      "\b",
    );
    TestEquality.equals(
      "formfeed",
      (result.data as Record<string, string>).formfeed,
      "\f",
    );
    TestEquality.equals(
      "newline",
      (result.data as Record<string, string>).newline,
      "\n",
    );
    TestEquality.equals(
      "return",
      (result.data as Record<string, string>).return,
      "\r",
    );
    TestEquality.equals(
      "tab",
      (result.data as Record<string, string>).tab,
      "\t",
    );
  }
};
