//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
export interface IFront<T> {
  /**
   * Get the first element.
   *
   * @return The first element.
   */
  front(): T;

  /**
   * Change the first element.
   *
   * @param val The value to change.
   */
  front(val: T): void;
}
