import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createAssertGuard_TupleUnion = _test_assertGuard(
  TypeGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)(typia.createAssertGuard<TupleUnion>());
