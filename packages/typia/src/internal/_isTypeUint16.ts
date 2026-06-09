export const _isTypeUint16 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = 0;
const MAXIMUM = 65535;
