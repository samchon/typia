//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
export interface IPush<T> {
  /**
   * Insert items at the end.
   *
   * @param items Items to insert.
   * @return Number of elements in the container after insertion.
   */
  push(...items: T[]): number;
}
