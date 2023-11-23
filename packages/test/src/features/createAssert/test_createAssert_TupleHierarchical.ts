import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssert_TupleHierarchical = _test_assert(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
  typia.createAssert<TupleHierarchical>(),
);
