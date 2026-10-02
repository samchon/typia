import { OmitNever } from "@typia/interface";

/**
 * Verifies `OmitNever<T>` drops exactly the `never`-typed properties.
 *
 * Pins the pruning behavior: properties whose value is `never` disappear, every
 * other property (including optional and `undefined`-valued ones) survives
 * unchanged, and an all-`never` object collapses to `{}`.
 *
 * 1. Remove the lone `never` member from a mixed object.
 * 2. Confirm optional and `undefined`-valued members are retained.
 * 3. Reduce an all-`never` object to the empty object type.
 */
export type OmitNeverCases = [
  Assert<
    IsEqual<
      OmitNever<{ a: number; b: never; c: string }>,
      { a: number; c: string }
    >
  >,
  Assert<
    IsEqual<
      OmitNever<{ a?: number; b: never; c: undefined }>,
      { a?: number; c: undefined }
    >
  >,
  Assert<IsEqual<OmitNever<{ a: never; b: never }>, {}>>,
  Assert<IsEqual<OmitNever<{ a: number }>, { a: number }>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
