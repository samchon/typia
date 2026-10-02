import { SpecialFields } from "@typia/interface";

declare const match: unique symbol;
declare const miss: unique symbol;

/**
 * Verifies `SpecialFields<Instance, Target>` selects every property-key kind.
 *
 * Indexing the mapped result with `keyof Instance & string` discards numeric
 * and unique-symbol matches even though the mapped predicate selected them. The
 * final union must be indexed by the complete source key set.
 *
 * 1. Declare matching and non-matching string, number, and symbol properties.
 * 2. Select the number-valued keys.
 * 3. Require the exact three-kind key union without false positives.
 *
 * @evidence contracts/testing.md#behavioral-verification SpecialFields must select matching string, numeric and symbol keys while rejecting adjacent string-valued and optional-string fields.
 * @evidence contracts/testing.md#independent-expectations The literal union text, numeric 7 and the authored unique symbol define the complete expected selection independently of mapped helper output.
 * @evidence contracts/testing.md#distinguishing-cases Matching/nonmatching data for each property-key kind and an optional nonmatch expose string-only indexing and overmatching.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over src; the exported SpecialFieldsPropertyKeyCases tuple is instantiated by the compiler and each Assert requires true. These are compile-only type units, with no native artifact or runtime host; local Assert and symmetric IsEqual supply the typecheck oracle.
 */
export type SpecialFieldsPropertyKeyCases = [
  Assert<
    IsEqual<
      SpecialFields<
        {
          text: number;
          7: number;
          [match]: number;
          other: string;
          optional?: string;
          8: string;
          [miss]: string;
        },
        number
      >,
      "text" | 7 | typeof match
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
