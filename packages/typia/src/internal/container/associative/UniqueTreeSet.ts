//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { UniqueSet } from "../../../base/container/UniqueSet";
import { Pair } from "../../../utility/Pair";
import { Comparator } from "../../functional/Comparator";
import { Temporary } from "../../functional/Temporary";
import { ITreeContainer } from "./ITreeContainer";

/**
 * Basic tree set blocking duplicated key.
 *
 * @template Key Key type
 * @template Source Derived type extending this {@link UniqueTreeSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export abstract class UniqueTreeSet<
    Key,
    Source extends UniqueTreeSet<Key, Source, IteratorT, ReverseT>,
    IteratorT extends UniqueSet.Iterator<Key, Source, IteratorT, ReverseT>,
    ReverseT extends UniqueSet.ReverseIterator<
      Key,
      Source,
      IteratorT,
      ReverseT
    >,
  >
  extends UniqueSet<Key, Source, IteratorT, ReverseT>
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
  public abstract lower_bound(key: Key): IteratorT;

  /**
   * @inheritDoc
   */
  public abstract upper_bound(key: Key): IteratorT;

  /**
   * @inheritDoc
   */
  public equal_range(key: Key): Pair<IteratorT, IteratorT> {
    const it: IteratorT = this.lower_bound(key);
    return new Pair(
      it,
      !it.equals(this.end()) && this._Key_eq(key, it.value) ? it.next() : it,
    );
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
  protected _Insert_by_key(key: Key): Pair<IteratorT, boolean> {
    // FIND POSITION TO INSERT
    let it: IteratorT = this.lower_bound(key);
    if (!it.equals(this.end()) && this._Key_eq(it.value, key))
      return new Pair(it, false);

    // ITERATOR TO RETURN
    it = this.data_.insert(it, key);
    this._Handle_insert(it, it.next());

    return new Pair(it, true);
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
    } else return this._Insert_by_key(key).first;
  }
}
