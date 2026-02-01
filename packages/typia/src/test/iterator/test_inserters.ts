import * as std from "../../index";

export function test_inserters(): void {
  const s: std.TreeSet<number> = new std.TreeSet();
  const v: std.Vector<number> = new std.Vector();

  v.push_back(1);
  v.push_back(2);

  std.set_union(
    s.begin(),
    s.end(),
    v.begin(),
    v.end(),
    std.inserter(s, s.end()),
  );
}
