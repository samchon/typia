//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IBidirectionalIterator } from "./IBidirectionalIterator";
import { IReversableIterator } from "./IReversableIterator";

/**
 * Reverse iterator
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IReverseIterator<
  T,
  Base extends IReversableIterator<T, Base, This>,
  This extends IReverseIterator<T, Base, This>,
> extends IBidirectionalIterator<T, This> {
  /**
   * Get base iterator.
   *
   * @return The base iterator.
   */
  base(): Base;
}
