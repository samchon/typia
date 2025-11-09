import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createPrune_ArrayRecursive = (): void => _test_misc_prune(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)(typia.misc.createPrune<ArrayRecursive>());
