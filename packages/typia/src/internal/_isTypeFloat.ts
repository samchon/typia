export const _isTypeFloat = (value: number): boolean =>
  MINIMUM <= value && value <= MAXIMUM;

const MINIMUM = -3.4028235e38;
const MAXIMUM = 3.4028235e38;
