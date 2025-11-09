import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ArraySimple = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)(typia.misc.createAssertPrune<ArraySimple>((p) => new CustomGuardError(p)));
