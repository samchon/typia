import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_comments_edge = (): void => {
  // Comment containing JSON-like content
  const r1 = LlmJson.parse(
    '{"key": 1 /* {"not": "parsed"} */}',
  );
  TestValidator.equals("json-in-comment-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("json-in-comment-data", r1.data, { key: 1 });

  // Comment containing braces
  const r2 = LlmJson.parse('{"key": 1 /* { } [ ] */}');
  TestValidator.equals("braces-in-comment-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("braces-in-comment-data", r2.data, { key: 1 });

  // Single-line comment with special characters
  const r3 = LlmJson.parse(
    '{"key": 1 // !@#$%^&*(){}[]\n}',
  );
  TestValidator.equals("special-in-comment-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("special-in-comment-data", r3.data, { key: 1 });

  // Comment between array elements
  const r4 = LlmJson.parse("[1, /* two */ 2, /* three */ 3]");
  TestValidator.equals("comment-arr-elements-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("comment-arr-elements-data", r4.data, [1, 2, 3]);

  // Multi-line comment spanning many lines
  const r5 = LlmJson.parse(
    '{"key": /* \n line 1 \n line 2 \n line 3 \n */ "value"}',
  );
  TestValidator.equals("multiline-span-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("multiline-span-data", r5.data, { key: "value" });

  // Comment right after opening brace before first key
  const r6 = LlmJson.parse(
    '{/* config */\n"debug": true, /* mode */\n"verbose": false}',
  );
  TestValidator.equals("comment-config-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("comment-config-data", r6.data, {
      debug: true,
      verbose: false,
    });

  // Comment at very end of file (no newline)
  const r7 = LlmJson.parse('{"key": 1} // trailing');
  TestValidator.equals("trailing-comment-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("trailing-comment-data", r7.data, { key: 1 });

  // Nested comments with stars (not nested /* */ but stars in content)
  const r8 = LlmJson.parse('{"key": /* ** star ** */ 1}');
  TestValidator.equals("stars-in-comment-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("stars-in-comment-data", r8.data, { key: 1 });

  // Single slash (not a comment) - should be treated as junk
  const r9 = LlmJson.parse('/ {"key": 1}');
  TestValidator.equals("single-slash-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("single-slash-data", r9.data, { key: 1 });
};
