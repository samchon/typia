//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IArrayContainer } from "../base/container/IArrayContainer";
import { not_equal_to } from "../functional/comparators";
import { ArrayContainer } from "../internal/container/linear/ArrayContainer";
import { ArrayIterator } from "../internal/iterator/ArrayIterator";
import { ArrayReverseIterator } from "../internal/iterator/ArrayReverseIterator";
import { NativeArrayIterator } from "../internal/iterator/disposable/NativeArrayIterator";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { Pair } from "../utility/Pair";
import { TreeMap } from "./TreeMap";

/**
 * Vector only for `boolean`.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class VectorBoolean
  extends ArrayContainer<
    boolean,
    VectorBoolean,
    VectorBoolean,
    VectorBoolean.Iterator,
    VectorBoolean.ReverseIterator,
    boolean
  >
  implements
    IArrayContainer<
      boolean,
      VectorBoolean,
      VectorBoolean.Iterator,
      VectorBoolean.ReverseIterator
    >
{
  /**
   * Store not full elements, but their sequence.
   *
   *   - first: index
   *   - second: value
   */
  private data_!: TreeMap<number, boolean>;

  /**
   * Number of elements
   */
  private size_!: number;

  /* =========================================================
        CONSTRUCTORS & SEMI-CONSTRUCTORS
            - CONSTRUCTORS
            - ASSIGN & CLEAR
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
  public constructor(array: boolean[]);

  /**
   * Copy Constructor
   *
   * @param obj Object to copy.
   */
  public constructor(obj: VectorBoolean);

  /**
   * Fill Constructor.
   *
   * @param size Initial size.
   * @param val Value to fill.
   */
  public constructor(n: number, val: boolean);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iteartor of the last position.
   */
  public constructor(
    first: Readonly<IForwardIterator<boolean>>,
    last: Readonly<IForwardIterator<boolean>>,
  );

  public constructor(...args: any[]) {
    super();

    if (args.length === 1 && args[0] instanceof VectorBoolean) {
      // COPY CONSTRUCTOR
      const obj: VectorBoolean = args[0];

      this.data_ = new TreeMap(obj.data_.begin(), obj.data_.end());
      this.size_ = obj.size_;
    } else if (args.length === 1 && args[0] instanceof Array) {
      // INITIALIZER
      this.clear();
      this.push(...args[0]);
    } else if (args.length === 2) {
      // ASSIGNER
      this.assign(args[0], args[1]);
    } // DEFAULT CONSTRUCTOR
    else this.clear();
  }

  /* ---------------------------------------------------------
        ASSIGN & CLEAR
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public assign(n: number, val: boolean): void;
  /**
   * @inheritDoc
   */
  public assign<
    InputIterator extends Readonly<IForwardIterator<boolean, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void;

  public assign(first: any, last: any): void {
    this.clear();
    this.insert(this.end(), first, last);
  }

  /**
   * @inheritDoc
   */
  public clear(): void {
    this.data_ = new TreeMap();
    this.size_ = 0;
  }

  /**
   * @inheritDoc
   */
  public resize(n: number): void {
    const expansion: number = n - this.size();
    if (expansion > 0) this.insert(this.end(), expansion, false);
    else if (expansion < 0)
      this.erase(this.end().advance(-expansion), this.end());
  }

  /**
   * Flip all values.
   */
  public flip(): void {
    for (const entry of this.data_) entry.second = !entry.second;
  }

  /**
   * @inheritDoc
   */
  public swap(obj: VectorBoolean): void {
    [this.data_, obj.data_] = [obj.data_, this.data_];
    [this.size_, obj.size_] = [obj.size_, this.size_];
  }

  /* =========================================================
        ACCESSORS
    ========================================================= */
  protected source(): VectorBoolean {
    return this;
  }

  /**
   * @inheritDoc
   */
  public size(): number {
    return this.size_;
  }

  protected _At(index: number): boolean {
    // FIND THE NEAREST NODE OF LEFT
    const it = this._Find_node(index);
    return it.second; // RETURNS
  }

  protected _Set(index: number, val: boolean): void {
    val = !!val; // SIFT

    // FIND THE NEAREAST NODE OF LEFT
    let it = this._Find_node(index);
    if (it.second === val) return; // NO NEED TO CHANGE

    //----
    // CHANGE VALUE
    //----
    if (it.first === index) {
      // CHANGE VALUE DIRECTLY
      it.second = val;
    } else {
      // EMPLACE NEW NODE
      it = this.data_.emplace(index, val).first;
    }

    //----
    // POST-PROCESS
    //----
    // THE LAST ELEMENT, NO POST-PROCESS REQUIRED
    if (index === this.size() - 1) return;

    // LIST UP NEIGHBORS
    const prev = it.prev();
    const next = it.next();

    // ARRANGE LEFT SIDE
    if (not_equal_to(prev, this.data_.end()) && prev.second === it.second)
      this.data_.erase(it);

    // ARRANGE RIGHT SIDE
    if (
      next.equals(this.data_.end()) === true ||
      next.first !== index + 1 ||
      next.second !== val
    ) {
      // 1) IT'S THE LAST NODE
      // 2) NEXT NODE DOES NOT POINT THE INDEX + 1 (NEAREST NEIGHBOR)
      // 3) NEXT NODE'S VALUE IS DIFFERENT WITH THE CHANGED VALUE
      //----
      // EMPLACE NEW NODE WITH OLD
      this.data_.emplace(index + 1, !val);
    } else {
      // NEXT NODE'S VALUE IS SAME WITH THE CHANGED VALUE
      //----
      // ERASE THE NEXT NODE
      this.data_.erase(next);
    }
  }

  /**
   * @inheritDoc
   */
  public nth(index: number): VectorBoolean.Iterator {
    return new VectorBoolean.Iterator(this as VectorBoolean, index);
  }

  private _Find_node(index: number): TreeMap.Iterator<number, boolean> {
    return this.data_.upper_bound(index).prev();
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
  public push(...items: boolean[]): number {
    if (items.length === 0) return this.size();

    const first = new NativeArrayIterator(items, 0);
    const last = new NativeArrayIterator(items, items.length);

    this._Insert_by_range(this.end(), first, last);
    return this.size();
  }

  /**
   * @inheritDoc
   */
  public push_back(val: boolean): void {
    const it = this.data_.rbegin();
    const index: number = this.size_++;

    val = !!val; // SIFT

    // EMPLACE OR NOT
    if (this.data_.empty() || it.second !== val) this.data_.emplace(index, val);
  }

  protected _Pop_back(): void {
    const it: TreeMap.ReverseIterator<number, boolean> = this.data_.rbegin();
    const index: number = --this.size_;

    // ERASE OR NOT
    if (it.first === index) this.data_.erase(it.base());
  }

  /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
  protected _Insert_by_repeating_val(
    pos: VectorBoolean.Iterator,
    n: number,
    val: boolean,
  ): VectorBoolean.Iterator {
    // RESERVE ELEMENTS -> THE REPEATED COUNT AND VALUE
    const elements: Pair<number, boolean>[] = [];
    elements.push(new Pair(n, val));

    // DO INSERT
    if (pos.equals(this.end()) === true) return this._Insert_to_end(elements);
    else return this._Insert_to_middle(pos, elements);
  }

  protected _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<boolean, InputIterator>>,
  >(
    pos: VectorBoolean.Iterator,
    first: InputIterator,
    last: InputIterator,
  ): VectorBoolean.Iterator {
    // RESERVE ELEMENTS -> REPEATED SIZE & VALUE
    const elements: Pair<number, boolean>[] = [];

    for (let it = first; !it.equals(last); it = it.next()) {
      if (
        elements.length === 0 ||
        elements[elements.length - 1].second !== it.value
      )
        elements.push(new Pair(1, it.value));
      else ++elements[elements.length - 1].first;
    }

    if (pos.equals(this.end()) === true) return this._Insert_to_end(elements);
    else return this._Insert_to_middle(pos, elements);
  }

  private _Insert_to_middle(
    pos: VectorBoolean.Iterator,
    elements: Pair<number, boolean>[],
  ): VectorBoolean.Iterator {
    const first = this._Find_node(pos.index());

    for (let it = first; !it.equals(this.data_.end()); it = it.next()) {
      // COMPUTE SIZE TO ENROLL
      const next: TreeMap.Iterator<number, boolean> = it.next();

      const sx: number =
        it.first < pos.index()
          ? pos.index() // POSITION TO INSERT
          : it.first; // CURRENT POINT
      const sy: number = next.equals(this.data_.end())
        ? this.size() // IT'S THE LAST ELEMENT
        : next.first; // TO NEXT ELEMENT

      // DO ENROLL
      const size: number = sy - sx;
      const value: boolean = !!it.second;

      elements.push(new Pair(size, value));
    }

    // ERASE BACK-SIDE ELEMENTS FOR THE POST-INSERTION
    this.size_ = pos.index();
    this.data_.erase(
      first.first === pos.index() ? first : first.next(),
      this.data_.end(),
    );

    // DO POST-INSERTION
    return this._Insert_to_end(elements);
  }

  private _Insert_to_end(
    elements: Pair<number, boolean>[],
  ): VectorBoolean.Iterator {
    const old_size: number = this.size();
    const last_value: boolean | null = this.data_.empty()
      ? null
      : this.data_.rbegin().second;

    for (let i: number = 0; i < elements.length; ++i) {
      const p: Pair<number, boolean> = elements[i];

      // INDEXING
      const index: number = this.size();
      const value: boolean = !!p.second;

      this.size_ += p.first;

      // NEED NOT TO EMPLACE, JUST SKIP
      if (i === 0 && value === last_value) continue;

      // DO EMPLACE
      this.data_.emplace(index, value);
    }
    return this.begin().advance(old_size);
  }

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  protected _Erase_by_range(
    first: VectorBoolean.Iterator,
    last: VectorBoolean.Iterator,
  ): VectorBoolean.Iterator {
    const elements: Pair<number, boolean>[] = [];

    if (last.equals(this.end()) === false) {
      const last_index: number = Math.min(this.size(), last.index());

      for (
        let it = this._Find_node(last_index);
        !it.equals(this.data_.end());
        it = it.next()
      ) {
        const next: TreeMap.Iterator<number, boolean> = it.next();
        const sx: number = Math.max(it.first, last_index);
        const sy: number = next.equals(this.data_.end())
          ? this.size() // IT'S THE LAST ELEMENT
          : next.first; // TO NEXT ELEMENT
        const size: number = sy - sx;
        const value: boolean = it.second;

        elements.push(new Pair(size, value));
      }
    }

    this.size_ = first.index();
    this.data_.erase(this.data_.lower_bound(this.size_), this.data_.end());
    return this._Insert_to_end(elements);
  }
}

/**
 *
 */
export namespace VectorBoolean {
  // HEAD
  /**
   * Iterator of {@link VectorBoolean}
   */
  export type Iterator = ArrayIterator<boolean, VectorBoolean>;

  /**
   * Reverse iterator of {@link VectorBoolean}
   */
  export type ReverseIterator = ArrayReverseIterator<boolean, VectorBoolean>;

  // BODY
  export const Iterator = ArrayIterator;
  export const ReverseIterator = ArrayReverseIterator;
}
