import { _decimalDecompose, _decimalDivide } from "./_decimal";

/**
 * Test whether a number is a multiple of a divisor, reading both as decimals.
 *
 * `0.3` is a multiple of `0.1`. A non-finite number or a divisor that is not
 * positive gives false.
 *
 * @evidence contracts/common.md#principled-implementation Both numbers are read as the decimals they print as and the ratio of the dividend to the divisor is tested exactly with big integers, so `0.3` is a multiple of `0.1`; a non-finite value or a non-positive divisor is false.
 * @evidence contracts/common.md#clear-and-simple-design One predicate over the shared decimal helpers, which the random multiple generator also uses.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The decimal reading is the tag's documented meaning.
 * @evidence contracts/common.md#meaningful-documentation A comment states the decimal reading and the false cases.
 */
export const _isMultipleOf = (value: number, multipleOf: number): boolean => {
  const divisor = _decimalDecompose(multipleOf);
  if (divisor === null || divisor.coefficient <= BigInt(0)) return false;
  const ratio = _decimalDivide(value, divisor);
  return ratio !== null && ratio.numerator % ratio.denominator === BigInt(0);
};
