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
 *
 * @evidence contracts/testing.md#behavioral-verification Atomic.Type, Literal and Mapper must equal the authored primitive value/name unions and name-to-value table.
 * @evidence contracts/testing.md#independent-expectations The supported primitive vocabulary establishes the literal unions independently of Atomic; exact type identity detects missing or additional categories.
 * @evidence contracts/testing.md#distinguishing-cases Boolean, number/integer, string and bigint mapper entries and the complete key union distinguish names from runtime value types.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over src; the exported AtomicCases tuple is instantiated by the compiler and each Assert requires true. These are compile-only type units, with no native artifact or runtime host; local Assert and symmetric IsEqual supply the typecheck oracle.
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
