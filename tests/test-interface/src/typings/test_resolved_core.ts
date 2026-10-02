import { Resolved } from "@typia/interface";

/**
 * Verifies `Resolved<T>` erases methods while preserving native classes.
 *
 * Pins the core conversions that complement the tuple/variadic suite: classes
 * become plain objects with methods mapped to `never`, boxed primitives unwrap,
 * `bigint` and native classes (Date, typed arrays) are preserved, `Set`/`Map`
 * recurse over resolved members, and `WeakSet`/`WeakMap` collapse to `never`.
 *
 * 1. Resolve atomics, Date, bigint, and a typed array.
 * 2. Resolve a method-bearing nested class and a Set/Map of it.
 * 3. Confirm weak collections become `never`.
 *
 * @evidence contracts/testing.md#behavioral-verification Resolved must preserve Date/bigint/typed arrays, unbox primitives, erase method values and recursively resolve strong collections while rejecting weak collections.
 * @evidence contracts/testing.md#independent-expectations Authored ResolvedWithMethod and original native primitive types supply expected meaning independently of Resolved; expected weak collections are the impossible type never.
 * @evidence contracts/testing.md#distinguishing-cases Boxed/unboxed primitives, class versus native values, nested classes, Set/Map contents and WeakSet/WeakMap exclusion separate each conversion category.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over src; the exported ResolvedCoreCases tuple is instantiated by the compiler and each Assert requires true. These are compile-only type units, with no native artifact or runtime host; local Assert and symmetric IsEqual supply the typecheck oracle.
 */
export type ResolvedCoreCases = [
  Assert<IsEqual<Resolved<Date>, Date>>,
  Assert<IsEqual<Resolved<bigint>, bigint>>,
  Assert<IsEqual<Resolved<Uint8Array>, Uint8Array>>,
  Assert<IsEqual<Resolved<Boolean>, boolean>>,
  Assert<IsEqual<Resolved<Number>, number>>,
  Assert<IsEqual<Resolved<String>, string>>,
  Assert<IsEqual<Resolved<WithMethod>, ResolvedWithMethod>>,
  Assert<IsEqual<Resolved<Set<WithMethod>>, Set<ResolvedWithMethod>>>,
  Assert<
    IsEqual<Resolved<Map<string, WithMethod>>, Map<string, ResolvedWithMethod>>
  >,
  Assert<IsEqual<Resolved<WeakSet<object>>, never>>,
  Assert<IsEqual<Resolved<WeakMap<object, object>>, never>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Sub {
  name!: string;
  run(): void {}
}

class WithMethod {
  id!: number;
  child!: Sub;
  greet(): string {
    return "";
  }
}

interface ResolvedWithMethod {
  id: number;
  child: { name: string; run: never };
  greet: never;
}
