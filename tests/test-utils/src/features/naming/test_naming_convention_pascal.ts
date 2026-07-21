import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.pascal derives PascalCase names.
 *
 * The pascal derivation drives the `typia.notations.pascal` transform and the
 * `PascalCase<T>` typing, so this utility must stay byte-identical to that
 * contract. Issue #2186/#2193: the converter capitalized each underscore
 * segment without lowercasing its inner characters, so an all-caps key
 * (`MAX_COUNT`) produced `MAXCOUNT` and an underscore-plus-case-boundary key
 * (`fooBar_baz`) kept its inner boundary as `FooBarBaz`, both diverging from
 * the `PascalCase<T>` results `MaxCount` and `FoobarBaz`. Each segment's first
 * character is uppercased and its tail lowercased, while a trailing underscore
 * is dropped (`fooBar_` → `Foobar`) — the asymmetry against camelCase.
 *
 * 1. Convert camelCase, PascalCase, and snake_case inputs.
 * 2. Convert underscore-plus-case-boundary, all-caps, and trailing-underscore keys
 *    (#2186/#2193), including the `a_b_c` single-char-segment run.
 * 3. Convert degenerate inputs (empty, underscores only, single word).
 */
export const test_naming_convention_pascal = (): void => {
  const expectations: [string, string][] = [
    ["userId", "UserId"],
    ["UserId", "UserId"],
    ["user_name", "UserName"],
    ["_privateValue", "_PrivateValue"],
    ["__doublePrefix", "__DoublePrefix"],
    // underscore-plus-case-boundary, all-caps, and trailing-underscore (#2193)
    ["fooBar_baz", "FoobarBaz"],
    ["openAI_key", "OpenaiKey"],
    ["HTTP_fooBar", "HttpFoobar"],
    ["fooBar", "FooBar"],
    ["fooBar_", "Foobar"],
    ["_fooBar", "_FooBar"],
    ["userID", "UserID"],
    ["a_b_c", "ABC"],
    ["MAX_COUNT", "MaxCount"],
    ["", ""],
    ["___", "___"],
    ["word", "Word"],
  ];
  for (const [input, expected] of expectations)
    TestValidator.equals(
      `pascal(${JSON.stringify(input)})`,
      NamingConvention.pascal(input),
      expected,
    );
};
