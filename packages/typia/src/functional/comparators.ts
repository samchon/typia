//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IComparable } from "./IComparable";
import { get_uid } from "./uid";

/**
 * Test whether two arguments are equal.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether two arguments are equal or not.
 */
export function equal_to<T>(x: T, y: T): boolean {
  // CONVERT TO PRIMITIVE TYPE
  x = x ? ((x as any).valueOf() as T) : x;
  y = y ? ((y as any).valueOf() as T) : y;

  // DO COMPARE
  if (
    x instanceof Object &&
    ((<any>x) as IComparable<T>).equals instanceof Function
  )
    return ((<any>x) as IComparable<T>).equals(y);
  else return x === y;
}

/**
 * Test whether two arguments are not equal.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Returns `true`, if two arguments are not equal, otherwise `false`.
 */
export function not_equal_to<T>(x: T, y: T): boolean {
  return !equal_to(x, y);
}

/**
 * Test whether *x* is less than *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is less than *y*.
 */
export function less<T>(x: T, y: T): boolean {
  // CONVERT TO PRIMITIVE TYPE
  x = (x as any).valueOf() as T;
  y = (y as any).valueOf() as T;

  // DO COMPARE
  if (x instanceof Object)
    if (((<any>x) as IComparable<T>).less instanceof Function)
      // has less()
      return ((<any>x) as IComparable<T>).less(y);
    else return get_uid(<any>x) < get_uid(<any>y);
  else return x < y;
}

/**
 * Test whether *x* is less than or equal to *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is less than or equal to *y*.
 */
export function less_equal<T>(x: T, y: T): boolean {
  return less(x, y) || equal_to(x, y);
}

/**
 * Test whether *x* is greater than *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is greater than *y*.
 */
export function greater<T>(x: T, y: T): boolean {
  return !less_equal(x, y);
}

/**
 * Test whether *x* is greater than or equal to *y*.
 *
 * @param x The first argument to compare.
 * @param y The second argument to compare.
 * @return Whether *x* is greater than or equal to *y*.
 */
export function greater_equal<T>(x: T, y: T): boolean {
  return !less(x, y);
}
