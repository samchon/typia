import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * Tests that extractMarkdownCodeBlock is case-sensitive (requires ```json
 * exactly), and that JSON inside non-matching code blocks is still found via
 * findJsonStart fallback.
 *
 * This pins down the behavior: `JSON, `Json, `jsonl, `json5 are NOT recognized
 * as markdown code blocks, but the JSON inside them is still parsed because
 * findJsonStart finds the { or [ after scanning past the backticks as junk.
 */
export const test_llm_json_parse_lenient_markdown_case_insensitive =
  (): void => {
    // ```JSON (all uppercase) → not extracted, but { found via findJsonStart
    const r1 = LlmJson.parse('```JSON\n{"key": 1}\n```');
    TestValidator.equals("uppercase-JSON-success", r1.success, true);
    if (r1.success)
      TestValidator.equals("uppercase-JSON-data", r1.data, { key: 1 });

    // ```Json (mixed case) → not extracted, but { found via findJsonStart
    const r2 = LlmJson.parse('```Json\n{"key": 1}\n```');
    TestValidator.equals("mixed-Json-success", r2.success, true);
    if (r2.success)
      TestValidator.equals("mixed-Json-data", r2.data, { key: 1 });

    // ```jsonl (extra letter) → IS extracted because indexOf("```json") matches
    // the "```json" prefix. Content after "```jsonl\n" is extracted.
    const r3 = LlmJson.parse('```jsonl\n{"key": 1}\n```');
    TestValidator.equals("jsonl-tag-success", r3.success, true);
    if (r3.success) TestValidator.equals("jsonl-tag-data", r3.data, { key: 1 });

    // ```json5 → also matches because indexOf("```json") finds the prefix
    const r4 = LlmJson.parse('```json5\n{"key": 1}\n```');
    TestValidator.equals("json5-tag-success", r4.success, true);
    if (r4.success) TestValidator.equals("json5-tag-data", r4.data, { key: 1 });

    // ```JSON with array → same fallback to findJsonStart
    const r5 = LlmJson.parse("```JSON\n[1, 2, 3]\n```");
    TestValidator.equals("uppercase-JSON-arr-success", r5.success, true);
    if (r5.success)
      TestValidator.equals("uppercase-JSON-arr-data", r5.data, [1, 2, 3]);

    // ```JSONL (uppercase + extra letter) → no match at all, findJsonStart
    const r6 = LlmJson.parse('```JSONL\n{"key": 1}\n```');
    TestValidator.equals("uppercase-JSONL-success", r6.success, true);
    if (r6.success)
      TestValidator.equals("uppercase-JSONL-data", r6.data, { key: 1 });
  };
