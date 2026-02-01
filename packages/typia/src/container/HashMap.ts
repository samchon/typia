//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IHashMap } from "../base/container/IHashMap";
import { UniqueMap } from "../base/container/UniqueMap";
import { IHashContainer } from "../internal/container/associative/IHashContainer";
import { MapElementList } from "../internal/container/associative/MapElementList";
import { BinaryPredicator } from "../internal/functional/BinaryPredicator";
import { Hasher } from "../internal/functional/Hasher";
import { Temporary } from "../internal/functional/Temporary";
import { MapHashBuckets } from "../internal/hash/MapHashBuckets";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { Entry } from "../utility/Entry";
import { IPair } from "../utility/IPair";
import { Pair } from "../utility/Pair";

/**
 * Unique-key Map based on Hash buckets.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class HashMap<Key, T>
  extends UniqueMap<
    Key,
    T,
    HashMap<Key, T>,
    HashMap.Iterator<Key, T>,
    HashMap.ReverseIterator<Key, T>
  >
  implements IHashMap<Key, T, true, HashMap<Key, T>>
{
  private buckets_!: MapHashBuckets<Key, T, true, HashMap<Key, T>>;

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
  public constructor(obj: HashMap<Key, T>);

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
      HashMap<Key, T>,
      HashMap.Iterator<Key, T>,
      HashMap.ReverseIterator<Key, T>,
      IPair<Key, T>
    >(
      this,
      HashMap,
      (hash, pred) => {
        this.buckets_ = new MapHashBuckets(this as HashMap<Key, T>, hash, pred);
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
  public swap(obj: HashMap<Key, T>): void {
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
  public find(key: Key): HashMap.Iterator<Key, T> {
    return this.buckets_.find(key);
  }

  /**
   * @inheritDoc
   */
  public begin(): HashMap.Iterator<Key, T>;
  /**
   * @inheritDoc
   */
  public begin(index: number): HashMap.Iterator<Key, T>;
  public begin(index: number | null = null): HashMap.Iterator<Key, T> {
    if (index === null) return super.begin();
    else return this.buckets_.at(index)[0];
  }

  /**
   * @inheritDoc
   */
  public end(): HashMap.Iterator<Key, T>;
  /**
   * @inheritDoc
   */
  public end(index: number): HashMap.Iterator<Key, T>;
  public end(index: number | null = null): HashMap.Iterator<Key, T> {
    if (index === null) return super.end();
    else {
      const bucket = this.buckets_.at(index);
      return bucket[bucket.length - 1].next();
    }
  }

  /**
   * @inheritDoc
   */
  public rbegin(): HashMap.ReverseIterator<Key, T>;
  /**
   * @inheritDoc
   */
  public rbegin(index: number): HashMap.ReverseIterator<Key, T>;
  public rbegin(index: number | null = null): HashMap.ReverseIterator<Key, T> {
    return this.end(index!).reverse();
  }

  /**
   * @inheritDoc
   */
  public rend(): HashMap.ReverseIterator<Key, T>;
  /**
   * @inheritDoc
   */
  public rend(index: number): HashMap.ReverseIterator<Key, T>;
  public rend(index: number | null = null): HashMap.ReverseIterator<Key, T> {
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
    this.buckets_.rehash(n);
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
  public emplace(key: Key, val: T): Pair<HashMap.Iterator<Key, T>, boolean> {
    // TEST WHETHER EXIST
    let it: HashMap.Iterator<Key, T> = this.find(key);
    if (it.equals(this.end()) === false) return new Pair(it, false);

    // INSERT
    this.data_.push(new Entry(key, val));
    it = it.prev();

    // POST-PROCESS
    this._Handle_insert(it, it.next());

    return new Pair(it, true);
  }

  /**
   * @inheritDoc
   */
  public emplace_hint(
    hint: HashMap.Iterator<Key, T>,
    key: Key,
    val: T,
  ): HashMap.Iterator<Key, T> {
    // FIND DUPLICATED KEY
    let it: HashMap.Iterator<Key, T> = this.find(key);
    if (it.equals(this.end()) === true) {
      // INSERT
      it = this.data_.insert(hint, new Entry(key, val));

      // POST-PROCESS
      this._Handle_insert(it, it.next());
    }
    return it;
  }

  /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
  protected _Handle_insert(
    first: HashMap.Iterator<Key, T>,
    last: HashMap.Iterator<Key, T>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.insert(first);
  }

  protected _Handle_erase(
    first: HashMap.Iterator<Key, T>,
    last: HashMap.Iterator<Key, T>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.erase(first);
  }
}

/**
 *
 */
export namespace HashMap {
  // HEAD
  /**
   * Iterator of {@link HashMap}
   */
  export type Iterator<Key, T> = MapElementList.Iterator<
    Key,
    T,
    true,
    HashMap<Key, T>
  >;

  /**
   * Reverse iterator of {@link HashMap}
   */
  export type ReverseIterator<Key, T> = MapElementList.ReverseIterator<
    Key,
    T,
    true,
    HashMap<Key, T>
  >;

  // BODY
  export const Iterator = MapElementList.Iterator;
  export const ReverseIterator = MapElementList.ReverseIterator;
}
