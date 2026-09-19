import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies notation runtime output equals the `*Case<T>` type on underscore
 * keys.
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
  const snaked: typia.SnakeCase<Battery> =
    typia.notations.snake<Battery>(value);
  TestEquality.equals("snake foo_bar_baz", snaked.foo_bar_baz, 1);
  TestEquality.equals("snake open_ai_key", snaked.open_ai_key, 2);
  TestEquality.equals("snake http_foo_bar", snaked.http_foo_bar, 3);
  TestEquality.equals("snake foo_bar", snaked.foo_bar, 4);
  TestEquality.equals("snake foo_bar_", snaked.foo_bar_, 5);
  TestEquality.equals("snake _foo_bar", snaked._foo_bar, 6);
  TestEquality.equals("snake user_id", snaked.user_id, 7);
  TestEquality.equals("snake a_b_c", snaked.a_b_c, 8);
  TestEquality.equals("snake max_count", snaked.max_count, 9);

  const camelled: typia.CamelCase<Battery> =
    typia.notations.camel<Battery>(value);
  TestEquality.equals("camel foobarBaz", camelled.foobarBaz, 1);
  TestEquality.equals("camel openaiKey", camelled.openaiKey, 2);
  TestEquality.equals("camel httpFoobar", camelled.httpFoobar, 3);
  TestEquality.equals("camel fooBar", camelled.fooBar, 4);
  TestEquality.equals("camel foobar_", camelled.foobar_, 5);
  TestEquality.equals("camel _fooBar", camelled._fooBar, 6);
  TestEquality.equals("camel userID", camelled.userID, 7);
  TestEquality.equals("camel aBc", camelled.aBc, 8);
  TestEquality.equals("camel maxCount", camelled.maxCount, 9);

  const pascalled: typia.PascalCase<Battery> =
    typia.notations.pascal<Battery>(value);
  TestEquality.equals("pascal FoobarBaz", pascalled.FoobarBaz, 1);
  TestEquality.equals("pascal OpenaiKey", pascalled.OpenaiKey, 2);
  TestEquality.equals("pascal HttpFoobar", pascalled.HttpFoobar, 3);
  TestEquality.equals("pascal FooBar", pascalled.FooBar, 4);
  TestEquality.equals("pascal Foobar", pascalled.Foobar, 5);
  TestEquality.equals("pascal _FooBar", pascalled._FooBar, 6);
  TestEquality.equals("pascal UserID", pascalled.UserID, 7);
  TestEquality.equals("pascal ABC", pascalled.ABC, 8);
  TestEquality.equals("pascal MaxCount", pascalled.MaxCount, 9);

  const kebabbed: typia.KebabCase<Battery> =
    typia.notations.kebab<Battery>(value);
  TestEquality.equals("kebab foo-bar-baz", kebabbed["foo-bar-baz"], 1);
  TestEquality.equals("kebab open-ai-key", kebabbed["open-ai-key"], 2);
  TestEquality.equals("kebab http-foo-bar", kebabbed["http-foo-bar"], 3);
  TestEquality.equals("kebab foo-bar-", kebabbed["foo-bar-"], 5);
  TestEquality.equals("kebab _foo-bar", kebabbed["_foo-bar"], 6);
  TestEquality.equals("kebab a-b-c", kebabbed["a-b-c"], 8);
  TestEquality.equals("kebab max-count", kebabbed["max-count"], 9);

  // ---- dynamic keys: the runtime _notation* helper over the whole matrix ----
  const dynamic: Record<string, number> = { ...value };
  const sortKeys = (input: object): string[] => Object.keys(input).sort();
  TestEquality.equals(
    "snake dynamic key set",
    sortKeys(typia.notations.snake<Record<string, number>>(dynamic)),
    sortKeys(snaked),
  );
  TestEquality.equals(
    "camel dynamic key set",
    sortKeys(typia.notations.camel<Record<string, number>>(dynamic)),
    sortKeys(camelled),
  );
  TestEquality.equals(
    "pascal dynamic key set",
    sortKeys(typia.notations.pascal<Record<string, number>>(dynamic)),
    sortKeys(pascalled),
  );
  TestEquality.equals(
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
