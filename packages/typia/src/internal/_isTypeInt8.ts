export const _isTypeInt8 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -128;
const MAXIMUM = 127;
