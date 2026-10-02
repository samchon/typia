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
 *
 * @evidence contracts/testing.md#behavioral-verification KebabCase must produce ExpectedBattery and nested hyphenated keys, preserving Date and mapping methods to never.
 * @evidence contracts/testing.md#independent-expectations Authored key/output interfaces establish the supported case policy independently of the alias.
 * @evidence contracts/testing.md#distinguishing-cases Snake/camel/Pascal/all-caps, digits, leading underscores and XMLParser join nested object/array and native/callable controls.
 * @evidence contracts/testing.md#execution-ownership test-interface start typechecks KebabCaseCases through the installed TypeScript compiler (tsc) with noEmit. Each Assert requires a true result from the local symmetric type-identity or assignability check; value assignments and expect-error directives are also compile-only. No native artifact, consumer installation or runtime host executes this unit.
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
  XMLParser: number;
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
  xmlparser: number;
  "a-b-c": number;
}
