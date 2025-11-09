import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ArraySimple = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.misc.assertPrune<ArraySimple>(input, (p) => new CustomGuardError(p)));
