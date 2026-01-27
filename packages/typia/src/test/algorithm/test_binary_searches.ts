import * as std from "../../index";

export function test_binary_searches(): void {
  _Test_binary_search_of_atom();
  _Test_binary_search_of_pair();
}

function _Test_binary_search_of_atom(): void {
  const v: std.Vector<number> = new std.Vector();
  const s: std.TreeMultiSet<number> = new std.TreeMultiSet();

  //----
  // FILL VALUES
  //----
  // INSERT ELEMENTS
  for (let i: number = 0; i < 100; ++i) {
    const val: number = Math.random();

    v.push_back(val);
    s.insert(val);
  }

  // SORT VECTOR
  std.ranges.sort(v);

  //----
  // VALIDATE
  //----
  for (let i: number = 0; i < 10000; ++i) {
    const val: number = Math.random();

    const v_it = std.ranges.equal_range(v, val);
    const s_it = s.equal_range(val);

    // VALIDATE LOWER BOUND
    if (v_it.first.equals(v.end()) === true)
      if (s_it.first.equals(s.end()) === false)
        throw new Error(
          "Bug on std.lower_bound() or Set.lower_bound(); someone is out bound but the other is not.",
        );
      else continue;
    else if (v_it.first.value !== s_it.first.value)
      throw new Error(
        "Bug on std.lower_bound() or Set.lower_bound(); different value.",
      );

    // VALIDATE UPPER BOUND
    if (v_it.second.equals(v.end()) === true)
      if (s_it.second.equals(s.end()) === false)
        throw new Error(
          "Bug on std.upper_bound() or Set.upper_bound(); someone is out bound but the other is not.",
        );
      else continue;
    else if (v_it.second.value !== s_it.second.value)
      throw new Error(
        "Bug on std.upper_bound() or Set.upper_bound(); different value.",
      );
  }
}

function _Test_binary_search_of_pair(): void {
  const v: std.Vector<std.Pair<number, number>> = new std.Vector();
  const m: std.TreeMultiMap<number, number> = new std.TreeMultiMap();

  //----
  // FILL VALUES
  //----
  // INSERT ELEMENTS
  for (let i: number = 0; i < 100; ++i) {
    const pair = std.make_pair(Math.random(), 0);

    v.push_back(pair);
    m.insert(pair);
  }

  // SORT VECTOR
  std.ranges.sort(v, _Compare_numbers_pair);

  //----
  // VALIDATE
  //----
  for (let i: number = 0; i < 10000; ++i) {
    const pair = std.make_pair(Math.random(), 0);

    const v_it = std.ranges.equal_range(v, pair, _Compare_numbers_pair);
    const m_it = m.equal_range(pair.first);

    // VALIDATE LOWER BOUND
    if (v_it.first.equals(v.end()) === true)
      if (m_it.first.equals(m.end()) === false)
        throw new Error(
          "Bug on std.lower_bound() or Set.lower_bound(); someone is out bound but the other is not.",
        );
      else continue;
    else if (v_it.first.value.first !== m_it.first.first)
      throw new Error(
        "Bug on std.lower_bound() or Set.lower_bound(); different value.",
      );

    // VALIDATE UPPER BOUND
    if (v_it.second.equals(v.end()) === true)
      if (m_it.second.equals(m.end()) === false)
        throw new Error(
          "Bug on std.upper_bound() or Set.upper_bound(); someone is out bound but the other is not.",
        );
      else continue;
    else if (v_it.second.value.first !== m_it.second.first)
      throw new Error(
        "Bug on std.upper_bound() or Set.upper_bound(); different value.",
      );
  }
}

function _Compare_numbers_pair(
  x: std.Pair<number, number>,
  y: std.Pair<number, number>,
): boolean {
  return x.first < y.first;
}
