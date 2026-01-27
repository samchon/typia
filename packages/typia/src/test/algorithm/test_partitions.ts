import * as std from "../../index";

export function test_partitions(): void {
  const v = new std.Vector<number>();
  for (let i: number = 0; i < 1000; ++i) v.push_back(i);

  std.ranges.partition(v, _Pred);

  if (std.all_of(v.begin(), v.begin().advance(500), _Pred) === false)
    throw new Error("Bug on std.partition().");
  else if (std.ranges.is_partitioned(v, _Pred) === false)
    throw new Error("Bug on std.is_partitioned().");
}

function _Pred(val: number): boolean {
  return val < 500;
}
