import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ClassMethod = _test_assertGuardEquals(TypeGuardError)(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)((input) => typia.assertGuardEquals<ClassMethod>(input));
