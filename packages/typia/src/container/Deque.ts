//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IArrayContainer } from "../base/container/IArrayContainer";
import { InvalidArgument } from "../exception/InvalidArgument";
import { ArrayContainer } from "../internal/container/linear/ArrayContainer";
import { ErrorGenerator } from "../internal/exception/ErrorGenerator";
import { Temporary } from "../internal/functional/Temporary";
import { ArrayIterator } from "../internal/iterator/ArrayIterator";
import { ArrayReverseIterator } from "../internal/iterator/ArrayReverseIterator";
import { NativeArrayIterator } from "../internal/iterator/disposable/NativeArrayIterator";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { distance } from "../iterator/global";
import { Pair } from "../utility/Pair";

/**
 * Double ended queue.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class Deque<T>
  extends ArrayContainer<
    T,
    Deque<T>,
    Deque<T>,
    Deque.Iterator<T>,
    Deque.ReverseIterator<T>,
    T
  >
  implements
    IArrayContainer<T, Deque<T>, Deque.Iterator<T>, Deque.ReverseIterator<T>>
{
  // A matrix containing elements.
  //
  // This {@link matrix_} is the biggest difference one between {@link Vector} and {@link Deque}.
  // Its number of rows follows {@link ROW_SIZE} and number of columns follows {@link get_col_size} which
  // returns divide of {@link capacity} and {@link ROW_SIZE}.
  //
  // By separating segment of elements (segment: row, elements in a segment: col), {@link Deque} takes
  // advantage of time complexity on inserting element in middle position. {@link Deque} is {@link ROW_SIZE}
  // times faster than {@link Vector} when inserting elements in middle position.
  //
  // However, separating segment of elements from matrix, {@link Deque} also takes disadvantage of
  // time complexity on accessing element. {@link Deque} is {@link ROW_SIZE} times slower than {@link Vector}
  // when accessing element.
  private matrix_!: Array<Array<T>>;

  // Number of elements stored in the {@link Deque}.
  private size_!: number;

  // Maximum capacity that current {@link matrix_} can store in.
  private capacity_!: number;

  /* =========================================================
        CONSTRUCTORS & SEMI-CONSTRUCTORS
            - CONSTRUCTORS
            - ASSIGN, RESERVE & CLEAR
            - RESERVE
    ============================================================
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
  public constructor(items: T[]);

  /**
   * Copy Constructor
   *
   * @param obj Object to copy.
   */
  public constructor(obj: Deque<T>);

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
   * @param last Input iterator of the last position.
   */
  public constructor(
    first: Readonly<IForwardIterator<T>>,
    last: Readonly<IForwardIterator<T>>,
  );

  public constructor(...args: any[]) {
    super();

    // CONSTRUCTORS BRANCH
    if (args.length === 0) {
      this.clear();
    }
    if (args.length === 1 && args[0] instanceof Array) {
      // INITIALIZER CONSTRUCTOR
      const array: Array<T> = args[0];
      const first = new NativeArrayIterator(array, 0);
      const last = new NativeArrayIterator(array, array.length);

      this.assign(first, last);
    } else if (args.length === 1 && args[0] instanceof Deque) {
      // COPY CONSTRUCTOR
      const container: Deque<T> = args[0];
      this.assign(container.begin(), container.end());
    } else if (args.length === 2) {
      // ASSIGN CONSTRUCTOR
      this.assign(args[0], args[1]);
    }
  }

  /* ---------------------------------------------------------
        ASSIGN, RESERVE & CLEAR
    --------------------------------------------------------- */
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

  public assign(first: any, second: any): void {
    // CLEAR PREVIOUS CONTENTS
    this.clear();

    // INSERT ITEMS
    this.insert(this.end(), first, second);
  }

  /**
   * @inheritDoc
   */
  public clear(): void {
    // CLEAR CONTENTS
    this.matrix_ = [[]];

    // RE-INDEX
    this.size_ = 0;
    this.capacity_ = Deque.MIN_CAPACITY;
  }

  /**
   * @inheritDoc
   */
  public resize(n: number): void {
    n = Deque._Emend(n, "resize");

    const expansion: number = n - this.size();
    if (expansion > 0) this.insert(this.end(), expansion, undefined!);
    else if (expansion < 0)
      this.erase(this.end().advance(-expansion), this.end());
  }

  /**
   * Reserve {@link capacity} enable to store *n* elements.
   *
   * @param n The capacity to reserve.
   */
  public reserve(n: number): void {
    this._Reserve(Deque._Emend(n, "reserve"));
  }

  private _Reserve(n: number): void {
    // NEW MEMBERS TO BE ASSSIGNED
    const matrix: T[][] = [[]];
    const length: number = this._Compute_col_size(n);

    //--------
    // RE-FILL
    //--------
    for (let r: number = 0; r < this.matrix_.length; ++r) {
      const row: T[] = this.matrix_[r];

      for (let c: number = 0; c < row.length; ++c) {
        let new_row: T[] = matrix[matrix.length - 1];
        if (matrix.length < Deque.ROW_SIZE && new_row.length === length) {
          new_row = [];
          matrix.push(new_row);
        }
        new_row.push(row[c]);
      }
    }

    // ASSIGN MEMBERS
    this.matrix_ = matrix;
    this.capacity_ = n;
  }

  /**
   * Shrink {@link capacity} to actual {@link size}.
   */
  public shrink_to_fit(): void {
    this._Reserve(this.size());
  }

  /**
   * @inheritDoc
   */
  public swap(obj: Deque<T>): void {
    this._Swap(obj);
  }

  private _Swap(obj: Deque<T>): void {
    // SWAP CONTENTS
    [this.matrix_, obj.matrix_] = [obj.matrix_, this.matrix_];
    [this.size_, obj.size_] = [obj.size_, this.size_];
    [this.capacity_, obj.capacity_] = [obj.capacity_, this.capacity_];
  }

  private static _Emend(n: number, method: string): number {
    n = Math.floor(n);
    if (n <= 0)
      throw new InvalidArgument(
        `Error on Deque.${method}(): n must be positive integer -> (n = ${n})`,
      );

    return n;
  }

  /* =========================================================
        ACCESSORS
            - BASIC ELEMENTS
            - INDEX ACCESSORS
    ============================================================
        BASIC ELEMENTS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public size(): number {
    return this.size_;
  }

  /**
   * The capacity to store elements.
   *
   * @return The capacity.
   */
  public capacity(): number {
    return this.capacity_;
  }

  /**
   * @inheritDoc
   */
  public nth(index: number): Deque.Iterator<T> {
    return new Deque.Iterator(this as Deque<T>, index);
  }

  /**
   * @inheritDoc
   */
  public [Symbol.iterator](): IterableIterator<T> {
    return new Deque.ForOfAdaptor<T>(this.matrix_);
  }

  protected source(): Deque<T> {
    return this;
  }

  /* ---------------------------------------------------------
        INDEX ACCESSORS
    --------------------------------------------------------- */
  protected _At(index: number): T {
    const indexPair: Pair<number, number> = this._Fetch_index(index);
    return this.matrix_[indexPair.first][indexPair.second];
  }

  protected _Set(index: number, val: T): void {
    const indexPair: Pair<number, number> = this._Fetch_index(index);
    this.matrix_[indexPair.first][indexPair.second] = val;
  }

  private _Fetch_index(index: number): Pair<number, number> {
    // Fetch row and column's index.
    let row: number;
    for (row = 0; row < this.matrix_.length; row++) {
      const array: Array<T> = this.matrix_[row];
      if (index < array.length) break;

      index -= array.length;
    }

    if (row === this.matrix_.length) row--;

    return new Pair(row, index);
  }

  private _Compute_col_size(capacity = this.capacity_): number {
    // Get column size; {@link capacity_ capacity} / {@link ROW_SIZE row}.
    return Math.floor(capacity / Deque.ROW_SIZE);
  }

  /* =========================================================
        ELEMENTS I/O
            - PUSH & POP
            - INSERT
            - ERASE
    ============================================================
        PUSH & POP
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
  public push_front(val: T): void {
    // ADD CAPACITY & ROW
    this._Try_expand_capacity(this.size_ + 1);
    this._Try_add_row_at_front();

    // INSERT VALUE
    this.matrix_[0].unshift(val);
    ++this.size_;
  }

  /**
   * @inheritDoc
   */
  public push_back(val: T): void {
    // ADD CAPACITY & ROW
    this._Try_expand_capacity(this.size_ + 1);
    this._Try_add_row_at_back();

    // INSERT VALUE
    this.matrix_[this.matrix_.length - 1].push(val);
    ++this.size_;
  }

  /**
   * @inheritDoc
   */
  public pop_front(): void {
    if (this.empty() === true)
      throw ErrorGenerator.empty(this.constructor, "pop_front");

    // EREASE FIRST ELEMENT
    this.matrix_[0].shift();
    if (this.matrix_[0].length === 0 && this.matrix_.length > 1)
      this.matrix_.shift();

    // SHRINK SIZE
    this.size_--;
  }

  protected _Pop_back(): void {
    // ERASE LAST ELEMENT
    const lastArray: Array<T> = this.matrix_[this.matrix_.length - 1];
    lastArray.pop();

    if (lastArray.length === 0 && this.matrix_.length > 1) this.matrix_.pop();

    // SHRINK SIZE
    this.size_--;
  }

  /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
  protected _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(
    pos: Deque.Iterator<T>,
    first: InputIterator,
    last: InputIterator,
  ): Deque.Iterator<T> {
    const size: number = this.size_ + distance(<Temporary>first, last);
    if (size === this.size_)
      // FIRST === LAST
      return pos;

    if (pos.equals(this.end()) === true) {
      // EXPAND CAPACITY IF REQUIRED
      this._Try_expand_capacity(size);

      // INSERT TO END
      this._Insert_to_end(first, last);

      // CHANGE POS TO RETURN
      pos = this.nth(this.size_);
    } else {
      // INSERT ITEMS IN THE MIDDLE
      if (size > this.capacity_) {
        // A TEMPORARY DEQUE
        const deque: Deque<T> = new Deque<T>();
        deque._Reserve(
          Math.max(size, Math.floor(this.capacity_ * Deque.MAGNIFIER)),
        );

        // INSERT ITEM SEQUENTIALLY
        deque._Insert_to_end(this.begin(), pos);
        deque._Insert_to_end(first, last);
        deque._Insert_to_end(pos, this.end());

        // AND SWAP THIS WITH THE TEMP
        this._Swap(deque);
      } else this._Insert_to_middle(pos, first, last);
    }

    this.size_ = size;
    return pos;
  }

  private _Insert_to_middle<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(pos: Deque.Iterator<T>, first: InputIterator, last: InputIterator): void {
    const col_size: number = this._Compute_col_size();

    // POSITION OF MATRIX
    const indexes: Pair<number, number> = this._Fetch_index(pos.index());
    let row: Array<T> = this.matrix_[indexes.first];
    const col: number = indexes.second;

    // MOVE BACK SIDE TO TEMPORARY ARRAY
    const back_items: Array<T> = row.splice(col);

    // INSERT ITEMS
    for (; !first.equals(last); first = first.next()) {
      if (row.length === col_size && this.matrix_.length < Deque.ROW_SIZE) {
        row = new Array<T>();

        const spliced_array: T[][] = this.matrix_.splice(++indexes.first);
        this.matrix_.push(row);
        this.matrix_.push(...spliced_array);
      }
      row.push(first.value);
    }

    // INSERT ITEMS IN THE BACK SIDE
    for (let i: number = 0; i < back_items.length; ++i) {
      if (row.length === col_size && this.matrix_.length < Deque.ROW_SIZE) {
        row = new Array<T>();

        const spliced_array: T[][] = this.matrix_.splice(++indexes.first);
        this.matrix_.push(row);
        this.matrix_.push(...spliced_array);
      }
      row.push(back_items[i]);
    }
  }

  private _Insert_to_end<
    InputIterator extends Readonly<IForwardIterator<T, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void {
    // INSERT ITEMS IN THE BACK
    for (; !first.equals(last); first = first.next()) {
      // ADD ROW IF REQUIRED
      this._Try_add_row_at_back();

      // INSERT VALUE
      this.matrix_[this.matrix_.length - 1].push(first.value);
    }
  }

  private _Try_expand_capacity(size: number): boolean {
    if (size <= this.capacity_) return false;

    // MAX (CAPACITY * 1.5, TARGET SIZE)
    size = Math.max(size, Math.floor(this.capacity_ * Deque.MAGNIFIER));
    this._Reserve(size);

    return true;
  }

  private _Try_add_row_at_front(): boolean {
    const col_size: number = this._Compute_col_size();

    if (
      this.matrix_[0].length >= col_size &&
      this.matrix_.length < Deque.ROW_SIZE
    ) {
      this.matrix_ = ([[]] as T[][]).concat(...this.matrix_);
      return true;
    } else return false;
  }

  private _Try_add_row_at_back(): boolean {
    const col_size: number = this._Compute_col_size();

    if (
      this.matrix_[this.matrix_.length - 1].length >= col_size &&
      this.matrix_.length < Deque.ROW_SIZE
    ) {
      this.matrix_.push([]);
      return true;
    } else return false;
  }

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  protected _Erase_by_range(
    first: Deque.Iterator<T>,
    last: Deque.Iterator<T>,
  ): Deque.Iterator<T> {
    if (first.index() >= this.size()) return first;

    // INDEXING
    let size: number;
    if (last.index() >= this.size())
      // LAST IS END()
      size = this.size() - first.index();
    // LAST IS NOT END()
    else size = last.index() - first.index();

    this.size_ -= size;

    // ERASING
    let first_row: T[] = null!;
    let second_row: T[] = null!;
    let i: number = 0;

    while (size !== 0) {
      // FIND MATCHED ROW AND COLUMN
      const indexes: Pair<number, number> = this._Fetch_index(first.index());
      const row: Array<T> = this.matrix_[indexes.first];
      const col: number = indexes.second;

      // EARSE FROM THE ROW
      const my_delete_size: number = Math.min(size, row.length - col);
      row.splice(col, my_delete_size);

      // TO MERGE
      if (row.length !== 0)
        if (i === 0) first_row = row;
        else second_row = row;

      // ERASE THE ENTIRE ROW IF REQUIRED
      if (row.length === 0 && this.matrix_.length > 1)
        this.matrix_.splice(indexes.first, 1);

      // TO THE NEXT STEP
      size -= my_delete_size;
      ++i;
    }

    // MERGE FIRST AND SECOND ROW
    if (
      first_row !== null &&
      second_row !== null &&
      first_row.length + second_row.length <= this._Compute_col_size()
    ) {
      first_row.push(...second_row);
      this.matrix_.splice(this.matrix_.indexOf(second_row), 1);
    }

    return first;
  }
}

/**
 *
 */
export namespace Deque {
  //----
  // ITERATORS
  //----
  // HEAD
  /**
   * Iterator of {@link Deque}
   */
  export type Iterator<T> = ArrayIterator<T, Deque<T>>;

  /**
   * Reverse iterator of {@link Deque}
   */
  export type ReverseIterator<T> = ArrayReverseIterator<T, Deque<T>>;

  // BODY
  export const Iterator = ArrayIterator;
  export const ReverseIterator = ArrayReverseIterator;

  //----
  // CONSTANTS
  //----
  /**
   * Row size of the {@link Deque.matrix_ matrix} which contains elements.
   *
   * Note that the {@link ROW_SIZE} affects on time complexity of accessing and inserting element.
   * Accessing element is {@link ROW_SIZE} times slower than ordinary {@link Vector} and inserting element
   * in middle position is {@link ROW_SIZE} times faster than ordinary {@link Vector}.
   *
   * When the {@link ROW_SIZE} returns 8, time complexity of accessing element is O(8) and inserting
   * element in middle position is O(N/8). ({@link Vector}'s time complexity of accessement is O(1)
   * and inserting element is O(N)).
   */
  export const ROW_SIZE = 8;

  /**
   * Minimum {@link Deque.capacity}.
   *
   * Although a {@link Deque} has few elements, even no element is belonged to, the {@link Deque}
   * keeps the minimum {@link Deque.capacity} at least.
   */
  export const MIN_CAPACITY = 36;

  /**
   * Expansion ratio.
   */
  export const MAGNIFIER = 1.5;

  /**
   * @internal
   */
  export class ForOfAdaptor<T> implements IterableIterator<T> {
    private matrix_: T[][];
    private row_: number;
    private col_: number;

    public constructor(matrix: T[][]) {
      this.matrix_ = matrix;
      this.row_ = 0;
      this.col_ = 0;
    }

    public next(): IteratorResult<T> {
      if (this.row_ === this.matrix_.length)
        return {
          done: true,
          value: undefined!,
        };
      else {
        const val: T = this.matrix_[this.row_][this.col_];
        if (++this.col_ === this.matrix_[this.row_].length) {
          ++this.row_;
          this.col_ = 0;
        }

        return {
          done: false,
          value: val,
        };
      }
    }

    public [Symbol.iterator](): IterableIterator<T> {
      return this;
    }
  }
}
