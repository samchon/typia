import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that escape-only strings retain all decoded characters.
 *
 * Repeated escapes must preserve every output code unit, and unknown escapes
 * must remain distinct from standard controls.
 *
 * 1. Exercise newlines, tabs, quotes, backslashes, alternating controls,
 *    known/unknown mixtures and Unicode-only content.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns newlines, tabs, quotes, backslashes, alternating controls, known/unknown mixtures and Unicode-only content; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_string_only_escapes = (): void => {
  // String that is entirely escape sequences
  const r1 = LlmJson.parse('{"t": "\\n\\n\\n\\n\\n"}');
  TestEquality.equals("all-newlines-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("all-newlines-data", r1.data, {
      t: "\n\n\n\n\n",
    });

  // String that is entirely tabs
  const r2 = LlmJson.parse('{"t": "\\t\\t\\t"}');
  TestEquality.equals("all-tabs-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("all-tabs-data", r2.data, { t: "\t\t\t" });

  // String that is entirely quotes
  const r3 = LlmJson.parse('{"t": "\\"\\"\\""}');
  TestEquality.equals("all-quotes-success", r3.success, true);
  if (r3.success) TestEquality.equals("all-quotes-data", r3.data, { t: '"""' });

  // String that is entirely backslashes
  const r4 = LlmJson.parse('{"t": "\\\\\\\\\\\\"}');
  TestEquality.equals("all-backslashes-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("all-backslashes-data", r4.data, {
      t: "\\\\\\",
    });

  // String of alternating escape sequences
  const r5 = LlmJson.parse('{"t": "\\n\\t\\r\\n\\t\\r"}');
  TestEquality.equals("alternating-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("alternating-data", r5.data, {
      t: "\n\t\r\n\t\r",
    });

  // Unknown escapes repeated
  const r6 = LlmJson.parse('{"t": "\\x\\y\\z\\w"}');
  TestEquality.equals("unknown-repeated-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("unknown-repeated-data", r6.data, {
      t: "xyzw",
    });

  // Mix of known and unknown escapes
  const r7 = LlmJson.parse('{"t": "\\n\\x\\t\\y\\r\\z"}');
  TestEquality.equals("mixed-known-unknown-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("mixed-known-unknown-data", r7.data, {
      t: "\nx\ty\rz",
    });

  // String with only unicode escapes
  const r8 = LlmJson.parse('{"t": "\\u0048\\u0065\\u006C\\u006C\\u006F"}');
  TestEquality.equals("unicode-only-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("unicode-only-data", r8.data, { t: "Hello" });
};
