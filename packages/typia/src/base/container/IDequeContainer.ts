//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { IDeque } from "../../internal/container/partial/IDeque";
import { IContainer } from "./IContainer";
import { ILinearContainer } from "./ILinearContainer";

/**
 * Common interface for deque containers.
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link IDequeContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IDequeContainer<
  T extends PElem,
  SourceT extends IDequeContainer<T, SourceT, IteratorT, ReverseT, PElem>,
  IteratorT extends IContainer.Iterator<T, SourceT, IteratorT, ReverseT, PElem>,
  ReverseT extends IContainer.ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    PElem
  >,
  PElem = T,
> extends IDeque<T>,
    ILinearContainer<T, SourceT, IteratorT, ReverseT, PElem> {}

export namespace IDequeContainer {
  /**
   * Iterator of {@link IDequeContainer}.
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export type Iterator<
    T extends ElemT,
    SourceT extends IDequeContainer<T, SourceT, IteratorT, ReverseT, T>,
    IteratorT extends IDequeContainer.Iterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ReverseT extends IDequeContainer.ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ElemT = T,
  > = ILinearContainer.Iterator<T, SourceT, IteratorT, ReverseT, ElemT>;

  /**
   * Reverse iterator of {@link IDequeContainer}.
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export type ReverseIterator<
    T extends ElemT,
    SourceT extends IDequeContainer<T, SourceT, IteratorT, ReverseT, T>,
    IteratorT extends IDequeContainer.Iterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ReverseT extends IDequeContainer.ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ElemT = T,
  > = ILinearContainer.ReverseIterator<T, SourceT, IteratorT, ReverseT, ElemT>;
}
