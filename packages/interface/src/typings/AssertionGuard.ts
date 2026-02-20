/**
 * Type for assertion guard functions that narrow input type.
 *
 * `AssertionGuard<T>` is a function type that validates input at runtime
 * and asserts it as type `T`. Unlike regular assertions that return the value,
 * assertion guards return void but narrow the input parameter's type.
 *
 * @template T Target type to assert
 * @throws {TypeGuardError} When validation fails
 * @author Jeongho Nam - https://github.com/samchon
 */
export type AssertionGuard<T> = (input: unknown) => asserts input is T;
