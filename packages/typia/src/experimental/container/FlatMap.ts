//================================================================

/**
 * @packageDocumentation
 * @module std.experimental
 */
//================================================================
import { lower_bound, upper_bound } from "../../algorithm/binary_search";
import { ITreeContainer } from "../../internal/container/associative/ITreeContainer";
import { MapElementVector } from "../../internal/container/associative/MapElementVector";
import { UniqueTreeMap } from "../../internal/container/associative/UniqueTreeMap";
import { Comparator } from "../../internal/functional/Comparator";
import { Temporary } from "../../internal/functional/Temporary";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { Entry } from "../../utility/Entry";
import { IPair } from "../../utility/IPair";

/**
 * Unique-key Map based on sorted array.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class FlatMap<Key, T> extends UniqueTreeMap<
  Key,
  T,
  FlatMap<Key, T>,
  FlatMap.Iterator<Key, T>,
  FlatMap.ReverseIterator<Key, T>
> {
  private key_comp_!: Comparator<Key>;

  /* ---------------------------------------------------------
        CONSTURCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   *
   * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
   */
  public constructor(comp?: Comparator<Key>);

  /**
   * Initializer Constructor.
   *
   * @param items Items to assign.
   * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
   */
  public constructor(items: IPair<Key, T>[], comp?: Comparator<Key>);

  /**
   * Copy Constructor.
   *
   * @param obj Object to copy.
   */
  public constructor(obj: FlatMap<Key, T>);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iterator of the last position.
   * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
   */
  public constructor(
    first: Readonly<IForwardIterator<IPair<Key, T>>>,
    last: Readonly<IForwardIterator<IPair<Key, T>>>,
    comp?: Comparator<Key>,
  );

  public constructor(...args: any[]) {
    // INITIALIZATION
    super((thisArg) => new MapElementVector(thisArg));

    // OVERLOADINGS
    ITreeContainer.construct<
      Key,
      Entry<Key, T>,
      FlatMap<Key, T>,
      FlatMap.Iterator<Key, T>,
      FlatMap.ReverseIterator<Key, T>,
      IPair<Key, T>
    >(
      this,
      FlatMap,
      (comp) => {
        this.key_comp_ = comp;
      },
      ...args,
    );
  }

  /**
   * @inheritDoc
   */
  public swap(obj: FlatMap<Key, T>): void {
    // SWAP CONTENTS
    [this.data_, obj.data_] = [obj.data_, this.data_];
    MapElementVector._Swap_associative(
      this.data_ as Temporary,
      obj.data_ as Temporary,
    );

    // SWAP COMPARATORS
    [this.key_comp_, obj.key_comp_] = [obj.key_comp_, this.key_comp_];
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public nth(index: number): FlatMap.Iterator<Key, T> {
    return (this.data_ as MapElementVector<Key, T, true, FlatMap<Key, T>>).nth(
      index,
    );
  }

  /**
   * @inheritDoc
   */
  public key_comp(): Comparator<Key> {
    return this.key_comp_;
  }

  /**
   * @inheritDoc
   */
  public lower_bound(key: Key): FlatMap.Iterator<Key, T> {
    return lower_bound(
      this.begin(),
      this.end(),
      this._Capsule_key(key),
      this.value_comp(),
    );
  }

  /**
   * @inheritDoc
   */
  public upper_bound(key: Key): FlatMap.Iterator<Key, T> {
    return upper_bound(
      this.begin(),
      this.end(),
      this._Capsule_key(key),
      this.value_comp(),
    );
  }

  private _Capsule_key(key: Key): Entry<Key, T> {
    return { first: key } as Entry<Key, T>;
  }

  /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
  protected _Handle_insert({}, {}): void {}

  protected _Handle_erase({}, {}): void {}
}

/**
 *
 */
export namespace FlatMap {
  // HEAD
  export type Iterator<Key, T> = MapElementVector.Iterator<
    Key,
    T,
    true,
    FlatMap<Key, T>
  >;
  export type ReverseIterator<Key, T> = MapElementVector.ReverseIterator<
    Key,
    T,
    true,
    FlatMap<Key, T>
  >;

  // BODY
  export const Iterator = MapElementVector.Iterator;
  export const ReverseIterator = MapElementVector.ReverseIterator;

  export const __MODULE = "experimental";
}
