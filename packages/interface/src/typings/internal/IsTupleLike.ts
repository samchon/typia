/**
 * Tests whether an array type declares tuple positions.
 *
 * Unlike a fixed-length check, this recognizes optional and variadic tuples
 * through their explicit index keys while excluding homogeneous arrays.
 */
export type IsTupleLike<T extends readonly unknown[]> = T extends readonly []
  ? true
  : Extract<keyof T, `${number}`> extends never
    ? T extends readonly [...unknown[], unknown]
      ? true
      : false
    : true;
