import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that array prefix recovery retains each available element.
 *
 * Streaming truncation at a token boundary must preserve prior elements while
 * recovering the unfinished nested value.
 *
 * 1. Exercise opening bracket, value/comma/string/keyword boundaries and nested
 *    object/array prefixes through the complete array.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns opening bracket, value/comma/string/keyword boundaries and nested object/array prefixes through the complete array; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_truncation_array_systematic =
  (): void => {
    // Full: [1, "hello", true, null, {"key": "val"}, [2, 3]]
    // Truncate at every meaningful position

    // 1. Opening bracket
    const r1 = LlmJson.parse("[");
    TestEquality.equals("t1-success", r1.success, true);
    if (r1.success) TestEquality.equals("t1-data", r1.data, []);

    // 2. First number
    const r2 = LlmJson.parse("[1");
    TestEquality.equals("t2-success", r2.success, true);
    if (r2.success) TestEquality.equals("t2-data", r2.data, [1]);

    // 3. After first comma
    const r3 = LlmJson.parse("[1,");
    TestEquality.equals("t3-success", r3.success, true);
    if (r3.success) TestEquality.equals("t3-data", r3.data, [1]);

    // 4. Second element string opening
    const r4 = LlmJson.parse('[1, "');
    TestEquality.equals("t4-success", r4.success, true);
    if (r4.success) TestEquality.equals("t4-data", r4.data, [1, ""]);

    // 5. Partial string
    const r5 = LlmJson.parse('[1, "hell');
    TestEquality.equals("t5-success", r5.success, true);
    if (r5.success) TestEquality.equals("t5-data", r5.data, [1, "hell"]);

    // 6. Complete string (no closing bracket)
    const r6 = LlmJson.parse('[1, "hello"');
    TestEquality.equals("t6-success", r6.success, true);
    if (r6.success) TestEquality.equals("t6-data", r6.data, [1, "hello"]);

    // 7. After second comma
    const r7 = LlmJson.parse('[1, "hello",');
    TestEquality.equals("t7-success", r7.success, true);
    if (r7.success) TestEquality.equals("t7-data", r7.data, [1, "hello"]);

    // 8. Partial keyword true
    const r8 = LlmJson.parse('[1, "hello", tr');
    TestEquality.equals("t8-success", r8.success, true);
    if (r8.success) TestEquality.equals("t8-data", r8.data, [1, "hello", true]);

    // 9. Complete true
    const r9 = LlmJson.parse('[1, "hello", true');
    TestEquality.equals("t9-success", r9.success, true);
    if (r9.success) TestEquality.equals("t9-data", r9.data, [1, "hello", true]);

    // 10. Partial null
    const r10 = LlmJson.parse('[1, "hello", true, nu');
    TestEquality.equals("t10-success", r10.success, true);
    if (r10.success)
      TestEquality.equals("t10-data", r10.data, [1, "hello", true, null]);

    // 11. Nested object starting
    const r11 = LlmJson.parse('[1, "hello", true, null, {');
    TestEquality.equals("t11-success", r11.success, true);
    if (r11.success)
      TestEquality.equals("t11-data", r11.data, [1, "hello", true, null, {}]);

    // 12. Nested object with key
    const r12 = LlmJson.parse('[1, "hello", true, null, {"key"');
    TestEquality.equals("t12-success", r12.success, true);
    if (r12.success)
      TestEquality.equals("t12-data", r12.data, [1, "hello", true, null, {}]);

    // 13. Nested object with key+colon+value
    const r13 = LlmJson.parse('[1, "hello", true, null, {"key": "val"');
    TestEquality.equals("t13-success", r13.success, true);
    if (r13.success)
      TestEquality.equals("t13-data", r13.data, [
        1,
        "hello",
        true,
        null,
        { key: "val" },
      ]);

    // 14. Nested object closed, then nested array
    const r14 = LlmJson.parse('[1, "hello", true, null, {"key": "val"}, [');
    TestEquality.equals("t14-success", r14.success, true);
    if (r14.success)
      TestEquality.equals("t14-data", r14.data, [
        1,
        "hello",
        true,
        null,
        { key: "val" },
        [],
      ]);

    // 15. Nested array with elements
    const r15 = LlmJson.parse('[1, "hello", true, null, {"key": "val"}, [2, 3');
    TestEquality.equals("t15-success", r15.success, true);
    if (r15.success)
      TestEquality.equals("t15-data", r15.data, [
        1,
        "hello",
        true,
        null,
        { key: "val" },
        [2, 3],
      ]);

    // 16. Fully complete
    const r16 = LlmJson.parse(
      '[1, "hello", true, null, {"key": "val"}, [2, 3]]',
    );
    TestEquality.equals("t16-success", r16.success, true);
    if (r16.success)
      TestEquality.equals("t16-data", r16.data, [
        1,
        "hello",
        true,
        null,
        { key: "val" },
        [2, 3],
      ]);
  };
