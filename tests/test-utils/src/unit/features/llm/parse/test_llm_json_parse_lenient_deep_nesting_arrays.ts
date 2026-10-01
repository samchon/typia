import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that nested arrays retain values and grouping.
 *
 * Nested containers must preserve element order while EOF recovery closes only
 * the unfinished structure.
 *
 * 1. Exercise complete arrays, mixed object/array nesting, three-level EOF input,
 *    sibling containers and ten array levels.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns complete arrays, mixed object/array nesting, three-level EOF input, sibling containers and ten array levels; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_deep_nesting_arrays = (): void => {
  // Deeply nested arrays
  const r1 = LlmJson.parse("[[[[1]]]]");
  TestEquality.equals("deep-arr-success", r1.success, true);
  if (r1.success) TestEquality.equals("deep-arr-data", r1.data, [[[[1]]]]);

  // Deeply nested mixed
  const r2 = LlmJson.parse('[{"a": [{"b": [1, 2]}]}]');
  TestEquality.equals("deep-mixed-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("deep-mixed-data", r2.data, [{ a: [{ b: [1, 2] }] }]);

  // Unclosed deeply nested array
  const r3 = LlmJson.parse("[[[1, 2], [3");
  TestEquality.equals("unclosed-deep-arr-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("unclosed-deep-arr-data", r3.data, [[[1, 2], [3]]]);

  // Array of objects of arrays
  const r4 = LlmJson.parse(
    '[{"items": [1, 2]}, {"items": [3, 4]}, {"items": [5, 6]}]',
  );
  TestEquality.equals("arr-obj-arr-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("arr-obj-arr-data", r4.data, [
      { items: [1, 2] },
      { items: [3, 4] },
      { items: [5, 6] },
    ]);

  // Object containing array of arrays
  const r5 = LlmJson.parse('{"matrix": [[1, 2], [3, 4], [5, 6]]}');
  TestEquality.equals("matrix-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("matrix-data", r5.data, {
      matrix: [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
    });

  // 10 levels of nested arrays
  const r6 = LlmJson.parse("[[[[[[[[[[42]]]]]]]]]]");
  TestEquality.equals("10-deep-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("10-deep-data", r6.data, [[[[[[[[[[42]]]]]]]]]]);
};
