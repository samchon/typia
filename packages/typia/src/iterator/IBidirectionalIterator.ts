//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IForwardIterator } from "./IForwardIterator";

/**
 * Bidirectional iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IBidirectionalIterator<
  T,
  Iterator extends IBidirectionalIterator<T, Iterator> = IBidirectionalIterator<
    T,
    any
  >,
> extends IForwardIterator<T, Iterator> {
  /**
   * Get previous iterator.
   *
   * @return The previous iterator.
   */
  prev(): Iterator;
}
