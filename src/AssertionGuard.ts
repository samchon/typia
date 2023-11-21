export type AssertionGuard<T> = (input: unknown) => asserts input is T;
