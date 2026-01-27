//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IComparable } from "../functional/IComparable";
import { IPointer } from "../functional/IPointer";

/**
 * Forward iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IForwardIterator<
  T,
  Iterator extends IForwardIterator<T, Iterator> = IForwardIterator<T, any>,
> extends IPointer<T>,
    Pick<IComparable<Iterator>, "equals"> {
  /**
   * Get next iterator.
   *
   * @return The next iterator.
   */
  next(): Iterator;

  /**
   * Test whether equal to other iterator.
   *
   * @param obj The iterator to compare.
   * @return Whether equal or not.
   */
  equals(obj: Iterator): boolean;
}
