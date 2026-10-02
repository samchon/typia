/**
 * A decimal number, `coefficient * 10 ** exponent`.
 *
 * @evidence contracts/common.md#principled-implementation A decimal number is the pair of an integer coefficient and a power-of-ten exponent, `coefficient * 10^exponent`, which represents a printed number exactly where a double cannot.
 * @evidence contracts/common.md#clear-and-simple-design Two fields.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
 * @evidence contracts/common.md#meaningful-documentation A comment states the representation.
 */
export interface _IDecimal {
  /** Signed integer digits of the decimal representation. */
  coefficient: bigint;

  /** Power of ten applied to the coefficient. */
  exponent: number;
}

/**
 * An exact quotient of two big integers.
 *
 * @evidence contracts/common.md#principled-implementation An exact quotient is a numerator and a denominator of big integers, so divisibility can be tested by remainder.
 * @evidence contracts/common.md#clear-and-simple-design Two fields.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
 * @evidence contracts/common.md#meaningful-documentation A comment states the representation.
 */
export interface _IDecimalRatio {
  /** Exact dividend after aligning the decimal exponents. */
  numerator: bigint;

  /** Exact nonzero divisor after aligning the decimal exponents. */
  denominator: bigint;
}

/**
 * Read a number as the decimal that its shortest string shows.
 *
 * @returns The decimal, or `null` for a non-finite number
 *
 * @evidence contracts/common.md#principled-implementation The shortest decimal string of the number, which is what JavaScript prints, is split into digits and an exponent: the mantissa digits form the coefficient, the sign is applied and the exponent is the printed exponent minus the number of decimals. Non-finite numbers return null.
 * @evidence contracts/common.md#clear-and-simple-design One function using string operations and BigInt.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The decimal reading is the documented semantics for `multipleOf` and not a tolerance fix.
 * @evidence contracts/common.md#meaningful-documentation A comment states the reading of a number as its printed decimal and the null case.
 */
export const _decimalDecompose = (value: number): _IDecimal | null => {
  if (Number.isFinite(value) === false) return null;
  const [mantissa = "0", exponentText = "0"] = value.toString().split("e");
  const negative: boolean = mantissa.startsWith("-");
  const unsigned: string = negative ? mantissa.slice(1) : mantissa;
  const point: number = unsigned.indexOf(".");
  const decimals: number = point === -1 ? 0 : unsigned.length - point - 1;
  const digits: bigint = BigInt(unsigned.replace(".", ""));
  return {
    coefficient: negative ? -digits : digits,
    exponent: Number(exponentText) - decimals,
  };
};

/**
 * Divide a number by a decimal exactly.
 *
 * @returns The ratio, or `null` for a non-finite value or a zero divisor
 *
 * @evidence contracts/common.md#principled-implementation The dividend is decomposed and the exponents are aligned by multiplying the numerator or the denominator by a power of ten, giving an exact ratio; a zero divisor or a non-finite value returns null.
 * @evidence contracts/common.md#clear-and-simple-design One function over the decomposition and the power helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The result is exact and no rounding is used.
 * @evidence contracts/common.md#meaningful-documentation A comment states the ratio and the null cases.
 */
export const _decimalDivide = (
  value: number,
  divisor: _IDecimal,
): _IDecimalRatio | null => {
  const dividend: _IDecimal | null = _decimalDecompose(value);
  if (dividend === null || divisor.coefficient === BigInt(0)) return null;
  const exponent: number = dividend.exponent - divisor.exponent;
  return exponent >= 0
    ? {
        numerator: dividend.coefficient * _decimalPower(exponent),
        denominator: divisor.coefficient,
      }
    : {
        numerator: dividend.coefficient,
        denominator: divisor.coefficient * _decimalPower(-exponent),
      };
};

/**
 * Find the smallest positive integer whose multiples are the integers that are
 * multiples of a decimal.
 *
 * @returns The step, or `null` for a non-finite or non-positive value
 *
 * @evidence contracts/common.md#principled-implementation For an integer value to be a multiple of a decimal step `c * 10^e`, the step is the integer itself when the exponent is not negative and otherwise the coefficient divided by its gcd with 10^-e; non-finite and non-positive steps return null.
 * @evidence contracts/common.md#clear-and-simple-design One function reusing the decomposition, the power and the gcd helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The result follows from the arithmetic.
 * @evidence contracts/common.md#meaningful-documentation A comment states the three cases.
 */
export const _decimalIntegerStep = (value: number): _IDecimal | null => {
  const decimal: _IDecimal | null = _decimalDecompose(value);
  if (decimal === null || decimal.coefficient <= BigInt(0)) return null;
  if (decimal.exponent >= 0)
    return {
      coefficient: decimal.coefficient * _decimalPower(decimal.exponent),
      exponent: 0,
    };

  const denominator: bigint = _decimalPower(-decimal.exponent);
  return {
    coefficient:
      decimal.coefficient / _decimalGcd(decimal.coefficient, denominator),
    exponent: 0,
  };
};

/**
 * Convert a decimal to the nearest number.
 *
 * @evidence contracts/common.md#principled-implementation The decimal is formatted as `coefficient e exponent` text and parsed by Number, which returns the nearest double, so the conversion is exact whenever the decimal is representable and otherwise rounds to the nearest.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Rounding is stated and callers verify the result where validity matters, as the random multiple helper does.
 * @evidence contracts/common.md#meaningful-documentation A comment states the nearest-double conversion.
 */
export const _decimalToNumber = (value: _IDecimal): number =>
  Number(`${value.coefficient}e${value.exponent}`);

/**
 * Compute ten to a non-negative integer power exactly.
 *
 * @evidence contracts/common.md#principled-implementation Ten to a non-negative integer power is computed with big integers, so it is exact for any exponent.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A general helper.
 * @evidence contracts/common.md#meaningful-documentation A one-line comment states what it returns.
 */
export const _decimalPower = (exponent: number): bigint =>
  BigInt(10) ** BigInt(exponent);

/**
 * Compute the greatest common divisor of two big integers.
 *
 * @evidence contracts/common.md#principled-implementation Euclid's remainder iteration accepts the signed integers and returns the absolute final divisor. The absolute remainder decreases on each nonterminal step, so it terminates; two zeros return zero.
 * @evidence contracts/common.md#clear-and-simple-design One loop.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A recognized algorithm.
 * @evidence contracts/common.md#meaningful-documentation A one-line comment states what it returns.
 */
export const _decimalGcd = (x: bigint, y: bigint): bigint => {
  while (y !== BigInt(0)) [x, y] = [y, x % y];
  return x < BigInt(0) ? -x : x;
};
