//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IHashSet } from "../../base/container/IHashSet";
import { Comparator } from "../functional/Comparator";
import { Hasher } from "../functional/Hasher";
import { HashBuckets } from "./HashBuckets";

/**
 * Hash buckets for set containers
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class SetHashBuckets<
  Key,
  Unique extends boolean,
  Source extends IHashSet<Key, Unique, Source>,
> extends HashBuckets<Key, IHashSet.Iterator<Key, Unique, Source>> {
  private source_: IHashSet<Key, Unique, Source>;
  private readonly key_eq_: Comparator<Key>;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Initializer Constructor
   *
   * @param source Source set container
   * @param hasher Hash function
   * @param pred Equality function
   */
  public constructor(
    source: IHashSet<Key, Unique, Source>,
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
    Unique extends boolean,
    Source extends IHashSet<Key, Unique, Source>,
  >(
    x: SetHashBuckets<Key, Unique, Source>,
    y: SetHashBuckets<Key, Unique, Source>,
  ): void {
    [x.source_, y.source_] = [y.source_, x.source_];
  }

  /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
  public key_eq(): Comparator<Key> {
    return this.key_eq_;
  }

  public find(val: Key): IHashSet.Iterator<Key, Unique, Source> {
    const index: number = this.hash_function()(val) % this.length();
    const bucket: IHashSet.Iterator<Key, Unique, Source>[] = this.at(index);

    for (const it of bucket) if (this.key_eq_(it.value, val)) return it;

    return this.source_.end();
  }
}

function fetcher<
  Key,
  Unique extends boolean,
  Source extends IHashSet<Key, Unique, Source>,
>(elem: IHashSet.Iterator<Key, Unique, Source>): Key {
  return elem.value;
}
