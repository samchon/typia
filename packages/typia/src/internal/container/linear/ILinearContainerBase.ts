//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IContainer } from "../../../base/container/IContainer";
import { IForwardIterator } from "../../../iterator/IForwardIterator";
import { IPushBack } from "../partial/IPushBack";

export interface ILinearContainerBase<
  T extends ElemT,
  SourceT extends IContainer<T, SourceT, IteratorT, ReverseT, T>,
  IteratorT extends IContainer.Iterator<T, SourceT, IteratorT, ReverseT, T>,
  ReverseT extends IContainer.ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    T
  >,
  ElemT = T,
> extends IContainer<T, SourceT, IteratorT, ReverseT, ElemT>,
    IPushBack<T> {
  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Fill Assigner.
   *
   * @param n Initial size.
   * @param val Value to fill.
   */
  assign(n: number, val: T): void;

  /**
   * Range Assigner.
   *
   * @param first Input iterator of the first position.
   * @param last Input iterator of the last position.
   */
  assign<InputIterator extends Readonly<IForwardIterator<T, InputIterator>>>(
    first: InputIterator,
    last: InputIterator,
  ): void;

  /**
   * Resize this {@link Vector} forcibly.
   *
   * @param n New container size.
   */
  resize(n: number): void;

  /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  push_back(val: T): void;

  /**
   * Erase the last element.
   */
  pop_back(): void;

  /**
   * Insert a single element.
   *
   * @param pos Position to insert.
   * @param val Value to insert.
   * @return An iterator to the newly inserted element.
   */
  insert(pos: IteratorT, val: T): IteratorT;

  /**
   * Insert repeated elements.
   *
   * @param pos Position to insert.
   * @param n Number of elements to insert.
   * @param val Value to insert repeatedly.
   * @return An iterator to the first of the newly inserted elements.
   */
  insert(pos: IteratorT, n: number, val: T): IteratorT;

  /**
   * Insert range elements.
   *
   * @param pos Position to insert.
   * @param first Input iterator of the first position.
   * @param last Input iteartor of the last position.
   * @return An iterator to the first of the newly inserted elements.
   */
  insert<InputIterator extends Readonly<IForwardIterator<T, InputIterator>>>(
    pos: IteratorT,
    first: InputIterator,
    last: InputIterator,
  ): IteratorT;
}
