import { Atomic } from "@typia/interface";

/**
 * Verifies the `Atomic` namespace's value union, literal names, and mapper.
 *
 * Pins the primitive vocabulary typia shares across features: `Atomic.Type` is
 * the value union, `Atomic.Literal` the name union, and `Atomic.Mapper` the
 * exact name→value table whose keys equal `Atomic.Literal` (so `integer` maps
 * to `number`, `bigint` to `bigint`).
 *
 * 1. Compare `Atomic.Type` and `Atomic.Literal` with their unions.
 * 2. Probe individual `Atomic.Mapper` entries.
 * 3. Confirm `keyof Atomic.Mapper` equals `Atomic.Literal`.
 */
export type AtomicCases = [
  Assert<IsEqual<Atomic.Type, boolean | number | string | bigint>>,
  Assert<
    IsEqual<
      Atomic.Literal,
      "boolean" | "integer" | "number" | "string" | "bigint"
    >
  >,
  Assert<IsEqual<Atomic.Mapper["boolean"], boolean>>,
  Assert<IsEqual<Atomic.Mapper["integer"], number>>,
  Assert<IsEqual<Atomic.Mapper["number"], number>>,
  Assert<IsEqual<Atomic.Mapper["string"], string>>,
  Assert<IsEqual<Atomic.Mapper["bigint"], bigint>>,
  Assert<IsEqual<keyof Atomic.Mapper, Atomic.Literal>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
