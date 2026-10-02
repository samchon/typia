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
