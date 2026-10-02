import { DeepPartial } from "@typia/interface";

/**
 * Verifies `DeepPartial<T>` makes every property optional at every depth.
 *
 * Pins the recursion: nested objects become optional recursively, array element
 * types are made deeply partial (the array stays required where present),
 * primitives and functions pass through unchanged.
 *
 * 1. Make a two-level object deeply optional.
 * 2. Apply through arrays of objects.
 * 3. Confirm primitives and functions are returned as-is.
 *
 * @evidence contracts/testing.md#behavioral-verification DeepPartial must optionalize nested records and array element records while retaining primitive arrays, numbers and callable signatures.
 * @evidence contracts/testing.md#independent-expectations Handwritten optional object types and unchanged input primitive/callable types supply independent expected results.
 * @evidence contracts/testing.md#distinguishing-cases Nested versus scalar values, object arrays versus primitive arrays, and callable identity distinguish recursion from blanket optional mapping; the authored empty nested value also typechecks.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over src; the exported DeepPartialCases tuple is instantiated by the compiler and each Assert requires true. These are compile-only type units, with no native artifact or runtime host; local Assert and symmetric IsEqual supply the typecheck oracle.
 */
export type DeepPartialCases = [
  Assert<
    IsEqual<
      DeepPartial<{ a: number; b: { c: string; d: boolean } }>,
      { a?: number; b?: { c?: string; d?: boolean } }
    >
  >,
  Assert<
    IsEqual<
      DeepPartial<{ list: Array<{ id: number }> }>,
      { list?: Array<{ id?: number }> }
    >
  >,
  Assert<IsEqual<DeepPartial<string[]>, string[]>>,
  Assert<IsEqual<DeepPartial<number>, number>>,
  Assert<IsEqual<DeepPartial<() => void>, () => void>>,
];

export const partial: DeepPartial<{ a: number; b: { c: string } }> = { b: {} };

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
