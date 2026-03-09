import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_number_format_nonstandard =
  (): void => {
    // Leading dot (.5) - parseNumber starts with '-' or digit, '.' is not either
    // So .5 is not recognized as a number. It'll hit parseValue which sees '.'
    // '.' is not {, [, ", -, digit, identifier start → error
    const r1 = LlmJson.parse('{"val": .5}');
    TestValidator.equals("dot-five-success", r1.success, false);

    // +5 (plus sign) - '+' is not '-' or digit, not identifier start → error
    const r2 = LlmJson.parse('{"val": +5}');
    TestValidator.equals("plus-five-success", r2.success, false);

    // Multiple decimal points: 1.2.3
    // parseNumber reads "1.2" then stops at second "." (not digit)
    // Returns 1.2, then "." is left dangling
    const r3 = LlmJson.parse('{"val": 1.2.3}');
    TestValidator.equals("multi-dot-success", r3.success, false);

    // Multiple exponents: 1e2e3
    // parseNumber reads "1e2" then stops at second "e" (not digit)
    // Returns 100, then "e3" is left as identifier → error
    const r4 = LlmJson.parse('{"val": 1e2e3}');
    TestValidator.equals("multi-exp-success", r4.success, false);

    // Hex number: 0xFF
    // parseNumber reads "0" then stops at "x" (not digit, not ".", not "e/E")
    // Returns 0, then "xFF" is left → identifier → error
    const r5 = LlmJson.parse('{"val": 0xFF}');
    TestValidator.equals("hex-success", r5.success, false);

    // Octal: 0o77
    // Same as hex: reads "0", stops at "o"
    const r6 = LlmJson.parse('{"val": 0o77}');
    TestValidator.equals("octal-success", r6.success, false);

    // Binary: 0b11
    // Same: reads "0", stops at "b" → "b11" identifier → error
    const r7 = LlmJson.parse('{"val": 0b11}');
    TestValidator.equals("binary-success", r7.success, false);

    // Number with trailing text: 42abc
    // parseNumber reads "42", stops at "a"
    // Then "abc" is parsed as identifier → error
    const r8 = LlmJson.parse('{"val": 42abc}');
    TestValidator.equals("num-trailing-text-success", r8.success, false);

    // Just minus then letter: -abc
    // parseNumber reads "-", no digits → "-", Number("-") = NaN → 0
    // Then "abc" is left → parsed as next property? No, in array context it would be separate
    // Actually in object value context, after parseNumber returns 0,
    // the parser continues and sees "abc" which is not a comma or }
    // Let me think... after parsing value (0), the parser calls skipWhitespace
    // then checks for comma. "abc" is not comma → stays
    // Then loops back, tries to parse key: "abc" could be unquoted key
    // Then looks for colon after "abc": finds "}" → error
    const r9 = LlmJson.parse('{"val": -abc}');
    // parseNumber("-") → 0, then "abc}" is left
    // After returning 0, parser skipWhitespace, check comma at 'a'→ not comma
    // Loop continues to parse next key/value in object
    // "abc" parsed as unquoted key, then "}" found instead of ":"
    // This results in error
    TestValidator.equals("minus-then-alpha-success", r9.success, false);

    // Exponent with both signs: 1e+-3
    // parseNumber reads "1e+", then "-" is not a digit
    // Actually: after e, checks for + or -, finds +, advances
    // Then checks for digits: "-" is not a digit → stops
    // numStr = "1e+" → Number("1e+") = NaN → 0
    const r10 = LlmJson.parse('{"val": 1e+-3}');
    TestValidator.equals("double-sign-success", r10.success, false);

    // Number MAX_SAFE_INTEGER + 1
    const big = "9007199254740992";
    const r11 = LlmJson.parse('{"val": ' + big + "}");
    TestValidator.equals("beyond-safe-success", r11.success, true);
    if (r11.success)
      TestValidator.equals(
        "beyond-safe-data",
        (r11.data as any).val,
        Number(big),
      );

    // Very large exponent
    const r12 = LlmJson.parse('{"val": 1e308}');
    TestValidator.equals("large-exp-success", r12.success, true);
    if (r12.success)
      TestValidator.equals("large-exp-data", (r12.data as any).val, 1e308);

    // Number that becomes Infinity
    const r13 = LlmJson.parse('{"val": 1e999}');
    TestValidator.equals("infinity-exp-success", r13.success, true);
    if (r13.success)
      TestValidator.equals(
        "infinity-exp-data",
        (r13.data as any).val,
        Infinity,
      );
  };
