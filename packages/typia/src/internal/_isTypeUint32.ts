export const _isTypeUint32 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = 0;
const MAXIMUM = 2 ** 32 - 1;
