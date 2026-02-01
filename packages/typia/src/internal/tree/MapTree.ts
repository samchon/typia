//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { ITreeMap } from "../../base/container/ITreeMap";
import { IPair } from "../../utility/IPair";
import { Pair } from "../../utility/Pair";
import { MapElementList } from "../container/associative/MapElementList";
import { Comparator } from "../functional/Comparator";
import { XTree } from "./XTree";
import { XTreeNode } from "./XTreeNode";

export abstract class MapTree<
  Key,
  T,
  Unique extends boolean,
  Source extends ITreeMap<
    Key,
    T,
    Unique,
    Source,
    MapElementList.Iterator<Key, T, Unique, Source>,
    MapElementList.ReverseIterator<Key, T, Unique, Source>
  >,
> extends XTree<MapElementList.Iterator<Key, T, Unique, Source>> {
  private source_: Source;

  private key_compare_: Comparator<Key>;
  private key_eq_: Comparator<Key>;
  private value_compare_: Comparator<IPair<Key, T>>;

  /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
  public constructor(
    source: Source,
    comp: Comparator<Key>,
    it_comp: Comparator<MapElementList.Iterator<Key, T, Unique, Source>>,
  ) {
    super(it_comp);
    this.source_ = source;

    this.key_compare_ = comp;
    this.key_eq_ = function (x: Key, y: Key): boolean {
      return !comp(x, y) && !comp(y, x);
    };
    this.value_compare_ = function (
      x: IPair<Key, T>,
      y: IPair<Key, T>,
    ): boolean {
      return comp(x.first, y.first);
    };
  }

  /**
   * @internal
   */
  public static _Swap_source<
    Key,
    T,
    Unique extends boolean,
    Source extends ITreeMap<
      Key,
      T,
      Unique,
      Source,
      MapElementList.Iterator<Key, T, Unique, Source>,
      MapElementList.ReverseIterator<Key, T, Unique, Source>
    >,
  >(
    x: MapTree<Key, T, Unique, Source>,
    y: MapTree<Key, T, Unique, Source>,
  ): void {
    [x.source_, y.source_] = [y.source_, x.source_];
  }

  /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
  public get_by_key(
    key: Key,
  ): XTreeNode<MapElementList.Iterator<Key, T, Unique, Source>> | null {
    const ret = this.nearest_by_key(key);
    if (ret === null || !this.key_eq_(key, ret.value.first)) return null;
    else return ret;
  }
  public abstract nearest_by_key(
    key: Key,
  ): XTreeNode<MapElementList.Iterator<Key, T, Unique, Source>> | null;

  public lower_bound(
    key: Key,
  ): MapElementList.Iterator<Key, T, Unique, Source> {
    const node: XTreeNode<
      MapElementList.Iterator<Key, T, Unique, Source>
    > | null = this.nearest_by_key(key);

    if (node === null) return this.source().end();
    else if (this.key_comp()(node.value.first, key))
      // it < key
      return node.value.next();
    else return node.value;
  }

  public abstract upper_bound(
    key: Key,
  ): MapElementList.Iterator<Key, T, Unique, Source>;

  public equal_range(
    key: Key,
  ): Pair<
    MapElementList.Iterator<Key, T, Unique, Source>,
    MapElementList.Iterator<Key, T, Unique, Source>
  > {
    return new Pair(this.lower_bound(key), this.upper_bound(key));
  }

  /* ---------------------------------------------------------
        ACCECSSORS
    --------------------------------------------------------- */
  public source(): Source {
    return this.source_;
  }

  public key_comp(): Comparator<Key> {
    return this.key_compare_;
  }

  public key_eq(): Comparator<Key> {
    return this.key_eq_;
  }

  public value_comp(): Comparator<IPair<Key, T>> {
    return this.value_compare_;
  }
}
