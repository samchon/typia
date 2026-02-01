//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { MultiMap } from "../../../base/container/MultiMap";
import { IForwardIterator } from "../../../iterator/IForwardIterator";
import { Entry } from "../../../utility/Entry";
import { IPair } from "../../../utility/IPair";
import { Pair } from "../../../utility/Pair";
import { Comparator } from "../../functional/Comparator";
import { Temporary } from "../../functional/Temporary";
import { ITreeContainer } from "./ITreeContainer";

/**
 * Basic tree map allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiTreeMap}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class MultiTreeMap<
    Key,
    T,
    Source extends MultiTreeMap<Key, T, Source, IteratorT, ReverseT>,
    IteratorT extends MultiMap.Iterator<Key, T, Source, IteratorT, ReverseT>,
    ReverseT extends MultiMap.ReverseIterator<
      Key,
      T,
      Source,
      IteratorT,
      ReverseT
    >,
  >
  extends MultiMap<Key, T, Source, IteratorT, ReverseT>
  implements
    ITreeContainer<
      Key,
      Entry<Key, T>,
      Source,
      IteratorT,
      ReverseT,
      IPair<Key, T>
    >
{
  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public find(key: Key): IteratorT {
    const it: IteratorT = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(key, it.first)) return it;
    else return this.end();
  }

  /**
   * @inheritDoc
   */
  public count(key: Key): number {
    let it: IteratorT = this.find(key);
    let ret: number = 0;

    for (
      ;
      !it.equals(this.end()) && this._Key_eq(it.first, key);
      it = it.next()
    )
      ++ret;

    return ret;
  }

  /**
   * @inheritDoc
   */
  public abstract lower_bound(key: Key): IteratorT;

  /**
   * @inheritDoc
   */
  public abstract upper_bound(key: Key): IteratorT;

  /**
   * @inheritDoc
   */
  public equal_range(key: Key): Pair<IteratorT, IteratorT> {
    return new Pair(this.lower_bound(key), this.upper_bound(key));
  }

  /**
   * @inheritDoc
   */
  public abstract key_comp(): Comparator<Key>;

  /**
   * @inheritDoc
   */
  public value_comp(): Comparator<IPair<Key, T>> {
    return (x, y) => this.key_comp()(x.first, y.first);
  }

  protected _Key_eq(x: Key, y: Key): boolean {
    return !this.key_comp()(x, y) && !this.key_comp()(y, x);
  }

  /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public emplace(key: Key, val: T): IteratorT {
    // FIND POSITION TO INSERT
    let it: IteratorT = this.upper_bound(key);

    // ITERATOR TO RETURN
    it = this.data_.insert(it, new Entry(key, val));
    this._Handle_insert(it, it.next());

    return it;
  }

  /**
   * @inheritDoc
   */
  public emplace_hint(hint: IteratorT, key: Key, val: T): IteratorT {
    const elem: Entry<Key, T> = new Entry(key, val);
    const validate: boolean = ITreeContainer.emplacable<
      Key,
      Entry<Key, T>,
      Source,
      IteratorT,
      ReverseT,
      IPair<Key, T>
    >(this as Temporary, hint, elem);

    if (validate) {
      const it: IteratorT = this.data_.insert(hint, elem);
      this._Handle_insert(it, it.next());

      return it;
    } else return this.emplace(key, val);
  }

  protected _Insert_by_range<
    InputIterator extends Readonly<
      IForwardIterator<IPair<Key, T>, InputIterator>
    >,
  >(first: InputIterator, last: InputIterator): void {
    for (let it = first; !it.equals(last); it = it.next())
      this.emplace(it.value.first, it.value.second);
  }
}
