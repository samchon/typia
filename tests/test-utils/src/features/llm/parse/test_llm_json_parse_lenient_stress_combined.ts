import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_stress_combined = (): void => {
  // Combines: junk prefix + comments + unquoted keys + trailing commas + unclosed
  const r1 = LlmJson.parse(
    'Here is the data:\n{// header comment\nname: "John",\nage: 30,\n/* multi-line\ncomment */\nitems: [1, 2, 3,],',
  );
  TestValidator.equals("combined1-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("combined1-data", r1.data, {
      name: "John",
      age: 30,
      items: [1, 2, 3],
    });

  // Markdown block with comments and trailing commas
  const r2 = LlmJson.parse(
    '```json\n{\n  // comment\n  "key": [1, 2, 3,],\n  "nested": {\n    "value": true,\n  },\n}\n```',
  );
  TestValidator.equals("combined2-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("combined2-data", r2.data, {
      key: [1, 2, 3],
      nested: { value: true },
    });

  // Complex nested structure with escape sequences, unicode, and unclosed
  const r3 = LlmJson.parse(
    '{"user": {"name": "\\u0041lice", "bio": "Hello\\nWorld", "tags": ["dev", "\\uD83D\\uDE00"',
  );
  TestValidator.equals("combined3-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("combined3-data", r3.data, {
      user: {
        name: "Alice",
        bio: "Hello\nWorld",
        tags: ["dev", "\uD83D\uDE00"],
      },
    });

  // LLM-style response with markdown and complex data
  const r4 = LlmJson.parse(
    'Sure! Here is the function call:\n\n```json\n{\n  "name": "search",\n  "arguments": {\n    "query": "hello \\"world\\"",\n    "filters": {\n      "category": "books",\n      "price_range": [10, 50],\n      "in_stock": true\n    }\n  }\n}\n```\n\nLet me know if you need anything else!',
  );
  TestValidator.equals("combined4-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("combined4-data", r4.data, {
      name: "search",
      arguments: {
        query: 'hello "world"',
        filters: {
          category: "books",
          price_range: [10, 50],
          in_stock: true,
        },
      },
    });

  // Object with every value type, some unclosed
  const r5 = LlmJson.parse(
    '{"string": "hello", "number": 42, "float": 3.14, "bool_t": true, "bool_f": false, "null_v": null, "array": [1, "two", true], "object": {"nested": "value"',
  );
  TestValidator.equals("combined5-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("combined5-data", r5.data, {
      string: "hello",
      number: 42,
      float: 3.14,
      bool_t: true,
      bool_f: false,
      null_v: null,
      array: [1, "two", true],
      object: { nested: "value" },
    });
};
