interface IDecimal {
  coefficient: bigint;
  exponent: number;
}

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
