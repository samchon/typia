export const _isTypeUint8 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = 0;
const MAXIMUM = 255;
