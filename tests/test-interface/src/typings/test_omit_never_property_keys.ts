import { OmitNever } from "@typia/interface";

declare const removed: unique symbol;
declare const retained: unique symbol;

/**
 * Verifies `OmitNever<T>` removes impossible keys of every property-key kind.
 *
 * `OmitNever` delegates key discovery to `SpecialFields`, so a string-only
 * discovery union leaves numeric and unique-symbol `never` properties exposed.
 * Removing those keys must not disturb neighboring data properties.
 *
 * 1. Mix string, number, and symbol `never` properties with ordinary data.
 * 2. Apply `OmitNever` to the object.
 * 3. Require only the ordinary string, number, and symbol data keys to remain.
 */
export type OmitNeverPropertyKeyCases = [
  Assert<
    IsEqual<
      OmitNever<{
        impossible: never;
        0: never;
        [removed]: never;
        value: string;
        1: number;
        [retained]: boolean;
      }>,
      { value: string; 1: number; [retained]: boolean }
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
