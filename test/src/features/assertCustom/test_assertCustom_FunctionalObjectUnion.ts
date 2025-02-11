import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_assertCustom_FunctionalObjectUnion = _test_assert(
  CustomGuardError,
)("FunctionalObjectUnion")<FunctionalObjectUnion>(FunctionalObjectUnion)(
  (input) =>
    typia.assert<FunctionalObjectUnion>(input, (p) => new CustomGuardError(p)),
);
