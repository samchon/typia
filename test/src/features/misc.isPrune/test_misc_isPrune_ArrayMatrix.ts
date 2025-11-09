import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_isPrune_ArrayMatrix = (): void => _test_misc_isPrune(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((input) => typia.misc.isPrune<ArrayMatrix>(input));
