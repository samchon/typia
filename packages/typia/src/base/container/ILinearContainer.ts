//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { ILinearContainerBase } from "../../internal/container/linear/ILinearContainerBase";
import { IFront } from "../../internal/container/partial/IFront";
import { IPushBack } from "../../internal/container/partial/IPushBack";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { IContainer } from "./IContainer";

/**
 * Common interface for linear containers.
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link ILinearContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ILinearContainer<
  T extends PElem,
  SourceT extends ILinearContainer<T, SourceT, IteratorT, ReverseT, T>,
  IteratorT extends ILinearContainer.Iterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    T
  >,
  ReverseT extends ILinearContainer.ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    T
  >,
  PElem = T,
> extends ILinearContainerBase<T, SourceT, IteratorT, ReverseT, PElem>,
    IFront<T>,
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
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Get the last element.
   *
   * @return The last element.
   */
  back(): T;

  /**
   * Change the last element.
   *
   * @param val The value to change.
   */
  back(val: T): void;

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

export namespace ILinearContainer {
  /**
   * Iterator of {@link ILinearContainer}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    T extends ElemT,
    SourceT extends ILinearContainer<T, SourceT, IteratorT, ReverseT, T>,
    IteratorT extends ILinearContainer.Iterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ReverseT extends ILinearContainer.ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ElemT = T,
  > = IContainer.Iterator<T, SourceT, IteratorT, ReverseT, ElemT>;

  /**
   * Reverse iterator of {@link ILinearContainer}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type ReverseIterator<
    T extends ElemT,
    SourceT extends ILinearContainer<T, SourceT, IteratorT, ReverseT, T>,
    IteratorT extends ILinearContainer.Iterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ReverseT extends ILinearContainer.ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseT,
      T
    >,
    ElemT = T,
  > = IContainer.ReverseIterator<T, SourceT, IteratorT, ReverseT, ElemT>;
}
