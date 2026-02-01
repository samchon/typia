import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_prune_ArrayMatrix = (): void => _test_misc_prune(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((input) => typia.misc.prune<ArrayMatrix>(input));
