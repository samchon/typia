import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification Direct pascal conversion asserts exact PascalCase spellings, detecting all-caps tail retention and incorrect trailing-underscore preservation.
 * @evidence contracts/testing.md#independent-expectations Literal outputs encode the PascalCase contract independently of other conversion implementations.
 * @evidence contracts/testing.md#distinguishing-cases Camel/Pascal names, all-caps and mixed underscore segments, leading/trailing/repeated underscores, single-character runs and empty input expose the camel-versus-pascal asymmetry.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:unit command registers this exported case and invokes NamingConvention directly without installing a consumer, applying typia's transform or starting a product host.
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
    TestEquality.equals(
      `pascal(${JSON.stringify(input)})`,
      NamingConvention.pascal(input),
      expected,
    );
};
