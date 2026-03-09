import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_empty_containers = (): void => {
  // Empty object
  const r1 = LlmJson.parse("{}");
  TestValidator.equals("empty-obj-success", r1.success, true);
  if (r1.success) TestValidator.equals("empty-obj-data", r1.data, {});

  // Empty array
  const r2 = LlmJson.parse("[]");
  TestValidator.equals("empty-arr-success", r2.success, true);
  if (r2.success) TestValidator.equals("empty-arr-data", r2.data, []);

  // Nested empty objects
  const r3 = LlmJson.parse('{"a": {}, "b": {}, "c": {}}');
  TestValidator.equals("nested-empty-obj-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("nested-empty-obj-data", r3.data, {
      a: {},
      b: {},
      c: {},
    });

  // Nested empty arrays
  const r4 = LlmJson.parse('{"x": [], "y": [], "z": []}');
  TestValidator.equals("nested-empty-arr-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("nested-empty-arr-data", r4.data, {
      x: [],
      y: [],
      z: [],
    });

  // Mixed empty containers nested
  const r5 = LlmJson.parse('{"obj": {"inner": {}}, "arr": {"inner": []}}');
  TestValidator.equals("mixed-empty-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("mixed-empty-data", r5.data, {
      obj: { inner: {} },
      arr: { inner: [] },
    });

  // Array of empty objects
  const r6 = LlmJson.parse("[{}, {}, {}]");
  TestValidator.equals("arr-of-empty-obj-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("arr-of-empty-obj-data", r6.data, [{}, {}, {}]);

  // Array of empty arrays
  const r7 = LlmJson.parse("[[], [], []]");
  TestValidator.equals("arr-of-empty-arr-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("arr-of-empty-arr-data", r7.data, [[], [], []]);

  // Deeply nested empty object
  const r8 = LlmJson.parse('{"a": {"b": {"c": {"d": {}}}}}');
  TestValidator.equals("deep-empty-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("deep-empty-data", r8.data, {
      a: { b: { c: { d: {} } } },
    });

  // Empty object with whitespace
  const r9 = LlmJson.parse("{   }");
  TestValidator.equals("empty-whitespace-obj-success", r9.success, true);
  if (r9.success) TestValidator.equals("empty-whitespace-obj-data", r9.data, {});

  // Empty array with whitespace
  const r10 = LlmJson.parse("[   ]");
  TestValidator.equals("empty-whitespace-arr-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("empty-whitespace-arr-data", r10.data, []);
};
