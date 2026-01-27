//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { MultiSet } from "../../../base/container/MultiSet";
import { IForwardIterator } from "../../../iterator/IForwardIterator";
import { Pair } from "../../../utility/Pair";
import { Comparator } from "../../functional/Comparator";
import { Temporary } from "../../functional/Temporary";
import { ITreeContainer } from "./ITreeContainer";

/**
 * Basic tree set allowing duplicated keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiTreeSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class MultiTreeSet<
    Key,
    Source extends MultiTreeSet<Key, Source, IteratorT, ReverseT>,
    IteratorT extends MultiSet.Iterator<Key, Source, IteratorT, ReverseT>,
    ReverseT extends MultiSet.ReverseIterator<Key, Source, IteratorT, ReverseT>,
  >
  extends MultiSet<Key, Source, IteratorT, ReverseT>
  implements ITreeContainer<Key, Key, Source, IteratorT, ReverseT, Key>
{
  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public find(key: Key): IteratorT {
    const it: IteratorT = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(key, it.value)) return it;
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
      !it.equals(this.end()) && this._Key_eq(it.value, key);
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
  public value_comp(): Comparator<Key> {
    return this.key_comp();
  }

  protected _Key_eq(x: Key, y: Key): boolean {
    return !this.key_comp()(x, y) && !this.key_comp()(y, x);
  }

  /* ---------------------------------------------------------
        INSERT
    --------------------------------------------------------- */
  protected _Insert_by_key(key: Key): IteratorT {
    // FIND POSITION TO INSERT
    let it: IteratorT = this.upper_bound(key);

    // ITERATOR TO RETURN
    it = this.data_.insert(it, key);
    this._Handle_insert(it, it.next());

    return it;
  }

  protected _Insert_by_hint(hint: IteratorT, key: Key): IteratorT {
    const validate: boolean = ITreeContainer.emplacable<
      Key,
      Key,
      Source,
      IteratorT,
      ReverseT,
      Key
    >(this as Temporary, hint, key);

    if (validate) {
      const it: IteratorT = this.data_.insert(hint, key);
      this._Handle_insert(it, it.next());

      return it;
    } else return this._Insert_by_key(key);
  }

  protected _Insert_by_range<
    InputIterator extends Readonly<IForwardIterator<Key, InputIterator>>,
  >(first: InputIterator, last: InputIterator): void {
    for (let it = first; !it.equals(last); it = it.next())
      this._Insert_by_key(it.value);
  }
}
