export const _isTypeUint64 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

// The maximum is `2 ** 64 - 1`, the uint64 upper bound.
const MINIMUM = 0;
const MAXIMUM = 2 ** 64 - 1;
