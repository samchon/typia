//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { Container } from "../../../base/container/Container";
import { IContainer } from "../../../base/container/IContainer";
import { IForwardIterator } from "../../../iterator/IForwardIterator";
import { advance } from "../../../iterator/global";
import { ErrorGenerator } from "../../exception/ErrorGenerator";
import { Temporary } from "../../functional/Temporary";
import { ListIterator } from "../../iterator/ListIterator";
import { ReverseIterator } from "../../iterator/ReverseIterator";
import { NativeArrayIterator } from "../../iterator/disposable/NativeArrayIterator";
import { Repeater } from "../../iterator/disposable/Repeater";
import { ILinearContainerBase } from "./ILinearContainerBase";

/**
 * Basic List Container.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class ListContainer<
    T,
    SourceT extends IContainer<T, SourceT, IteratorT, ReverseIteratorT, T>,
    IteratorT extends ListIterator<T, SourceT, IteratorT, ReverseIteratorT, T>,
    ReverseIteratorT extends ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      T
    >,
  >
  extends Container<T, SourceT, IteratorT, ReverseIteratorT, T>
  implements ILinearContainerBase<T, SourceT, IteratorT, ReverseIteratorT, T>
{
  private size_!: number;

  protected begin_!: IteratorT;
  protected end_: IteratorT;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  protected constructor() {
    super();

    // INIT MEMBERS
    this.end_ = this._Create_iterator(null!, null!);
    this.clear();
  }

  protected abstract _Create_iterator(
    prev: IteratorT,
    next: IteratorT,
    val?: T,
  ): IteratorT;

  /**
   * @inheritDoc
   */
  public assign(n: number, val: T): void;

  /**
   * @inheritDoc
   */
  public assign<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void;

  public assign(par1: any, par2: any): void {
    this.clear();
    this.insert(this.end(), par1, par2);
  }

  /**
   * @inheritDoc
   */
  public clear(): void {
    // DISCONNECT NODES
    ListIterator._Set_prev(this.end_, this.end_);
    ListIterator._Set_next(this.end_, this.end_);

    // RE-SIZE -> 0
    this.begin_ = this.end_;
    this.size_ = 0;
  }

  /**
   * @inheritDoc
   */
  public resize(n: number): void {
    const expansion: number = n - this.size();
    if (expansion > 0) this.insert(this.end(), expansion, undefined!);
    else if (expansion < 0)
      this.erase(advance(<Temporary>this.end(), -expansion), this.end());
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public begin(): IteratorT {
    return this.begin_;
  }

  /**
   * @inheritDoc
   */
  public end(): IteratorT {
    return this.end_;
  }

  /**
   * @inheritDoc
   */
  public size(): number {
    return this.size_;
  }

  /* =========================================================
        ELEMENTS I/O
            - PUSH & POP
            - INSERT
            - ERASE
            - POST-PROCESS
    ============================================================
        PUSH & POP
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public push_front(val: T): void {
    this.insert(this.begin_, val);
  }

  /**
   * @inheritDoc
   */
  public push_back(val: T): void {
    this.insert(this.end_, val);
  }

  /**
   * @inheritDoc
   */
  public pop_front(): void {
    if (this.empty() === true)
      throw ErrorGenerator.empty(
        this.end_.source().constructor.name,
        "pop_front",
      );

    this.erase(this.begin_);
  }

  /**
   * @inheritDoc
   */
  public pop_back(): void {
    if (this.empty() === true)
      throw ErrorGenerator.empty(
        this.end_.source().constructor.name,
        "pop_back",
      );

    this.erase(this.end_.prev());
  }

  /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public push(...items: T[]): number {
    if (items.length === 0) return this.size();

    // INSERT BY RANGE
    const first: NativeArrayIterator<T> = new NativeArrayIterator(items, 0);
    const last: NativeArrayIterator<T> = new NativeArrayIterator(
      items,
      items.length,
    );

    this._Insert_by_range(this.end(), first, last);

    // RETURN SIZE
    return this.size();
  }

  /**
   * @inheritDoc
   */
  public insert(position: IteratorT, val: T): IteratorT;
  /**
   * @inheritDoc
   */
  public insert(position: IteratorT, size: number, val: T): IteratorT;
  /**
   * @inheritDoc
   */
  public insert<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(position: IteratorT, begin: InputIterator, end: InputIterator): IteratorT;

  public insert(pos: IteratorT, ...args: any[]): IteratorT {
    // VALIDATION
    if (pos.source() !== this.end_.source())
      throw ErrorGenerator.not_my_iterator(this.end_.source(), "insert");
    else if (pos.erased_ === true)
      throw ErrorGenerator.erased_iterator(this.end_.source(), "insert");

    // BRANCHES
    if (args.length === 1)
      return this._Insert_by_repeating_val(pos, 1, args[0]);
    else if (args.length === 2 && typeof args[0] === "number")
      return this._Insert_by_repeating_val(pos, args[0], args[1]);
    else return this._Insert_by_range(pos, args[0], args[1]);
  }

  private _Insert_by_repeating_val(
    position: IteratorT,
    n: number,
    val: T,
  ): IteratorT {
    const first: Repeater<T> = new Repeater(0, val);
    const last: Repeater<T> = new Repeater(n);

    return this._Insert_by_range(position, first, last);
  }

  protected _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(position: IteratorT, begin: InputIterator, end: InputIterator): IteratorT {
    let prev: IteratorT = <IteratorT>position.prev();
    let first: IteratorT = null!;

    let size: number = 0;

    for (let it = begin; it.equals(end) === false; it = it.next()) {
      // CONSTRUCT ITEM, THE NEW ELEMENT
      const item: IteratorT = this._Create_iterator(prev, null!, it.value);
      if (size === 0) first = item;

      // PLACE ITEM ON THE NEXT OF "PREV"
      ListIterator._Set_next(prev, item);

      // SHIFT CURRENT ITEM TO PREVIOUS
      prev = item;
      ++size;
    }

    // WILL FIRST BE THE BEGIN?
    if (position.equals(this.begin()) === true) this.begin_ = first;

    // CONNECT BETWEEN LAST AND POSITION
    ListIterator._Set_next(prev, position);
    ListIterator._Set_prev(position, prev);

    this.size_ += size;
    return first;
  }

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public erase(position: IteratorT): IteratorT;
  /**
   * @inheritDoc
   */
  public erase(first: IteratorT, last: IteratorT): IteratorT;
  public erase(first: IteratorT, last: IteratorT = first.next()): IteratorT {
    return this._Erase_by_range(first, last);
  }

  protected _Erase_by_range(first: IteratorT, last: IteratorT): IteratorT {
    // VALIDATION
    if (first.source() !== this.end_.source())
      throw ErrorGenerator.not_my_iterator(this.end_.source(), "insert");
    else if (first.erased_ === true)
      throw ErrorGenerator.erased_iterator(this.end_.source(), "insert");
    else if (first.equals(this.end_)) return this.end_;

    // FIND PREV AND NEXT
    const prev: IteratorT = first.prev();

    // SHRINK
    ListIterator._Set_next(prev, last);
    ListIterator._Set_prev(last, prev);

    for (let it = first; !it.equals(last); it = it.next()) {
      it.erased_ = true;
      --this.size_;
    }
    if (first.equals(this.begin_)) this.begin_ = last;

    return last;
  }

  /* ---------------------------------------------------------
        SWAP
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public swap(obj: SourceT): void {
    [this.begin_, (obj as any).begin_] = [(obj as any).begin_, this.begin_];
    [this.end_, (obj as any).end_] = [(obj as any).end_, this.end_];
    [this.size_, (obj as any).size_] = [(obj as any).size_, this.size_];
  }
}
