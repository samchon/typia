//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IContainer } from "../../base/container/IContainer";
import { ErrorGenerator } from "../exception/ErrorGenerator";
import { ReverseIterator } from "./ReverseIterator";

/**
 * Basic List Iterator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class ListIterator<
  T extends Elem,
  SourceT extends IContainer<T, SourceT, IteratorT, ReverseIteratorT, Elem>,
  IteratorT extends ListIterator<T, SourceT, IteratorT, ReverseIteratorT, Elem>,
  ReverseIteratorT extends ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseIteratorT,
    Elem
  >,
  Elem,
> implements
    Readonly<
      IContainer.Iterator<T, SourceT, IteratorT, ReverseIteratorT, Elem>
    >
{
  private prev_: IteratorT;
  private next_: IteratorT;
  protected value_: T;

  /**
   * @internal
   */
  public erased_?: boolean;

  /* ---------------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------------- */
  protected constructor(prev: IteratorT, next: IteratorT, value: T) {
    this.prev_ = prev;
    this.next_ = next;
    this.value_ = value;
  }

  /**
   * @inheritDoc
   */
  public abstract reverse(): ReverseIteratorT;

  /**
   * @internal
   */
  public static _Set_prev<
    T extends Elem,
    SourceT extends IContainer<T, SourceT, IteratorT, ReverseIteratorT, Elem>,
    IteratorT extends ListIterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    ReverseIteratorT extends ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    Elem,
  >(it: IteratorT, prev: IteratorT): void {
    it.prev_ = prev;
  }

  /**
   * @internal
   */
  public static _Set_next<
    T extends Elem,
    SourceT extends IContainer<T, SourceT, IteratorT, ReverseIteratorT, Elem>,
    IteratorT extends ListIterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    ReverseIteratorT extends ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    Elem,
  >(it: IteratorT, next: IteratorT): void {
    it.next_ = next;
  }

  /* ---------------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract source(): SourceT;

  /**
   * @inheritDoc
   */
  public prev(): IteratorT {
    return this.prev_;
  }

  /**
   * @inheritDoc
   */
  public next(): IteratorT {
    return this.next_;
  }

  /**
   * @inheritDoc
   */
  public get value(): T {
    this._Try_value();
    return this.value_;
  }

  protected _Try_value(): void {
    if (this.value_ === undefined && this.equals(this.source().end()) === true)
      throw ErrorGenerator.iterator_end_value(this.source());
  }

  /* ---------------------------------------------------------------
        COMPARISON
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public equals(obj: IteratorT): boolean {
    return this === <any>obj;
  }
}
