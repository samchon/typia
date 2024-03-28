import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertEquals_TupleHierarchical = _test_assertEquals(
  TypeGuardError,
)("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.assertEquals<TupleHierarchical>(input),
);
