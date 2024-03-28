import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertGuardCustom_FunctionalTupleUnion = _test_assertGuard(
  CustomGuardError,
)("FunctionalTupleUnion")<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
  typia.assertGuard<FunctionalTupleUnion>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
