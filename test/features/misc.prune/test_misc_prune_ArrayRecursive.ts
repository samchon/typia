import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_prune_ArrayRecursive = _test_misc_prune(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)((input) => typia.misc.prune<ArrayRecursive>(input));
