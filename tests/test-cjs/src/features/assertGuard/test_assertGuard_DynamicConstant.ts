import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertGuard_DynamicConstant = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )((input) => typia.assertGuard<DynamicConstant>(input));
