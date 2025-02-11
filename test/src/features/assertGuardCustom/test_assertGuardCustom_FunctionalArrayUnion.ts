import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertGuardCustom_FunctionalArrayUnion = _test_assertGuard(
  CustomGuardError,
)("FunctionalArrayUnion")<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
  typia.assertGuard<FunctionalArrayUnion>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
