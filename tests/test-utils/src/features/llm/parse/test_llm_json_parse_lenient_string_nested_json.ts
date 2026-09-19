import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

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
