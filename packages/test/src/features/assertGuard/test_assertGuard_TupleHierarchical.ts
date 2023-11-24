import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertGuard_TupleHierarchical = _test_assertGuard(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.assertGuard<TupleHierarchical>(input),
);
