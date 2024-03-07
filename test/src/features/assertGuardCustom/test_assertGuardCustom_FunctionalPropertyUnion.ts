import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_FunctionalPropertyUnion = _test_assertGuard(
  CustomGuardError,
)("FunctionalPropertyUnion")<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
  (input) =>
    typia.assertGuard<FunctionalPropertyUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
