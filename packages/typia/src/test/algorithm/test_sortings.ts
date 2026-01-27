import * as std from "../../index";
import { Cube } from "../internal/Cube";

export function test_sortings(): void {
  _Test_atomic_sorting();
  _Test_object_sorting();
}

function _Test_atomic_sorting(): void {
  const array: number[] = [];
  for (let i: number = 1; i <= 15; ++i)
    for (let j: number = 0; j < 3; ++j) array.push(i);

  std.ranges.shuffle(array);
  std.ranges.stable_sort(array);

  if (std.ranges.is_sorted(array) === false)
    throw new Error("Bug on std.stable_sort()");
}

function _Test_object_sorting(): void {
  //----
  // CONSTRUCT ITEMS
  //----
  const cubes: std.Deque<Cube> = new std.Deque<Cube>();
  for (let i: number = 0; i < 1000; ++i) cubes.push_back(new Cube());

  //----
  // SORT BY Cube.less
  //----
  // DO SORT
  std.ranges.sort(cubes);

  // VALIDATION
  if (std.ranges.is_sorted(cubes) === false)
    throw new Error("Bug on std.sort() with IComparable.less()");

  //----
  // SORT BY inline function
  //----
  // DECLARE INLINE FUNCTION
  const inline_function = (cx: Cube, cy: Cube) => {
    if (cx.x !== cy.x) return cx.x < cy.x;
    else if (cx.y !== cy.y) return cx.y < cy.y;
    else return cx.z < cy.z;
  };

  // DO SORT
  std.ranges.sort(cubes, inline_function);

  // VALIDATION
  if (std.ranges.is_sorted(cubes, inline_function) === false)
    throw new Error("Bug on std.sort() with parametric comparator");
}
