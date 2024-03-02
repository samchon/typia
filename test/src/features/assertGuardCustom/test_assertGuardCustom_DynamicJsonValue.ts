import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_assertGuardCustom_DynamicJsonValue = _test_assertGuard(
  CustomGuardError,
)("DynamicJsonValue")<DynamicJsonValue>(DynamicJsonValue)((input) =>
  typia.assertGuard<DynamicJsonValue>(input, (p) => new CustomGuardError(p)),
);
