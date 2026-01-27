//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { IEmpty } from "../../internal/container/partial/IEmpty";
import { IPush } from "../../internal/container/partial/IPush";
import { ISize } from "../../internal/container/partial/ISize";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { IReversableIterator } from "../../iterator/IReversableIterator";
import { IReverseIterator } from "../../iterator/IReverseIterator";
import { IBidirectionalContainer } from "../../ranges/container/IBidirectionalContainer";

/**
 * Common interface for containers.
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link IContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IContainer<
  T extends PElem,
  SourceT extends IContainer<T, SourceT, IteratorT, ReverseT, PElem>,
  IteratorT extends IContainer.Iterator<T, SourceT, IteratorT, ReverseT, PElem>,
  ReverseT extends IContainer.ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    PElem
  >,
  PElem = T,
> extends IBidirectionalContainer<
      IContainer.Iterator<T, SourceT, IteratorT, ReverseT, PElem>,
      ReverseT
    >,
    Iterable<T>,
    IEmpty,
    ISize,
    IPush<PElem> {
  /* ---------------------------------------------------------
        ASSIGN & CLEAR
    --------------------------------------------------------- */
  /**
   * Range Assigner.
   *
   * @param first Input iteartor of the first position.
   * @param last Input iterator of the last position.
   */
  assign<
    InputIterator extends Readonly<IForwardIterator<PElem, InputIterator>>,
  >(
    first: InputIterator,
    last: InputIterator,
  ): void;

  /**
   * @inheritDoc
   */
  clear(): void;

  /* =========================================================
        ACCESSORS
            - SIZE
            - ITERATORS
    ============================================================
        SIZE
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  size(): number;

  /**
   * @inheritDoc
   */
  empty(): boolean;

  /* ---------------------------------------------------------
        ITERATORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  begin(): IteratorT;

  /**
   * @inheritDoc
   */
  end(): IteratorT;

  /**
   * @inheritDoc
   */
  rbegin(): ReverseT;

  /**
   * @inheritDoc
   */
  rend(): ReverseT;

  /**
   * @inheritDoc
   */
  [Symbol.iterator](): IterableIterator<T>;

  /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
  push(...items: PElem[]): number;

  /**
   * Erase an element.
   *
   * @param pos Position to erase.
   * @return Iterator following the *pos*, strained by the erasing.
   */
  erase(pos: IteratorT): IteratorT;

  /**
   * Erase elements in range.
   *
   * @param first Range of the first position to erase.
   * @param last Rangee of the last position to erase.
   * @return Iterator following the last removed element, strained by the erasing.
   */
  erase(first: IteratorT, last: IteratorT): IteratorT;

  /* ---------------------------------------------------------------
        UTILITIES
    --------------------------------------------------------------- */
  /**
   * Swap elements.
   *
   * @param obj Target container to swap.
   */
  swap(obj: SourceT): void;

  /**
   * Native function for `JSON.stringify()`.
   *
   * @return An array containing children elements.
   */
  toJSON(): Array<T>;
}

export namespace IContainer {
  /**
   * Iterator of {@link IContainer}.
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export interface Iterator<
    T extends Elem,
    SourceT extends IContainer<T, SourceT, IteratorT, ReverseIteratorT, Elem>,
    IteratorT extends Iterator<T, SourceT, IteratorT, ReverseIteratorT, Elem>,
    ReverseIteratorT extends ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    Elem = T,
  > extends Readonly<IReversableIterator<T, IteratorT, ReverseIteratorT>> {
    /**
     * Get source container.
     *
     * @return The source container.
     */
    source(): SourceT;

    /**
     * @inheritDoc
     */
    reverse(): ReverseIteratorT;
  }

  /**
   * Reverse iterator of {@link IContainer}
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export interface ReverseIterator<
    T extends Elem,
    Source extends IContainer<T, Source, IteratorT, ReverseT, Elem>,
    IteratorT extends Iterator<T, Source, IteratorT, ReverseT, Elem>,
    ReverseT extends ReverseIterator<T, Source, IteratorT, ReverseT, Elem>,
    Elem = T,
  > extends Readonly<IReverseIterator<T, IteratorT, ReverseT>> {
    /**
     * Get source container.
     *
     * @return The source container.
     */
    source(): Source;
  }
}
