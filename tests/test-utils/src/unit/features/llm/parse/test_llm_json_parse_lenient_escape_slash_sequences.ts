import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that slash and backslash decoding preserves string boundaries.
 *
 * A quoted delimiter after an even number of backslashes closes the string; an
 * escaped quote remains content.
 *
 * 1. Exercise escaped and plain slashes, two/three/four backslashes, and unknown
 *    followed by known escapes.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns escaped and plain slashes, two/three/four backslashes, and unknown followed by known escapes; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_escape_slash_sequences = (): void => {
  // Escaped forward slash (valid JSON but rarely used)
  const r1 = LlmJson.parse('{"url": "http:\\/\\/example.com"}');
  TestEquality.equals("escaped-slash-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("escaped-slash-data", r1.data, {
      url: "http://example.com",
    });

  // Mixed escaped and unescaped slashes
  const r2 = LlmJson.parse('{"path": "\\/root/dir\\/file"}');
  TestEquality.equals("mixed-slash-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("mixed-slash-data", r2.data, {
      path: "/root/dir/file",
    });

  // Multiple backslashes before quote: \\\\" means \\ then end of string
  const r3 = LlmJson.parse('{"text": "end\\\\"}');
  TestEquality.equals("double-bs-end-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("double-bs-end-data", r3.data, { text: "end\\" });

  // Triple backslash before quote: \\\\\\" means \\ then \"
  const r4 = LlmJson.parse('{"text": "end\\\\\\"more"}');
  TestEquality.equals("triple-bs-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("triple-bs-data", r4.data, {
      text: 'end\\"more',
    });

  // Four backslashes: \\\\\\\\ means \\\\
  const r5 = LlmJson.parse('{"text": "\\\\\\\\"}');
  TestEquality.equals("quad-bs-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("quad-bs-data", r5.data, { text: "\\\\" });

  // Unknown escape followed by valid escape
  const r6 = LlmJson.parse('{"text": "\\x\\n"}');
  TestEquality.equals("unknown-then-valid-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("unknown-then-valid-data", r6.data, {
      text: "x\n",
    });
};
