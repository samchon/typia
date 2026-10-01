import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that JSON-looking string values remain strings.
 *
 * Braces, arrays and escaped inner JSON belong to the quoted value rather than
 * the enclosing container structure.
 *
 * 1. Exercise quoted object/array text, multiple escape layers, code delimiters
 *    and nested control-escape text.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns quoted object/array text, multiple escape layers, code delimiters and nested control-escape text; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_string_nested_json = (): void => {
  // String value containing properly escaped JSON
  const r1 = LlmJson.parse(
    '{"data": "{\\"name\\": \\"John\\", \\"age\\": 30}"}',
  );
  TestEquality.equals("nested-json-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("nested-json-data", r1.data, {
      data: '{"name": "John", "age": 30}',
    });

  // String containing escaped array JSON
  const r2 = LlmJson.parse('{"arr": "[1, 2, \\"hello\\"]"}');
  TestEquality.equals("nested-array-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("nested-array-data", r2.data, {
      arr: '[1, 2, "hello"]',
    });

  // Deeply escaped - JSON containing JSON containing JSON
  const r3 = LlmJson.parse(
    '{"outer": "{\\"inner\\": \\"{\\\\\\"deep\\\\\\": true}\\"}"}',
  );
  TestEquality.equals("deep-nested-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("deep-nested-data", r3.data, {
      outer: '{"inner": "{\\"deep\\": true}"}',
    });

  // String containing escaped braces and brackets
  const r4 = LlmJson.parse('{"code": "if (x) { arr[0] = \\"val\\"; }"}');
  TestEquality.equals("code-in-string-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("code-in-string-data", r4.data, {
      code: 'if (x) { arr[0] = "val"; }',
    });

  // String with nested JSON and special characters
  const r5 = LlmJson.parse(
    '{"payload": "{\\"msg\\": \\"line1\\\\nline2\\\\ttab\\"}"}',
  );
  TestEquality.equals("nested-special-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("nested-special-data", r5.data, {
      payload: '{"msg": "line1\\nline2\\ttab"}',
    });
};
