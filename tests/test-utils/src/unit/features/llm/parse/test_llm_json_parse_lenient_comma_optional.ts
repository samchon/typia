import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies missing commas preserve separate object members and array elements.
 *
 * Lenient parsing accepts omitted separators without merging adjacent values.
 * Nested values and ordinary commas must retain the same ordering and member
 * identity.
 *
 * 1. Parse object members and arrays with omitted commas across scalar and nested
 *    value kinds.
 * 2. Compare complete outputs for missing and mixed present-or-missing separators.
 *
 * @evidence contracts/testing.md#behavioral-verification Ten direct parse scenarios assert successful recovery and exact object members or ordered arrays, catching dropped or merged values.
 * @evidence contracts/testing.md#independent-expectations Literal object and array fixtures define the independent recovered values under the maintained missing-comma tolerance, rather than duplicating parser loops.
 * @evidence contracts/testing.md#distinguishing-cases Four object scenarios cover numbers, keyword values, nested objects and mixed separators; six arrays cover numbers, strings, keywords, objects, arrays and mixed separators. Standard comma-separated values remain owned by standard_roundtrip.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported function with node:test and calls the utility through the plugin-free oracle. No installation, native artifact, transformed fixture or host is involved.
 */
export const test_llm_json_parse_lenient_comma_optional = (): void => {
  // =========================================================================
  // 1. OBJECT: Missing commas between properties
  // =========================================================================

  // Basic: two properties with no comma
  const o1 = LlmJson.parse('{"a": 1 "b": 2}');
  TestEquality.equals("obj-no-comma-basic-success", o1.success, true);
  if (o1.success)
    TestEquality.equals("obj-no-comma-basic-data", o1.data, { a: 1, b: 2 });

  // Three keyword values with no commas
  const o2 = LlmJson.parse('{"x": true "y": false "z": null}');
  TestEquality.equals("obj-no-comma-keywords-success", o2.success, true);
  if (o2.success)
    TestEquality.equals("obj-no-comma-keywords-data", o2.data, {
      x: true,
      y: false,
      z: null,
    });

  // Nested objects with no comma between properties
  const o3 = LlmJson.parse('{"first": {"n":1} "second": {"n":2}}');
  TestEquality.equals("obj-no-comma-nested-success", o3.success, true);
  if (o3.success)
    TestEquality.equals("obj-no-comma-nested-data", o3.data, {
      first: { n: 1 },
      second: { n: 2 },
    });

  // Mixed: some commas present, some missing
  const o4 = LlmJson.parse('{"a": 1, "b": 2 "c": 3}');
  TestEquality.equals("obj-mixed-comma-success", o4.success, true);
  if (o4.success)
    TestEquality.equals("obj-mixed-comma-data", o4.data, {
      a: 1,
      b: 2,
      c: 3,
    });

  // =========================================================================
  // 2. ARRAY: Missing commas between elements
  // =========================================================================

  // Numbers without commas
  const a1 = LlmJson.parse("[1 2 3]");
  TestEquality.equals("arr-no-comma-numbers-success", a1.success, true);
  if (a1.success)
    TestEquality.equals("arr-no-comma-numbers-data", a1.data, [1, 2, 3]);

  // Strings without commas
  const a2 = LlmJson.parse('["a" "b" "c"]');
  TestEquality.equals("arr-no-comma-strings-success", a2.success, true);
  if (a2.success)
    TestEquality.equals("arr-no-comma-strings-data", a2.data, ["a", "b", "c"]);

  // Keywords without commas
  const a3 = LlmJson.parse("[true false null]");
  TestEquality.equals("arr-no-comma-keywords-success", a3.success, true);
  if (a3.success)
    TestEquality.equals("arr-no-comma-keywords-data", a3.data, [
      true,
      false,
      null,
    ]);

  // Objects without commas
  const a4 = LlmJson.parse('[{"a":1} {"b":2}]');
  TestEquality.equals("arr-no-comma-objects-success", a4.success, true);
  if (a4.success)
    TestEquality.equals("arr-no-comma-objects-data", a4.data, [
      { a: 1 },
      { b: 2 },
    ]);

  // Nested arrays without commas
  const a5 = LlmJson.parse("[[1] [2] [3]]");
  TestEquality.equals("arr-no-comma-arrays-success", a5.success, true);
  if (a5.success)
    TestEquality.equals("arr-no-comma-arrays-data", a5.data, [[1], [2], [3]]);

  // Mixed: some commas present, some missing
  const a6 = LlmJson.parse("[1, 2 3, 4]");
  TestEquality.equals("arr-mixed-comma-success", a6.success, true);
  if (a6.success)
    TestEquality.equals("arr-mixed-comma-data", a6.data, [1, 2, 3, 4]);
};
