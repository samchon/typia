import * as std from "../../index";

export function test_utilities() {
  _Test_pairs();
  _Test_node();
}

function _Test_pairs(): void {
  const x = std.make_pair(1, 2);
  const y = std.make_pair(1, 2);
  const z = std.make_pair(1, 3);

  if (x.hashCode() !== y.hashCode() || x.hashCode() === z.hashCode())
    throw new Error("Bug on Pair.hashCode()");
  else if (x.equals(y) === false || x.equals(z) === true)
    throw new Error("Bug on Pair.equals()");
}

function _Test_node(): void {
  if (std.is_node() === false)
    throw new Error("Bug on is_node(): wrong result");
}
