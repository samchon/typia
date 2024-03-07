import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_DynamicJsonValue = _test_assertGuard(
  TypeGuardError,
)("DynamicJsonValue")<DynamicJsonValue>(DynamicJsonValue)(
  typia.createAssertGuard<DynamicJsonValue>(),
);
