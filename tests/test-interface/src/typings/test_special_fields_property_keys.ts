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
