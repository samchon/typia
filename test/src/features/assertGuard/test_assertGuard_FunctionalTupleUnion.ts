import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertGuard_FunctionalTupleUnion = _test_assertGuard(
  TypeGuardError,
)("FunctionalTupleUnion")<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
  typia.assertGuard<FunctionalTupleUnion>(input),
);
