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
    TestValidator.equals("arr-obj-arr-data", r2.data, [{ values: [1, 2] }]);

  // Multiple siblings at the same level, partially complete
  const r3 = LlmJson.parse('{"a": {"x": 1}, "b": {"y": 2}, "c": {"z":');
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

  // Unclosed nested array
  const r7 = LlmJson.parse("[[1, 2], [3, 4");
  TestValidator.equals("nested-arr-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("nested-arr-data", r7.data, [
      [1, 2],
      [3, 4],
    ]);

  // Unclosed nested object
  const r8 = LlmJson.parse('{"user": {"name": "John"');
  TestValidator.equals("nested-obj-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("nested-obj-data", r8.data, {
      user: { name: "John" },
    });

  // Mixed unclosed: object with array of objects
  const r9 = LlmJson.parse('{"items": [{"id": 1}, {"id": 2');
  TestValidator.equals("mixed-unclosed-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("mixed-unclosed-data", r9.data, {
      items: [{ id: 1 }, { id: 2 }],
    });

  // Deeply nested unclosed objects
  const r10 = LlmJson.parse('{"a": {"b": {"c": {"d": 1');
  TestValidator.equals("deep-obj-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("deep-obj-data", r10.data, {
      a: { b: { c: { d: 1 } } },
    });

  // Incomplete LLM function call
  const r11 = LlmJson.parse(
    '{"name": "get_weather", "arguments": {"city": "Seoul", "unit": "cel',
  );
  TestValidator.equals("fn-call-success", r11.success, true);
  if (r11.success)
    TestValidator.equals("fn-call-data", r11.data, {
      name: "get_weather",
      arguments: { city: "Seoul", unit: "cel" },
    });

  // Incomplete LLM response
  const r12 = LlmJson.parse(
    '{"response": {"message": "Hello!", "suggestions": ["Ask a question", "Get help',
  );
  TestValidator.equals("llm-resp-success", r12.success, true);
  if (r12.success)
    TestValidator.equals("llm-resp-data", r12.data, {
      response: {
        message: "Hello!",
        suggestions: ["Ask a question", "Get help"],
      },
    });
};
