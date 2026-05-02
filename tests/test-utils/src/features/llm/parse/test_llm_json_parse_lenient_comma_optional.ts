import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * Tests that the lenient parser accepts missing commas between object
 * properties and array elements.
 *
 * The parser's object/array loops do NOT require commas between entries. After
 * parsing a value, if the next token is not a comma, the loop simply continues
 * and tries to parse the next key/value directly.
 *
 * This is a deliberate lenient behavior that enables parsing of LLM outputs
 * where commas are occasionally omitted.
 */
export const test_llm_json_parse_lenient_comma_optional = (): void => {
  // =========================================================================
  // 1. OBJECT: Missing commas between properties
  // =========================================================================

  // Basic: two properties with no comma
  const o1 = LlmJson.parse('{"a": 1 "b": 2}');
  TestValidator.equals("obj-no-comma-basic-success", o1.success, true);
  if (o1.success)
    TestValidator.equals("obj-no-comma-basic-data", o1.data, { a: 1, b: 2 });

  // Three keyword values with no commas
  const o2 = LlmJson.parse('{"x": true "y": false "z": null}');
  TestValidator.equals("obj-no-comma-keywords-success", o2.success, true);
  if (o2.success)
    TestValidator.equals("obj-no-comma-keywords-data", o2.data, {
      x: true,
      y: false,
      z: null,
    });

  // Nested objects with no comma between properties
  const o3 = LlmJson.parse('{"first": {"n":1} "second": {"n":2}}');
  TestValidator.equals("obj-no-comma-nested-success", o3.success, true);
  if (o3.success)
    TestValidator.equals("obj-no-comma-nested-data", o3.data, {
      first: { n: 1 },
      second: { n: 2 },
    });

  // Mixed: some commas present, some missing
  const o4 = LlmJson.parse('{"a": 1, "b": 2 "c": 3}');
  TestValidator.equals("obj-mixed-comma-success", o4.success, true);
  if (o4.success)
    TestValidator.equals("obj-mixed-comma-data", o4.data, {
      a: 1,
      b: 2,
      c: 3,
    });

  // =========================================================================
  // 2. ARRAY: Missing commas between elements
  // =========================================================================

  // Numbers without commas
  const a1 = LlmJson.parse("[1 2 3]");
  TestValidator.equals("arr-no-comma-numbers-success", a1.success, true);
  if (a1.success)
    TestValidator.equals("arr-no-comma-numbers-data", a1.data, [1, 2, 3]);

  // Strings without commas
  const a2 = LlmJson.parse('["a" "b" "c"]');
  TestValidator.equals("arr-no-comma-strings-success", a2.success, true);
  if (a2.success)
    TestValidator.equals("arr-no-comma-strings-data", a2.data, ["a", "b", "c"]);

  // Keywords without commas
  const a3 = LlmJson.parse("[true false null]");
  TestValidator.equals("arr-no-comma-keywords-success", a3.success, true);
  if (a3.success)
    TestValidator.equals("arr-no-comma-keywords-data", a3.data, [
      true,
      false,
      null,
    ]);

  // Objects without commas
  const a4 = LlmJson.parse('[{"a":1} {"b":2}]');
  TestValidator.equals("arr-no-comma-objects-success", a4.success, true);
  if (a4.success)
    TestValidator.equals("arr-no-comma-objects-data", a4.data, [
      { a: 1 },
      { b: 2 },
    ]);

  // Nested arrays without commas
  const a5 = LlmJson.parse("[[1] [2] [3]]");
  TestValidator.equals("arr-no-comma-arrays-success", a5.success, true);
  if (a5.success)
    TestValidator.equals("arr-no-comma-arrays-data", a5.data, [[1], [2], [3]]);

  // Mixed: some commas present, some missing
  const a6 = LlmJson.parse("[1, 2 3, 4]");
  TestValidator.equals("arr-mixed-comma-success", a6.success, true);
  if (a6.success)
    TestValidator.equals("arr-mixed-comma-data", a6.data, [1, 2, 3, 4]);
};
