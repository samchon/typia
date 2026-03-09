import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_rapid_containers = (): void => {
  // Many empty objects in array
  const r1 = LlmJson.parse("[{},{},{},{},{}]");
  TestValidator.equals("many-empty-obj-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("many-empty-obj-data", r1.data, [
      {},
      {},
      {},
      {},
      {},
    ]);

  // Many empty arrays in array
  const r2 = LlmJson.parse("[[],[],[],[],[]]");
  TestValidator.equals("many-empty-arr-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("many-empty-arr-data", r2.data, [
      [],
      [],
      [],
      [],
      [],
    ]);

  // Alternating empty objects and arrays
  const r3 = LlmJson.parse("[{}, [], {}, [], {}]");
  TestValidator.equals("alternating-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("alternating-data", r3.data, [
      {},
      [],
      {},
      [],
      {},
    ]);

  // Deeply nested single-element arrays
  const r4 = LlmJson.parse("[[[[[1]]]]]");
  TestValidator.equals("deep-single-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("deep-single-data", r4.data, [[[[[1]]]]]);

  // Object with single key pointing to nested objects
  const r5 = LlmJson.parse('{"a": {"b": {"c": {"d": {"e": 1}}}}}');
  TestValidator.equals("deep-single-obj-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("deep-single-obj-data", r5.data, {
      a: { b: { c: { d: { e: 1 } } } },
    });

  // Mixed nesting patterns
  const r6 = LlmJson.parse('[{"a": [{"b": [{"c": 1}]}]}]');
  TestValidator.equals("mixed-nesting-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("mixed-nesting-data", r6.data, [
      { a: [{ b: [{ c: 1 }] }] },
    ]);

  // Array with 20 elements
  const r7 = LlmJson.parse("[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]");
  TestValidator.equals("20-elements-success", r7.success, true);
  if (r7.success) {
    const arr = r7.data as number[];
    TestValidator.equals("20-elements-length", arr.length, 20);
    TestValidator.equals("20-elements-first", arr[0], 0);
    TestValidator.equals("20-elements-last", arr[19], 19);
  }

  // Object with 20 keys
  let obj20 = "{";
  const expected20: Record<string, number> = {};
  for (let i = 0; i < 20; i++) {
    if (i > 0) obj20 += ",";
    obj20 += `"k${i}":${i}`;
    expected20[`k${i}`] = i;
  }
  obj20 += "}";
  const r8 = LlmJson.parse(obj20);
  TestValidator.equals("20-keys-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("20-keys-data", r8.data, expected20);

  // Unclosed at every depth level
  const r9 = LlmJson.parse('[{"a": [{"b": [1');
  TestValidator.equals("unclosed-every-depth-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("unclosed-every-depth-data", r9.data, [
      { a: [{ b: [1] }] },
    ]);
};
