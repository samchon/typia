import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ArrayRecursive = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)((input) => typia.assertGuardEquals<ArrayRecursive>(input, (p) => new CustomGuardError(p)));
