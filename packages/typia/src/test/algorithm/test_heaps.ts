import * as std from "../../index";
import { Generator } from "../internal/Generator";

export function test_heaps(): void {
  for (let i: number = 0; i < 100; ++i) {
    const elems: std.Vector<number> = Generator.fill(new std.Vector(), 100);
    std.ranges.make_heap(elems);

    if (std.ranges.is_heap(elems) === false)
      throw new Error("Bug on std.push_heap() or std.is_heap()");

    std.ranges.sort_heap(elems);
    if (std.ranges.is_sorted(elems) === false)
      throw new Error("Bug on std.pop_heap()");
  }

  _Test_c_plus_plus();
  _Test_cpp_reference();
}

function _Test_c_plus_plus(): void {
  const v: std.Vector<number> = new std.Vector([10, 20, 30, 5, 15]);

  std.ranges.make_heap(v);
  if (v.front() !== 30 || std.ranges.is_heap(v) === false)
    throw new Error("Bug on std.make_heap()");

  std.ranges.pop_heap(v);
  v.pop_back();
  if (v.front() !== 20) throw new Error("Bug on std.pop_heap()");

  v.push_back(99);
  std.ranges.push_heap(v);
  if (v.front() !== 99) throw new Error("Bug on std.push_heap()");

  std.ranges.sort_heap(v);
  if (std.ranges.is_sorted(v) === false)
    throw new Error("Bug on std.sort_heap()");
}

function _Test_cpp_reference(): void {
  const v: std.Vector<number> = new std.Vector();
  v.push(3, 1, 4, 1, 5, 9);

  std.ranges.make_heap(v);
  if (std.ranges.equal(v, [9, 5, 4, 1, 1, 3]) === false)
    throw new Error("Bug on std.make_heap()");

  std.ranges.pop_heap(v);
  if (v.back() !== 9) throw new Error("Bug on std.pop_heap()");

  v.pop_back();
  if (std.ranges.equal(v, [5, 3, 4, 1, 1]) === false)
    throw new Error("Bug on std.pop_heap() & Vector.pop()");
}
