export const _isTypeInt64 = (value: number): boolean =>
  Math.floor(value) === value && MINIMUM <= value && value < MAXIMUM_EXCLUSIVE;

// The true maximum is `2 ** 63 - 1`, and no `number` can represent it: the
// subtraction rounds straight back to `2 ** 63`. Spelling the bound as either
// `2 ** 63 - 1` or `9223372036854775807` therefore compiles to `value <=
// 2 ** 63` and admits `2 ** 63`, which `protobuf.encode` then wraps around to
// the minimum. An exclusive bound loses nothing: doubles of this magnitude are
// 1024 apart, so none exists between `2 ** 63 - 1` and `2 ** 63`, and the
// largest double below the bound (`2 ** 63 - 1024`) is a genuine int64. The
// minimum needs no such care -- `-(2 ** 63)` is a power of two, hence exact.
const MINIMUM = -(2 ** 63);
const MAXIMUM_EXCLUSIVE = 2 ** 63;
