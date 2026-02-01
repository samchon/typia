//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { ITreeContainer } from "../../internal/container/associative/ITreeContainer";
import { Entry } from "../../utility/Entry";
import { IPair } from "../../utility/IPair";
import { MapContainer } from "./MapContainer";

/**
 * Common interface for tree maps.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Derived type extending this {@link ITreeMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ITreeMap<
  Key,
  T,
  Unique extends boolean,
  Source extends ITreeMap<Key, T, Unique, Source, IteratorT, ReverseT>,
  IteratorT extends ITreeMap.Iterator<
    Key,
    T,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends ITreeMap.ReverseIterator<
    Key,
    T,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
> extends MapContainer<Key, T, Unique, Source, IteratorT, ReverseT>,
    ITreeContainer<
      Key,
      Entry<Key, T>,
      Source,
      IteratorT,
      ReverseT,
      IPair<Key, T>
    > {}

export namespace ITreeMap {
  /**
   * Iterator of {@link ITreeMap}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    Key,
    T,
    Unique extends boolean,
    Source extends ITreeMap<Key, T, Unique, Source, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, Unique, Source, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<
      Key,
      T,
      Unique,
      Source,
      IteratorT,
      ReverseT
    >,
  > = MapContainer.Iterator<Key, T, Unique, Source, IteratorT, ReverseT>;

  /**
   * Reverse iterator of {@link ITreeMap}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type ReverseIterator<
    Key,
    T,
    Unique extends boolean,
    Source extends ITreeMap<Key, T, Unique, Source, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, Unique, Source, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<
      Key,
      T,
      Unique,
      Source,
      IteratorT,
      ReverseT
    >,
  > = MapContainer.ReverseIterator<Key, T, Unique, Source, IteratorT, ReverseT>;
}
