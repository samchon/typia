import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_FunctionalTupleUnion = _test_assertGuard(
  TypeGuardError,
)("FunctionalTupleUnion")<FunctionalTupleUnion>(FunctionalTupleUnion)(
  typia.createAssertGuard<FunctionalTupleUnion>(),
);
