//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IHashSet } from "../base/container/IHashSet";
import { MultiSet } from "../base/container/MultiSet";
import { IHashContainer } from "../internal/container/associative/IHashContainer";
import { SetElementList } from "../internal/container/associative/SetElementList";
import { BinaryPredicator } from "../internal/functional/BinaryPredicator";
import { Hasher } from "../internal/functional/Hasher";
import { Temporary } from "../internal/functional/Temporary";
import { SetHashBuckets } from "../internal/hash/SetHashBuckets";
import { IForwardIterator } from "../iterator/IForwardIterator";

/**
 * Multiple-key Set based on Hash buckets.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class HashMultiSet<Key>
  extends MultiSet<
    Key,
    HashMultiSet<Key>,
    HashMultiSet.Iterator<Key>,
    HashMultiSet.ReverseIterator<Key>
  >
  implements IHashSet<Key, false, HashMultiSet<Key>>
{
  private buckets_!: SetHashBuckets<Key, false, HashMultiSet<Key>>;

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
    items: Key[],
    hash?: Hasher<Key>,
    equal?: BinaryPredicator<Key>,
  );

  /**
   * Copy Constructor.
   *
   * @param obj Object to copy.
   */
  public constructor(obj: HashMultiSet<Key>);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iterator of the last position.
   * @param hash An unary function returns hash code. Default is {hash}.
   * @param equal A binary function predicates two arguments are equal. Default is {@link equal_to}.
   */
  public constructor(
    first: Readonly<IForwardIterator<Key>>,
    last: Readonly<IForwardIterator<Key>>,
    hash?: Hasher<Key>,
    equal?: BinaryPredicator<Key>,
  );

  public constructor(...args: any[]) {
    super((thisArg) => new SetElementList(thisArg));

    IHashContainer.construct<
      Key,
      Key,
      HashMultiSet<Key>,
      HashMultiSet.Iterator<Key>,
      HashMultiSet.ReverseIterator<Key>,
      Key
    >(
      this,
      HashMultiSet,
      (hash, pred) => {
        this.buckets_ = new SetHashBuckets(this, hash, pred);
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
  public swap(obj: HashMultiSet<Key>): void {
    // SWAP CONTENTS
    [this.data_, obj.data_] = [obj.data_, this.data_];
    SetElementList._Swap_associative(
      this.data_ as Temporary,
      obj.data_ as Temporary,
    );

    // SWAP BUCKETS
    SetHashBuckets._Swap_source(this.buckets_, obj.buckets_);
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
  public find(key: Key): HashMultiSet.Iterator<Key> {
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
    for (let it of bucket) if (this.buckets_.key_eq()(it.value, key)) ++cnt;

    return cnt;
  }

  /**
   * @inheritDoc
   */
  public begin(): HashMultiSet.Iterator<Key>;
  /**
   * @inheritDoc
   */
  public begin(index: number): HashMultiSet.Iterator<Key>;
  public begin(index: number | null = null): HashMultiSet.Iterator<Key> {
    if (index === null) return super.begin();
    else return this.buckets_.at(index)[0];
  }

  /**
   * @inheritDoc
   */
  public end(): HashMultiSet.Iterator<Key>;
  /**
   * @inheritDoc
   */
  public end(index: number): HashMultiSet.Iterator<Key>;
  public end(index: number | null = null): HashMultiSet.Iterator<Key> {
    if (index === null) return super.end();
    else {
      const bucket = this.buckets_.at(index);
      return bucket[bucket.length - 1].next();
    }
  }

  /**
   * @inheritDoc
   */
  public rbegin(): HashMultiSet.ReverseIterator<Key>;
  /**
   * @inheritDoc
   */
  public rbegin(index: number): HashMultiSet.ReverseIterator<Key>;
  public rbegin(
    index: number | null = null,
  ): HashMultiSet.ReverseIterator<Key> {
    return this.end(index!).reverse();
  }

  /**
   * @inheritDoc
   */
  public rend(): HashMultiSet.ReverseIterator<Key>;
  /**
   * @inheritDoc
   */
  public rend(index: number): HashMultiSet.ReverseIterator<Key>;
  public rend(index: number | null = null): HashMultiSet.ReverseIterator<Key> {
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
  public bucket_size(n: number): number {
    return this.buckets_.at(n).length;
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
    this.buckets_.rehash(Math.ceil(n * this.max_load_factor()));
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
  protected _Insert_by_key(key: Key): HashMultiSet.Iterator<Key> {
    // INSERT
    const it = this.data_.insert(this.data_.end(), key);

    this._Handle_insert(it, it.next()); // POST-PROCESS
    return it;
  }

  protected _Insert_by_hint(
    hint: HashMultiSet.Iterator<Key>,
    key: Key,
  ): HashMultiSet.Iterator<Key> {
    // INSERT
    const it = this.data_.insert(hint, key);

    // POST-PROCESS
    this._Handle_insert(it, it.next());

    return it;
  }

  protected _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<Key, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void {
    // INSERT ELEMENTS
    const my_first = this.data_.insert(this.data_.end(), first, last);

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
    first: HashMultiSet.Iterator<Key>,
    last: HashMultiSet.Iterator<Key>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.insert(first);
  }

  protected _Handle_erase(
    first: HashMultiSet.Iterator<Key>,
    last: HashMultiSet.Iterator<Key>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.erase(first);
  }
}

/**
 *
 */
export namespace HashMultiSet {
  // HEAD
  /**
   * Iterator of {@link HashMultiSet}
   */
  export type Iterator<Key> = SetElementList.Iterator<
    Key,
    false,
    HashMultiSet<Key>
  >;

  /**
   * Reverse iterator of {@link HashMultiSet}
   */
  export type ReverseIterator<Key> = SetElementList.ReverseIterator<
    Key,
    false,
    HashMultiSet<Key>
  >;

  // BODY
  export const Iterator = SetElementList.Iterator;
  export const ReverseIterator = SetElementList.ReverseIterator;
}
