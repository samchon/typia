import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ClassMethod =
  _test_misc_assertPrune(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(typia.misc.createAssertPrune<ClassMethod>((p) => new CustomGuardError(p)));
