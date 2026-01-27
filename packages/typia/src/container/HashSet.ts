//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IHashSet } from "../base/container/IHashSet";
import { UniqueSet } from "../base/container/UniqueSet";
import { IHashContainer } from "../internal/container/associative/IHashContainer";
import { SetElementList } from "../internal/container/associative/SetElementList";
import { BinaryPredicator } from "../internal/functional/BinaryPredicator";
import { Hasher } from "../internal/functional/Hasher";
import { Temporary } from "../internal/functional/Temporary";
import { SetHashBuckets } from "../internal/hash/SetHashBuckets";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { Pair } from "../utility/Pair";

/**
 * Unique-key Set based on Hash buckets.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class HashSet<Key>
  extends UniqueSet<
    Key,
    HashSet<Key>,
    HashSet.Iterator<Key>,
    HashSet.ReverseIterator<Key>
  >
  implements IHashSet<Key, true, HashSet<Key>>
{
  private buckets_!: SetHashBuckets<Key, true, HashSet<Key>>;

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
  public constructor(obj: HashSet<Key>);

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
      HashSet<Key>,
      HashSet.Iterator<Key>,
      HashSet.ReverseIterator<Key>,
      Key
    >(
      this,
      HashSet,
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
  public swap(obj: HashSet<Key>): void {
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
  public find(key: Key): HashSet.Iterator<Key> {
    return this.buckets_.find(key);
  }

  /**
   * @inheritDoc
   */
  public begin(): HashSet.Iterator<Key>;
  /**
   * @inheritDoc
   */
  public begin(index: number): HashSet.Iterator<Key>;
  public begin(index: number | null = null): HashSet.Iterator<Key> {
    if (index === null) return super.begin();
    else return this.buckets_.at(index)[0];
  }

  /**
   * @inheritDoc
   */
  public end(): HashSet.Iterator<Key>;
  /**
   * @inheritDoc
   */
  public end(index: number): HashSet.Iterator<Key>;
  public end(index: number | null = null): HashSet.Iterator<Key> {
    if (index === null) return super.end();
    else {
      const bucket = this.buckets_.at(index);
      return bucket[bucket.length - 1].next();
    }
  }

  /**
   * @inheritDoc
   */
  public rbegin(): HashSet.ReverseIterator<Key>;
  /**
   * @inheritDoc
   */
  public rbegin(index: number): HashSet.ReverseIterator<Key>;
  public rbegin(index: number | null = null): HashSet.ReverseIterator<Key> {
    return this.end(index!).reverse();
  }

  /**
   * @inheritDoc
   */
  public rend(): HashSet.ReverseIterator<Key>;
  /**
   * @inheritDoc
   */
  public rend(index: number): HashSet.ReverseIterator<Key>;
  public rend(index: number | null = null): HashSet.ReverseIterator<Key> {
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
            - SWAP
    ============================================================
        INSERT
    --------------------------------------------------------- */
  protected _Insert_by_key(key: Key): Pair<HashSet.Iterator<Key>, boolean> {
    // TEST WHETHER EXIST
    let it: HashSet.Iterator<Key> = this.find(key);
    if (it.equals(this.end()) === false) return new Pair(it, false);

    // INSERT
    this.data_.push(key);
    it = it.prev();

    // POST-PROCESS
    this._Handle_insert(it, it.next());

    return new Pair(it, true);
  }

  protected _Insert_by_hint(
    hint: HashSet.Iterator<Key>,
    key: Key,
  ): HashSet.Iterator<Key> {
    // FIND DUPLICATED KEY
    let it: HashSet.Iterator<Key> = this.find(key);
    if (it.equals(this.end()) === true) {
      // INSERT
      it = this.data_.insert(hint, key);

      // POST-PROCESS
      this._Handle_insert(it, it.next());
    }
    return it;
  }

  /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
  protected _Handle_insert(
    first: HashSet.Iterator<Key>,
    last: HashSet.Iterator<Key>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.insert(first);
  }

  protected _Handle_erase(
    first: HashSet.Iterator<Key>,
    last: HashSet.Iterator<Key>,
  ): void {
    for (; !first.equals(last); first = first.next())
      this.buckets_.erase(first);
  }
}

/**
 *
 */
export namespace HashSet {
  // HEAD
  /**
   * Iterator of {@link HashSet}
   */
  export type Iterator<Key> = SetElementList.Iterator<Key, true, HashSet<Key>>;

  /**
   * Reverse iterator of {@link HashSet}
   */
  export type ReverseIterator<Key> = SetElementList.ReverseIterator<
    Key,
    true,
    HashSet<Key>
  >;

  // BODY
  export const Iterator = SetElementList.Iterator;
  export const ReverseIterator = SetElementList.ReverseIterator;
}
