import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.camel derives camelCase names.
 *
 * The camel derivation drives the `typia.notations.camel` transform and the
 * `CamelCase<T>` typing, so this utility must stay byte-identical to that
 * contract. Issue #2193: on a key mixing an underscore with a case boundary the
 * converter filtered empty segments and routed a trailing underscore onto the
 * underscore-free path, so `fooBar_` collapsed to `fooBar` instead of the
 * `CamelCase<T>` result `foobar_`. The character after each underscore must be
 * uppercased and the rest of every segment lowercased, while a trailing or
 * doubled underscore stays on the snake path.
 *
 * 1. Convert camelCase, PascalCase, and snake_case inputs.
 * 2. Convert underscore-plus-case-boundary, all-caps, and trailing-underscore keys
 *    (#2193), including the `a_b_c` single-char-middle asymmetry.
 * 3. Convert degenerate inputs (empty, underscores only, single word).
 */
export const test_naming_convention_camel = (): void => {
  const expectations: [string, string][] = [
    ["userId", "userId"],
    ["UserId", "userId"],
    ["user_name", "userName"],
    ["_privateValue", "_privateValue"],
    ["__doublePrefix", "__doublePrefix"],
    ["HTTP", "http"],
    // underscore-plus-case-boundary, all-caps, and trailing-underscore (#2193)
    ["fooBar_baz", "foobarBaz"],
    ["openAI_key", "openaiKey"],
    ["HTTP_fooBar", "httpFoobar"],
    ["fooBar", "fooBar"],
    ["fooBar_", "foobar_"],
    ["_fooBar", "_fooBar"],
    ["userID", "userID"],
    ["a_b_c", "aBc"],
    ["MAX_COUNT", "maxCount"],
    ["", ""],
    ["___", "___"],
    ["word", "word"],
  ];
  for (const [input, expected] of expectations)
    TestValidator.equals(
      `camel(${JSON.stringify(input)})`,
      NamingConvention.camel(input),
      expected,
    );
};
