import * as std from "../../index";
import { Generator } from "../internal/Generator";

export function test_merges(): void {
  _Test_merge();
  _Test_inplace_merge();
  _Test_includes();
  _Test_set_union();
  _Test_set_intersection();
  _Test_set_difference();
  _Test_set_symmetric_difference();
}

function _Test_merge(): void {
  const v1: std.Vector<number> = Generator.arrange(new std.Vector(), 100);
  const v2: std.Deque<number> = Generator.arrange(new std.Deque(), 50);

  const out: std.List<number> = new std.List();
  std.ranges.merge(v1, v2, std.back_inserter(out));

  const solution: std.TreeMultiSet<number> = new std.TreeMultiSet([
    ...v1,
    ...v2,
  ]);
  if (std.ranges.equal(out, solution) === false)
    throw new Error("Bug on std.merge()");
}

function _Test_inplace_merge(): void {
  const v: std.Vector<number> = Generator.fill(new std.Vector(), 400);
  const pos: std.Vector.Iterator<number> = v.nth(200);

  std.sort(v.begin(), pos);
  std.sort(pos, v.end());

  std.ranges.inplace_merge(v, pos);
  if (std.ranges.is_sorted(v) === false)
    throw new Error("Bug on std.inplace_merge()");
}

function _Test_includes(): void {
  const v1: std.Vector<number> = Generator.arrange(new std.Vector(), 100);
  const v2: std.Vector<number> = std.Vector.wrap(
    v1.data().slice(std.randint(10, 30), std.randint(10, 30)),
  );

  if (std.ranges.includes(v1, v2) === false)
    throw new Error("Bug on std.includes()");
}

function _Test_set_union(): void {
  const v1: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);
  const v2: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);

  const out: std.List<number> = new std.List();
  std.ranges.set_union(v1, v2, std.back_inserter(out));

  const solution: std.TreeSet<number> = new std.TreeSet([...v1, ...v2]);
  if (std.ranges.equal(out, solution) === false)
    throw new Error("Bug on std.set_union()");
}

function _Test_set_intersection(): void {
  const v1: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);
  const v2: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);

  const out: std.Vector<number> = new std.Vector();
  std.ranges.set_intersection(v1, v2, std.back_inserter(out));

  const solution: std.Deque<number> = new std.Deque();
  for (const elem of v1) if (v2.has(elem) === true) solution.push_back(elem);

  if (std.ranges.equal(out, solution) === false)
    throw new Error("Bug on std.set_intersection()");
}

function _Test_set_difference(): void {
  const v1: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);
  const v2: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);

  const out: std.Deque<number> = new std.Deque();
  std.ranges.set_difference(v1, v2, std.back_inserter(out));

  const solution: std.Vector<number> = new std.Vector();
  for (const elem of v1) if (v2.has(elem) === false) solution.push_back(elem);

  if (std.ranges.equal(out, solution) === false)
    throw new Error("Bug on std.set_difference()");
}

function _Test_set_symmetric_difference(): void {
  const v1: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);
  const v2: std.TreeSet<number> = Generator.fill(new std.TreeSet(), 200);

  const out: std.List<number> = new std.List();
  std.ranges.set_symmetric_difference(v1, v2, std.back_inserter(out));

  const solution: std.Deque<number> = new std.Deque();
  for (const elem of v1) if (v2.has(elem) === false) solution.push_back(elem);
  for (const elem of v2) if (v1.has(elem) === false) solution.push_back(elem);
  std.ranges.sort(solution);

  if (std.ranges.equal(out, solution) === false)
    throw new Error("Bug on std.set_symmetric_difference()");
}
