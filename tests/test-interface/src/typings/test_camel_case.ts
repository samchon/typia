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
 *
 * @evidence contracts/testing.md#behavioral-verification CamelCase must produce the authored key battery and nested object/array shapes while preserving Date and converting methods to never.
 * @evidence contracts/testing.md#independent-expectations Explicit ExpectedBattery and nested output types state the supported spelling and projection rules; generic-function identity compares the whole type rather than using CamelCase to build expectations.
 * @evidence contracts/testing.md#distinguishing-cases Snake, Pascal, all-caps, leading underscores, digits and already-camel keys are paired with unchanged native values and removed callable values; nested objects and arrays pin recursion.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over src; the exported CamelCaseCases tuple is instantiated by the compiler and each Assert requires true. These are compile-only type units, with no native artifact or runtime host; local Assert and symmetric IsEqual supply the typecheck oracle.
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
