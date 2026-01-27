//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { ErrorGenerator } from "../../internal/exception/ErrorGenerator";
import { IForwardIterator } from "../../iterator/IForwardIterator";
import { Entry } from "../../utility/Entry";
import { IPair } from "../../utility/IPair";
import { Pair } from "../../utility/Pair";
import { MapContainer } from "./MapContainer";

/**
 * Basic map container blocking duplicated key.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link UniqueMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class UniqueMap<
  Key,
  T,
  Source extends UniqueMap<Key, T, Source, Iterator, Reverse>,
  Iterator extends UniqueMap.Iterator<Key, T, Source, Iterator, Reverse>,
  Reverse extends UniqueMap.ReverseIterator<Key, T, Source, Iterator, Reverse>,
> extends MapContainer<Key, T, true, Source, Iterator, Reverse> {
  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public count(key: Key): number {
    return this.find(key).equals(this.end()) ? 0 : 1;
  }

  /**
   * Get a value.
   *
   * @param key Key to search for.
   * @return The value mapped by the key.
   */
  public get(key: Key): T {
    const it = this.find(key);
    if (it.equals(this.end()) === true)
      throw ErrorGenerator.key_nout_found(this, "get", key);

    return it.second;
  }

  /**
   * Take a value.
   *
   * Get a value, or set the value and returns it.
   *
   * @param key Key to search for.
   * @param generator Value generator when the matched key not found
   * @returns Value, anyway
   */
  public take(key: Key, generator: () => T): T {
    const it = this.find(key);
    return it.equals(this.end())
      ? this.emplace(key, generator()).first.second
      : it.second;
  }

  /**
   * Set a value with key.
   *
   * @param key Key to be mapped or search for.
   * @param val Value to insert or assign.
   */
  public set(key: Key, val: T): void {
    this.insert_or_assign(key, val);
  }

  /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
  /**
   * Construct and insert element.
   *
   * @param key Key to be mapped or search for.
   * @param value Value to emplace.
   * @return {@link Pair} of an iterator to the newly inserted element and `true`, if the specified *key* doesn't exist, otherwise {@link Pair} of iterator to the ordinary element and `false`.
   */
  public abstract emplace(key: Key, value: T): Pair<Iterator, boolean>;

  /**
   * Construct and insert element with hint.
   *
   * @param hint Hint for the position where the element can be inserted.
   * @param key Key of the new element.
   * @param val Value of the new element.
   * @return An iterator to the newly inserted element, if the specified key doesn't exist, otherwise an iterator to the ordinary element.
   */
  public abstract emplace_hint(hint: Iterator, key: Key, val: T): Iterator;

  /**
   * Insert an element.
   *
   * @param pair A tuple to be referenced for the insert.
   * @return {@link Pair} of an iterator to the newly inserted element and `true`, if the specified *key* doesn't exist, otherwise {@link Pair} of iterator to the ordinary element and `false`.
   */
  public insert(pair: IPair<Key, T>): Pair<Iterator, boolean>;

  /**
   * Insert an element with hint.
   *
   * @param hint Hint for the position where the element can be inserted.
   * @param pair A tuple to be referenced for the insert.
   * @return An iterator to the newly inserted element, if the specified key doesn't exist, otherwise an iterator to the ordinary element.
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

  protected _Insert_by_range<
    InputIterator extends Readonly<
      IForwardIterator<IPair<Key, T>, InputIterator>
    >,
  >(first: InputIterator, last: InputIterator): void {
    for (let it = first; !it.equals(last); it = it.next())
      this.emplace(it.value.first, it.value.second);
  }

  /* ---------------------------------------------------------
        ASSIGNS
    --------------------------------------------------------- */
  /**
   * Insert or assign an element.
   *
   * @param key Key to be mapped or search for.
   * @param value Value to insert or assign.
   * @return {@link Pair} of an iterator to the newly inserted element and `true`, if the specified *key* doesn't exist, otherwise {@link Pair} of iterator to the ordinary element and `false`.
   */
  public insert_or_assign(key: Key, value: T): Pair<Iterator, boolean>;

  /**
   * Insert or assign an element with hint.
   *
   * @param hint Hint for the position where the element can be inserted.
   * @param key Key to be mapped or search for.
   * @param value Value to insert or assign.
   * @return An iterator to the newly inserted element, if the specified key doesn't exist, otherwise an iterator to the ordinary element.
   */
  public insert_or_assign(hint: Iterator, key: Key, value: T): Iterator;

  public insert_or_assign(...args: any[]): any {
    if (args.length === 2) {
      return this._Insert_or_assign_with_key_value(args[0], args[1]);
    } else if (args.length === 3) {
      // INSERT OR ASSIGN AN ELEMENT
      return this._Insert_or_assign_with_hint(args[0], args[1], args[2]);
    }
  }

  private _Insert_or_assign_with_key_value(
    key: Key,
    value: T,
  ): Pair<Iterator, boolean> {
    const ret = this.emplace(key, value);
    if (ret.second === false) ret.first.second = value;

    return ret;
  }

  private _Insert_or_assign_with_hint(
    hint: Iterator,
    key: Key,
    value: T,
  ): Iterator {
    const ret = this.emplace_hint(hint, key, value);
    if (ret.second !== value) ret.second = value;

    return ret;
  }

  /* ---------------------------------------------------------
        ERASE
    --------------------------------------------------------- */
  /**
   * Extract an element by key.
   *
   * @param key Key to search for.
   * @return The extracted element.
   */
  public extract(key: Key): Entry<Key, T>;

  /**
   * Extract an element by iterator.
   *
   * @param pos The iterator to the element for extraction.
   * @return Iterator following the *pos*, strained by the extraction.
   */
  public extract(pos: Iterator): Iterator;

  public extract(param: Key | Iterator): any {
    if (param instanceof this.end().constructor)
      return this._Extract_by_iterator(param as Iterator);
    else return this._Extract_by_key(param as Key);
  }

  private _Extract_by_key(key: Key): Entry<Key, T> {
    const it = this.find(key);
    if (it.equals(this.end()) === true)
      throw ErrorGenerator.key_nout_found(this, "extract", key);

    const ret: Entry<Key, T> = it.value;
    this._Erase_by_range(it);

    return ret;
  }

  private _Extract_by_iterator(it: Iterator): Iterator {
    if (it.equals(this.end()) === true) return this.end();

    this._Erase_by_range(it);
    return it;
  }

  protected _Erase_by_key(key: Key): number {
    const it = this.find(key);
    if (it.equals(this.end()) === true) return 0;

    this._Erase_by_range(it);
    return 1;
  }

  /* ---------------------------------------------------------
        UTILITY
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public merge(source: Source): void {
    for (let it = source.begin(); !it.equals(source.end()); )
      if (this.has(it.first) === false) {
        this.insert(it.value);
        it = source.erase(it);
      } else it = it.next();
  }
}

/**
 *
 */
export namespace UniqueMap {
  /**
   * Iterator of {@link UniqueMap}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type Iterator<
    Key,
    T,
    SourceT extends UniqueMap<Key, T, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<Key, T, SourceT, IteratorT, ReverseT>,
  > = MapContainer.Iterator<Key, T, true, SourceT, IteratorT, ReverseT>;

  /**
   * Reverse iterator of {@link UniqueMap}
   *
   * @author Jenogho Nam <http://samchon.org>
   */
  export type ReverseIterator<
    Key,
    T,
    SourceT extends UniqueMap<Key, T, SourceT, IteratorT, ReverseT>,
    IteratorT extends Iterator<Key, T, SourceT, IteratorT, ReverseT>,
    ReverseT extends ReverseIterator<Key, T, SourceT, IteratorT, ReverseT>,
  > = MapContainer.ReverseIterator<Key, T, true, SourceT, IteratorT, ReverseT>;
}
