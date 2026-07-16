import {
  _IDecimal,
  _IDecimalRatio,
  _decimalDecompose,
  _decimalDivide,
  _decimalIntegerStep,
  _decimalToNumber,
} from "./_decimal";
import { _isMultipleOf } from "./_isMultipleOf";

export const _randomMultiple = (props: {
  minimum: number;
  maximum: number;
  multipleOf: number;
  exclusiveMinimum: boolean;
  exclusiveMaximum: boolean;
  integer: boolean;
}): number => {
  const step: _IDecimal | null = props.integer
    ? _decimalIntegerStep(props.multipleOf)
    : _decimalDecompose(props.multipleOf);
  if (step === null || step.coefficient <= BigInt(0))
    throw new Error("The multipleOf value must be a positive finite number.");

  const lower: _IDecimalRatio | null = _decimalDivide(props.minimum, step);
  const upper: _IDecimalRatio | null = _decimalDivide(props.maximum, step);
  if (lower === null || upper === null)
    throw new Error("The random number range must be finite.");
  const minimum: bigint = lowerBound(lower, props.exclusiveMinimum);
  const maximum: bigint = upperBound(upper, props.exclusiveMaximum);
  if (minimum > maximum)
    throw new Error("The range does not contain a multipleOf value.");

  const selected: bigint = randomBigint(minimum, maximum);
  const candidates: bigint[] = unique([
    selected,
    minimum,
    maximum,
    clamp(BigInt(0), minimum, maximum),
    clamp(BigInt(1), minimum, maximum),
    clamp(BigInt(-1), minimum, maximum),
    ...nearby(selected, minimum, maximum),
  ]);
  for (const coefficient of candidates) {
    const value: number = _decimalToNumber({
      coefficient: step.coefficient * coefficient,
      exponent: step.exponent,
    });
    if (
      Number.isFinite(value) &&
      (props.integer === false || Number.isInteger(value)) &&
      (props.exclusiveMinimum
        ? value > props.minimum
        : value >= props.minimum) &&
      (props.exclusiveMaximum
        ? value < props.maximum
        : value <= props.maximum) &&
      _isMultipleOf(value, props.multipleOf)
    )
      return value;
  }
  throw new Error(
    "The range does not contain a representable multipleOf value.",
  );
};

const lowerBound = (ratio: _IDecimalRatio, exclusive: boolean): bigint => {
  const quotient: bigint = ratio.numerator / ratio.denominator;
  const remainder: bigint = ratio.numerator % ratio.denominator;
  const ceiling: bigint =
    quotient + (remainder > BigInt(0) ? BigInt(1) : BigInt(0));
  return (
    ceiling + (exclusive && remainder === BigInt(0) ? BigInt(1) : BigInt(0))
  );
};

const upperBound = (ratio: _IDecimalRatio, exclusive: boolean): bigint => {
  const quotient: bigint = ratio.numerator / ratio.denominator;
  const remainder: bigint = ratio.numerator % ratio.denominator;
  const floor: bigint =
    quotient - (remainder < BigInt(0) ? BigInt(1) : BigInt(0));
  return floor - (exclusive && remainder === BigInt(0) ? BigInt(1) : BigInt(0));
};

const randomBigint = (minimum: bigint, maximum: bigint): bigint => {
  const scale: bigint = BigInt(1) << BigInt(53);
  const sample: bigint = BigInt(
    Math.min(
      Number(scale - BigInt(1)),
      Math.floor(Math.max(0, Math.random()) * Number(scale)),
    ),
  );
  return minimum + ((maximum - minimum + BigInt(1)) * sample) / scale;
};

const clamp = (value: bigint, minimum: bigint, maximum: bigint): bigint =>
  value < minimum ? minimum : value > maximum ? maximum : value;

const nearby = (
  selected: bigint,
  minimum: bigint,
  maximum: bigint,
): bigint[] => {
  const output: bigint[] = [];
  for (let distance = BigInt(1); distance <= BigInt(32); ++distance) {
    if (selected - distance >= minimum) output.push(selected - distance);
    if (selected + distance <= maximum) output.push(selected + distance);
  }
  return output;
};

const unique = (values: bigint[]): bigint[] => [...new Set(values)];
