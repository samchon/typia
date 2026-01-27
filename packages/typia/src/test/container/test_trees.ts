import * as std from "../../index";
import { Temporary } from "../../internal/functional/Temporary";

export function test_trees(): void {
  _Test_tree_set(new std.TreeSet<number>());
  _Test_tree_set(new std.experimental.FlatSet<number>());
  _Test_tree_set(new std.TreeMultiSet<number>());
  _Test_tree_set(new std.experimental.FlatMultiSet<number>());

  _Test_tree_map(new std.TreeMap<number, number>());
  _Test_tree_map(new std.experimental.FlatMap<number, number>());
  _Test_tree_map(new std.TreeMultiMap<number, number>());
  _Test_tree_map(new std.experimental.FlatMultiMap<number, number>());

  _Test_tree_set_inserts_and_erases();
}

function _Test_tree_set_inserts_and_erases(): void {
  for (let k = 0; k < 100; ++k) {
    const set: std.TreeSet<number> = new std.TreeSet();
    for (let i = 0; i < 100; ++i) set.insert(std.randint(0, 10000));

    for (const val of set)
      if (set.has(val) === false)
        throw new Error(
          `Bug on ${set.constructor.name}.has(): failed to detect stored element.`,
        );

    while (!set.empty()) {
      const advance: number = std.randint(0, set.size() - 1);
      const it: std.TreeSet.Iterator<number> = std.advance(
        set.begin(),
        advance,
      );

      set.erase(it);
      if (set.has(it.value))
        throw new Error(
          `Bug on ${set.constructor.name}.has(): detected deleted element.`,
        );
    }
  }
}

function _Test_tree_set<
  Unique extends boolean,
  Source extends std.base.ITreeSet<number, Unique, Source, IteratorT, ReverseT>,
  IteratorT extends std.base.SetContainer.Iterator<
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.SetContainer.ReverseIterator<
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
>(set: Source): void {
  for (let i: number = 0; i < 1000; ++i)
    set.push(Math.floor(Math.random() * 100));

  // VALIDATE SORTING
  if (std.ranges.is_sorted(set) === false)
    throw new Error(
      `Bug on ${set.constructor.name}: stored elements are not sorted.`,
    );

  // VALIDATE FIND
  for (let i: number = 0; i < 100; ++i) {
    const val: number = Math.floor(Math.random() * 100);

    const alg_it: IteratorT = std.ranges.find(set, <Temporary>val) as Temporary;
    const set_it: IteratorT = set.find(val);

    if (alg_it === set.end())
      if (set_it === set.end()) continue;
      else
        throw new Error(
          `Bug on ${set.constructor.name}.find(): failed find anything.`,
        );
    else if (alg_it.value !== set_it.value)
      throw new Error(
        `Bug on ${set.constructor.name}.find(): found wrong element.`,
      );
  }
}

function _Test_tree_map<
  Unique extends boolean,
  Source extends std.base.ITreeMap<
    number,
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.MapContainer.Iterator<
    number,
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.MapContainer.ReverseIterator<
    number,
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
>(map: Source): void {
  for (let i: number = 0; i < 1000; ++i)
    map.push(std.make_pair(Math.floor(Math.random() * 100), 0));

  // VALIDATE SORTING
  if (std.ranges.is_sorted(map) === false)
    throw new Error(
      `Bug on ${map.constructor.name}: stored elements are not sorted.`,
    );

  // VALIDATE FIND
  for (let i: number = 0; i < 100; ++i) {
    const val: number = Math.floor(Math.random() * 100);

    const alg_it: IteratorT = std.ranges.find_if(
      map,
      (entry) => val === (entry as Temporary).first,
    ) as Temporary;
    const set_it = map.find(val);

    if (alg_it === map.end())
      if (set_it === map.end()) continue;
      else
        throw new Error(
          `Bug on ${map.constructor.name}.find(): failed find anything.`,
        );
    else if (alg_it.first !== set_it.first)
      throw new Error(
        `Bug on ${map.constructor.name}.find(): found wrong element.`,
      );
  }
}
