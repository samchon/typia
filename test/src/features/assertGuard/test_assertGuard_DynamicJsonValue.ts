import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_assertGuard_DynamicJsonValue = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )((input) => typia.assertGuard<DynamicJsonValue>(input));
