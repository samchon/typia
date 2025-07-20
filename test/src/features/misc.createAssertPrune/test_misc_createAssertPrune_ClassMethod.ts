import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_createAssertPrune_ClassMethod = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(typia.misc.createAssertPrune<ClassMethod>());
