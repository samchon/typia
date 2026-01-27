import * as std from "../../index";
import { Comparator } from "../../internal/functional/Comparator";
import { Atomic } from "../internal/Atomic";

export function test_comparisons(): void {
  const atoms = new std.Vector<Atomic<number>>();
  for (let i: number = 0; i < 10; ++i)
    for (let j: number = 0; j < 3; ++j) atoms.push(new Atomic<number>(i));

  for (const x of atoms)
    for (const y of atoms) {
      _Test_comparison_results(x, y, x.value === y.value, std.equal_to);
      _Test_comparison_results(x, y, x.value !== y.value, std.not_equal_to);
      _Test_comparison_results(x, y, x.value < y.value, std.less);
      _Test_comparison_results(x, y, x.value > y.value, std.greater);
      _Test_comparison_results(x, y, x.value <= y.value, std.less_equal);
      _Test_comparison_results(x, y, x.value >= y.value, std.greater_equal);
    }
}

function _Test_comparison_results<T>(
  x: T,
  y: T,
  bit: boolean,
  func: Comparator<T>,
): void {
  if (bit !== func(x, y)) throw new Error("Invalid comparison.");
}
