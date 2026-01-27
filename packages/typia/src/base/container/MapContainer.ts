//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { IAssociativeContainer } from "../../internal/container/associative/IAssociativeContainer";
import { ILinearContainerBase } from "../../internal/container/linear/ILinearContainerBase";
import { Temporary } from "../../internal/functional/Temporary";
import { NativeArrayIterator } from "../../internal/iterator/disposable/NativeArrayIterator";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { Entry } from "../../utility/Entry";
import { IPair } from "../../utility/IPair";
import { Pair } from "../../utility/Pair";
import { Container } from "./Container";
import { IContainer } from "./IContainer";

/**
 * Basic map container.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Derived type extending this {@link MapContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class MapContainer<
    Key,
    T,
    Unique extends boolean,
    Source extends MapContainer<Key, T, Unique, Source, IteratorT, ReverseT>,
    IteratorT extends MapContainer.Iterator<
      Key,
      T,
      Unique,
      Source,
      IteratorT,
      ReverseT
    >,
    ReverseT extends MapContainer.ReverseIterator<
      Key,
      T,
      Unique,
      Source,
      IteratorT,
      ReverseT
    >,
  >
  extends Container<Entry<Key, T>, Source, IteratorT, ReverseT, IPair<Key, T>>
  implements
    IAssociativeContainer<
      Key,
      Entry<Key, T>,
      Source,
      IteratorT,
      ReverseT,
      IPair<Key, T>
    >
{
  protected data_: ILinearContainerBase<
    Entry<Key, T>,
    Source,
    IteratorT,
    ReverseT
  >;

  /* ---------------------------------------------------------
        CONSTURCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  protected constructor(
    factory: (
      thisArg: Source,
    ) => ILinearContainerBase<Entry<Key, T>, Source, IteratorT, ReverseT>,
  ) {
    super();
    this.data_ = factory(this as Temporary);
  }

  /**
   * @inheritDoc
   */
  public assign<
    InputIterator extends Readonly<
      IForwardIterator<IPair<Key, T>, InputIterator>
    >,
  >(first: InputIterator, last: InputIterator): void {
    // INSERT
    this.clear();
    this.insert(first, last);
  }

  /**
   * @inheritDoc
   */
  public clear(): void {
    // TO BE ABSTRACT
    this.data_.clear();
  }

  /* =========================================================
        ACCESSORS
            - ITERATORS
            - ELEMENTS
    ============================================================
        ITERATOR
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract find(key: Key): IteratorT;

  /**
   * @inheritDoc
   */
  public begin(): IteratorT {
    return this.data_.begin();
  }

  /**
   * @inheritDoc
   */
  public end(): IteratorT {
    return this.data_.end();
  }

  /* ---------------------------------------------------------
        ELEMENTS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public has(key: Key): boolean {
    return !this.find(key).equals(this.end());
  }

  /**
   * @inheritDoc
   */
  public abstract count(key: Key): number;

  /**
   * @inheritDoc
   */
  public size(): number {
    return this.data_.size();
  }

  /* =========================================================
        ELEMENTS I/O
            - INSERT
            - ERASE
            - UTILITY
            - POST-PROCESS
    ============================================================
        INSERT
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public push(...items: IPair<Key, T>[]): number {
    // INSERT BY RANGE
    const first = new NativeArrayIterator(items, 0);
    const last = new NativeArrayIterator(items, items.length);

    this.insert(first, last);

    // RETURN SIZE
    return this.size();
  }

  public abstract emplace(
    key: Key,
    val: T,
  ): MapContainer.InsertRet<Key, T, Unique, Source, IteratorT, ReverseT>;
  public abstract emplace_hint(hint: IteratorT, key: Key, val: T): IteratorT;

  public insert(
    pair: IPair<Key, T>,
  ): MapContainer.InsertRet<Key, T, Unique, Source, IteratorT, ReverseT>;
  public insert(hint: IteratorT, pair: IPair<Key, T>): IteratorT;
  public insert<
    InputIterator extends Readonly<
      IForwardIterator<IPair<Key, T>, InputIterator>
    >,
  >(first: InputIterator, last: InputIterator): void;

  public insert(...args: any[]): any {
    if (args.length === 1) return this.emplace(args[0].first, args[0].second);
    else if (
      args[0].next instanceof Function &&
      args[1].next instanceof Function
    )
      return this._Insert_by_range(args[0], args[1]);
    else return this.emplace_hint(args[0], args[1].first, args[1].second);
  }

  protected abstract _Insert_by_range<
    InputIterator extends Readonly<
      IForwardIterator<IPair<Key, T>, InputIterator>
    >,
  >(first: InputIterator, last: InputIterator): void;

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public erase(key: Key): number;

  /**
   * @inheritDoc
   */
  public erase(it: IteratorT): IteratorT;

  /**
   * @inheritDoc
   */
  public erase(begin: IteratorT, end: IteratorT): IteratorT;

  public erase(...args: any[]): any {
    if (
      args.length === 1 &&
      (args[0] instanceof this.end().constructor === false ||
        ((args[0] as IteratorT).source() as any) !== this)
    )
      return this._Erase_by_key(args[0]);
    else if (args.length === 1) return this._Erase_by_range(args[0]);
    else return this._Erase_by_range(args[0], args[1]);
  }

  protected abstract _Erase_by_key(key: Key): number;

  protected _Erase_by_range(
    first: IteratorT,
    last: IteratorT = first.next(),
  ): IteratorT {
    // ERASE
    const it = this.data_.erase(first, last);

    // POST-PROCESS
    this._Handle_erase(first, last);

    return it;
  }

  /* ---------------------------------------------------------
        UTILITY
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public abstract swap(obj: Source): void;

  /**
   * Merge two containers.
   *
   * @param source Source container to transfer.
   */
  public abstract merge(source: Source): void;

  /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
  protected abstract _Handle_insert(first: IteratorT, last: IteratorT): void;

  protected abstract _Handle_erase(first: IteratorT, last: IteratorT): void;
}

/**
 *
 */
export namespace MapContainer {
  /**
   * Return type of {@link MapContainer.insert}
   */
  export type InsertRet<
    Key,
    T,
    Unique extends boolean,
    SourceT extends MapContainer<Key, T, Unique, SourceT, IteratorT, Reverse>,
    IteratorT extends Iterator<Key, T, Unique, SourceT, IteratorT, Reverse>,
    Reverse extends ReverseIterator<
      Key,
      T,
      Unique,
      SourceT,
      IteratorT,
      Reverse
    >,
  > = Unique extends true ? Pair<IteratorT, boolean> : IteratorT;

  /**
   * Iterator of {@link MapContainer}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    Key,
    T,
    Unique extends boolean,
    SourceT extends MapContainer<Key, T, Unique, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, Unique, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<
      Key,
      T,
      Unique,
      SourceT,
      IteratorT,
      ReverseT
    >,
  > = IteratorBase<Key, T> &
    Readonly<
      IContainer.Iterator<
        Entry<Key, T>,
        SourceT,
        IteratorT,
        ReverseT,
        IPair<Key, T>
      >
    >;

  /**
   * Reverse iterator of {@link MapContainer}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type ReverseIterator<
    Key,
    T,
    Unique extends boolean,
    SourceT extends MapContainer<Key, T, Unique, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, Unique, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<
      Key,
      T,
      Unique,
      SourceT,
      IteratorT,
      ReverseT
    >,
  > = IteratorBase<Key, T> &
    Readonly<
      IContainer.ReverseIterator<
        Entry<Key, T>,
        SourceT,
        IteratorT,
        ReverseT,
        IPair<Key, T>
      >
    >;

  interface IteratorBase<Key, T> {
    /**
     * The first, key element.
     */
    readonly first: Key;

    /**
     * The second, stored element.
     */
    second: T;
  }
}
