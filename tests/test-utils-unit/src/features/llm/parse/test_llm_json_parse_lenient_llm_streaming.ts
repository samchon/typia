import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that successive JSON prefixes retain completed data.
 *
 * Repeated parsing of progressively longer text must recover only the data
 * available at each prefix.
 *
 * 1. Exercise opening container, partial/complete keys, colon, partial/complete
 *    values, comma, numeric value and nested array prefixes.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns opening container, partial/complete keys, colon, partial/complete values, comma, numeric value and nested array prefixes; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_llm_streaming = (): void => {
  // Simulate progressive streaming: each chunk is a longer prefix
  // Chunk 1: just opening brace
  const r1 = LlmJson.parse("{");
  TestEquality.equals("chunk1-success", r1.success, true);
  if (r1.success) TestEquality.equals("chunk1-data", r1.data, {});

  // Chunk 2: key started
  const r2 = LlmJson.parse('{"na');
  TestEquality.equals("chunk2-success", r2.success, true);
  if (r2.success) TestEquality.equals("chunk2-data", r2.data, {});

  // Chunk 3: key complete, waiting for colon
  const r3 = LlmJson.parse('{"name"');
  TestEquality.equals("chunk3-success", r3.success, true);
  if (r3.success) TestEquality.equals("chunk3-data", r3.data, {});

  // Chunk 4: colon present, no value yet
  const r4 = LlmJson.parse('{"name":');
  TestEquality.equals("chunk4-success", r4.success, true);
  if (r4.success) TestEquality.equals("chunk4-data", r4.data, {});

  // Chunk 5: value started
  const r5 = LlmJson.parse('{"name": "Jo');
  TestEquality.equals("chunk5-success", r5.success, true);
  if (r5.success) TestEquality.equals("chunk5-data", r5.data, { name: "Jo" });

  // Chunk 6: first property complete
  const r6 = LlmJson.parse('{"name": "John"');
  TestEquality.equals("chunk6-success", r6.success, true);
  if (r6.success) TestEquality.equals("chunk6-data", r6.data, { name: "John" });

  // Chunk 7: comma, next key
  const r7 = LlmJson.parse('{"name": "John", "age"');
  TestEquality.equals("chunk7-success", r7.success, true);
  if (r7.success) TestEquality.equals("chunk7-data", r7.data, { name: "John" });

  // Chunk 8: colon and partial number
  const r8 = LlmJson.parse('{"name": "John", "age": 3');
  TestEquality.equals("chunk8-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("chunk8-data", r8.data, { name: "John", age: 3 });

  // Chunk 9: number complete
  const r9 = LlmJson.parse('{"name": "John", "age": 30');
  TestEquality.equals("chunk9-success", r9.success, true);
  if (r9.success)
    TestEquality.equals("chunk9-data", r9.data, { name: "John", age: 30 });

  // Chunk 10: nested array starting
  const r10 = LlmJson.parse('{"name": "John", "age": 30, "tags": [');
  TestEquality.equals("chunk10-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("chunk10-data", r10.data, {
      name: "John",
      age: 30,
      tags: [],
    });

  // Chunk 11: array with partial string
  const r11 = LlmJson.parse('{"name": "John", "age": 30, "tags": ["dev');
  TestEquality.equals("chunk11-success", r11.success, true);
  if (r11.success)
    TestEquality.equals("chunk11-data", r11.data, {
      name: "John",
      age: 30,
      tags: ["dev"],
    });

  // Chunk 12: complete
  const r12 = LlmJson.parse('{"name": "John", "age": 30, "tags": ["dev"]}');
  TestEquality.equals("chunk12-success", r12.success, true);
  if (r12.success)
    TestEquality.equals("chunk12-data", r12.data, {
      name: "John",
      age: 30,
      tags: ["dev"],
    });
};
