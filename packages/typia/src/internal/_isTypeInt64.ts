export const _isTypeInt64 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -(2 ** 63);
const MAXIMUM = 2 ** 63 - 1;
