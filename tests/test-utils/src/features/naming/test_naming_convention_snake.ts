import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.snake derives underscored names.
 *
 * The snake derivation drives the `typia.notations.snake` transform and the
 * `SnakeCase<T>` typing, so this utility must stay byte-identical to that
 * contract. Issue #1926: the no-word-separation fallback used to drop the
 * leading underscores (`snake("_foo")` returned `"foo"`) while the typing
 * preserves them — the prefix must survive on every path.
 *
 * 1. Convert camelCase, PascalCase, and snake_case inputs.
 * 2. Convert leading-underscore inputs with and without word separation.
 * 3. Convert degenerate inputs (empty, underscores only, acronym runs).
 */
export const test_naming_convention_snake = (): void => {
  const expectations: [string, string][] = [
    ["userId", "user_id"],
    ["UserId", "user_id"],
    ["user_name", "user_name"],
    ["_privateValue", "_private_value"],
    ["__doublePrefix", "__double_prefix"],
    ["_solo", "_solo"],
    ["_FOO", "_foo"],
    ["___", "___"],
    ["XMLParser", "xmlparser"],
    ["toHTML", "to_html"],
    ["", ""],
    ["word", "word"],
  ];
  for (const [input, expected] of expectations)
    TestValidator.equals(
      `snake(${JSON.stringify(input)})`,
      NamingConvention.snake(input),
      expected,
    );
};
