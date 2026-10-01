/**
 * Prepare a number for JSON, mapping a non-finite number to null as
 * `JSON.stringify` does.
 *
 * @evidence contracts/common.md#principled-implementation JSON has no spelling for NaN or the infinities, and `JSON.stringify` writes them as null, so a non-finite number is mapped to null and a finite one is returned unchanged for the emitted code to concatenate.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping follows the platform's own JSON rule and no value is special-cased.
 * @evidence contracts/common.md#meaningful-documentation A comment states the null mapping.
 */
export const _jsonStringifyNumber = (value: number): number | null =>
  isFinite(value) ? value : null;
