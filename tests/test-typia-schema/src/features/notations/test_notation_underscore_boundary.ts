import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies notation runtime output equals the `*Case<T>` type on underscore keys.
 *
 * Issue #2190: on a key mixing an underscore with a case boundary the
 * `snake`/`kebab` conversion lowercased each underscore-delimited segment
 * atomically (`fooBar_baz` -> `foobar_baz`) and `camel`/`pascal` collapsed a
 * trailing underscore onto the underscore-free path (`fooBar_` -> `FooBar`), so
 * the produced key disagreed with the declared `SnakeCase`/... return type and
 * reading the declared key was `undefined` — a soundness hole. This pins both
 * runtime producers against the type: the static-key path (computed by the Go
 * compile-time emit) by assigning to the `*Case<T>` type and reading the
 * declared key, and the dynamic-key path (the runtime `_notation*` helper) by
 * comparing the produced key set to the type oracle.
 *
 * 1. Convert a static-key object under each notation and read every declared key.
 * 2. Convert the same keys through a `Record` (dynamic) and compare the key set.
 */
export const test_notation_underscore_boundary = (): void => {
  const value: Battery = {
    fooBar_baz: 1,
    openAI_key: 2,
    HTTP_fooBar: 3,
    fooBar: 4,
    fooBar_: 5,
    _fooBar: 6,
    userID: 7,
    a_b_c: 8,
    MAX_COUNT: 9,
  };

  // ---- static keys: soundness against the declared *Case<T> type ----
  const snaked: typia.SnakeCase<Battery> = typia.notations.snake<Battery>(value);
  TestValidator.equals("snake foo_bar_baz", snaked.foo_bar_baz, 1);
  TestValidator.equals("snake open_ai_key", snaked.open_ai_key, 2);
  TestValidator.equals("snake http_foo_bar", snaked.http_foo_bar, 3);
  TestValidator.equals("snake foo_bar", snaked.foo_bar, 4);
  TestValidator.equals("snake foo_bar_", snaked.foo_bar_, 5);
  TestValidator.equals("snake _foo_bar", snaked._foo_bar, 6);
  TestValidator.equals("snake user_id", snaked.user_id, 7);
  TestValidator.equals("snake a_b_c", snaked.a_b_c, 8);
  TestValidator.equals("snake max_count", snaked.max_count, 9);

  const camelled: typia.CamelCase<Battery> =
    typia.notations.camel<Battery>(value);
  TestValidator.equals("camel foobarBaz", camelled.foobarBaz, 1);
  TestValidator.equals("camel openaiKey", camelled.openaiKey, 2);
  TestValidator.equals("camel httpFoobar", camelled.httpFoobar, 3);
  TestValidator.equals("camel fooBar", camelled.fooBar, 4);
  TestValidator.equals("camel foobar_", camelled.foobar_, 5);
  TestValidator.equals("camel _fooBar", camelled._fooBar, 6);
  TestValidator.equals("camel userID", camelled.userID, 7);
  TestValidator.equals("camel aBc", camelled.aBc, 8);
  TestValidator.equals("camel maxCount", camelled.maxCount, 9);

  const pascalled: typia.PascalCase<Battery> =
    typia.notations.pascal<Battery>(value);
  TestValidator.equals("pascal FoobarBaz", pascalled.FoobarBaz, 1);
  TestValidator.equals("pascal OpenaiKey", pascalled.OpenaiKey, 2);
  TestValidator.equals("pascal HttpFoobar", pascalled.HttpFoobar, 3);
  TestValidator.equals("pascal FooBar", pascalled.FooBar, 4);
  TestValidator.equals("pascal Foobar", pascalled.Foobar, 5);
  TestValidator.equals("pascal _FooBar", pascalled._FooBar, 6);
  TestValidator.equals("pascal UserID", pascalled.UserID, 7);
  TestValidator.equals("pascal ABC", pascalled.ABC, 8);
  TestValidator.equals("pascal MaxCount", pascalled.MaxCount, 9);

  const kebabbed: typia.KebabCase<Battery> =
    typia.notations.kebab<Battery>(value);
  TestValidator.equals("kebab foo-bar-baz", kebabbed["foo-bar-baz"], 1);
  TestValidator.equals("kebab open-ai-key", kebabbed["open-ai-key"], 2);
  TestValidator.equals("kebab http-foo-bar", kebabbed["http-foo-bar"], 3);
  TestValidator.equals("kebab foo-bar-", kebabbed["foo-bar-"], 5);
  TestValidator.equals("kebab _foo-bar", kebabbed["_foo-bar"], 6);
  TestValidator.equals("kebab a-b-c", kebabbed["a-b-c"], 8);
  TestValidator.equals("kebab max-count", kebabbed["max-count"], 9);

  // ---- dynamic keys: the runtime _notation* helper over the whole matrix ----
  const dynamic: Record<string, number> = { ...value };
  const sortKeys = (input: object): string[] => Object.keys(input).sort();
  TestValidator.equals(
    "snake dynamic key set",
    sortKeys(typia.notations.snake<Record<string, number>>(dynamic)),
    sortKeys(snaked),
  );
  TestValidator.equals(
    "camel dynamic key set",
    sortKeys(typia.notations.camel<Record<string, number>>(dynamic)),
    sortKeys(camelled),
  );
  TestValidator.equals(
    "pascal dynamic key set",
    sortKeys(typia.notations.pascal<Record<string, number>>(dynamic)),
    sortKeys(pascalled),
  );
  TestValidator.equals(
    "kebab dynamic key set",
    sortKeys(typia.notations.kebab<Record<string, number>>(dynamic)),
    sortKeys(kebabbed),
  );
};

interface Battery {
  fooBar_baz: number;
  openAI_key: number;
  HTTP_fooBar: number;
  fooBar: number;
  fooBar_: number;
  _fooBar: number;
  userID: number;
  a_b_c: number;
  MAX_COUNT: number;
}
