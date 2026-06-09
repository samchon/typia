export const _isTypeInt16 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -32768;
const MAXIMUM = 32767;
