//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IDequeContainer } from "../base/container/IDequeContainer";
import { IPointer } from "../functional/IPointer";
import { equal_to, less } from "../functional/comparators";
import { IListAlgorithm } from "../internal/container/linear/IListAlgorithm";
import { ListContainer } from "../internal/container/linear/ListContainer";
import { BinaryPredicator } from "../internal/functional/BinaryPredicator";
import { Comparator } from "../internal/functional/Comparator";
import { UnaryPredicator } from "../internal/functional/UnaryPredicator";
import { ListIterator } from "../internal/iterator/ListIterator";
import { ReverseIterator as ReverseIteratorBase } from "../internal/iterator/ReverseIterator";
import { IForwardIterator } from "../iterator/IForwardIterator";

/**
 * Doubly Linked List.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class List<T>
  extends ListContainer<T, List<T>, List.Iterator<T>, List.ReverseIterator<T>>
  implements
    IDequeContainer<T, List<T>, List.Iterator<T>, List.ReverseIterator<T>>,
    IListAlgorithm<T, List<T>>
{
  private ptr_: IPointer<List<T>>;

  /* ---------------------------------------------------------
        CONSTURCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor();

  /**
   * Initializer Constructor.
   *
   * @param items Items to assign.
   */
  public constructor(items: Array<T>);

  /**
   * Copy Constructor
   *
   * @param obj Object to copy.
   */
  public constructor(obj: List<T>);

  /**
   * Fill Constructor.
   *
   * @param size Initial size.
   * @param val Value to fill.
   */
  public constructor(size: number, val: T);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iteartor of the last position.
   */
  public constructor(
    first: Readonly<IForwardIterator<T>>,
    last: Readonly<IForwardIterator<T>>,
  );

  public constructor(...args: any[]) {
    //----
    // DEFAULT CONFIGURATIONS
    //----
    // INHERITS
    super();

    // DECLARE SOURCE POINTER
    this.ptr_ = { value: this };
    List.Iterator._Set_source_ptr(this.end_, this.ptr_);

    //----
    // BRANCHES
    //----
    if (args.length === 0) {
      // DEFAULT CONSTRUCTOR
    } else if (args.length === 1 && args[0] instanceof Array) {
      // INITIALIZER CONSTRUCTOR
      const array: Array<T> = args[0];
      this.push(...array);
    } else if (args.length === 1 && args[0] instanceof List) {
      // COPY CONSTRUCTOR
      const container: List<T> = args[0];
      this.assign(container.begin(), container.end());
    } else if (args.length === 2) {
      // ASSIGN CONTRUCTOR
      this.assign(args[0], args[1]);
    }
  }

  protected _Create_iterator(
    prev: List.Iterator<T>,
    next: List.Iterator<T>,
    val: T,
  ): List.Iterator<T> {
    return List.Iterator.create(
      this.ptr_,
      prev as List.Iterator<T>,
      next as List.Iterator<T>,
      val,
    );
  }

  /* ---------------------------------------------------------------
        DEQUE ACCESSORS
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public front(): T;

  /**
   * @inheritDoc
   */
  public front(val: T): void;

  public front(val?: T): T | void {
    if (arguments.length === 0) return this.begin_.value;
    else this.begin_.value = val!;
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
    const it = this.end().prev();
    if (arguments.length === 0) return it.value;
    else it.value = val!;
  }

  /* ===============================================================
        ALGORITHMS
            - UNIQUE & REMOVE(_IF)
            - MERGE & SPLICE
            - SORT & SWAP
    ==================================================================
        UNIQUE & REMOVE(_IF)
    --------------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public unique(binary_pred: BinaryPredicator<T> = equal_to): void {
    let it = this.begin().next();

    while (!it.equals(this.end())) {
      if (binary_pred(it.value, it.prev().value) === true) it = this.erase(it);
      else it = it.next();
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
    let it = this.begin();

    while (!it.equals(this.end())) {
      if (pred(it.value) === true) it = this.erase(it);
      else it = it.next();
    }
  }

  /* ---------------------------------------------------------
        MERGE & SPLICE
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public merge(source: List<T>, comp: Comparator<T> = less): void {
    if (this === <List<T>>source) return;

    let it = this.begin();
    while (source.empty() === false) {
      const first = source.begin();
      while (!it.equals(this.end()) && comp(it.value, first.value) === true)
        it = it.next();

      this.splice(it, source, first);
    }
  }

  /**
   * Transfer elements.
   *
   * @param pos Position to insert.
   * @param from Target container to transfer.
   */
  public splice(pos: List.Iterator<T>, from: List<T>): void;

  /**
   * Transfer a single element.
   *
   * @param pos Position to insert.
   * @param from Target container to transfer.
   * @param it Position of the single element to transfer.
   */
  public splice(
    pos: List.Iterator<T>,
    from: List<T>,
    it: List.Iterator<T>,
  ): void;

  /**
   * Transfer range elements.
   *
   * @param pos Position to insert.
   * @param from Target container to transfer.
   * @param first Range of the first position to transfer.
   * @param last Rangee of the last position to transfer.
   */
  public splice(
    pos: List.Iterator<T>,
    from: List<T>,
    first: List.Iterator<T>,
    last: List.Iterator<T>,
  ): void;

  public splice(
    pos: List.Iterator<T>,
    obj: List<T>,
    first?: List.Iterator<T>,
    last?: List.Iterator<T>,
  ): void {
    if (first === undefined) {
      first = obj.begin();
      last = obj.end();
    } else if (last === undefined) last = first.next();

    this.insert(pos, first, last);
    obj.erase(first, last);
  }

  /* ---------------------------------------------------------
        SORT & SWAP
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public sort(comp: Comparator<T> = less): void {
    this._Quick_sort(this.begin(), this.end().prev(), comp);
  }

  private _Quick_sort(
    first: List.Iterator<T>,
    last: List.Iterator<T>,
    comp: Comparator<T>,
  ): void {
    if (
      !first.equals(last) &&
      !last.equals(this.end()) &&
      !first.equals(last.next())
    ) {
      const temp: List.Iterator<T> = this._Quick_sort_partition(
        first,
        last,
        comp,
      );

      this._Quick_sort(first, temp.prev(), comp);
      this._Quick_sort(temp.next(), last, comp);
    }
  }

  private _Quick_sort_partition(
    first: List.Iterator<T>,
    last: List.Iterator<T>,
    comp: Comparator<T>,
  ): List.Iterator<T> {
    const standard: T = last.value; // TO BE COMPARED
    let prev: List.Iterator<T> = first.prev(); // TO BE SMALLEST

    let it: List.Iterator<T> = first;
    for (; !it.equals(last); it = it.next())
      if (comp(it.value, standard)) {
        prev = prev.equals(this.end()) ? first : prev.next();
        [prev.value, it.value] = [it.value, prev.value];
      }

    prev = prev.equals(this.end()) ? first : prev.next();
    [prev.value, it.value] = [it.value, prev.value];

    return prev;
  }

  /**
   * @inheritDoc
   */
  public reverse(): void {
    const begin: List.Iterator<T> = this.end_.prev();
    const prev_of_end: List.Iterator<T> = this.begin();

    for (let it = this.begin(); !it.equals(this.end()); ) {
      const prev = it.prev();
      const next = it.next();

      List.Iterator._Set_prev(it, next);
      List.Iterator._Set_next(it, prev);

      it = next;
    }

    // ADJUST THE BEGIN AND END
    this.begin_ = begin; // THE NEW BEGIN
    List.Iterator._Set_prev(this.end_, prev_of_end);
    List.Iterator._Set_next(this.end_, begin);
  }

  /**
   * @inheritDoc
   */
  public swap(obj: List<T>): void {
    // CHANGE CONTENTS
    super.swap(obj);

    // CHANGE ITERATORS' SOURCES
    [this.ptr_, obj.ptr_] = [obj.ptr_, this.ptr_];
    [this.ptr_.value, obj.ptr_.value] = [obj.ptr_.value, this.ptr_.value];
  }
}

/**
 *
 */
export namespace List {
  /**
   * Iterator of {@link List}
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export class Iterator<T> extends ListIterator<
    T,
    List<T>,
    Iterator<T>,
    ReverseIterator<T>,
    T
  > {
    private source_ptr_: IPointer<List<T>>;

    /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
    private constructor(
      sourcePtr: IPointer<List<T>>,
      prev: Iterator<T>,
      next: Iterator<T>,
      value: T,
    ) {
      super(prev, next, value);
      this.source_ptr_ = sourcePtr;
    }

    /**
     * @internal
     */
    public static create<T>(
      sourcePtr: IPointer<List<T>>,
      prev: Iterator<T>,
      next: Iterator<T>,
      value: T,
    ) {
      return new Iterator(sourcePtr, prev, next, value);
    }

    /**
     * @inheritDoc
     */
    public reverse(): ReverseIterator<T> {
      return new ReverseIterator(this);
    }

    /**
     * @internal
     */
    public static _Set_source_ptr<T>(
      it: Iterator<T>,
      ptr: IPointer<List<T>>,
    ): void {
      it.source_ptr_ = ptr;
    }

    /* ---------------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public source(): List<T> {
      return this.source_ptr_.value;
    }

    /**
     * @inheritDoc
     */
    public get value(): T {
      this._Try_value();
      return this.value_;
    }

    /**
     * @inheritDoc
     */
    public set value(val: T) {
      this._Try_value();
      this.value_ = val;
    }

    /* ---------------------------------------------------------------
            COMPARISON
        --------------------------------------------------------------- */
    public equals(obj: Iterator<T>): boolean {
      return this === obj;
    }
  }

  /**
   * Reverse iterator of {@link List}
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export class ReverseIterator<T> extends ReverseIteratorBase<
    T,
    List<T>,
    Iterator<T>,
    ReverseIterator<T>,
    T
  > {
    /* ---------------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------------- */
    protected _Create_neighbor(base: Iterator<T>): ReverseIterator<T> {
      return new ReverseIterator<T>(base);
    }

    /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public get value(): T {
      return this.base_.value;
    }

    /**
     * @inheritDoc
     */
    public set value(val: T) {
      this.base_.value = val;
    }
  }
}
