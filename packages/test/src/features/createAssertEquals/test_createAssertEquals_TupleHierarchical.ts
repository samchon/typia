import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertEquals_TupleHierarchical = _test_assertEquals(
  "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
  typia.createAssertEquals<TupleHierarchical>(),
);
