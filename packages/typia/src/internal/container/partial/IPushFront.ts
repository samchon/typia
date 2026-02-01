//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
export interface IPushFront<T> {
  /**
   * Insert an element at the first.
   *
   * @param val Value to insert.
   */
  push_front(val: T): void;
}
