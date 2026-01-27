//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { get_uid } from "../../functional/uid";
import { MapElementList } from "../container/associative/MapElementList";
import { MultiTreeMap } from "../container/associative/MultiTreeMap";
import { Comparator } from "../functional/Comparator";
import { MapTree } from "./MapTree";
import { XTreeNode } from "./XTreeNode";

export class MultiMapTree<
  Key,
  T,
  Source extends MultiTreeMap<
    Key,
    T,
    Source,
    MapElementList.Iterator<Key, T, false, Source>,
    MapElementList.ReverseIterator<Key, T, false, Source>
  >,
> extends MapTree<Key, T, false, Source> {
  /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
  public constructor(source: Source, comp: Comparator<Key>) {
    super(
      source,
      comp,
      function (
        x: MapElementList.Iterator<Key, T, false, Source>,
        y: MapElementList.Iterator<Key, T, false, Source>,
      ): boolean {
        const ret: boolean = comp(x.first, y.first);

        if (!ret && !comp(y.first, x.first)) return get_uid(x) < get_uid(y);
        else return ret;
      },
    );
  }

  public insert(val: MapElementList.Iterator<Key, T, false, Source>): void {
    // ISSUE UID BEFORE INSERTION
    get_uid(val);
    super.insert(val);
  }

  /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
  private _Nearest_by_key(
    key: Key,
    equal_mover: (
      node: XTreeNode<MapElementList.Iterator<Key, T, false, Source>>,
    ) => XTreeNode<MapElementList.Iterator<Key, T, false, Source>> | null,
  ): XTreeNode<MapElementList.Iterator<Key, T, false, Source>> | null {
    // NEED NOT TO ITERATE
    if (this.root_ === null) return null;

    //----
    // ITERATE
    //----
    let ret: XTreeNode<MapElementList.Iterator<Key, T, false, Source>> =
      this.root_;
    let matched: XTreeNode<
      MapElementList.Iterator<Key, T, false, Source>
    > | null = null;

    while (true) {
      const it: MapElementList.Iterator<Key, T, false, Source> = ret.value;
      let my_node: XTreeNode<
        MapElementList.Iterator<Key, T, false, Source>
      > | null = null;

      // COMPARE
      if (this.key_comp()(key, it.first)) my_node = ret.left;
      else if (this.key_comp()(it.first, key)) my_node = ret.right;
      else {
        // EQUAL, RESERVE THAT POINT
        matched = ret;
        my_node = equal_mover(ret);
      }

      // ULTIL CHILD NODE EXISTS
      if (my_node === null) break;
      else ret = my_node;
    }

    // RETURNS -> MATCHED OR NOT
    return matched !== null ? matched : ret;
  }

  public nearest_by_key(
    key: Key,
  ): XTreeNode<MapElementList.Iterator<Key, T, false, Source>> | null {
    return this._Nearest_by_key(key, function (node) {
      return node.left;
    });
  }

  public upper_bound(key: Key): MapElementList.Iterator<Key, T, false, Source> {
    // FIND MATCHED NODE
    const node: XTreeNode<
      MapElementList.Iterator<Key, T, false, Source>
    > | null = this._Nearest_by_key(key, function (node) {
      return node.right;
    });
    if (node === null)
      // NOTHING
      return this.source().end();

    // MUST BE it.first > key
    const it: MapElementList.Iterator<Key, T, false, Source> = node.value;
    if (this.key_comp()(key, it.first)) return it;
    else return it.next();
  }
}
