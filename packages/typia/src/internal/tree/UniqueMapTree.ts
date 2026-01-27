//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { MapElementList } from "../container/associative/MapElementList";
import { UniqueTreeMap } from "../container/associative/UniqueTreeMap";
import { Comparator } from "../functional/Comparator";
import { MapTree } from "./MapTree";
import { XTreeNode } from "./XTreeNode";

export class UniqueMapTree<
  Key,
  T,
  Source extends UniqueTreeMap<
    Key,
    T,
    Source,
    MapElementList.Iterator<Key, T, true, Source>,
    MapElementList.ReverseIterator<Key, T, true, Source>
  >,
> extends MapTree<Key, T, true, Source> {
  /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
  public constructor(source: Source, comp: Comparator<Key>) {
    super(source, comp, (x, y) => comp(x.first, y.first));
  }

  /* ---------------------------------------------------------
        FINDERS
    --------------------------------------------------------- */
  public nearest_by_key(
    key: Key,
  ): XTreeNode<MapElementList.Iterator<Key, T, true, Source>> | null {
    // NEED NOT TO ITERATE
    if (this.root_ === null) return null;

    //----
    // ITERATE
    //----
    let ret: XTreeNode<MapElementList.Iterator<Key, T, true, Source>> | null =
      this.root_;

    while (true) {
      // UNTIL MEET THE MATCHED VALUE OR FINAL BRANCH
      const it: MapElementList.Iterator<Key, T, true, Source> = ret.value;
      let my_node: XTreeNode<
        MapElementList.Iterator<Key, T, true, Source>
      > | null = null;

      // COMPARE
      if (this.key_comp()(key, it.first)) my_node = ret.left;
      else if (this.key_comp()(it.first, key)) my_node = ret.right;
      else return ret; // MATCHED VALUE

      // FINAL BRANCH? OR KEEP GOING
      if (my_node === null) break;
      else ret = my_node;
    }
    return ret; // DIFFERENT NODE
  }

  public upper_bound(key: Key): MapElementList.Iterator<Key, T, true, Source> {
    // FIND MATCHED NODE
    const node: XTreeNode<
      MapElementList.Iterator<Key, T, true, Source>
    > | null = this.nearest_by_key(key);
    if (node === null) return this.source().end();

    // MUST BE it.first > key
    const it: MapElementList.Iterator<Key, T, true, Source> = node.value;
    if (this.key_comp()(key, it.first)) return it;
    else return it.next();
  }
}
