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
 *
 * @evidence contracts/testing.md#behavioral-verification SnakeCase must produce ExpectedBattery and nested underscore keys, preserving Date and mapping methods to never.
 * @evidence contracts/testing.md#independent-expectations Authored output interfaces establish the supported key policy without computing expectations with SnakeCase.
 * @evidence contracts/testing.md#distinguishing-cases Camel/Pascal, existing snake, leading underscores, all-caps and digits are contrasted with unchanged native values and removed methods at nested/array contexts.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks SnakeCaseCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
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
