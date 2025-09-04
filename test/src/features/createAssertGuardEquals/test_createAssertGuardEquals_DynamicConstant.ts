import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertGuardEquals_DynamicConstant = (): void =>
  _test_assertGuardEquals(TypeGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(typia.createAssertGuardEquals<DynamicConstant>());
