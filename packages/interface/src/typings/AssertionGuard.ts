/**
 * Type for assertion guard functions that narrow input type.
 *
 * `AssertionGuard<T>` is a function type that validates input at runtime and
 * asserts it as type `T`. Unlike regular assertions that return the value,
 * assertion guards return void but narrow the input parameter's type.
 *
 * The signature describes the narrowing effect; the implementing function is
 * responsible for validation and failure behavior.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template T Target type to assert
 *
 * @throws {TypeGuardError} When validation fails
 *
 * @evidence contracts/common.md#principled-implementation TypeScript's assertion signature narrows the same unknown input to T after a normal return; it supplies a static effect without pretending that a type alias performs runtime validation.
 * @evidence contracts/common.md#clear-and-simple-design One generic call signature expresses input ownership and narrowing directly, without an unnecessary callable wrapper or result type.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The alias uses the language's assertion mechanism; runtime checking remains the implementing guard's responsibility rather than a cast introduced by this declaration.
 * @evidence contracts/common.md#meaningful-documentation Native prose distinguishes void-returning narrowing from value-returning assertions and states who implements validation and failure; the target generic and expected guard exception are documented separately.
 */
export type AssertionGuard<T> = (input: unknown) => asserts input is T;
