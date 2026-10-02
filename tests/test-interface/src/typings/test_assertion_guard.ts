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
 *
 * @evidence contracts/testing.md#behavioral-verification AssertionGuard must be identical to authored string/object assertion-signature functions.
 * @evidence contracts/testing.md#independent-expectations Literal asserts-input-is signatures define assertion narrowing independently of the public alias.
 * @evidence contracts/testing.md#distinguishing-cases String and object targets check signature parameter/result identity; narrowed/notNarrowed own positive and negative control-flow uses.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only AssertionGuardCases declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
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

/**
 * Verifies calling AssertionGuard must narrow unknown input enough to return
 * its numeric id.
 *
 * The compiler must distinguish the permitted type use from its adjacent
 * invalid form.
 *
 * 1. Typecheck the authored signature or constraint.
 * 2. Require the stated acceptance or expected diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification Calling AssertionGuard must narrow unknown input enough to return its numeric id.
 * @evidence contracts/testing.md#independent-expectations An explicit number return type and ordinary property access require the compiler to establish the assertion effect.
 * @evidence contracts/testing.md#distinguishing-cases This guarded access is the positive twin of notNarrowed; no runtime guard is invoked because the file is compile-only.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only narrowed declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export const narrowed = (x: unknown): number => {
  guard(x);
  return x.id;
};

/**
 * Verifies reading id on unguarded unknown must remain a compile error.
 *
 * The compiler must distinguish the permitted type use from its adjacent
 * invalid form.
 *
 * 1. Typecheck the authored signature or constraint.
 * 2. Require the stated acceptance or expected diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification Reading id on unguarded unknown must remain a compile error.
 * @evidence contracts/testing.md#independent-expectations The expect-error directive rejects removal of the ordinary unknown-member diagnostic.
 * @evidence contracts/testing.md#distinguishing-cases Removing only the guard call from narrowed is the negative twin; an implementation pretending input was already a known object cannot satisfy the expectation.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only notNarrowed declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
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
