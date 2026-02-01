//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { IPair } from "../../utility/IPair";
import { MapContainer } from "./MapContainer";

/**
 * Basic map container allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class MultiMap<
  Key,
  T,
  Source extends MultiMap<Key, T, Source, Iterator, Reverse>,
  Iterator extends MultiMap.Iterator<Key, T, Source, Iterator, Reverse>,
  Reverse extends MultiMap.ReverseIterator<Key, T, Source, Iterator, Reverse>,
> extends MapContainer<Key, T, false, Source, Iterator, Reverse> {
  /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
  /**
   * Construct and insert an element.
   *
   * @param key Key to be mapped.
   * @param value Value to emplace.
   * @return An iterator to the newly inserted element.
   */
  public abstract emplace(key: Key, value: T): Iterator;

  /**
   * Construct and insert element with hint.
   *
   * @param hint Hint for the position where the element can be inserted.
   * @param key Key of the new element.
   * @param val Value of the new element.
   * @return An iterator to the newly inserted element.
   */
  public abstract emplace_hint(hint: Iterator, key: Key, val: T): Iterator;

  /**
   * Insert an element.
   *
   * @param pair A tuple to be referenced for the insert.
   * @return An iterator to the newly inserted element.
   */
  public insert(pair: IPair<Key, T>): Iterator;

  /**
   * Insert an element with hint.
   *
   * @param hint Hint for the position where the element can be inserted.
   * @param pair A tuple to be referenced for the insert.
   * @return An iterator to the newly inserted element.
   */
  public insert(hint: Iterator, pair: IPair<Key, T>): Iterator;

  /**
   * Insert range elements.
   *
   * @param first Input iterator of the first position.
   * @param last Input iteartor of the last position.
   */
  public insert<
    InputIterator extends Readonly<
      IForwardIterator<IPair<Key, T>, InputIterator>
    >,
  >(first: InputIterator, last: InputIterator): void;

  public insert(...args: any[]): any {
    return (super.insert as Function)(...args);
  }

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  protected abstract _Key_eq(x: Key, y: Key): boolean;

  protected _Erase_by_key(key: Key): number {
    const first = this.find(key);
    if (first.equals(this.end()) === true) return 0;

    let last = first.next();
    let ret: number = 1;

    while (!last.equals(this.end()) && this._Key_eq(key, last.first)) {
      last = last.next();
      ++ret;
    }
    this._Erase_by_range(first, last);
    return ret;
  }

  /* ---------------------------------------------------------
        UTILITY
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public merge(source: Source): void {
    this.insert(source.begin(), source.end());
    source.clear();
  }
}

/**
 *
 */
export namespace MultiMap {
  /**
   * Iterator of {@link MultiMap}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    Key,
    T,
    SourceT extends MultiMap<Key, T, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<Key, T, SourceT, IteratorT, ReverseT>,
  > = MapContainer.Iterator<Key, T, false, SourceT, IteratorT, ReverseT>;

  /**
   * Reverse iterator of {@link MultiMap}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type ReverseIterator<
    Key,
    T,
    SourceT extends MultiMap<Key, T, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<Key, T, SourceT, IteratorT, ReverseT>,
  > = MapContainer.ReverseIterator<Key, T, false, SourceT, IteratorT, ReverseT>;
}
