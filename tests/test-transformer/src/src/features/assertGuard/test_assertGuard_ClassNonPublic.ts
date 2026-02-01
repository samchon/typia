import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { TypeGuardError } from "typia";

export const test_assertGuard_ClassNonPublic = (): void => _test_assertGuard(TypeGuardError)(
    "ClassNonPublic",
)<ClassNonPublic>(
    ClassNonPublic
)((input) => typia.assertGuard<ClassNonPublic>(input));
