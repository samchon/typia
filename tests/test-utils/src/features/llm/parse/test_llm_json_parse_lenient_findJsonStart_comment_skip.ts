import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * Tests that findJsonStart properly skips comments in junk prefix even when
 * those comments contain `{` or `[` characters.
 *
 * Without comment-skipping, findJsonStart would match the `{` or `[` inside the
 * comment, leading to incorrect parsing.
 */
export const test_llm_json_parse_lenient_findJsonStart_comment_skip =
  (): void => {
    // Single-line comment with { in junk prefix
    const r1 = LlmJson.parse('// see {here}\n{"key": 1}');
    TestValidator.equals("sl-brace-success", r1.success, true);
    if (r1.success) TestValidator.equals("sl-brace-data", r1.data, { key: 1 });

    // Single-line comment with [ in junk prefix
    const r2 = LlmJson.parse("// items [0] [1]\n[1, 2, 3]");
    TestValidator.equals("sl-bracket-success", r2.success, true);
    if (r2.success) TestValidator.equals("sl-bracket-data", r2.data, [1, 2, 3]);

    // Multi-line comment with { in junk prefix
    const r3 = LlmJson.parse('/* config: {a: 1, b: 2} */ {"key": 1}');
    TestValidator.equals("ml-brace-success", r3.success, true);
    if (r3.success) TestValidator.equals("ml-brace-data", r3.data, { key: 1 });

    // Multi-line comment with [ in junk prefix
    const r4 = LlmJson.parse("/* see [0, 1, 2] */ [10, 20]");
    TestValidator.equals("ml-bracket-success", r4.success, true);
    if (r4.success) TestValidator.equals("ml-bracket-data", r4.data, [10, 20]);

    // Multiple comments with braces before real JSON
    const r5 = LlmJson.parse(
      '// first {a}\n// second [b]\n/* third {c: [d]} */\n{"real": true}',
    );
    TestValidator.equals("multi-comment-success", r5.success, true);
    if (r5.success)
      TestValidator.equals("multi-comment-data", r5.data, { real: true });

    // Comment with nested braces and brackets
    const r6 = LlmJson.parse('/* {{{[[[}}}]]] */ {"key": "value"}');
    TestValidator.equals("nested-in-comment-success", r6.success, true);
    if (r6.success)
      TestValidator.equals("nested-in-comment-data", r6.data, {
        key: "value",
      });

    // Single-line comment with { at end of line (no newline after)
    const r7 = LlmJson.parse("// {comment");
    TestValidator.equals("sl-no-newline-success", r7.success, false);
    if (!r7.success)
      TestValidator.equals(
        "sl-no-newline-errors",
        [{ expected: "JSON value" }],
        r7.errors,
      );

    // Comment in junk, then JSON with comment inside
    const r8 = LlmJson.parse('// junk {x}\n{"key": 1 /* inline {y} */}');
    TestValidator.equals("nested-comments-success", r8.success, true);
    if (r8.success)
      TestValidator.equals("nested-comments-data", r8.data, { key: 1 });
  };
