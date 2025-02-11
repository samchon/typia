import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_assertGuard_ClassGetter = _test_assertGuard(TypeGuardError)(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.assertGuard<ClassGetter>(input));
