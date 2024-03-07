import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_FunctionalValue = _test_assertGuard(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  typia.createAssertGuard<FunctionalValue>((p) => new CustomGuardError(p)),
);
