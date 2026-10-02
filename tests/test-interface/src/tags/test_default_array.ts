import { tags } from "@typia/interface";

/**
 * Verifies `Default` accepts concrete array tuples without widening its shared
 * `TagBase` contract.
 *
 * The public type admits tuple shapes so the transformer can preserve literal
 * values and report a focused diagnostic for a non-literal tuple member. An
 * open array remains invalid because it does not describe one default value.
 *
 * 1. Accept readonly, mutable, empty, and bigint-containing tuples.
 * 2. Preserve the array target and JSON-safe bigint schema value.
 * 3. Reject open mutable and readonly array types at the generic boundary.
 *
 * @evidence contracts/testing.md#behavioral-verification Default must accept readonly/mutable/empty/bigint tuples and retain array target plus JSON numeric bigint defaults.
 * @evidence contracts/testing.md#independent-expectations Authored tuples and literal target/schema types establish one concrete array default independently of tag extraction.
 * @evidence contracts/testing.md#distinguishing-cases Readonly/mutable, empty and bigint-containing tuples are positive distinctions; the two separate expected-error aliases reject open arrays.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only DefaultArrayCases declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export type DefaultArrayCases = [
  tags.Default<typeof HEADERS>,
  tags.Default<["id", "status"]>,
  tags.Default<readonly []>,
  tags.Default<readonly [1n, 2n]>,
  Assert<IsEqual<BigintProps["target"], "array">>,
  Assert<IsEqual<BigintProps["schema"], { default: readonly [1, 2] }>>,
];

const HEADERS = ["id", "status"] as const;

type BigintProps = NonNullable<tags.Default<readonly [1n, 2n]>["typia.tag"]>;

/**
 * Verifies an open mutable string array must fail the Default generic
 * constraint.
 *
 * The compiler must distinguish the permitted type use from its adjacent
 * invalid form.
 *
 * 1. Typecheck the authored signature or constraint.
 * 2. Require the stated acceptance or expected diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification An open mutable string array must fail the Default generic constraint.
 * @evidence contracts/testing.md#independent-expectations The explicit expect-error directive requires a compiler diagnostic for a type describing many possible arrays rather than one concrete default.
 * @evidence contracts/testing.md#distinguishing-cases Mutable open-array rejection is the negative twin of the concrete tuple cases in DefaultArrayCases.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only MutableOpenArrayDefault declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export type MutableOpenArrayDefault =
  // @ts-expect-error an open array does not carry one concrete default value.
  tags.Default<string[]>;

/**
 * Verifies an open readonly string array must fail the Default generic
 * constraint.
 *
 * The compiler must distinguish the permitted type use from its adjacent
 * invalid form.
 *
 * 1. Typecheck the authored signature or constraint.
 * 2. Require the stated acceptance or expected diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification An open readonly string array must fail the Default generic constraint.
 * @evidence contracts/testing.md#independent-expectations The explicit expect-error directive requires rejection of a nonconcrete readonly default, independently of emitted schema output.
 * @evidence contracts/testing.md#distinguishing-cases Readonly open-array rejection complements mutable open-array rejection and the accepted readonly tuple boundary.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only ReadonlyOpenArrayDefault declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export type ReadonlyOpenArrayDefault =
  // @ts-expect-error a readonly open array is not a literal tuple either.
  tags.Default<readonly string[]>;

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
