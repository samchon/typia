/**
 * Type signature for assertion guard functions that validate and narrow types.
 *
 * Assertion guards check if data matches an expected type and tell TypeScript 
 * the data is now that type. Unlike regular assertions, these don't return 
 * anything - they just validate and enable type narrowing for the original variable.
 *
 * Used by `typia.createAssertGuard<T>()` to generate reusable type checking functions 
 * that crash with detailed errors when data doesn't match your TypeScript types.
 *
 * @example
 * ```typescript
 * interface User { name: string; age: number; }
 * 
 * const checkUser: AssertionGuard<User> = typia.createAssertGuard<User>();
 * 
 * let data: unknown = { name: "Alice", age: 30 };
 * checkUser(data); // throws if invalid, enables type narrowing if valid
 * console.log(data.name); // TypeScript now knows data is User
 * ```
 *
 * @template T Expected type to validate against
 * @param input Data to validate and narrow
 * @throws Error with detailed validation failure information
 */
export type AssertionGuard<T> = (input: unknown) => asserts input is T;
