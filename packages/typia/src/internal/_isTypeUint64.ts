export const _isTypeUint64 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value < MAXIMUM_EXCLUSIVE;

// The true maximum is `2 ** 64 - 1`, and no `number` can represent it: the
// subtraction rounds straight back to `2 ** 64`. See `_isTypeInt64` for the
// full reasoning; the exclusive bound is exact here too, because doubles of
// this magnitude are 2048 apart, so none exists between `2 ** 64 - 1` and
// `2 ** 64`.
const MINIMUM = 0;
const MAXIMUM_EXCLUSIVE = 2 ** 64;
