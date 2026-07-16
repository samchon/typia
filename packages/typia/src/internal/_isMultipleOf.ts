import { _decimalDecompose, _decimalDivide } from "./_decimal";

export const _isMultipleOf = (value: number, multipleOf: number): boolean => {
  const divisor = _decimalDecompose(multipleOf);
  if (divisor === null || divisor.coefficient <= BigInt(0)) return false;
  const ratio = _decimalDivide(value, divisor);
  return ratio !== null && ratio.numerator % ratio.denominator === BigInt(0);
};
