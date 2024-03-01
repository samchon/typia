import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assertGuardCustom_FunctionalTuple = _test_assertGuard(
  CustomGuardError,
)("FunctionalTuple")<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.assertGuard<FunctionalTuple>(input, (p) => new CustomGuardError(p)),
);
