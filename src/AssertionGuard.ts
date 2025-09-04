/**
 * Type definition for assertion guard functions in `typia`.
 *
 * An assertion guard is a function that asserts an input value's type at
 * runtime and performs a TypeScript type assertion if validation passes. Unlike
 * regular assertion functions that return the validated value, assertion guards
 * return nothing but automatically cast the input parameter to the expected
 * type `T`.
 *
 * This type is used by `typia.createAssertGuard<T>()` and
 * `typia.createAssertGuardEquals<T>()` to generate reusable assertion guard
 * functions.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   interface IMember {
 *     name: string;
 *     age: number;
 *   }
 *
 *   // Create reusable assertion guard
 *   const assertMember: AssertionGuard<IMember> = typia.createAssertGuard<IMember>();
 *
 *   // Usage - input will be automatically cast to IMember if validation passes
 *   const unknownData: unknown = { name: "John", age: 25 };
 *
 *   assertMember(unknownData);
 *   // After this line, unknownData is automatically treated as IMember type
 *   console.log(unknownData.name); // TypeScript knows this is safe
 *   ```;
 *
 * @template T - The expected type to validate and assert against
 * @param input - The value to validate (type unknown)
 * @returns Void - Returns nothing, but asserts that input is type T
 * @throws {TypeGuardError} When the input value doesn't match the expected type
 *   T
 * @see {@link https://github.com/samchon/typia#assertguard-functions} Typia assertion guards documentation
 * @see {@link TypeGuardError} Error thrown when assertion fails
 */
export type AssertionGuard<T> = (input: unknown) => asserts input is T;
