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
import { Pair } from "../../utility/Pair";
import { Container } from "./Container";
import { IContainer } from "./IContainer";

/**
 * Basic set container.
 *
 * @template Key Key type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Derived type extending this {@link SetContainer}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class SetContainer<
    Key,
    Unique extends boolean,
    SourceT extends SetContainer<Key, Unique, SourceT, IteratorT, ReverseT>,
    IteratorT extends SetContainer.Iterator<
      Key,
      Unique,
      SourceT,
      IteratorT,
      ReverseT
    >,
    ReverseT extends SetContainer.ReverseIterator<
      Key,
      Unique,
      SourceT,
      IteratorT,
      ReverseT
    >,
  >
  extends Container<Key, SourceT, IteratorT, ReverseT, Key>
  implements IAssociativeContainer<Key, Key, SourceT, IteratorT, ReverseT, Key>
{
  protected data_: ILinearContainerBase<Key, SourceT, IteratorT, ReverseT>;

  /* ---------------------------------------------------------
        CONSTURCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  protected constructor(
    factory: (
      thisArg: SourceT,
    ) => ILinearContainerBase<Key, SourceT, IteratorT, ReverseT>,
  ) {
    super();
    this.data_ = factory(<Temporary>this);
  }

  /**
   * @inheritDoc
   */
  public assign<
    InputIterator extends Readonly<IForwardIterator<Key, InputIterator>>,
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
  public push(...items: Key[]): number {
    if (items.length === 0) return this.size();

    // INSERT BY RANGE
    const first: NativeArrayIterator<Key> = new NativeArrayIterator(items, 0);
    const last: NativeArrayIterator<Key> = new NativeArrayIterator(
      items,
      items.length,
    );

    this._Insert_by_range(first, last);

    // RETURN SIZE
    return this.size();
  }

  public insert(
    key: Key,
  ): SetContainer.InsertRet<Key, Unique, SourceT, IteratorT, ReverseT>;
  public insert(hint: IteratorT, key: Key): IteratorT;
  public insert<
    InputIterator extends Readonly<IForwardIterator<Key, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void;

  public insert(...args: any[]): any {
    if (args.length === 1) return this._Insert_by_key(args[0]);
    else if (
      args[0].next instanceof Function &&
      args[1].next instanceof Function
    )
      return this._Insert_by_range(args[0], args[1]);
    else return this._Insert_by_hint(args[0], args[1]);
  }

  protected abstract _Insert_by_key(
    key: Key,
  ): SetContainer.InsertRet<Key, Unique, SourceT, IteratorT, ReverseT>;
  protected abstract _Insert_by_hint(hint: IteratorT, key: Key): IteratorT;
  protected abstract _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<Key, InputIterator>>,
  >(begin: InputIterator, end: InputIterator): void;

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
  public erase(pos: IteratorT): IteratorT;

  /**
   * @inheritDoc
   */
  public erase(first: IteratorT, last: IteratorT): IteratorT;

  public erase(...args: any[]): any {
    if (
      args.length === 1 &&
      !(
        args[0] instanceof this.end().constructor &&
        (args[0] as IteratorT).source() === <any>this
      )
    )
      return this._Erase_by_val(args[0]);
    else if (args.length === 1) return this._Erase_by_range(args[0]);
    else return this._Erase_by_range(args[0], args[1]);
  }

  protected abstract _Erase_by_val(key: Key): number;

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
  public abstract swap(obj: SourceT): void;

  /**
   * @inheritDoc
   */
  public abstract merge(source: SourceT): void;

  /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
  protected abstract _Handle_insert(first: IteratorT, last: IteratorT): void;

  protected abstract _Handle_erase(first: IteratorT, last: IteratorT): void;
}

/**
 *
 */
export namespace SetContainer {
  /**
   * Return type of {@link SetContainer.insert}
   */
  export type InsertRet<
    Key,
    Unique extends boolean,
    Source extends SetContainer<Key, Unique, Source, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, Unique, Source, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<Key, Unique, Source, IteratorT, ReverseT>,
  > = Unique extends true ? Pair<IteratorT, boolean> : IteratorT;

  /**
   * Iterator of {@link SetContainer}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    Key,
    Unique extends boolean,
    SourceT extends SetContainer<Key, Unique, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, Unique, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<Key, Unique, SourceT, IteratorT, ReverseT>,
  > = Readonly<IContainer.Iterator<Key, SourceT, IteratorT, ReverseT, Key>>;

  /**
   * Reverse iterator of {@link SetContainer}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type ReverseIterator<
    Key,
    Unique extends boolean,
    SourceT extends SetContainer<Key, Unique, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, Unique, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<Key, Unique, SourceT, IteratorT, ReverseT>,
  > = Readonly<
    IContainer.ReverseIterator<Key, SourceT, IteratorT, ReverseT, Key>
  >;
}
