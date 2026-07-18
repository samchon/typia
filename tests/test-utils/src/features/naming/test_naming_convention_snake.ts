import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.snake derives underscored names.
 *
 * The snake derivation drives the `typia.notations.snake` transform and the
 * `SnakeCase<T>` typing, so this utility must stay byte-identical to that
 * contract. Issue #1926: the no-word-separation fallback used to drop the
 * leading underscores (`snake("_foo")` returned `"foo"`) while the typing
 * preserves them — the prefix must survive on every path. Issue #2193: on a key
 * mixing an underscore with an internal case boundary (`fooBar_baz`) the
 * converter lowercased each underscore-delimited segment atomically and
 * produced `foobar_baz`, dropping the camelCase boundary and diverging from
 * `SnakeCase<T>` (`foo_bar_baz`); the walk must run within each segment.
 *
 * 1. Convert camelCase, PascalCase, and snake_case inputs.
 * 2. Convert leading-underscore inputs with and without word separation.
 * 3. Convert underscore-plus-case-boundary and all-caps keys (#2193).
 * 4. Convert degenerate inputs (empty, underscores only, acronym runs).
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
    // underscore-plus-case-boundary and all-caps keys (#2193)
    ["fooBar_baz", "foo_bar_baz"],
    ["openAI_key", "open_ai_key"],
    ["HTTP_fooBar", "http_foo_bar"],
    ["fooBar_", "foo_bar_"],
    ["_fooBar", "_foo_bar"],
    ["userID", "user_id"],
    ["a_b_c", "a_b_c"],
    ["MAX_COUNT", "max_count"],
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
