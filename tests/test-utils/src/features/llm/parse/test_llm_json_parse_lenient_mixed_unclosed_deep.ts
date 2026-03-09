import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_mixed_unclosed_deep = (): void => {
  // Object -> array -> object, all unclosed
  const r1 = LlmJson.parse('{"items": [{"name": "test"');
  TestValidator.equals("obj-arr-obj-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("obj-arr-obj-data", r1.data, {
      items: [{ name: "test" }],
    });

  // Array -> object -> array, all unclosed
  const r2 = LlmJson.parse('[{"values": [1, 2');
  TestValidator.equals("arr-obj-arr-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("arr-obj-arr-data", r2.data, [
      { values: [1, 2] },
    ]);

  // Multiple siblings at the same level, partially complete
  const r3 = LlmJson.parse(
    '{"a": {"x": 1}, "b": {"y": 2}, "c": {"z":',
  );
  TestValidator.equals("siblings-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("siblings-data", r3.data, {
      a: { x: 1 },
      b: { y: 2 },
      c: {},
    });

  // Array with some complete and some unclosed elements
  const r4 = LlmJson.parse('[{"complete": true}, {"incomplete": "val');
  TestValidator.equals("partial-arr-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("partial-arr-data", r4.data, [
      { complete: true },
      { incomplete: "val" },
    ]);

  // Unclosed string inside unclosed array inside unclosed object
  const r5 = LlmJson.parse('{"data": ["hello');
  TestValidator.equals("triple-unclosed-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("triple-unclosed-data", r5.data, {
      data: ["hello"],
    });

  // Object with multiple value types, last one unclosed
  const r6 = LlmJson.parse(
    '{"num": 42, "bool": true, "str": "hello", "arr": [1, 2',
  );
  TestValidator.equals("multi-type-unclosed-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("multi-type-unclosed-data", r6.data, {
      num: 42,
      bool: true,
      str: "hello",
      arr: [1, 2],
    });
};
