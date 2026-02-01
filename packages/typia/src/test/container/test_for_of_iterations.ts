import * as std from "../../index";

export function test_for_of_iterations(): void {
  // LINEAR CONTAINERS
  _Test_for_of_iteration(new std.Vector<number>());
  _Test_for_of_iteration(new std.Deque<number>());
  _Test_for_of_iteration(new std.List<number>());

  // ASSOCIATIVE CONTAINERS
  _Test_for_of_iteration(new std.TreeSet<number>());
  _Test_for_of_map_iteration();
}

function _Test_for_of_iteration<
  SourceT extends std.base.IContainer<number, SourceT, IteratorT, ReverseT>,
  IteratorT extends std.base.IContainer.Iterator<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.IContainer.ReverseIterator<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
>(vec: SourceT): void {
  //----
  // CONSTRUCTIONS
  //----
  // CONSTRUCT ITEMS TO VALIDATE
  const items: std.Vector<number> = new std.Vector(10, 0);
  std.iota(std.begin(items), std.end(items), 0);

  // PUSH THEM ALL TO THE CONTAINER
  vec.assign(std.begin(items), std.end(items));

  //----
  // VALIDATION
  //----
  let i: number = 0;

  for (const elem of vec)
    if (elem !== items.at(i++))
      throw new Error(`Bug on ${vec.constructor.name}[Symbol.iterator]().`);
}

function _Test_for_of_map_iteration(): void {
  //----
  // CONSTRUCTIONS
  //----
  // CONSTRUCT ITEMS TO VALIDATE
  const map = new std.TreeMap<number, number>();
  const items: std.Pair<number, number>[] = [];

  for (let i: number = 0; i < 10; ++i) items.push(std.make_pair(i, i));

  // PUSH THEM ALL TO THE CONTAINER
  map.push(...items);

  //----
  // VALIDATION
  //----
  let i: number = 0;

  for (const pair of map)
    if (std.equal_to(pair, items[i++]) === false)
      throw new Error("Bug on TreeMap[Symbol.iterator]().");
}
