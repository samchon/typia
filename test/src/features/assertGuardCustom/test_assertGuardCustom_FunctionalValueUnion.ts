import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assertGuardCustom_FunctionalValueUnion = _test_assertGuard(
  CustomGuardError,
)("FunctionalValueUnion")<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
  typia.assertGuard<FunctionalValueUnion>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
