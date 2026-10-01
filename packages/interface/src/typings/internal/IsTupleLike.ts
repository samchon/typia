/**
 * Tests whether an array type declares tuple positions.
 *
 * Unlike a fixed-length check, this recognizes optional and variadic tuples
 * through fixed index keys or a required suffix while excluding homogeneous
 * arrays.
 *
 * @evidence contracts/common.md#principled-implementation An empty tuple is tuple-like; otherwise a type is tuple-like when it has numeric-string index keys, which fixed, optional and leading-variadic tuples have, or when it ends in a required element after a rest. A homogeneous array has neither, so it is excluded.
 * @evidence contracts/common.md#clear-and-simple-design Two conditional tests answer a single question and keep recursive converters from treating tuples as arrays.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A structural test over the array type with no cast.
 * @evidence contracts/common.md#meaningful-documentation The comment states how it differs from a fixed-length check and which tuple forms it recognizes.
 */
export type IsTupleLike<T extends readonly unknown[]> = T extends readonly []
  ? true
  : Extract<keyof T, `${number}`> extends never
    ? T extends readonly [...unknown[], unknown]
      ? true
      : false
    : true;
