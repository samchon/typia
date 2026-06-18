import { KebabCase } from "@typia/interface";

/**
 * Verifies `KebabCase<T>` rewrites every key to kebab-case and recurses.
 *
 * Pins the converter (snake/camel/Pascal/all-caps/leading-underscore, with word
 * separators rewritten to hyphens and leading underscores kept) plus recursion
 * into nested objects and arrays, native preservation, and methods → `never`.
 *
 * 1. Kebab-case a battery of representative key spellings.
 * 2. Kebab-case through nested objects and arrays.
 * 3. Confirm Date survives and a method member becomes `never`.
 */
export type KebabCaseCases = [
  Assert<IsEqual<KebabCase<Battery>, ExpectedBattery>>,
  Assert<
    IsEqual<
      KebabCase<{ outerKey: { innerKey: number } }>,
      { "outer-key": { "inner-key": number } }
    >
  >,
  Assert<
    IsEqual<
      KebabCase<{ itemList: Array<{ itemId: number }> }>,
      { "item-list": Array<{ "item-id": number }> }
    >
  >,
  Assert<IsEqual<KebabCase<{ createdAt: Date }>, { "created-at": Date }>>,
  Assert<
    IsEqual<
      KebabCase<{ getName(): string; userId: number }>,
      { "get-name": never; "user-id": number }
    >
  >,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

interface Battery {
  user_id: number;
  _internal: number;
  __private: number;
  FirstName: number;
  ID: number;
  userName: number;
  html5Parser: number;
  a_b_c: number;
}

interface ExpectedBattery {
  "user-id": number;
  _internal: number;
  __private: number;
  "first-name": number;
  id: number;
  "user-name": number;
  "html5-parser": number;
  "a-b-c": number;
}
