export const _isTypeUint64Bigint = (value: bigint): boolean =>
  MINIMUM <= value && value <= MAXIMUM;

// See `_isTypeInt64Bigint`: the bound is exact only because the argument is a
// string, and `bigint` can represent the true inclusive maximum.
const MINIMUM = BigInt(0);
const MAXIMUM = BigInt("18446744073709551615");
