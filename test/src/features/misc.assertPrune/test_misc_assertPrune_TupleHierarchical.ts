import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TupleHierarchical = _test_misc_assertPrune(
  TypeGuardError,
)("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)((input) =>
  typia.misc.assertPrune<TupleHierarchical>(input),
);
