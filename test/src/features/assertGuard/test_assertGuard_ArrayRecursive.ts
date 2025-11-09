import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_assertGuard_ArrayRecursive = (): void => _test_assertGuard(TypeGuardError)(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)((input) => typia.assertGuard<ArrayRecursive>(input));
