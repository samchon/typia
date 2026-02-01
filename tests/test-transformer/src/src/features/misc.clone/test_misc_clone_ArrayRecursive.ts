import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_clone_ArrayRecursive = (): void => _test_misc_clone(
    "ArrayRecursive",
)<ArrayRecursive>(
    ArrayRecursive
)((input) => typia.misc.clone<ArrayRecursive>(input));
