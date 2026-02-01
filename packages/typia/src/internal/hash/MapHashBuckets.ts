//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IHashMap } from "../../base/container/IHashMap";
import { Comparator } from "../functional/Comparator";
import { Hasher } from "../functional/Hasher";
import { HashBuckets } from "./HashBuckets";

/**
 * Hash buckets for map containers.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class MapHashBuckets<
  Key,
  T,
  Unique extends boolean,
  Source extends IHashMap<Key, T, Unique, Source>,
> extends HashBuckets<Key, IHashMap.Iterator<Key, T, Unique, Source>> {
  private source_: IHashMap<Key, T, Unique, Source>;
  private readonly key_eq_: Comparator<Key>;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Initializer Constructor
   *
   * @param source Source map container
   * @param hasher Hash function
   * @param pred Equality function
   */
  public constructor(
    source: Source,
    hasher: Hasher<Key>,
    pred: Comparator<Key>,
  ) {
    super(fetcher, hasher);

    this.source_ = source;
    this.key_eq_ = pred;
  }

  /**
   * @internal
   */
  public static _Swap_source<
    Key,
    T,
    Unique extends boolean,
    Source extends IHashMap<Key, T, Unique, Source>,
  >(
    x: MapHashBuckets<Key, T, Unique, Source>,
    y: MapHashBuckets<Key, T, Unique, Source>,
  ): void {
    [x.source_, y.source_] = [y.source_, x.source_];
  }

  /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
  public key_eq(): Comparator<Key> {
    return this.key_eq_;
  }

  public find(key: Key): IHashMap.Iterator<Key, T, Unique, Source> {
    const index: number = this.hash_function()(key) % this.length();
    const bucket: IHashMap.Iterator<Key, T, Unique, Source>[] = this.at(index);

    for (const it of bucket) if (this.key_eq_(it.first, key)) return it;

    return this.source_.end();
  }
}

function fetcher<
  Key,
  T,
  Unique extends boolean,
  Source extends IHashMap<Key, T, Unique, Source>,
>(elem: IHashMap.Iterator<Key, T, Unique, Source>): Key {
  return elem.first;
}
