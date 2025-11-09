import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ArrayMatrix = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((input) => typia.misc.assertPrune<ArrayMatrix>(input, (p) => new CustomGuardError(p)));
