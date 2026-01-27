import * as std from "../../index";

const SIZE = 1000;
const MID = 561;

export function test_iterations(): void {
  _Test_for_of_iterations();
  _Test_union_of_iterations();
  _Test_equals();
  _Test_mismatch();
  _Test_count();
  _Test_lexicographical_compare();
}

function _Test_for_of_iterations(): void {
  const items = new std.Vector<number>();
  items.assign(1000, 1.5);

  let sum: number = 0;
  const fn = (val: number): void => {
    sum += val;
  };

  std.ranges.for_each(items, fn);
  std.for_each_n(items.begin(), items.size(), fn);

  if (sum !== 1.5 * 1000 * 2)
    throw new Error("Bug on std.for_each() or std.for_each_n()");
}

function _Test_union_of_iterations(): void {
  const items = new std.Vector<number>([2, 3, 4]);
  const flags = new std.Vector<boolean>([
    std.ranges.all_of(items, (val) => val > 1.0),
    std.ranges.any_of(items, (val) => val === 2.0),
    std.ranges.none_of(items, (val) => val !== Math.floor(val)),
  ]);

  const ret: boolean = std.ranges.all_of(flags, (val) => val);
  if (ret === false)
    throw new Error("Bug on one of them: all_of(), any_of() or none_of()");
}

function _Test_equals(): void {
  const v1 = new std.Vector<number>();
  const v2 = new std.Vector<number>();

  for (let i: number = 0; i < SIZE; ++i) v1.push_back(Math.random());
  v2.assign(v1.begin(), v1.end());

  for (let i: number = MID; i < SIZE; ++i) v2.set(i, v2.at(i) * 100.0);

  if (std.equal(v1.begin(), v1.begin().advance(MID), v2.begin()) === false)
    throw new Error("Bug on std.equal(); true -> false");
  else if (std.ranges.equal(v1, v2) === true)
    throw new Error("Bug on std.equal(); false -> true");
}

function _Test_lexicographical_compare(): void {
  const v1 = new std.Vector<number>([1, 1, 2, 3]);
  const v2 = new std.Vector<number>([1, 1, 3, 3]);

  if (
    std.lexicographical_compare(v1.begin(), v1.end(), v2.begin(), v2.end()) ===
    false
  )
    throw new Error("Bug on std.lexicographical_compare()");
}

function _Test_mismatch(): void {
  const v1 = new std.Vector<number>();
  const v2 = new std.Vector<number>();

  for (let i: number = 0; i < SIZE; ++i) v1.push_back(Math.random());
  v2.assign(v1.begin(), v1.end());

  v2.set(MID, -90);

  const pair = std.mismatch(v1.begin(), v1.end(), v2.begin());
  if (pair.first.index() !== pair.second.index() || pair.first.index() !== MID)
    throw new Error("Bug on std.mismatch()");
}

function _Test_count(): void {
  const v = new std.Vector<number>();
  for (let i: number = 0; i < SIZE; ++i) v.push_back(Math.random());

  const fn = function (val: number): boolean {
    return val >= 0.5;
  };

  let cnt: number = 0;
  for (const val of v) if (fn(val) === true) ++cnt;

  if (std.count_if(v.begin(), v.end(), fn) !== cnt)
    throw new Error("Bug on std.count_if()");
}
