import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertGuard_TupleHierarchical = _test_assertGuard(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
  typia.createAssertGuard<TupleHierarchical>(),
);
