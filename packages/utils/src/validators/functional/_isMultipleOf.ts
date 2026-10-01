interface IDecimal {
  coefficient: bigint;
  exponent: number;
}

/**
 * Checks whether a number is a multiple of a divisor, reading both as decimals.
 *
 * Each number is taken as the decimal its shortest string shows and both are
 * compared exactly with big integers, so `0.3` is a multiple of `0.1`. A
 * non-finite number or a divisor that is not positive gives false.
 *
 * @evidence contracts/common.md#principled-implementation Each number is decomposed from its shortest decimal string into an integer coefficient and a power of ten, and the dividend is tested for divisibility by the divisor in exact big-integer arithmetic after aligning the exponents, so a decimal such as `0.3` is a multiple of `0.1` as printed, where binary remainder would give the wrong answer. Non-finite values and non-positive divisors are false.
 * @evidence contracts/common.md#clear-and-simple-design One predicate and a private decomposition shared with `_integerMultipleOfStep`; a different decomposition is used by the typia copy, which imports a shared helper module.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The decimal reading is the tag's documented meaning and not a patch for particular values.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that states the decimal reading and the false cases.
 */
export const _isMultipleOf = (value: number, multipleOf: number): boolean => {
  const dividend: IDecimal | null = decompose(value);
  const divisor: IDecimal | null = decompose(multipleOf);
  if (dividend === null || divisor === null || divisor.coefficient <= BigInt(0))
    return false;

  const exponent: number = dividend.exponent - divisor.exponent;
  return exponent >= 0
    ? (dividend.coefficient * power(exponent)) % divisor.coefficient ===
        BigInt(0)
    : dividend.coefficient % (divisor.coefficient * power(-exponent)) ===
        BigInt(0);
};

/**
 * Finds the smallest positive integer step whose multiples are the integers
 * that are multiples of a decimal divisor.
 *
 * An absent divisor gives 1 and an integer divisor gives itself. A fractional
 * divisor `c / 10^k` gives `c / gcd(c, 10^k)`. A non-finite or non-positive
 * divisor gives `null`.
 *
 * @evidence contracts/common.md#principled-implementation For an integer value to be a multiple of a decimal divisor `c * 10^e`, the divisor is the integer itself when `e` is not negative and otherwise `c / gcd(c, 10^-e)`, which is the smallest integer whose multiples are the integers divisible by the divisor; an absent divisor gives 1 and an unusable one gives null.
 * @evidence contracts/common.md#clear-and-simple-design One function that reuses the decomposition and a small gcd helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The step follows from the arithmetic and no divisor is special-cased.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that states the three cases and the null result.
 */
export const _integerMultipleOfStep = (
  multipleOf: number | undefined,
): bigint | null => {
  if (multipleOf === undefined) return BigInt(1);
  const decimal: IDecimal | null = decompose(multipleOf);
  if (decimal === null || decimal.coefficient <= BigInt(0)) return null;
  if (decimal.exponent >= 0)
    return decimal.coefficient * power(decimal.exponent);

  const denominator: bigint = power(-decimal.exponent);
  return decimal.coefficient / gcd(decimal.coefficient, denominator);
};

const decompose = (value: number): IDecimal | null => {
  if (Number.isFinite(value) === false) return null;
  const [mantissa = "0", exponentText = "0"] = value.toString().split("e");
  const negative: boolean = mantissa.startsWith("-");
  const unsigned: string = negative ? mantissa.slice(1) : mantissa;
  const point: number = unsigned.indexOf(".");
  const decimals: number = point === -1 ? 0 : unsigned.length - point - 1;
  const digits: bigint = BigInt(unsigned.replace(".", ""));
  const coefficient: bigint = negative ? -digits : digits;
  return {
    coefficient,
    exponent: Number(exponentText) - decimals,
  };
};

const power = (exponent: number): bigint => BigInt(10) ** BigInt(exponent);

const gcd = (x: bigint, y: bigint): bigint => {
  while (y !== BigInt(0)) [x, y] = [y, x % y];
  return x < BigInt(0) ? -x : x;
};
