import { ValidationPipe } from "@typia/interface";

/**
 * Verifies `ValidationPipe<T, E>` is a `success`-discriminated result union.
 *
 * Pins the success/failure shape: the success arm carries `data: T`, the
 * failure arm carries `errors: E[]`, and the `success` literal discriminant
 * narrows between them. `data` must be unreachable without first checking
 * `success`.
 *
 * 1. Compare `ValidationPipe` with the explicit two-arm union.
 * 2. Narrow on `success` and read `data` / `errors`.
 * 3. Confirm reading `data` without narrowing is rejected.
 *
 * @evidence contracts/testing.md#behavioral-verification ValidationPipe must be identical to the authored success-data or failure-errors union.
 * @evidence contracts/testing.md#independent-expectations Literal Boolean discriminants and number/string payload shapes supply an independent expected public signature.
 * @evidence contracts/testing.md#distinguishing-cases Success versus failure arms differ in discriminant and available payload; read/bad pin narrowed and unnarrowed uses.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only ValidationPipeCases declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export type ValidationPipeCases = [
  Assert<
    IsEqual<
      ValidationPipe<number, string>,
      { success: true; data: number } | { success: false; errors: string[] }
    >
  >,
];

/**
 * Verifies checking success must make the corresponding numeric data or
 * Error-array length accessible.
 *
 * The compiler must distinguish the permitted type use from its adjacent
 * invalid form.
 *
 * 1. Typecheck the authored signature or constraint.
 * 2. Require the stated acceptance or expected diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification Checking success must make the corresponding numeric data or Error-array length accessible.
 * @evidence contracts/testing.md#independent-expectations An explicit number return type requires both branches to typecheck against their documented arm; TypeScript control-flow narrowing is the oracle.
 * @evidence contracts/testing.md#distinguishing-cases Both success and failure branches are checked without executing a runtime validator; bad owns the missing-discriminant counterexample.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only read declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export const read = (r: ValidationPipe<number, Error>): number =>
  r.success ? r.data : r.errors.length;

/**
 * Verifies reading data without checking success must remain a compile error.
 *
 * The compiler must distinguish the permitted type use from its adjacent
 * invalid form.
 *
 * 1. Typecheck the authored signature or constraint.
 * 2. Require the stated acceptance or expected diagnostic.
 *
 * @evidence contracts/testing.md#behavioral-verification Reading data without checking success must remain a compile error.
 * @evidence contracts/testing.md#independent-expectations The expect-error directive independently requires rejection because the failure arm owns errors rather than data.
 * @evidence contracts/testing.md#distinguishing-cases This unguarded access is the one-decision negative twin of read; accepting all arms as data-bearing makes the directive unused.
 * @evidence contracts/testing.md#execution-ownership test-interface start runs the installed TypeScript compiler (tsc) with noEmit over this compile-only bad declaration. Assert/type identity, assignability, return checking and expect-error directives apply as written; no runtime invocation or native artifact is required.
 */
export const bad = (r: ValidationPipe<number, Error>): number =>
  // @ts-expect-error `data` exists only on the success arm.
  r.data;

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;
