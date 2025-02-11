import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayRecursive = _test_assert(CustomGuardError)(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.createAssert<ArrayRecursive>((p) => new CustomGuardError(p)));
