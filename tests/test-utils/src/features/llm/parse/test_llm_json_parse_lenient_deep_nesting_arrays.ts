import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

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
