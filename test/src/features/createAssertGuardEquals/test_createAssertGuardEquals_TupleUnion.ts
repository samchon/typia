import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TupleUnion = _test_assertGuardEquals(
  TypeGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)(
  typia.createAssertGuardEquals<TupleUnion>(),
);
