import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies empty JSON containers retain their shapes.
 *
 * Empty arrays and objects are distinct values even when neither contains data.
 * Nested containers must survive parsing without being collapsed or replaced.
 *
 * 1. Parse empty object and array inputs, then nested and repeated empty
 *    containers.
 * 2. Compare every returned shape and include whitespace-surrounded empty inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmJson.parse success and complete data comparisons distinguish empty arrays from objects and preserve each nesting level.
 * @evidence contracts/testing.md#independent-expectations Literal JSON shapes establish the object-versus-array distinction under standard JSON semantics; no expected value is obtained from LlmJson.
 * @evidence contracts/testing.md#distinguishing-cases Top-level empty objects and arrays, nested mixtures, arrays of empty containers, deeper objects and interior whitespace retain ten separate success and data pairs; nonempty preservation is owned by standard_roundtrip.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported function with node:test; it imports the plugin-free oracle and calls the utility directly without a transformed fixture, native artifact, SDK host or process protocol.
 */
export const test_llm_json_parse_lenient_empty_containers = (): void => {
  // Empty object
  const r1 = LlmJson.parse("{}");
  TestEquality.equals("empty-obj-success", r1.success, true);
  if (r1.success) TestEquality.equals("empty-obj-data", r1.data, {});

  // Empty array
  const r2 = LlmJson.parse("[]");
  TestEquality.equals("empty-arr-success", r2.success, true);
  if (r2.success) TestEquality.equals("empty-arr-data", r2.data, []);

  // Nested empty objects
  const r3 = LlmJson.parse('{"a": {}, "b": {}, "c": {}}');
  TestEquality.equals("nested-empty-obj-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("nested-empty-obj-data", r3.data, {
      a: {},
      b: {},
      c: {},
    });

  // Nested empty arrays
  const r4 = LlmJson.parse('{"x": [], "y": [], "z": []}');
  TestEquality.equals("nested-empty-arr-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("nested-empty-arr-data", r4.data, {
      x: [],
      y: [],
      z: [],
    });

  // Mixed empty containers nested
  const r5 = LlmJson.parse('{"obj": {"inner": {}}, "arr": {"inner": []}}');
  TestEquality.equals("mixed-empty-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("mixed-empty-data", r5.data, {
      obj: { inner: {} },
      arr: { inner: [] },
    });

  // Array of empty objects
  const r6 = LlmJson.parse("[{}, {}, {}]");
  TestEquality.equals("arr-of-empty-obj-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("arr-of-empty-obj-data", r6.data, [{}, {}, {}]);

  // Array of empty arrays
  const r7 = LlmJson.parse("[[], [], []]");
  TestEquality.equals("arr-of-empty-arr-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("arr-of-empty-arr-data", r7.data, [[], [], []]);

  // Deeply nested empty object
  const r8 = LlmJson.parse('{"a": {"b": {"c": {"d": {}}}}}');
  TestEquality.equals("deep-empty-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("deep-empty-data", r8.data, {
      a: { b: { c: { d: {} } } },
    });

  // Empty object with whitespace
  const r9 = LlmJson.parse("{   }");
  TestEquality.equals("empty-whitespace-obj-success", r9.success, true);
  if (r9.success) TestEquality.equals("empty-whitespace-obj-data", r9.data, {});

  // Empty array with whitespace
  const r10 = LlmJson.parse("[   ]");
  TestEquality.equals("empty-whitespace-arr-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("empty-whitespace-arr-data", r10.data, []);
};
