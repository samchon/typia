//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IHashMap } from "../base/container/IHashMap";
import { MultiMap } from "../base/container/MultiMap";
import { IHashContainer } from "../internal/container/associative/IHashContainer";
import { MapElementList } from "../internal/container/associative/MapElementList";
import { BinaryPredicator } from "../internal/functional/BinaryPredicator";
import { Hasher } from "../internal/functional/Hasher";
import { Temporary } from "../internal/functional/Temporary";
import { MapHashBuckets } from "../internal/hash/MapHashBuckets";
import { NativeArrayIterator } from "../internal/iterator/disposable/NativeArrayIterator";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { Entry } from "../utility/Entry";
import { IPair } from "../utility/IPair";

/**
 * Multiple-key Map based on Hash buckets.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class HashMultiMap<Key, T>
  extends MultiMap<
    Key,
    T,
    HashMultiMap<Key, T>,
    HashMultiMap.Iterator<Key, T>,
    HashMultiMap.ReverseIterator<Key, T>
  >
  implements IHashMap<Key, T, false, HashMultiMap<Key, T>>
{
  private buckets_!: MapHashBuckets<Key, T, false, HashMultiMap<Key, T>>;

  /* =========================================================
        CONSTRUCTORS & SEMI-CONSTRUCTORS
            - CONSTRUCTORS
            - ASSIGN & CLEAR
    ============================================================
        CONSTURCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   *
   * @param hash An unary function returns hash code. Default is {hash}.
   * @param equal A binary function predicates two arguments are equal. Default is {@link equal_to}.
   */
  public constructor(hash?: Hasher<Key>, equal?: BinaryPredicator<Key>);

  /**
   * Initializer Constructor.
   *
   * @param items Items to assign.
   * @param hash An unary function returns hash code. Default is {hash}.
   * @param equal A binary function predicates two arguments are equal. Default is {@link equal_to}.
   */
  public constructor(
    items: IPair<Key, T>[],
    hash?: Hasher<Key>,
    equal?: BinaryPredicator<Key>,
  );

  /**
   * Copy Constructor.
   *
   * @param obj Object to copy.
   */
  public constructor(obj: HashMultiMap<Key, T>);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iterator of the last position.
   * @param hash An unary function returns hash code. Default is {hash}.
   * @param equal A binary function predicates two arguments are equal. Default is {@link equal_to}.
   */
  public constructor(
    first: Readonly<IForwardIterator<IPair<Key, T>>>,
    last: Readonly<IForwardIterator<IPair<Key, T>>>,
    hash?: Hasher<Key>,
    equal?: BinaryPredicator<Key>,
  );

  public constructor(...args: any[]) {
    super((thisArg) => new MapElementList(thisArg));

    IHashContainer.construct<
      Key,
      Entry<Key, T>,
      HashMultiMap<Key, T>,
      HashMultiMap.Iterator<Key, T>,
      HashMultiMap.ReverseIterator<Key, T>,
      IPair<Key, T>
    >(
      this,
      HashMultiMap,
      (hash, pred) => {
        this.buckets_ = new MapHashBuckets(
          this as HashMultiMap<Key, T>,
          hash,
          pred,
        );
      },
      ...args,
    );
  }

  /* ---------------------------------------------------------
        ASSIGN & CLEAR
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public clear(): void {
    this.buckets_.clear();

    super.clear();
  }

  /**
   * @inheritDoc
   */
  public swap(obj: HashMultiMap<Key, T>): void {
    // SWAP CONTENTS
    [this.data_, obj.data_] = [obj.data_, this.data_];
    MapElementList._Swap_associative(
      this.data_ as Temporary,
      obj.data_ as Temporary,
    );

    // SWAP BUCKETS
    MapHashBuckets._Swap_source(this.buckets_, obj.buckets_);
    [this.buckets_, obj.buckets_] = [obj.buckets_, this.buckets_];
  }

  /* =========================================================
        ACCESSORS
            - MEMBER
            - HASH
    ============================================================
        MEMBER
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public find(key: Key): HashMultiMap.Iterator<Key, T> {
    return this.buckets_.find(key);
  }

  /**
   * @inheritDoc
   */
  public count(key: Key): number {
    // FIND MATCHED BUCKET
    const index = this.bucket(key);
    const bucket = this.buckets_.at(index);

    // ITERATE THE BUCKET
    let cnt: number = 0;
    for (let it of bucket) if (this.buckets_.key_eq()(it.first, key)) ++cnt;

    return cnt;
  }

  /**
   * @inheritDoc
   */
  public begin(): HashMultiMap.Iterator<Key, T>;
  /**
   * @inheritDoc
   */
  public begin(index: number): HashMultiMap.Iterator<Key, T>;
  public begin(index: number | null = null): HashMultiMap.Iterator<Key, T> {
    if (index === null) return super.begin();
    else return this.buckets_.at(index)[0];
  }

  /**
   * @inheritDoc
   */
  public end(): HashMultiMap.Iterator<Key, T>;
  /**
   * @inheritDoc
   */
  public end(index: number): HashMultiMap.Iterator<Key, T>;
  public end(index: number | null = null): HashMultiMap.Iterator<Key, T> {
    if (index === null) return super.end();
    else {
      const bucket = this.buckets_.at(index);
      return bucket[bucket.length - 1].next();
    }
  }

  /**
   * @inheritDoc
   */
  public rbegin(): HashMultiMap.ReverseIterator<Key, T>;
  /**
   * @inheritDoc
   */
  public rbegin(index: number): HashMultiMap.ReverseIterator<Key, T>;
  public rbegin(
    index: number | null = null,
  ): HashMultiMap.ReverseIterator<Key, T> {
    return this.end(index!).reverse();
  }

  /**
   * @inheritDoc
   */
  public rend(): HashMultiMap.ReverseIterator<Key, T>;
  /**
   * @inheritDoc
   */
  public rend(index: number): HashMultiMap.ReverseIterator<Key, T>;
  public rend(
    index: number | null = null,
  ): HashMultiMap.ReverseIterator<Key, T> {
    return this.begin(index!).reverse();
  }

  /* ---------------------------------------------------------
        HASH
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public bucket_count(): number {
    return this.buckets_.length();
  }

  /**
   * @inheritDoc
   */
  public bucket_size(index: number): number {
    return this.buckets_.at(index).length;
  }

  /**
   * @inheritDoc
   */
  public load_factor(): number {
    return this.buckets_.load_factor();
  }

  /**
   * @inheritDoc
   */
  public hash_function(): Hasher<Key> {
    return this.buckets_.hash_function();
  }

  /**
   * @inheritDoc
   */
  public key_eq(): BinaryPredicator<Key> {
    return this.buckets_.key_eq();
  }

  /**
   * @inheritDoc
   */
  public bucket(key: Key): number {
    return this.hash_function()(key) % this.buckets_.length();
  }

  /**
   * @inheritDoc
   */
  public max_load_factor(): number;
  /**
   * @inheritDoc
   */
  public max_load_factor(z: number): void;
  public max_load_factor(z: number | null = null): any {
    return this.buckets_.max_load_factor(z!);
  }

  /**
   * @inheritDoc
   */
  public reserve(n: number): void {
    this.buckets_.reserve(n);
  }

  /**
   * @inheritDoc
   */
  public rehash(n: number): void {
    if (n <= this.bucket_count()) return;

    this.buckets_.rehash(n);
  }

  protected _Key_eq(x: Key, y: Key): boolean {
    return this.key_eq()(x, y);
  }

  /* =========================================================
        ELEMENTS I/O
            - INSERT
            - POST-PROCESS
    ============================================================
        INSERT
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public emplace(key: Key, val: T): HashMultiMap.Iterator<Key, T> {
    // INSERT
    const it = this.data_.insert(this.data_.end(), new Entry(key, val));

    this._Handle_insert(it, it.next()); // POST-PROCESS
    return it;
  }

  /**
   * @inheritDoc
   */
  public emplace_hint(
    hint: HashMultiMap.Iterator<Key, T>,
    key: Key,
    val: T,
  ): HashMultiMap.Iterator<Key, T> {
    // INSERT
    const it = this.data_.insert(hint, new Entry(key, val));

    // POST-PROCESS
    this._Handle_insert(it, it.next());

    return it;
  }

  protected _Insert_by_range<
    InputIterator extends Readonly<
      IForwardIterator<IPair<Key, T>, InputIterator>
    >,
  >(first: InputIterator, last: InputIterator): void {
    //--------
    // INSERTIONS
    //--------
    // PRELIMINARIES
    const entries: Array<Entry<Key, T>> = [];
    for (let it = first; !it.equals(last); it = it.next())
      entries.push(new Entry(it.value.first, it.value.second));

    // INSERT ELEMENTS
    const my_first = this.data_.insert(
      this.data_.end(),
      new NativeArrayIterator(entries, 0),
      new NativeArrayIterator(entries, entries.length),
    );

    //--------
    // HASHING INSERTED ITEMS
    //--------
    // IF NEEDED, HASH_BUCKET TO HAVE SUITABLE SIZE
    if (this.size() > this.buckets_.capacity())
      this.reserve(Math.max(this.size(), this.buckets_.capacity() * 2));

    // POST-PROCESS
    this._Handle_insert(my_first, this.end());
  }

  /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
  protected _Handle_insert(
    first: HashMultiMap.Iterator<Key, T>,
    last: HashMultiMap.Iterator<Key, T>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.insert(first);
  }

  protected _Handle_erase(
    first: HashMultiMap.Iterator<Key, T>,
    last: HashMultiMap.Iterator<Key, T>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.erase(first);
  }
}

/**
 *
 */
export namespace HashMultiMap {
  //----
  // PASCAL NOTATION
  //----
  // HEAD
  /**
   * Iterator of {@link HashMultiMap}
   */
  export type Iterator<Key, T> = MapElementList.Iterator<
    Key,
    T,
    false,
    HashMultiMap<Key, T>
  >;

  /**
   * Reverse iterator of {@link HashMultiMap}
   */
  export type ReverseIterator<Key, T> = MapElementList.ReverseIterator<
    Key,
    T,
    false,
    HashMultiMap<Key, T>
  >;

  // BODY
  export const Iterator = MapElementList.Iterator;
  export const ReverseIterator = MapElementList.ReverseIterator;
}
