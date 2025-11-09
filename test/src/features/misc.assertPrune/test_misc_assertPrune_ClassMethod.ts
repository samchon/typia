import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ClassMethod = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)((input) => typia.misc.assertPrune<ClassMethod>(input));
