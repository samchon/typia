import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_data_integrity_roundtrip =
  (): void => {
    // The most critical test: data must NEVER be corrupted.
    // Generate complex data, stringify, add lenient features, parse, verify exact match.

    // Test 1: Complex object with all types → add trailing commas
    const obj1 = {
      name: "John Doe",
      age: 30,
      active: true,
      deleted: false,
      address: null,
      scores: [95, 87, 92],
      profile: { bio: "Hello\nWorld", avatar: "https://example.com/img.png" },
    };
    const json1 = JSON.stringify(obj1, null, 2);
    // Add trailing commas (replace "}\n" patterns - rough but works for pretty-printed)
    const lenient1 = json1
      .replace(/(\d)\n/g, "$1,\n")
      .replace(/(")\n/g, '$1,\n')
      .replace(/(true)\n/g, "$1,\n")
      .replace(/(false)\n/g, "$1,\n")
      .replace(/(null)\n/g, "$1,\n")
      .replace(/(\])\n/g, "$1,\n");
    const r1 = LlmJson.parse(lenient1);
    TestValidator.equals("roundtrip1-success", r1.success, true);
    if (r1.success) TestValidator.equals("roundtrip1-data", r1.data, obj1);

    // Test 2: Strings with every escape character
    const obj2 = {
      tab: "\t",
      newline: "\n",
      cr: "\r",
      backspace: "\b",
      formfeed: "\f",
      quote: '"',
      backslash: "\\",
      slash: "/",
      combined: '"\\/\b\f\n\r\t',
    };
    const json2 = JSON.stringify(obj2);
    const r2 = LlmJson.parse(json2);
    TestValidator.equals("roundtrip2-success", r2.success, true);
    if (r2.success) TestValidator.equals("roundtrip2-data", r2.data, obj2);

    // Test 3: Unicode strings with various scripts
    const obj3 = {
      korean: "안녕하세요 세계",
      japanese: "こんにちは世界",
      chinese: "你好世界",
      arabic: "مرحبا بالعالم",
      emoji: "😀🎉🚀💻",
      mixed: "Hello 안녕 こんにちは 你好 😀",
    };
    const json3 = JSON.stringify(obj3);
    const r3 = LlmJson.parse(json3);
    TestValidator.equals("roundtrip3-success", r3.success, true);
    if (r3.success) TestValidator.equals("roundtrip3-data", r3.data, obj3);

    // Test 4: Numbers at various precision
    const obj4 = {
      zero: 0,
      one: 1,
      negOne: -1,
      pi: 3.141592653589793,
      e: 2.718281828459045,
      large: 1e20,
      small: 1e-20,
      maxSafe: 9007199254740991,
      negMaxSafe: -9007199254740991,
    };
    const json4 = JSON.stringify(obj4);
    const r4 = LlmJson.parse(json4);
    TestValidator.equals("roundtrip4-success", r4.success, true);
    if (r4.success) TestValidator.equals("roundtrip4-data", r4.data, obj4);

    // Test 5: Deeply nested with markdown wrapper
    const obj5 = {
      level1: {
        level2: {
          level3: {
            level4: {
              value: "deep",
              arr: [1, [2, [3, [4]]]],
            },
          },
        },
      },
    };
    const json5 = JSON.stringify(obj5);
    const md5 = "Here is the result:\n```json\n" + json5 + "\n```";
    const r5 = LlmJson.parse(md5);
    TestValidator.equals("roundtrip5-success", r5.success, true);
    if (r5.success) TestValidator.equals("roundtrip5-data", r5.data, obj5);

    // Test 6: String with JSON-like content (must NOT be parsed as JSON)
    const obj6 = {
      config: '{"server": "localhost", "port": 8080}',
      template: "Hello {{name}}, your balance is ${{balance}}",
      code: 'const arr = [1, 2, 3];\nconst obj = {key: "val"};',
    };
    const json6 = JSON.stringify(obj6);
    const r6 = LlmJson.parse(json6);
    TestValidator.equals("roundtrip6-success", r6.success, true);
    if (r6.success) TestValidator.equals("roundtrip6-data", r6.data, obj6);

    // Test 7: Array of arrays with same data → unclosed
    const obj7 = [
      [1, 2, 3],
      ["a", "b", "c"],
      [true, false, null],
    ];
    // Remove the final ]]
    const json7 = JSON.stringify(obj7).slice(0, -2);
    const r7 = LlmJson.parse(json7);
    TestValidator.equals("roundtrip7-success", r7.success, true);
    if (r7.success) TestValidator.equals("roundtrip7-data", r7.data, obj7);

    // Test 8: Long string with junk prefix
    const obj8 = { message: "This is a test of the emergency broadcast system." };
    const json8 = JSON.stringify(obj8);
    const prefixed8 = "Sure, I'll help! Here is the JSON data you requested:\n\n" + json8;
    const r8 = LlmJson.parse(prefixed8);
    TestValidator.equals("roundtrip8-success", r8.success, true);
    if (r8.success) TestValidator.equals("roundtrip8-data", r8.data, obj8);
  };
