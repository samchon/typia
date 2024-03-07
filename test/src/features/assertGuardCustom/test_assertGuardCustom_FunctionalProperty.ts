import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_FunctionalProperty = _test_assertGuard(
  CustomGuardError,
)("FunctionalProperty")<FunctionalProperty>(FunctionalProperty)((input) =>
  typia.assertGuard<FunctionalProperty>(input, (p) => new CustomGuardError(p)),
);
