import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_createAssertPrune_DynamicConstant = (): void =>
  _test_misc_assertPrune(TypeGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(typia.misc.createAssertPrune<DynamicConstant>());
