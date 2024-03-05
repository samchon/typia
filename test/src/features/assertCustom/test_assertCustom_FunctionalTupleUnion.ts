import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertCustom_FunctionalTupleUnion = _test_assert(
  CustomGuardError,
)("FunctionalTupleUnion")<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
  typia.assert<FunctionalTupleUnion>(input, (p) => new CustomGuardError(p)),
);
