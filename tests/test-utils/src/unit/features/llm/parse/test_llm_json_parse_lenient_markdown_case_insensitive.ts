import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that container recovery accepts varied fence labels.
 *
 * Objects and arrays remain discoverable under uppercase, mixed-case and
 * suffixed labels even when their extraction routes differ.
 *
 * 1. Exercise JSON, Json, jsonl, json5 and JSONL labels with object and array
 *    content; these outputs do not alone prove which extraction route
 *    executed.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns JSON, Json, jsonl, json5 and JSONL labels with object and array content; these outputs do not alone prove which extraction route executed; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_markdown_case_insensitive =
  (): void => {
    // ```JSON (all uppercase) → not extracted, but { found via findJsonStart
    const r1 = LlmJson.parse('```JSON\n{"key": 1}\n```');
    TestEquality.equals("uppercase-JSON-success", r1.success, true);
    if (r1.success)
      TestEquality.equals("uppercase-JSON-data", r1.data, { key: 1 });

    // ```Json (mixed case) → not extracted, but { found via findJsonStart
    const r2 = LlmJson.parse('```Json\n{"key": 1}\n```');
    TestEquality.equals("mixed-Json-success", r2.success, true);
    if (r2.success) TestEquality.equals("mixed-Json-data", r2.data, { key: 1 });

    // ```jsonl (extra letter) → IS extracted because indexOf("```json") matches
    // the "```json" prefix. Content after "```jsonl\n" is extracted.
    const r3 = LlmJson.parse('```jsonl\n{"key": 1}\n```');
    TestEquality.equals("jsonl-tag-success", r3.success, true);
    if (r3.success) TestEquality.equals("jsonl-tag-data", r3.data, { key: 1 });

    // ```json5 → also matches because indexOf("```json") finds the prefix
    const r4 = LlmJson.parse('```json5\n{"key": 1}\n```');
    TestEquality.equals("json5-tag-success", r4.success, true);
    if (r4.success) TestEquality.equals("json5-tag-data", r4.data, { key: 1 });

    // ```JSON with array → same fallback to findJsonStart
    const r5 = LlmJson.parse("```JSON\n[1, 2, 3]\n```");
    TestEquality.equals("uppercase-JSON-arr-success", r5.success, true);
    if (r5.success)
      TestEquality.equals("uppercase-JSON-arr-data", r5.data, [1, 2, 3]);

    // ```JSONL (uppercase + extra letter) → no match at all, findJsonStart
    const r6 = LlmJson.parse('```JSONL\n{"key": 1}\n```');
    TestEquality.equals("uppercase-JSONL-success", r6.success, true);
    if (r6.success)
      TestEquality.equals("uppercase-JSONL-data", r6.data, { key: 1 });
  };
