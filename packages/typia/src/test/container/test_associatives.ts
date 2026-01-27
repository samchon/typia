import * as std from "../../index";
import { Atomic } from "../internal/Atomic";

export function test_associatives(): void {
  //----
  // SET-CONTAINERS
  //----
  // UNIQUE-SETS
  _Test_unique_set(new std.HashSet<Atomic<number>>());
  _Test_unique_set(new std.TreeSet<Atomic<number>>());
  _Test_unique_set(new std.experimental.FlatSet<Atomic<number>>());

  // MULTI-SETS
  _Test_multi_set(new std.HashMultiSet<Atomic<number>>());
  _Test_multi_set(new std.TreeMultiSet<Atomic<number>>());
  _Test_multi_set(new std.experimental.FlatMultiSet<Atomic<number>>());

  //----
  // MAP-CONTAINERS
  //----
  // UNIQUE-MAPS
  _Test_unique_map(new std.HashMap<Atomic<string>, number>());
  _Test_unique_map(new std.TreeMap<Atomic<string>, number>());
  _Test_unique_map(new std.experimental.FlatMap<Atomic<string>, number>());

  // MULTI0-MAPS
  _Test_multi_map(new std.HashMultiMap<Atomic<string>, number>());
  _Test_multi_map(new std.TreeMultiMap<Atomic<string>, number>());
  _Test_multi_map(new std.experimental.FlatMultiMap<Atomic<string>, number>());
}

/* ---------------------------------------------------------
    SET CONTAINERS
--------------------------------------------------------- */
function _Test_unique_set<
  Unique extends boolean,
  Source extends std.base.SetContainer<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.SetContainer.Iterator<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.SetContainer.ReverseIterator<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
>(set: Source): void {
  // CONSTRUCT ELEMENTS
  _Construct_set(set);

  // DUPLICATED ?
  if (set.size() !== 11)
    throw new Error(
      `Bug on ${set.constructor.name}: wrong number of elements are stored.`,
    );

  let sum: number = 0;
  for (const elem of set) {
    // TO VALIDATE
    sum += elem.value;

    // RE-FIND THE ELEMENT BY ITS KEY WITH FIND() FUNCTION.
    const it = set.find(elem);
    if (it.equals(set.end()) === true)
      throw new Error(
        `Bug on ${set.constructor.name}.find(): failed to find anything.`,
      );
    else if (it.value.equals(elem) === false)
      throw new Error(
        `Bug on ${set.constructor.name}.find(): found wrong item.`,
      );
  }

  // RE-VALIDATE UNIQUENESS & RIGHT INSERTION
  if (sum !== 55)
    throw new Error(
      `Bug on ${set.constructor.name}: elements are not fully inserted.`,
    );
}

function _Test_multi_set<
  Unique extends boolean,
  Source extends std.base.SetContainer<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.SetContainer.Iterator<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.SetContainer.ReverseIterator<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
>(set: Source): void {
  // CONSTRUCT ELEMENTS
  _Construct_set(set);

  // DUPLICATED ?
  if (set.size() !== 3 * 11)
    throw new Error(
      `Bug on ${set.constructor.name}: wrong number of elements are stored.`,
    );

  let sum: number = 0;
  for (const elem of set) {
    // TO VALIDATE
    sum += elem.value;

    // RE-FIND THE ELEMENT BY ITS KEY WITH FIND() & COUNT() FUNCTION.
    const it = set.find(elem);
    const count = set.count(elem);

    if (it.equals(set.end()) === true)
      throw new Error(
        `Bug on ${set.constructor.name}: failed to find anything.`,
      );
    else if (it.value.equals(elem) === false)
      throw new Error(
        `Bug on ${set.constructor.name}.find(): found wrong item.`,
      );
    else if (count !== 3)
      throw new Error(
        `Bug on ${set.constructor.name}.count(): wrong number of duplicated items.`,
      );
  }

  // RE-VALIDATE DUPLICATION & RIGHT INSERTION
  if (sum !== 3 * 55)
    throw new Error(
      `Bug on ${set.constructor.name}: elements are not fully inserted.`,
    );
}

function _Construct_set<
  Unique extends boolean,
  Source extends std.base.SetContainer<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.SetContainer.Iterator<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.SetContainer.ReverseIterator<
    Atomic<number>,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
>(set: Source): void {
  // INSERT ELEMENTS
  for (let i: number = 0; i <= 10; ++i)
    for (let j: number = 0; j < 3; ++j) set.push(new Atomic<number>(i));

  // TEST SEQUENCE
  const vec = new std.Vector<Atomic<number>>(set.begin(), set.end());
  if (std.is_sorted(vec.begin(), vec.end()) === false)
    throw new Error(
      `Bug on ${set.constructor.name}: stored elements are not sorted.`,
    );
}

/* ---------------------------------------------------------
    MAP CONTAINERS
--------------------------------------------------------- */
function _Test_unique_map<
  Source extends std.base.UniqueMap<
    Atomic<string>,
    number,
    Source,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.MapContainer.Iterator<
    Atomic<string>,
    number,
    true,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.MapContainer.ReverseIterator<
    Atomic<string>,
    number,
    true,
    Source,
    IteratorT,
    ReverseT
  >,
>(map: Source): void {
  // CONSTRUCT ELEMENTS
  _Construct_map(map);

  // DUPLICATED ?
  if (map.size() !== 11)
    throw new Error(
      `Bug on ${map.constructor.name}: wrong number of elements are stored.`,
    );

  let sum: number = 0;
  for (const pair of map) {
    // TO VALIDATE
    sum += pair.second;

    // RE-FIND THE ELEMENT BY ITS KEY WITH FIND() FUNCTION.
    const it = map.find(pair.first);
    if (it.equals(map.end()) === true)
      throw new Error(
        `Bug on ${map.constructor.name}.find(): failed to find anything.`,
      );
    else if (it.first.equals(pair.first) === false)
      throw new Error(
        `Bug on ${map.constructor.name}.find(): found wrong item.`,
      );
  }

  // RE-VALIDATE UNIQUENESS & RIGHT INSERTION
  if (sum !== 55)
    throw new Error(
      `Bug on ${map.constructor.name}: elements are not fully inserted.`,
    );
}

function _Test_multi_map<
  Source extends std.base.MultiMap<
    Atomic<string>,
    number,
    Source,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.MapContainer.Iterator<
    Atomic<string>,
    number,
    false,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.MapContainer.ReverseIterator<
    Atomic<string>,
    number,
    false,
    Source,
    IteratorT,
    ReverseT
  >,
>(map: Source): void {
  // CONSTRUCT ELEMENTS
  _Construct_map(map);

  // DUPLICATED ?
  if (map.size() !== 3 * 11)
    throw new Error(
      `Bug on ${map.constructor.name}: wrong number of elements are stored.`,
    );

  let sum: number = 0;
  for (const pair of map) {
    // TO VALIDATE
    sum += pair.second;

    // RE-FIND THE ELEMENT BY ITS KEY WITH FIND() & COUNT() FUNCTION.
    const it = map.find(pair.first);
    const count = map.count(pair.first);

    if (it.equals(map.end()) === true)
      throw new Error(
        `Bug on ${map.constructor.name}.find(): failed to find anything.`,
      );
    else if (it.first.equals(pair.first) === false)
      throw new Error(
        `Bug on ${map.constructor.name}.find(): found wrong item.`,
      );
    else if (count !== 3)
      throw new Error(
        `Bug on ${map.constructor.name}.count(): wrong number of duplicated items.`,
      );
  }

  // RE-VALIDATE UNIQUENESS & RIGHT INSERTION
  if (sum !== 3 * 55)
    throw new Error(
      `Bug on ${map.constructor.name}: elements are not fully inserted.`,
    );
}

function _Construct_map<
  Unique extends boolean,
  Source extends std.base.MapContainer<
    Atomic<string>,
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.MapContainer.Iterator<
    Atomic<string>,
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.MapContainer.ReverseIterator<
    Atomic<string>,
    number,
    Unique,
    Source,
    IteratorT,
    ReverseT
  >,
>(map: Source): void {
  for (let i: number = 0; i <= 10; ++i)
    for (let j: number = 0; j < 3; ++j) {
      const key: Atomic<string> = new Atomic<string>(NUMBER_NAMES[i]);
      const value: number = i;

      map.push(std.make_pair(key, value));
    }
}

const NUMBER_NAMES: string[] = [
  "Zero",
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Nineth",
  "Tenth",
];
