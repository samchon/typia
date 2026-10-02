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
