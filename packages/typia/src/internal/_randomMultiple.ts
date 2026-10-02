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

/**
 * Generate a number that is a multiple of a decimal step inside a range.
 *
 * The quotient range is computed exactly, nearby candidates are tested for
 * being doubles that the multiple test accepts, and representable multiples are
 * searched across exponent bands when none is found; an unsatisfiable range
 * throws.
 *
 * The optional source supplies draws in [0, 1); it defaults to the platform
 * source resolved when this helper is called. Nested draws use the same
 * source.
 *
 * @evidence contracts/common.md#principled-implementation The step is read as a decimal, the bounds are converted to the nearest quotient range with exact big-integer arithmetic, a quotient is drawn and several nearby candidates are checked for being valid doubles that the multiple test accepts, and, when none is representable, it searches representable multiples across integer and decimal exponent bands before throwing. A value is accepted only after the exact multiple test, so the answer does not depend on rounding assumptions.
 * @evidence contracts/performance.md#efficient-algorithms Source injection adds one callback invocation at each existing draw without adding sampling, retries or state. Existing output-size traversal and multiple search bounds are unchanged.
 * @evidence contracts/performance.md#reuse-equivalent-work Random draws are effectful and cannot be shared across calls merely because bounds match. One invocation reuses its decomposed step and quotient bounds while checking candidate multiples; no earlier draw or output is cached.
 * @evidence contracts/performance.md#bound-retention-and-release-resources Exact ratios, bigint coefficients, bounded candidate lists and exponent-band scratch values belong to this invocation. Sizes depend on finite input exponents and coefficient widths. No request history, source callback, handles or tasks are retained after return or throw; the numeric result belongs to the caller.
 * @evidence contracts/common.md#clear-and-simple-design One public function and many private helpers for bounds, candidates and alignment, each used by the search; the search is long because doubles cannot represent every decimal multiple.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The final check uses the same predicate as the validator, and an unsatisfiable range throws.
 * @evidence contracts/common.md#meaningful-documentation The doc states the exact quotient range, the candidate search and the failure case; the private helpers are covered by this function's answer.
 */
export const _randomMultiple = (
  props: {
    minimum: number;
    maximum: number;
    multipleOf: number;
    exclusiveMinimum: boolean;
    exclusiveMaximum: boolean;
    integer: boolean;
  },
  source: () => number = Math.random,
): number => {
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

  const selected: bigint = randomBigint(minimum, maximum, source);
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
  const aligned: number | null = findRepresentableIntegerMultiple(
    props,
    source,
  );
  if (aligned !== null) return aligned;
  const decimalAligned: number | null = findRepresentableDecimalMultiple(
    props,
    step,
    source,
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
  source: () => number,
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

    const selected: bigint = randomBigint(minimum, maximum, source);
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
  source: () => number,
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
      ? findPositiveAligned(minimum, maximum, step.coefficient, source)
      : (() => {
          const magnitude: bigint | null = findPositiveAligned(
            -maximum,
            -minimum,
            step.coefficient,
            source,
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
  source: () => number,
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
    if (lower <= upper) return randomBigint(lower, upper, source) * alignedStep;
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

const randomBigint = (
  minimum: bigint,
  maximum: bigint,
  source: () => number,
): bigint => {
  const scale: bigint = BigInt(1) << BigInt(53);
  const sample: bigint = BigInt(
    Math.min(
      Number(scale - BigInt(1)),
      Math.floor(Math.max(0, source()) * Number(scale)),
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
