import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.kebab derives hyphenated names.
 *
 * Kebab conversion is defined as the snake_case derivation with hyphen word
 * separators, keeping leading underscores untouched. The same composition
 * drives the `typia.notations.kebab` transform and the `KebabCase<T>` typing,
 * so this utility must stay byte-identical to that contract — including the
 * acronym-run collapse the snake derivation performs and the
 * leading-underscore preservation on inputs without word separation (#1926).
 *
 * 1. Convert camelCase, PascalCase, and snake_case inputs.
 * 2. Convert leading-underscore and acronym-run inputs.
 * 3. Convert degenerate inputs (empty, underscores only, single word).
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
    ["", ""],
    ["___", "___"],
    ["_solo", "_solo"],
    ["_XML", "_xml"],
    ["word", "word"],
  ];
  for (const [input, expected] of expectations)
    TestValidator.equals(
      `kebab(${JSON.stringify(input)})`,
      NamingConvention.kebab(input),
      expected,
    );
};
