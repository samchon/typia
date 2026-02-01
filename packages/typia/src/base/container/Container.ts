//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { ForOfAdaptor } from "../../internal/iterator/disposable/ForOfAdaptor";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { IContainer } from "./IContainer";

/**
 * Basic container.
 *
 * @template T Stored elements' type
 * @template SourceT Derived type extending this {@link Container}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 * @template PElem Parent type of *T*, used for inserting elements through {@link assign} and {@link insert}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class Container<
  T extends PElem,
  SourceT extends Container<T, SourceT, IteratorT, ReverseT, PElem>,
  IteratorT extends IContainer.Iterator<T, SourceT, IteratorT, ReverseT, PElem>,
  ReverseT extends IContainer.ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseT,
    PElem
  >,
  PElem = T,
> implements IContainer<T, SourceT, IteratorT, ReverseT, PElem>
{
  /* ---------------------------------------------------------
        ASSIGN & CLEAR
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract assign<
    InputIterator extends Readonly<IForwardIterator<PElem, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void;

  /**
   * @inheritDoc
   */
  public abstract clear(): void;

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
  public abstract size(): number;

  /**
   * @inheritDoc
   */
  public empty(): boolean {
    return this.size() === 0;
  }

  /* ---------------------------------------------------------
        ITERATORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract begin(): IteratorT;

  /**
   * @inheritDoc
   */
  public abstract end(): IteratorT;

  /**
   * @inheritDoc
   */
  public rbegin(): ReverseT {
    return this.end().reverse();
  }

  /**
   * @inheritDoc
   */
  public rend(): ReverseT {
    return this.begin().reverse();
  }

  /**
   * @inheritDoc
   */
  public [Symbol.iterator](): IterableIterator<T> {
    return new ForOfAdaptor(this.begin(), this.end());
  }

  /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract push(...items: PElem[]): number;

  /**
   * @inheritDoc
   */
  public abstract erase(pos: IteratorT): IteratorT;

  /**
   * @inheritDoc
   */
  public abstract erase(first: IteratorT, last: IteratorT): IteratorT;

  /* ---------------------------------------------------------------
        UTILITIES
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract swap(obj: SourceT): void;

  /**
   * @inheritDoc
   */
  public toJSON(): Array<T> {
    const ret: Array<T> = [];
    for (const elem of this) ret.push(elem);

    return ret;
  }
}
