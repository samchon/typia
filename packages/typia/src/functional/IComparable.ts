//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
/**
 * Interface for comparison.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IComparable<T> {
  /**
   * Test whether equal to some object.
   *
   * @param obj The object to compare.
   * @return Whether equal or not.
   */
  equals(obj: T): boolean;

  /**
   * Test whether less than some object.
   *
   * @param obj The object to compare.
   * @return Whether less or not.
   */
  less(obj: T): boolean;

  /**
   * Get hash code.
   *
   * @return The hash code.
   */
  hashCode(): number;
}
