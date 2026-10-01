/**
 * Generate a random boolean.
 *
 * @evidence contracts/common.md#principled-implementation One uniform draw below one half gives each boolean the probability one half.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses the platform generator.
 * @evidence contracts/common.md#meaningful-documentation A one-line comment states the distribution.
 */
export const _randomBoolean = (): boolean => Math.random() < 0.5;
