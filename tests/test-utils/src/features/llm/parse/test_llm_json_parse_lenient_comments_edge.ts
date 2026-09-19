import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_comments_edge = (): void => {
  // Comment containing JSON-like content
  const r1 = LlmJson.parse('{"key": 1 /* {"not": "parsed"} */}');
  TestEquality.equals("json-in-comment-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("json-in-comment-data", r1.data, { key: 1 });

  // Comment containing braces
  const r2 = LlmJson.parse('{"key": 1 /* { } [ ] */}');
  TestEquality.equals("braces-in-comment-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("braces-in-comment-data", r2.data, { key: 1 });

  // Single-line comment with special characters
  const r3 = LlmJson.parse('{"key": 1 // !@#$%^&*(){}[]\n}');
  TestEquality.equals("special-in-comment-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("special-in-comment-data", r3.data, { key: 1 });

  // Comment between array elements
  const r4 = LlmJson.parse("[1, /* two */ 2, /* three */ 3]");
  TestEquality.equals("comment-arr-elements-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("comment-arr-elements-data", r4.data, [1, 2, 3]);

  // Multi-line comment spanning many lines
  const r5 = LlmJson.parse(
    '{"key": /* \n line 1 \n line 2 \n line 3 \n */ "value"}',
  );
  TestEquality.equals("multiline-span-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("multiline-span-data", r5.data, { key: "value" });

  // Comment right after opening brace before first key
  const r6 = LlmJson.parse(
    '{/* config */\n"debug": true, /* mode */\n"verbose": false}',
  );
  TestEquality.equals("comment-config-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("comment-config-data", r6.data, {
      debug: true,
      verbose: false,
    });

  // Comment at very end of file (no newline)
  const r7 = LlmJson.parse('{"key": 1} // trailing');
  TestEquality.equals("trailing-comment-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("trailing-comment-data", r7.data, { key: 1 });

  // Nested comments with stars (not nested /* */ but stars in content)
  const r8 = LlmJson.parse('{"key": /* ** star ** */ 1}');
  TestEquality.equals("stars-in-comment-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("stars-in-comment-data", r8.data, { key: 1 });

  // Single slash (not a comment) - should be treated as junk
  const r9 = LlmJson.parse('/ {"key": 1}');
  TestEquality.equals("single-slash-success", r9.success, true);
  if (r9.success) TestEquality.equals("single-slash-data", r9.data, { key: 1 });
};
