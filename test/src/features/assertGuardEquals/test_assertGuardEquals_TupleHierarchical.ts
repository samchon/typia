import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertGuardEquals_TupleHierarchical = _test_assertGuardEquals(
  TypeGuardError,
)("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.assertGuardEquals<TupleHierarchical>(input),
);
