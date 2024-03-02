import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_assertGuardCustom_FunctionalObjectUnion = _test_assertGuard(
  CustomGuardError,
)("FunctionalObjectUnion")<FunctionalObjectUnion>(FunctionalObjectUnion)(
  (input) =>
    typia.assertGuard<FunctionalObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
