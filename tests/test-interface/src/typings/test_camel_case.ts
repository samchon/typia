import { CamelCase } from "@typia/interface";

/**
 * Verifies `CamelCase<T>` rewrites every key to camelCase and recurses.
 *
 * Pins the key converter across the awkward cases (snake_case, leading
 * underscores, PascalCase, all-caps, already-camel, digit boundaries) and the
 * structural recursion: nested objects and array elements are camelized too,
 * native classes are preserved, and method members collapse to `never`.
 *
 * 1. Camelize a battery of representative key spellings.
 * 2. Camelize through nested objects and arrays.
 * 3. Confirm Date survives and a method member becomes `never`.
 */
export type CamelCaseCases = [
  Assert<IsEqual<CamelCase<Battery>, ExpectedBattery>>,
  Assert<
    IsEqual<
      CamelCase<{ outer_key: { inner_key: number } }>,
      { outerKey: { innerKey: number } }
    >
  >,
  Assert<
    IsEqual<
      CamelCase<{ item_list: Array<{ item_id: number }> }>,
      { itemList: Array<{ itemId: number }> }
    >
  >,
  Assert<IsEqual<CamelCase<{ created_at: Date }>, { createdAt: Date }>>,
  Assert<
    IsEqual<
      CamelCase<{ get_name(): string; user_id: number }>,
      { getName: never; userId: number }
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
  userId: number;
  _internal: number;
  __private: number;
  firstName: number;
  id: number;
  userName: number;
  html5Parser: number;
  aBc: number;
}
