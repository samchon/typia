//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { IRandomAccessIterator } from "../../iterator/IRandomAccessIterator";
import { ILinearContainer } from "./ILinearContainer";

/**
 * Common interface for array containers.
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link IArrayContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IArrayContainer<
  T extends PElem,
  SourceT extends IArrayContainer<T, SourceT, IteratorT, ReverseT, T>,
  IteratorT extends IArrayContainer.Iterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    T
  >,
  ReverseT extends IArrayContainer.ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    T
  >,
  PElem = T,
> extends ILinearContainer<T, SourceT, IteratorT, ReverseT, PElem> {
  /**
   * Get iterator at specific position.
   *
   * @param index Specific position.
   * @return The iterator at the *index*.
   */
  nth(index: number): IteratorT;

  /**
   * Get element at specific position.
   *
   * @param index Specific position.
   * @return The element at the *index*.
   */
  at(index: number): T;

  /**
   * Change element at specific position.
   *
   * @param index Specific position.
   * @param val The new value to change.
   */
  set(index: number, val: T): void;
}

export namespace IArrayContainer {
  /**
   * Iterator of {@link IArrayContainer}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    T extends ElemT,
    SourceT extends IArrayContainer<T, SourceT, IteratorT, ReverseT, T>,
    IteratorT extends IArrayContainer.Iterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ReverseT extends IArrayContainer.ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ElemT = T,
  > = ILinearContainer.Iterator<T, SourceT, IteratorT, ReverseT, ElemT> &
    IRandomAccessIterator<T, IteratorT>;

  /**
   * Reverse iterator of {@link IArrayContainer}
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export type ReverseIterator<
    T extends ElemT,
    SourceT extends IArrayContainer<T, SourceT, IteratorT, ReverseT, T>,
    IteratorT extends IArrayContainer.Iterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ReverseT extends IArrayContainer.ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ElemT = T,
  > = ILinearContainer.ReverseIterator<T, SourceT, IteratorT, ReverseT, ElemT> &
    IRandomAccessIterator<T, ReverseT>;
}
