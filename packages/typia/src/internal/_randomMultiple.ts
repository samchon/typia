import {
  _IDecimal,
  _IDecimalRatio,
  _decimalDecompose,
  _decimalDivide,
  _decimalGcd,
  _decimalIntegerStep,
  _decimalPower,
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
    if (isValid(props, value)) return value;
  }
  const aligned: number | null = findRepresentableIntegerMultiple(props);
  if (aligned !== null) return aligned;
  const decimalAligned: number | null = findRepresentableDecimalMultiple(
    props,
    step,
  );
  if (decimalAligned !== null) return decimalAligned;
  throw new Error(
    "The range does not contain a representable multipleOf value.",
  );
};

const isValid = (
  props: Parameters<typeof _randomMultiple>[0],
  value: number,
): boolean =>
  Number.isFinite(value) &&
  (props.integer === false || Number.isInteger(value)) &&
  (props.exclusiveMinimum ? value > props.minimum : value >= props.minimum) &&
  (props.exclusiveMaximum ? value < props.maximum : value <= props.maximum) &&
  _isMultipleOf(value, props.multipleOf);

const findRepresentableDecimalMultiple = (
  props: Parameters<typeof _randomMultiple>[0],
  step: _IDecimal,
): number | null => {
  const limit: bigint = BigInt("999999999999999");
  for (let exponent = -324; exponent <= 308; ++exponent) {
    const unit: _IDecimal = { coefficient: BigInt(1), exponent };
    const lower: _IDecimalRatio | null = _decimalDivide(props.minimum, unit);
    const upper: _IDecimalRatio | null = _decimalDivide(props.maximum, unit);
    if (lower === null || upper === null) return null;

    const coefficientMinimum: bigint = max(
      -limit,
      lowerBound(lower, props.exclusiveMinimum),
    );
    const coefficientMaximum: bigint = min(
      limit,
      upperBound(upper, props.exclusiveMaximum),
    );
    if (coefficientMinimum > coefficientMaximum) continue;

    const coefficientStep: bigint = decimalCoefficientStep(step, exponent);
    const minimum: bigint = lowerBound(
      { numerator: coefficientMinimum, denominator: coefficientStep },
      false,
    );
    const maximum: bigint = upperBound(
      { numerator: coefficientMaximum, denominator: coefficientStep },
      false,
    );
    if (minimum > maximum) continue;

    const selected: bigint = randomBigint(minimum, maximum);
    for (const quotient of unique([
      selected,
      minimum,
      maximum,
      clamp(BigInt(0), minimum, maximum),
      ...nearby(selected, minimum, maximum),
    ])) {
      const value: number = _decimalToNumber({
        coefficient: coefficientStep * quotient,
        exponent,
      });
      if (isValid(props, value)) return value;
    }
  }
  return null;
};

const decimalCoefficientStep = (step: _IDecimal, exponent: number): bigint => {
  const difference: number = exponent - step.exponent;
  if (difference >= 0) {
    const power: bigint = _decimalPower(difference);
    return step.coefficient / _decimalGcd(step.coefficient, power);
  }
  return step.coefficient * _decimalPower(-difference);
};

const findRepresentableIntegerMultiple = (
  props: Parameters<typeof _randomMultiple>[0],
): number | null => {
  const step: _IDecimal | null = _decimalIntegerStep(props.multipleOf);
  if (step === null) return null;
  const unit: _IDecimal = { coefficient: BigInt(1), exponent: 0 };
  const lower: _IDecimalRatio | null = _decimalDivide(props.minimum, unit);
  const upper: _IDecimalRatio | null = _decimalDivide(props.maximum, unit);
  if (lower === null || upper === null) return null;

  const minimum: bigint = lowerBound(lower, props.exclusiveMinimum);
  const maximum: bigint = upperBound(upper, props.exclusiveMaximum);
  if (minimum > maximum) return null;
  if (minimum <= BigInt(0) && maximum >= BigInt(0)) return 0;

  const candidate: bigint | null =
    minimum > BigInt(0)
      ? findPositiveAligned(minimum, maximum, step.coefficient)
      : (() => {
          const magnitude: bigint | null = findPositiveAligned(
            -maximum,
            -minimum,
            step.coefficient,
          );
          return magnitude === null ? null : -magnitude;
        })();
  if (candidate === null) return null;
  const value: number = Number(candidate);
  return isValid(props, value) ? value : null;
};

const findPositiveAligned = (
  minimum: bigint,
  maximum: bigint,
  integerStep: bigint,
): bigint | null => {
  const first: number = bitLength(minimum) - 1;
  const last: number = bitLength(maximum) - 1;
  for (let exponent = first; exponent <= last; ++exponent) {
    const bandMinimum: bigint = max(minimum, BigInt(1) << BigInt(exponent));
    const bandMaximum: bigint = min(
      maximum,
      (BigInt(1) << BigInt(exponent + 1)) - BigInt(1),
    );
    const quantum: bigint =
      exponent <= 52 ? BigInt(1) : BigInt(1) << BigInt(exponent - 52);
    const alignedStep: bigint =
      (integerStep / _decimalGcd(integerStep, quantum)) * quantum;
    const lower: bigint = lowerBound(
      { numerator: bandMinimum, denominator: alignedStep },
      false,
    );
    const upper: bigint = upperBound(
      { numerator: bandMaximum, denominator: alignedStep },
      false,
    );
    if (lower <= upper) return randomBigint(lower, upper) * alignedStep;
  }
  return null;
};

const bitLength = (value: bigint): number => value.toString(2).length;

const min = (x: bigint, y: bigint): bigint => (x < y ? x : y);
const max = (x: bigint, y: bigint): bigint => (x > y ? x : y);

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
