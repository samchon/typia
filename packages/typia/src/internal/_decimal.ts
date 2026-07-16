export interface _IDecimal {
  coefficient: bigint;
  exponent: number;
}

export interface _IDecimalRatio {
  numerator: bigint;
  denominator: bigint;
}

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

export const _decimalToNumber = (value: _IDecimal): number =>
  Number(`${value.coefficient}e${value.exponent}`);

export const _decimalPower = (exponent: number): bigint =>
  BigInt(10) ** BigInt(exponent);

const _decimalGcd = (x: bigint, y: bigint): bigint => {
  while (y !== BigInt(0)) [x, y] = [y, x % y];
  return x < BigInt(0) ? -x : x;
};
