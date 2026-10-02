import { PascalCase } from "@typia/interface";

/**
 * Verifies `PascalCase<T>` rewrites every key to PascalCase and recurses.
 *
 * Pins the converter across the awkward cases — note all-caps `ID` stays `ID`
 * and `a_b_c` becomes `ABC` (single-letter snake parts capitalize) — plus
 * recursion into nested objects and arrays, native preservation, and methods
 * collapsing to `never`.
 *
 * 1. Pascalize a battery of representative key spellings.
 * 2. Pascalize through nested objects and arrays.
 * 3. Confirm Date survives and a method member becomes `never`.
 *
 * @evidence contracts/testing.md#behavioral-verification PascalCase must produce ExpectedBattery and nested capitalized keys, retaining Date and mapping methods to never.
 * @evidence contracts/testing.md#independent-expectations Authored output types fix capitalized segments and the preserved ID spelling independently of the alias.
 * @evidence contracts/testing.md#distinguishing-cases Leading underscores, ID, single-letter snake segments, digits and already-Pascal spellings are combined with recursion and native/callable controls.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks PascalCaseCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
 */
export type PascalCaseCases = [
  Assert<IsEqual<PascalCase<Battery>, ExpectedBattery>>,
  Assert<
    IsEqual<
      PascalCase<{ outer_key: { inner_key: number } }>,
      { OuterKey: { InnerKey: number } }
    >
  >,
  Assert<
    IsEqual<
      PascalCase<{ item_list: Array<{ item_id: number }> }>,
      { ItemList: Array<{ ItemId: number }> }
    >
  >,
  Assert<IsEqual<PascalCase<{ created_at: Date }>, { CreatedAt: Date }>>,
  Assert<
    IsEqual<
      PascalCase<{ get_name(): string; user_id: number }>,
      { GetName: never; UserId: number }
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
  UserId: number;
  _Internal: number;
  __Private: number;
  FirstName: number;
  ID: number;
  UserName: number;
  Html5Parser: number;
  ABC: number;
}
