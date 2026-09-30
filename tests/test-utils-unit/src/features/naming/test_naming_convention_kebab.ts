import { TestEquality } from "@typia/template/equality";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.kebab derives hyphenated names.
 *
 * Kebab conversion is defined as the snake_case derivation with hyphen word
 * separators, keeping leading underscores untouched. The same composition
 * drives the `typia.notations.kebab` transform and the `KebabCase<T>` typing,
 * so this utility must stay byte-identical to that contract — including the
 * acronym-run collapse the snake derivation performs and the leading-underscore
 * preservation on inputs without word separation (#1926). Issue #2193: because
 * the snake derivation lowercased each underscore-delimited segment atomically,
 * an underscore-plus-case-boundary key (`fooBar_baz`) produced `foobar-baz`
 * rather than the `KebabCase<T>` result `foo-bar-baz`.
 *
 * 1. Convert camelCase, PascalCase, and snake_case inputs.
 * 2. Convert leading-underscore and acronym-run inputs.
 * 3. Convert underscore-plus-case-boundary and all-caps keys (#2193).
 * 4. Convert degenerate inputs (empty, underscores only, single word).
 *
 * @evidence contracts/testing.md#behavioral-verification Direct kebab conversion asserts complete strings, catching lost underscore prefixes and missed inner camel boundaries.
 * @evidence contracts/testing.md#independent-expectations Literal hyphenated expectations follow the documented kebab and KebabCase contract without calling snake or another converter as the oracle.
 * @evidence contracts/testing.md#distinguishing-cases Camel and Pascal inputs, acronym runs, underscore/case mixtures, preserved leading underscores, trailing separators, ordinary hyphens and empty inputs retain their distinct results.
 * @evidence contracts/testing.md#execution-ownership The utility-unit Node runner registers this exported case and invokes NamingConvention directly without installing a consumer, applying typia's transform or starting a product host.
 */
export const test_naming_convention_kebab = (): void => {
  const expectations: [string, string][] = [
    ["userId", "user-id"],
    ["UserId", "user-id"],
    ["user_name", "user-name"],
    ["_privateValue", "_private-value"],
    ["__doublePrefix", "__double-prefix"],
    ["XMLParser", "xmlparser"],
    ["toHTML", "to-html"],
    ["already-plain", "already-plain"],
    // underscore-plus-case-boundary and all-caps keys (#2193)
    ["fooBar_baz", "foo-bar-baz"],
    ["openAI_key", "open-ai-key"],
    ["HTTP_fooBar", "http-foo-bar"],
    ["fooBar_", "foo-bar-"],
    ["_fooBar", "_foo-bar"],
    ["MAX_COUNT", "max-count"],
    ["a_b_c", "a-b-c"],
    ["", ""],
    ["___", "___"],
    ["_solo", "_solo"],
    ["_XML", "_xml"],
    ["word", "word"],
  ];
  for (const [input, expected] of expectations)
    TestEquality.equals(
      `kebab(${JSON.stringify(input)})`,
      NamingConvention.kebab(input),
      expected,
    );
};
