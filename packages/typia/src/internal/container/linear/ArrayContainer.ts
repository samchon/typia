//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { Container } from "../../../base/container/Container";
import { IContainer } from "../../../base/container/IContainer";
import { RangeError } from "../../../exception/RangeError";
import { IForwardIterator } from "../../../iterator/IForwardIterator";
import { ErrorGenerator } from "../../exception/ErrorGenerator";
import { ArrayIteratorBase } from "../../iterator/ArrayIteratorBase";
import { ArrayReverseIteratorBase } from "../../iterator/ArrayReverseIteratorBase";
import { Repeater } from "../../iterator/disposable/Repeater";
import { ILinearContainerBase } from "./ILinearContainerBase";

/**
 * Base array container.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class ArrayContainer<
    T extends ElemT,
    SourceT extends IContainer<T, SourceT, IteratorT, ReverseT, ElemT>,
    ArrayT extends ArrayContainer<
      T,
      SourceT,
      ArrayT,
      IteratorT,
      ReverseT,
      ElemT
    >,
    IteratorT extends ArrayIteratorBase<
      T,
      SourceT,
      ArrayT,
      IteratorT,
      ReverseT,
      ElemT
    >,
    ReverseT extends ArrayReverseIteratorBase<
      T,
      SourceT,
      ArrayT,
      IteratorT,
      ReverseT,
      ElemT
    >,
    ElemT,
  >
  extends Container<T, SourceT, IteratorT, ReverseT, ElemT>
  implements ILinearContainerBase<T, SourceT, IteratorT, ReverseT, ElemT>
{
  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract resize(n: number): void;

  protected abstract source(): SourceT;

  /* =========================================================
        ACCESSORS
            - ITERATORS
            - INDEXES
    ============================================================
        ITERATORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public begin(): IteratorT {
    return this.nth(0);
  }

  /**
   * @inheritDoc
   */
  public end(): IteratorT {
    return this.nth(this.size());
  }

  public abstract nth(index: number): IteratorT;

  /* ---------------------------------------------------------
        INDEXES
    --------------------------------------------------------- */
  /**
   * Get element at specific position.
   *
   * @param index Specific position.
   * @return The element at the *index*.
   */
  public at(index: number): T {
    return this._At(index);
  }
  protected abstract _At(index: number): T;

  /**
   * Change element at specific position.
   *
   * @param index Specific position.
   * @param val The new value to change.
   */
  public set(index: number, val: T): void {
    if (index < 0)
      throw ErrorGenerator.negative_index(this.source(), "at", index);
    else if (index >= this.size())
      throw ErrorGenerator.excessive_index(
        this.source(),
        "at",
        index,
        this.size(),
      );

    this._Set(index, val);
  }
  protected abstract _Set(index: number, val: T): void;

  /**
   * @inheritDoc
   */
  public front(): T;

  /**
   * @inheritDoc
   */
  public front(val: T): void;

  public front(val?: T): T | void {
    if (arguments.length === 0) return this.at(0);
    else this.set(0, val!);
  }

  /**
   * @inheritDoc
   */
  public back(): T;

  /**
   * @inheritDoc
   */
  public back(val: T): void;

  public back(val?: T): T | void {
    const index: number = this.size() - 1;
    if (arguments.length === 0) return this.at(index);
    else this.set(index, val!);
  }

  /* =========================================================
        ELEMENTS I/O
            - INSERT
            - ERASE
            - SWAP
    ============================================================
        INSERT
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract push_back(val: T): void;

  /**
   * @inheritDoc
   */
  public insert(pos: IteratorT, val: T): IteratorT;

  /**
   * @inheritDoc
   */
  public insert(pos: IteratorT, n: number, val: T): IteratorT;

  /**
   * @inheritDoc
   */
  public insert<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(pos: IteratorT, first: InputIterator, last: InputIterator): IteratorT;

  public insert(pos: IteratorT, ...args: any[]): IteratorT {
    // VALIDATION
    if (pos._Get_array() !== <any>this)
      throw ErrorGenerator.not_my_iterator(this.source(), "insert");
    else if (pos.index() < 0)
      throw ErrorGenerator.negative_iterator(
        this.source(),
        "insert",
        pos.index(),
      );
    else if (pos.index() > this.size()) pos = this.end();

    // BRANCHES
    if (args.length === 1)
      return this._Insert_by_repeating_val(pos, 1, args[0]);
    else if (args.length === 2 && typeof args[0] === "number")
      return this._Insert_by_repeating_val(pos, args[0], args[1]);
    else return this._Insert_by_range(pos, args[0], args[1]);
  }

  protected _Insert_by_repeating_val(
    position: IteratorT,
    n: number,
    val: T,
  ): IteratorT {
    const first: Repeater<T> = new Repeater(0, val);
    const last: Repeater<T> = new Repeater(n);

    return this._Insert_by_range(position, first, last);
  }

  protected abstract _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(pos: IteratorT, first: InputIterator, last: InputIterator): IteratorT;

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public pop_back(): void {
    if (this.empty() === true)
      throw ErrorGenerator.empty(this.source(), "pop_back");

    this._Pop_back();
  }
  protected abstract _Pop_back(): void;

  /**
   * @inheritDoc
   */
  public erase(it: IteratorT): IteratorT;

  /**
   * @inheritDoc
   */
  public erase(first: IteratorT, last: IteratorT): IteratorT;

  public erase(first: IteratorT, last: IteratorT = first.next()): IteratorT {
    // VALIDATION
    if (first._Get_array() !== <any>this || last._Get_array() !== <any>this)
      throw ErrorGenerator.not_my_iterator(this.source(), "erase");
    else if (first.index() < 0)
      throw ErrorGenerator.negative_iterator(
        this.source(),
        "erase",
        first.index(),
      );
    else if (first.index() > last.index())
      throw new RangeError(
        `Error on ${ErrorGenerator.get_class_name(
          this.source(),
        )}.erase(): first iterator has greater index than last -> (first = ${first.index()}, last = ${last.index()}).`,
      );

    // ADJUSTMENT
    if (first.index() >= this.size()) return this.end();

    // ERASE ELEMENTS
    return this._Erase_by_range(first, last);
  }

  protected abstract _Erase_by_range(
    first: IteratorT,
    last: IteratorT,
  ): IteratorT;
}
