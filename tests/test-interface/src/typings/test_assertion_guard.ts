import { AssertionGuard } from "@typia/interface";

/**
 * Verifies `AssertionGuard<T>` is an assertion-signature function that narrows.
 *
 * Pins the shape `(input: unknown) => asserts input is T`: it must equal the
 * hand-written assertion signature, and calling it must narrow `unknown` to `T`
 * for the remainder of the scope (an assertion guard, not a boolean guard).
 *
 * 1. Compare `AssertionGuard<T>` with the literal assertion signature.
 * 2. Call the guard and use the narrowed value.
 * 3. Confirm the value stays `unknown` without the guard call.
 */
export type AssertionGuardCases = [
  Assert<
    IsEqual<AssertionGuard<string>, (input: unknown) => asserts input is string>
  >,
  Assert<
    IsEqual<
      AssertionGuard<{ id: number }>,
      (input: unknown) => asserts input is { id: number }
    >
  >,
];

declare const guard: AssertionGuard<{ id: number }>;

export const narrowed = (x: unknown): number => {
  guard(x);
  return x.id;
};

export const notNarrowed = (x: unknown): number =>
  // @ts-expect-error `x` is still `unknown` until the guard asserts it.
  x.id;

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
