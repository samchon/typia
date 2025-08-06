import typia from "typia";

export const test_issue_1583_set_map_alias_validate = (): void => {
  const m: M = new Map();
  m.set("first", 1);

  const s: S = new Set();
  s.set("someothing");

  typia.assert(m);
  typia.assert(s);
};

type M = Map<string, number>;
type S = Set<string>;
