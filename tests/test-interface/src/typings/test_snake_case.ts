import { SnakeCase } from "@typia/interface";

/**
 * Verifies `SnakeCase<T>` rewrites every key to snake_case and recurses.
 *
 * Pins the converter across mixed spellings (camelCase, PascalCase, all-caps,
 * already-snake, leading underscores, digit boundaries) plus recursion into
 * nested objects and arrays, native preservation, and methods → `never`.
 *
 * 1. Snake-case a battery of representative key spellings.
 * 2. Snake-case through nested objects and arrays.
 * 3. Confirm Date survives and a method member becomes `never`.
 */
export type SnakeCaseCases = [
  Assert<IsEqual<SnakeCase<Battery>, ExpectedBattery>>,
  Assert<
    IsEqual<
      SnakeCase<{ outerKey: { innerKey: number } }>,
      { outer_key: { inner_key: number } }
    >
  >,
  Assert<
    IsEqual<
      SnakeCase<{ itemList: Array<{ itemId: number }> }>,
      { item_list: Array<{ item_id: number }> }
    >
  >,
  Assert<IsEqual<SnakeCase<{ createdAt: Date }>, { created_at: Date }>>,
  Assert<
    IsEqual<
      SnakeCase<{ getName(): string; userId: number }>,
      { get_name: never; user_id: number }
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
  user_id: number;
  _internal: number;
  __private: number;
  first_name: number;
  id: number;
  user_name: number;
  html5_parser: number;
  a_b_c: number;
}
