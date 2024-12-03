export const _isTypeInt32 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -(2 ** 31);
const MAXIMUM = 2 ** 31 - 1;
