export const _isTypeFloat = (value: number): boolean =>
  MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -1.175494351e38;
const MAXIMUM = 3.4028235e38;
