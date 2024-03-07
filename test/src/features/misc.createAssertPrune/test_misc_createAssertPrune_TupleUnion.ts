import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TupleUnion = _test_misc_assertPrune(
  TypeGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)(
  typia.misc.createAssertPrune<TupleUnion>(),
);
