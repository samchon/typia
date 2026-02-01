//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { IHashContainer } from "../../internal/container/associative/IHashContainer";
import { SetElementList } from "../../internal/container/associative/SetElementList";
import { SetContainer } from "./SetContainer";

/**
 * Common interface for hash sets.
 *
 * @template Key Key type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Derived type extending this {@link IHashSet}
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHashSet<
  Key,
  Unique extends boolean,
  Source extends IHashSet<Key, Unique, Source>,
> extends SetContainer<
      Key,
      Unique,
      Source,
      IHashSet.Iterator<Key, Unique, Source>,
      IHashSet.ReverseIterator<Key, Unique, Source>
    >,
    IHashContainer<
      Key,
      Key,
      Source,
      IHashSet.Iterator<Key, Unique, Source>,
      IHashSet.ReverseIterator<Key, Unique, Source>,
      Key
    > {
  /* ---------------------------------------------------------
        ITERATORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  begin(): IHashSet.Iterator<Key, Unique, Source>;

  /**
   * Iterator to the first element in a specific bucket.
   *
   * @param index Index number of the specific bucket.
   * @return Iterator from the specific bucket.
   */
  begin(index: number): IHashSet.Iterator<Key, Unique, Source>;

  /**
   * @inheritDoc
   */
  end(): IHashSet.Iterator<Key, Unique, Source>;

  /**
   * Iterator to the end in a specific bucket.
   *
   * @param index Index number of the specific bucket.
   * @return Iterator from the specific bucket.
   */
  end(index: number): IHashSet.Iterator<Key, Unique, Source>;
}

export namespace IHashSet {
  /**
   * Iterator of {@link IHashSet}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    Key,
    Unique extends boolean,
    Source extends IHashSet<Key, Unique, Source>,
  > = SetElementList.Iterator<Key, Unique, Source>;

  /**
   * Reverse iterator of {@link IHashSet}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type ReverseIterator<
    Key,
    Unique extends boolean,
    Source extends IHashSet<Key, Unique, Source>,
  > = SetElementList.ReverseIterator<Key, Unique, Source>;
}
