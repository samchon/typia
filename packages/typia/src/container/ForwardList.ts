//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { sort as sort_func } from "../algorithm/sorting";
import { IPointer } from "../functional/IPointer";
import { equal_to, less } from "../functional/comparators";
import { IListAlgorithm } from "../internal/container/linear/IListAlgorithm";
import { IClear } from "../internal/container/partial/IClear";
import { IDeque } from "../internal/container/partial/IDeque";
import { IEmpty } from "../internal/container/partial/IEmpty";
import { IFront } from "../internal/container/partial/IFront";
import { ISize } from "../internal/container/partial/ISize";
import { ErrorGenerator } from "../internal/exception/ErrorGenerator";
import { BinaryPredicator } from "../internal/functional/BinaryPredicator";
import { Comparator } from "../internal/functional/Comparator";
import { UnaryPredicator } from "../internal/functional/UnaryPredicator";
import { ForOfAdaptor } from "../internal/iterator/disposable/ForOfAdaptor";
import { Repeater } from "../internal/iterator/disposable/Repeater";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { advance, distance } from "../iterator/global";
import { IForwardContainer } from "../ranges/container/IForwardContainer";
import { Vector } from "./Vector";

/**
 * Singly Linked List.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class ForwardList<T>
  implements
    IForwardContainer<ForwardList.Iterator<T>>,
    IClear,
    IEmpty,
    ISize,
    IDeque<T>,
    IFront<T>,
    Iterable<T>,
    IListAlgorithm<T, ForwardList<T>>
{
  private ptr_: IPointer<ForwardList<T>>;
  private size_: number;

  private before_begin_: ForwardList.Iterator<T>;
  private end_: ForwardList.Iterator<T>;

  /* ===============================================================
        CONSTRUCTORS & SEMI-CONSTRUCTORS
            - CONSTRUCTORS
            - ASSIGN & CLEAR
    ==================================================================
        CONSTURCTORS
    --------------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor();

  /**
   * Initializer Constructor.
   *
   * @param items Items to assign.
   */
  public constructor(items: T[]);

  /**
   * Copy Constructor
   *
   * @param obj Object to copy.
   */
  public constructor(obj: ForwardList<T>);

  /**
   * Fill Constructor.
   *
   * @param size Initial size.
   * @param val Value to fill.
   */
  public constructor(n: number, val: T);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iterator of the last position.
   */
  public constructor(
    first: Readonly<IForwardIterator<T>>,
    last: Readonly<IForwardIterator<T>>,
  );

  public constructor(...args: any[]) {
    this.ptr_ = { value: this };

    this.end_ = ForwardList.Iterator.create(this.ptr_, null!);
    this.before_begin_ = ForwardList.Iterator.create(this.ptr_, this.end_);
    this.size_ = 0;

    if (args.length === 1 && args[0] instanceof Array) {
      const array: Array<T> = args[0];
      let it = this.before_begin();

      for (const val of array) it = this.insert_after(it, val);
    } else if (args.length === 1 && args[0] instanceof ForwardList) {
      this.assign(args[0].begin(), args[0].end());
    } else if (args.length === 2) this.assign(args[0], args[1]);
  }

  /* ---------------------------------------------------------------
        ASSIGN & CLEAR
    --------------------------------------------------------------- */
  /**
   * Fill Assigner.
   *
   * @param n Initial size.
   * @param val Value to fill.
   */
  public assign(n: number, val: T): void;

  /**
   * Range Assigner.
   *
   * @param first Input iteartor of the first position.
   * @param last Input iterator of the last position.
   */
  public assign<
    T,
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void;

  public assign(first: any, last: any): void {
    this.clear();
    this.insert_after(this.before_begin_, first, last);
  }

  /**
   * @inheritDoc
   */
  public clear(): void {
    ForwardList.Iterator._Set_next(this.before_begin_, this.end_);
    this.size_ = 0;
  }

  /* ===============================================================
        ACCESSORS
    =============================================================== */
  /**
   * @inheritDoc
   */
  public size(): number {
    return this.size_;
  }

  /**
   * @inheritDoc
   */
  public empty(): boolean {
    return this.size_ === 0;
  }

  /**
   * @inheritDoc
   */
  public front(): T;

  /**
   * @inheritDoc
   */
  public front(val: T): void;

  public front(val?: T): T | void {
    const it: ForwardList.Iterator<T> = this.begin();

    if (arguments.length === 0) return it.value;
    else it.value = val!;
  }

  /**
   * Iterator to before beginning.
   *
   * @return Iterator to the before beginning.
   */
  public before_begin(): ForwardList.Iterator<T> {
    return this.before_begin_;
  }

  /**
   * @inheritDoc
   */
  public begin(): ForwardList.Iterator<T> {
    return this.before_begin_.next();
  }

  /**
   * @inheritDoc
   */
  public end(): ForwardList.Iterator<T> {
    return this.end_;
  }

  /**
   * @inheritDoc
   */
  public [Symbol.iterator](): IterableIterator<T> {
    return new ForOfAdaptor(this.begin(), this.end());
  }

  /* ===============================================================
        ELEMENTS I/O
            - INSERT
            - ERASE
    ==================================================================
        INSERT
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public push_front(val: T): void {
    this.insert_after(this.before_begin_, val);
  }

  /**
   * Insert an element.
   *
   * @param pos Position to insert after.
   * @param val Value to insert.
   * @return An iterator to the newly inserted element.
   */
  public insert_after(
    pos: ForwardList.Iterator<T>,
    val: T,
  ): ForwardList.Iterator<T>;

  /**
   * Inserted repeated elements.
   *
   * @param pos Position to insert after.
   * @param n Number of elements to insert.
   * @param val Value to insert repeatedly.
   * @return An iterator to the last of the newly inserted elements.
   */
  public insert_after(
    pos: ForwardList.Iterator<T>,
    n: number,
    val: T,
  ): ForwardList.Iterator<T>;

  /**
   * Insert range elements.
   *
   * @param pos Position to insert after.
   * @param first Input iterator of the first position.
   * @param last Input iteartor of the last position.
   * @return An iterator to the last of the newly inserted elements.
   */
  public insert_after<
    T,
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(
    pos: ForwardList.Iterator<T>,
    first: InputIterator,
    last: InputIterator,
  ): ForwardList.Iterator<T>;

  public insert_after(
    pos: ForwardList.Iterator<T>,
    ...args: any[]
  ): ForwardList.Iterator<T> {
    let ret: ForwardList.Iterator<T>;

    // BRANCHES
    if (args.length === 1) ret = this._Insert_by_repeating_val(pos, 1, args[0]);
    else if (typeof args[0] === "number")
      ret = this._Insert_by_repeating_val(pos, args[0], args[1]);
    else ret = this._Insert_by_range(pos, args[0], args[1]);

    // RETURNS
    return ret;
  }

  private _Insert_by_repeating_val(
    pos: ForwardList.Iterator<T>,
    n: number,
    val: T,
  ): ForwardList.Iterator<T> {
    const first: Repeater<T> = new Repeater(0, val);
    const last: Repeater<T> = new Repeater(n);

    return this._Insert_by_range(pos, first, last);
  }

  private _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(
    pos: ForwardList.Iterator<T>,
    first: InputIterator,
    last: InputIterator,
  ): ForwardList.Iterator<T> {
    const nodes: ForwardList.Iterator<T>[] = [];
    let count: number = 0;

    for (; !first.equals(last); first = first.next()) {
      const node = ForwardList.Iterator.create(this.ptr_, null!, first.value);
      nodes.push(node);

      ++count;
    }
    if (count === 0) return pos;

    for (let i: number = 0; i < count - 1; ++i)
      ForwardList.Iterator._Set_next(nodes[i], nodes[i + 1]);
    ForwardList.Iterator._Set_next(nodes[nodes.length - 1], pos.next());
    ForwardList.Iterator._Set_next(pos, nodes[0]);

    this.size_ += count;
    return nodes[nodes.length - 1];
  }

  /* ---------------------------------------------------------------
        ERASE
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public pop_front(): void {
    this.erase_after(this.before_begin());
  }

  /**
   * Erase an element.
   *
   * @param it Position to erase after.
   * @return Iterator to the erased element.
   */
  public erase_after(it: ForwardList.Iterator<T>): ForwardList.Iterator<T>;

  /**
   * Erase elements.
   *
   * @param first Range of the first position to erase after.
   * @param last Rangee of the last position to erase.
   * @return Iterator to the last removed element.
   */
  public erase_after(
    first: ForwardList.Iterator<T>,
    last: ForwardList.Iterator<T>,
  ): ForwardList.Iterator<T>;

  public erase_after(
    first: ForwardList.Iterator<T>,
    last: ForwardList.Iterator<T> = advance(first, 2),
  ): ForwardList.Iterator<T> {
    // SHRINK SIZE
    this.size_ -= Math.max(0, distance(first, last) - 1);

    // RE-CONNECT
    ForwardList.Iterator._Set_next(first, last);
    return last;
  }

  /* ===============================================================
        ALGORITHMS
            - UNIQUE & REMOVE(_IF)
            - MERGE & SPLICE
            - SORT
    ==================================================================
        UNIQUE & REMOVE(_IF)
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public unique(binary_pred: BinaryPredicator<T> = equal_to): void {
    for (let it = this.begin().next(); !it.equals(this.end()); it = it.next()) {
      const next_it = it.next();
      if (next_it.equals(this.end())) break;

      if (binary_pred(it.value, next_it.value)) this.erase_after(it);
    }
  }

  /**
   * @inheritDoc
   */
  public remove(val: T): void {
    return this.remove_if((elem) => equal_to(elem, val));
  }

  /**
   * @inheritDoc
   */
  public remove_if(pred: UnaryPredicator<T>): void {
    let count: number = 0;

    for (
      let it = this.before_begin();
      !it.next().equals(this.end());
      it = it.next()
    )
      if (pred(it.next().value) === true) {
        ForwardList.Iterator._Set_next(it, it.next().next());
        ++count;
      }
    this.size_ -= count;
  }

  /* ---------------------------------------------------------------
        MERGE & SPLICE
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public merge(from: ForwardList<T>, comp: Comparator<T> = less): void {
    if (this === <ForwardList<T>>from) return;

    let it = this.before_begin();
    while (from.empty() === false) {
      const value = from.begin().value;
      while (!it.next().equals(this.end()) && comp(it.next().value, value))
        it = it.next();

      this.splice_after(it, from, from.before_begin());
    }
  }

  /**
   * Transfer elements.
   *
   * @param pos Position to insert after.
   * @param from Target container to transfer.
   */
  public splice_after(pos: ForwardList.Iterator<T>, from: ForwardList<T>): void;

  /**
   * Transfer a single element.
   *
   * @param pos Position to insert after.
   * @param from Target container to transfer.
   * @param before Previous position of the single element to transfer.
   */
  public splice_after(
    pos: ForwardList.Iterator<T>,
    from: ForwardList<T>,
    before: ForwardList.Iterator<T>,
  ): void;

  /**
   * Transfer range elements.
   *
   * @param pos Position to insert after.
   * @param from Target container to transfer.
   * @param first Range of previous of the first position to transfer.
   * @param last Rangee of the last position to transfer.
   */
  public splice_after(
    pos: ForwardList.Iterator<T>,
    from: ForwardList<T>,
    first_before: ForwardList.Iterator<T>,
    last: ForwardList.Iterator<T>,
  ): void;

  public splice_after(
    pos: ForwardList.Iterator<T>,
    from: ForwardList<T>,
    first_before: ForwardList.Iterator<T> = from.before_begin(),
    last: ForwardList.Iterator<T> = first_before.next().next(),
  ): void {
    // DEFAULT PARAMETERS
    if (last === null) last = from.end();

    // INSERT & ERASE
    this.insert_after(pos, first_before.next(), last!);
    from.erase_after(first_before, last!);
  }

  /* ---------------------------------------------------------------
        SORT
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public sort(comp: Comparator<T> = less): void {
    const vec = new Vector<T>(this.begin(), this.end());
    sort_func(vec.begin(), vec.end(), comp);

    this.assign(vec.begin(), vec.end());
  }

  /**
   * @inheritDoc
   */
  public reverse(): void {
    const vec = new Vector<T>(this.begin(), this.end());
    this.assign(vec.rbegin(), vec.rend());
  }

  /* ---------------------------------------------------------------
        UTILITIES
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public swap(obj: ForwardList<T>): void {
    // SIZE AND NODES
    [this.size_, obj.size_] = [obj.size_, this.size_];
    [this.before_begin_, obj.before_begin_] = [
      obj.before_begin_,
      this.before_begin_,
    ];
    [this.end_, obj.end_] = [obj.end_, this.end_];

    // POINTER OF THE SOURCE
    [this.ptr_, obj.ptr_] = [obj.ptr_, this.ptr_];
    [this.ptr_.value, obj.ptr_.value] = [obj.ptr_.value, this.ptr_.value];
  }

  /**
   * Native function for `JSON.stringify()`.
   *
   * @return An array containing children elements.
   */
  public toJSON(): Array<T> {
    const ret: T[] = [];
    for (const elem of this) ret.push(elem);

    return ret;
  }
}

/**
 *
 */
export namespace ForwardList {
  /**
   * Iterator of {@link ForwardList}
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export class Iterator<T> implements IForwardIterator<T, Iterator<T>> {
    private source_ptr_: IPointer<ForwardList<T>>;
    private next_: Iterator<T>;
    private value_: T | undefined;

    /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
    private constructor(
      source: IPointer<ForwardList<T>>,
      next: Iterator<T>,
      value?: T,
    ) {
      this.source_ptr_ = source;
      this.next_ = next;

      this.value_ = value;
    }

    /**
     * @internal
     */
    public static create<T>(
      source: IPointer<ForwardList<T>>,
      next: Iterator<T>,
      value?: T,
    ) {
      return new Iterator(source, next, value);
    }

    /* ---------------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------------- */
    /**
     * Get source container.
     *
     * @return The source container.
     */
    public source(): ForwardList<T> {
      return this.source_ptr_.value;
    }

    /**
     * @inheritDoc
     */
    public get value(): T {
      this._Try_value();
      return this.value_!;
    }

    /**
     * @inheritDoc
     */
    public set value(val: T) {
      this._Try_value();
      this.value_ = val;
    }

    private _Try_value(): void {
      if (this.value_ === undefined) {
        const source: ForwardList<T> = this.source();

        if (this.equals(source.end()) === true)
          throw ErrorGenerator.iterator_end_value(source);
        else if (this.equals(source.before_begin()) === true)
          throw ErrorGenerator.iterator_end_value(source, "before_begin");
      }
    }

    /* ---------------------------------------------------------
            MOVERS
        --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public next(): Iterator<T> {
      return this.next_;
    }

    /**
     * @inheritDoc
     */
    public equals(obj: Iterator<T>): boolean {
      return this === obj;
    }

    /**
     * @internal
     */
    public static _Set_next<T>(it: Iterator<T>, next: Iterator<T>): void {
      it.next_ = next;
    }
  }
}
