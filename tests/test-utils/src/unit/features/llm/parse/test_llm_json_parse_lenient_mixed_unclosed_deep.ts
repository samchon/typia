import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that EOF recovery preserves mixed nested containers and siblings.
 *
 * Closing an unfinished inner value must not erase completed siblings or
 * flatten their nesting.
 *
 * 1. Exercise object/array alternation, complete and incomplete siblings, partial
 *    strings, nested arrays, multiple value kinds and partial
 *    function-call/response text.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns object/array alternation, complete and incomplete siblings, partial strings, nested arrays, multiple value kinds and partial function-call/response text; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_mixed_unclosed_deep = (): void => {
  // Object -> array -> object, all unclosed
  const r1 = LlmJson.parse('{"items": [{"name": "test"');
  TestEquality.equals("obj-arr-obj-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("obj-arr-obj-data", r1.data, {
      items: [{ name: "test" }],
    });

  // Array -> object -> array, all unclosed
  const r2 = LlmJson.parse('[{"values": [1, 2');
  TestEquality.equals("arr-obj-arr-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("arr-obj-arr-data", r2.data, [{ values: [1, 2] }]);

  // Multiple siblings at the same level, partially complete
  const r3 = LlmJson.parse('{"a": {"x": 1}, "b": {"y": 2}, "c": {"z":');
  TestEquality.equals("siblings-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("siblings-data", r3.data, {
      a: { x: 1 },
      b: { y: 2 },
      c: {},
    });

  // Array with some complete and some unclosed elements
  const r4 = LlmJson.parse('[{"complete": true}, {"incomplete": "val');
  TestEquality.equals("partial-arr-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("partial-arr-data", r4.data, [
      { complete: true },
      { incomplete: "val" },
    ]);

  // Unclosed string inside unclosed array inside unclosed object
  const r5 = LlmJson.parse('{"data": ["hello');
  TestEquality.equals("triple-unclosed-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("triple-unclosed-data", r5.data, {
      data: ["hello"],
    });

  // Object with multiple value types, last one unclosed
  const r6 = LlmJson.parse(
    '{"num": 42, "bool": true, "str": "hello", "arr": [1, 2',
  );
  TestEquality.equals("multi-type-unclosed-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("multi-type-unclosed-data", r6.data, {
      num: 42,
      bool: true,
      str: "hello",
      arr: [1, 2],
    });

  // Unclosed nested array
  const r7 = LlmJson.parse("[[1, 2], [3, 4");
  TestEquality.equals("nested-arr-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("nested-arr-data", r7.data, [
      [1, 2],
      [3, 4],
    ]);

  // Unclosed nested object
  const r8 = LlmJson.parse('{"user": {"name": "John"');
  TestEquality.equals("nested-obj-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("nested-obj-data", r8.data, {
      user: { name: "John" },
    });

  // Mixed unclosed: object with array of objects
  const r9 = LlmJson.parse('{"items": [{"id": 1}, {"id": 2');
  TestEquality.equals("mixed-unclosed-success", r9.success, true);
  if (r9.success)
    TestEquality.equals("mixed-unclosed-data", r9.data, {
      items: [{ id: 1 }, { id: 2 }],
    });

  // Deeply nested unclosed objects
  const r10 = LlmJson.parse('{"a": {"b": {"c": {"d": 1');
  TestEquality.equals("deep-obj-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("deep-obj-data", r10.data, {
      a: { b: { c: { d: 1 } } },
    });

  // Incomplete LLM function call
  const r11 = LlmJson.parse(
    '{"name": "get_weather", "arguments": {"city": "Seoul", "unit": "cel',
  );
  TestEquality.equals("fn-call-success", r11.success, true);
  if (r11.success)
    TestEquality.equals("fn-call-data", r11.data, {
      name: "get_weather",
      arguments: { city: "Seoul", unit: "cel" },
    });

  // Incomplete LLM response
  const r12 = LlmJson.parse(
    '{"response": {"message": "Hello!", "suggestions": ["Ask a question", "Get help',
  );
  TestEquality.equals("llm-resp-success", r12.success, true);
  if (r12.success)
    TestEquality.equals("llm-resp-data", r12.data, {
      response: {
        message: "Hello!",
        suggestions: ["Ask a question", "Get help"],
      },
    });
};
