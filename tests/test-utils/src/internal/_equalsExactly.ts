import { TestValidator } from "@nestia/e2e";

/**
 * Asserts two values are deeply equal, checking both directions.
 *
 * `TestValidator.equals` walks only the keys of its first argument, so an
 * object property present on one side alone passes unnoticed: a generated value
 * that drops a key, or one that gains an unexpected key, depending on the
 * argument order. Comparing both ways closes both gaps, except for a key whose
 * value is `undefined`, which both directions skip.
 *
 * @param title Assertion title
 * @param x First value
 * @param y Second value
 */
export const _equalsExactly = <T>(title: string, x: T, y: T): void => {
  TestValidator.equals(title, x, y);
  TestValidator.equals(title, y, x);
};
