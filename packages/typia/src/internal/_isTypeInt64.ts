export const _isTypeInt64 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

// The maximum is `2 ** 63 - 1`, the int64 upper bound.
const MINIMUM = -(2 ** 63);
const MAXIMUM = 2 ** 63 - 1;
