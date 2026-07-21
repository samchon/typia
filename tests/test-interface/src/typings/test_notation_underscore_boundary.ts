import { CamelCase, KebabCase, PascalCase, SnakeCase } from "@typia/interface";

/**
 * Pins the `*Case<T>` typings on keys mixing an underscore with a case
 * boundary.
 *
 * Issue #2190: the `snake`/`kebab` runtime and their Go compile-time twins
 * lowercased each underscore-delimited segment atomically (`fooBar_baz` ->
 * `foobar_baz`), and `camel`/`pascal` collapsed a trailing underscore onto the
 * underscore-free path (`fooBar_` -> `FooBar`), all diverging from these types.
 * The types are the authority the runtime is derived from, so this locks their
 * exact output — including the asymmetry that `CamelCase` keeps a trailing
 * underscore (`foobar_`) while `PascalCase` drops it (`Foobar`), and the
 * single-char middle segment `a_b_c` -> `aBc` under `CamelCase`.
 *
 * 1. Assert `SnakeCase`/`KebabCase`/`CamelCase`/`PascalCase` over the witness
 *    interface.
 * 2. Cover trailing, leading, and internal underscores plus all-caps segments.
 */
export type NotationUnderscoreBoundaryCases = [
  Assert<IsEqual<SnakeCase<Battery>, ExpectedSnake>>,
  Assert<IsEqual<KebabCase<Battery>, ExpectedKebab>>,
  Assert<IsEqual<CamelCase<Battery>, ExpectedCamel>>,
  Assert<IsEqual<PascalCase<Battery>, ExpectedPascal>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

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

interface ExpectedSnake {
  foo_bar_baz: number;
  open_ai_key: number;
  http_foo_bar: number;
  foo_bar: number;
  foo_bar_: number;
  _foo_bar: number;
  user_id: number;
  a_b_c: number;
  max_count: number;
}

interface ExpectedKebab {
  "foo-bar-baz": number;
  "open-ai-key": number;
  "http-foo-bar": number;
  "foo-bar": number;
  "foo-bar-": number;
  "_foo-bar": number;
  "user-id": number;
  "a-b-c": number;
  "max-count": number;
}

interface ExpectedCamel {
  foobarBaz: number;
  openaiKey: number;
  httpFoobar: number;
  fooBar: number;
  foobar_: number;
  _fooBar: number;
  userID: number;
  aBc: number;
  maxCount: number;
}

interface ExpectedPascal {
  FoobarBaz: number;
  OpenaiKey: number;
  HttpFoobar: number;
  FooBar: number;
  Foobar: number;
  _FooBar: number;
  UserID: number;
  ABC: number;
  MaxCount: number;
}
