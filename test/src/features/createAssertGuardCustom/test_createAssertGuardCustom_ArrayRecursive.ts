import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayRecursive = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.createAssertGuard<ArrayRecursive>((p) => new CustomGuardError(p)));
