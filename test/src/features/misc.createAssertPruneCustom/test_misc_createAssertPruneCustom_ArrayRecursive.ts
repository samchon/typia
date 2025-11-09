import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ArrayRecursive = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.misc.createAssertPrune<ArrayRecursive>((p) => new CustomGuardError(p)));
